/**
 * Early-access signups.
 *
 * Submissions are forwarded into a Google Form, which owns the list: responses
 * land in its linked Google Sheet and Forms emails on each new one. Nothing is
 * stored here.
 *
 * This runs server side rather than posting to Google from the browser on
 * purpose. Google Forms sends no CORS headers, so a client fetch can only work
 * in `no-cors` mode, which returns an opaque response, meaning the page can
 * never tell a delivered signup from a dropped one. Going through the server
 * also keeps the form and field ids out of the bundle.
 *
 * Configure in `.env.local` and in the Vercel project:
 *   GOOGLE_FORM_ACTION_URL   .../forms/d/e/<FORM_ID>/formResponse
 *   GOOGLE_FORM_EMAIL_ENTRY  entry.<FIELD_ID>
 */

const ACTION_URL = process.env.GOOGLE_FORM_ACTION_URL;
const EMAIL_ENTRY = process.env.GOOGLE_FORM_EMAIL_ENTRY;

// Deliberately loose. The input is already type="email" and the list is a
// human's inbox, so the only job here is rejecting junk and absurd lengths.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Rate limiting.
 *
 * This endpoint is an unauthenticated write into a Google Sheet, so without a
 * limit a shell loop can bury real signups under thousands of junk rows.
 *
 * The window lives in module memory, which is a real and deliberate tradeoff.
 * It is per instance, so a cold start clears it and concurrent instances each
 * keep their own count, meaning a determined attacker spread across instances
 * gets a higher effective ceiling than WINDOW_MAX. What it does reliably stop
 * is the actual common case: one client hammering the endpoint in a loop.
 * Making it exact needs shared state (Redis or similar), which is worth adding
 * if signups ever matter enough to be worth attacking properly.
 */
const WINDOW_MS = 10 * 60 * 1000;
const WINDOW_MAX = 5;
const MAX_TRACKED_IPS = 10_000;

const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= WINDOW_MAX) {
    hits.set(ip, recent);
    return true;
  }

  recent.push(now);
  hits.set(ip, recent);

  // Bound memory. Map iterates in insertion order, so this drops the
  // least recently added keys rather than the least recently used, which is
  // close enough and avoids tracking access order.
  if (hits.size > MAX_TRACKED_IPS) {
    for (const key of hits.keys()) {
      hits.delete(key);
      if (hits.size <= MAX_TRACKED_IPS) break;
    }
  }

  return false;
}

function clientIp(request: Request): string {
  // Vercel sets both; x-forwarded-for may be a chain, and the client is first.
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  if (!ACTION_URL || !EMAIL_ENTRY) {
    // Fail loudly. A silent success here loses signups with no trace.
    console.error("Signup rejected: Google Form env vars are not configured.");
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  if (rateLimited(clientIp(request))) {
    return Response.json({ error: "rate_limited" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }

  const { email, company } = (body ?? {}) as Record<string, unknown>;

  // Honeypot. The field is hidden from people and left empty by them, so
  // anything in it means a bot filling every input it found. Answer with the
  // same success shape a real signup gets: telling it that it was caught only
  // teaches whoever wrote it what to change.
  if (typeof company === "string" && company.trim() !== "") {
    return Response.json({ ok: true });
  }

  if (typeof email !== "string" || email.length > 254 || !EMAIL.test(email)) {
    return Response.json({ error: "invalid_email" }, { status: 400 });
  }

  const params = new URLSearchParams({ [EMAIL_ENTRY]: email.trim() });

  let res: Response;
  try {
    res = await fetch(ACTION_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    });
  } catch (error) {
    console.error("Signup failed: could not reach Google Forms.", error);
    return Response.json({ error: "upstream_unreachable" }, { status: 502 });
  }

  if (!res.ok) {
    // A 400 here usually means the entry id is wrong or the form stopped
    // accepting responses, both of which fail for every signup rather than a
    // particular one, so the address adds nothing to the diagnosis. Log only
    // the domain: enough to spot a pattern, without putting subscriber
    // addresses into the platform logs, where they outlive the request and
    // are visible to anyone with access to the project.
    console.error(
      `Signup failed: Google Forms returned ${res.status} for a @${email.split("@")[1]} address.`,
    );
    return Response.json({ error: "upstream_rejected" }, { status: 502 });
  }

  return Response.json({ ok: true });
}

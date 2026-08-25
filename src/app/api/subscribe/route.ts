/**
 * Early-access signups.
 *
 * Submissions are forwarded into a Google Form, which owns the list: responses
 * land in its linked Google Sheet and Forms emails hello@riveoai.com on each
 * new one. Nothing is stored here.
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

export async function POST(request: Request) {
  if (!ACTION_URL || !EMAIL_ENTRY) {
    // Fail loudly. A silent success here loses signups with no trace.
    console.error("Signup rejected: Google Form env vars are not configured.");
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }

  if (typeof email !== "string" || email.length > 254 || !EMAIL.test(email)) {
    return Response.json({ error: "invalid_email" }, { status: 400 });
  }

  const body = new URLSearchParams({ [EMAIL_ENTRY]: email.trim() });

  let res: Response;
  try {
    res = await fetch(ACTION_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
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

import type { NextConfig } from "next";

/**
 * Security headers.
 *
 * The concrete threat for a single marketing page is clickjacking: the site
 * gets framed invisibly over someone else's page and signups are harvested
 * through our own form. X-Frame-Options plus the CSP frame-ancestors
 * directive closes that, the older header for older browsers and the CSP
 * directive for current ones.
 *
 * No full CSP here. The page pulls fonts from Google and Next injects inline
 * styles and scripts, so a script-src policy tight enough to be worth having
 * would need nonces threaded through the app. Worth doing later, but a
 * half-configured CSP that has to be loosened to 'unsafe-inline' buys nothing.
 */
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
  // Stops browsers from second-guessing declared content types, which is how
  // an uploaded or proxied file gets treated as script.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Send the full URL only to ourselves; other origins see the bare origin.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Nothing here uses these, so deny them outright.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;

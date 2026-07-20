// Send helper for the admin dashboard Email Center.
// The Resend API key and from-address are server-side environment variables on
// Vercel; the browser only posts to /api/send-email with the admin's auth token.

// One-time cleanup: purge the Resend API key that older versions of the app
// stored in this browser's localStorage.
if (typeof window !== 'undefined') {
  try {
    window.localStorage.removeItem('watpro_email_settings_v1');
  } catch {
    // ignore
  }
}

export type SendEmailInput = {
  to: string;
  subject: string;
  message: string; // plain text; converted to simple HTML
};

export type SendEmailResult = { ok: true; id: string } | { ok: false; error: string };

export async function sendEmail(input: SendEmailInput, adminToken: string | null): Promise<SendEmailResult> {
  if (!adminToken) {
    return { ok: false, error: 'Your admin session needs to be refreshed — please sign out and sign in again.' };
  }

  const html = input.message
    .split('\n')
    .map(line => `<p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:14px;line-height:1.6;color:#1e293b;">${
      line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') || '&nbsp;'
    }</p>`)
    .join('');

  try {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${adminToken}`,
      },
      body: JSON.stringify({
        to: input.to,
        subject: input.subject,
        html,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      return { ok: false, error: data?.error || `Request failed (${res.status}).` };
    }
    return { ok: true, id: data.id };
  } catch (err) {
    return { ok: false, error: 'Network error: ' + (err instanceof Error ? err.message : 'unknown') };
  }
}

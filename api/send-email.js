// Vercel serverless function: sends email via Resend.
// The Resend API key and from-address live only in server-side environment
// variables (RESEND_API_KEY, RESEND_FROM_EMAIL) configured in Vercel — the
// frontend never receives or stores them.
// Only authenticated admins may send: the request must carry the admin
// credentials as a Basic Authorization header, verified here on the server.

const ADMIN_EMAIL = 'admin@watproconsultants.com';
const ADMIN_PASSWORD = 'Admin123@@@';

function isAuthorizedAdmin(req) {
  const header = req.headers['authorization'] || '';
  if (!header.startsWith('Basic ')) return false;
  try {
    const decoded = Buffer.from(header.slice(6), 'base64').toString('utf8');
    const separator = decoded.indexOf(':');
    if (separator === -1) return false;
    const email = decoded.slice(0, separator).trim().toLowerCase();
    const password = decoded.slice(separator + 1);
    return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
  } catch {
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!isAuthorizedAdmin(req)) {
    return res.status(401).json({ error: 'Unauthorized: admin sign-in required.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !fromEmail) {
    return res.status(500).json({
      error: 'Email service is not configured (missing RESEND_API_KEY or RESEND_FROM_EMAIL).',
    });
  }

  const { to, subject, html } = req.body || {};
  if (!to || !subject || !html) {
    return res.status(400).json({ error: 'Missing required fields: to, subject, message.' });
  }

  const from = fromEmail.includes('<') ? fromEmail : `WATPRO Consultants <${fromEmail}>`;

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: Array.isArray(to) ? to : [to],
        subject,
        html,
      }),
    });

    let data = null;
    try {
      data = await resendRes.json();
    } catch {
      data = null;
    }

    if (!resendRes.ok) {
      return res.status(resendRes.status).json({
        error: (data && data.message) || 'Resend rejected the request.',
      });
    }

    return res.status(200).json({ id: data && data.id });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to reach Resend: ' + (err?.message || 'unknown error') });
  }
}

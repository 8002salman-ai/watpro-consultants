// Vercel serverless function: sends email via Resend.
// The Resend API cannot be called from the browser (CORS + key exposure),
// so the admin dashboard posts here and this function relays to Resend.
// The API key is entered in the admin dashboard settings and sent per-request;
// it is never stored on the server.

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { apiKey, from, to, subject, html, replyTo } = req.body || {};

  if (!apiKey || typeof apiKey !== 'string' || !apiKey.startsWith('re_')) {
    return res.status(400).json({ error: 'Missing or invalid Resend API key (must start with re_).' });
  }
  if (!from || !to || !subject || !html) {
    return res.status(400).json({ error: 'Missing required fields: from, to, subject, message.' });
  }

  try {
    const payload = {
      from,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
    };
    if (replyTo) payload.reply_to = replyTo;

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await resendRes.json();

    if (!resendRes.ok) {
      return res.status(resendRes.status).json({
        error: data?.message || 'Resend rejected the request.',
      });
    }

    return res.status(200).json({ id: data.id });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to reach Resend: ' + (err?.message || 'unknown error') });
  }
}

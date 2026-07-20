// Email settings + send helper for the admin dashboard (Resend service).
// Settings are stored in localStorage on the admin's browser only.

export type EmailSettings = {
  apiKey: string; // Resend API key (re_...)
  fromName: string; // e.g. "WATPRO Consultants"
  fromEmail: string; // must be onboarding@resend.dev or a verified domain sender
  replyTo: string; // optional reply-to address
};

const SETTINGS_KEY = 'watpro_email_settings_v1';

export const DEFAULT_EMAIL_SETTINGS: EmailSettings = {
  apiKey: '',
  fromName: 'WATPRO Consultants',
  fromEmail: 'onboarding@resend.dev',
  replyTo: 'info@watproconsultants.com',
};

export function getEmailSettings(): EmailSettings {
  if (typeof window === 'undefined') return DEFAULT_EMAIL_SETTINGS;
  try {
    const raw = window.localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_EMAIL_SETTINGS;
    return { ...DEFAULT_EMAIL_SETTINGS, ...(JSON.parse(raw) as Partial<EmailSettings>) };
  } catch {
    return DEFAULT_EMAIL_SETTINGS;
  }
}

export function saveEmailSettings(settings: EmailSettings) {
  window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

export type SendEmailInput = {
  to: string;
  subject: string;
  message: string; // plain text; converted to simple HTML
};

export type SendEmailResult = { ok: true; id: string } | { ok: false; error: string };

export async function sendEmail(input: SendEmailInput): Promise<SendEmailResult> {
  const settings = getEmailSettings();
  if (!settings.apiKey) {
    return { ok: false, error: 'No Resend API key saved. Open Email Settings and add your key first.' };
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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        apiKey: settings.apiKey,
        from: `${settings.fromName} <${settings.fromEmail}>`,
        to: input.to,
        subject: input.subject,
        html,
        replyTo: settings.replyTo || undefined,
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

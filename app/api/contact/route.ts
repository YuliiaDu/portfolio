import { Resend } from 'resend';
import { NextResponse } from 'next/server';

type Body = {
  name?: string;
  email?: string;
  message?: string;
};

const validateEmail = (email?: string) => {
  if (!email) return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export async function POST(request: Request) {
  try {
    const data: Body = await request.json();

    if (!data.message || !data.name || !validateEmail(data.email)) {
      return NextResponse.json({ success: false, error: 'Invalid input' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json({ success: false, error: 'Email service not configured' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const to = process.env.CONTACT_EMAIL || 'yudu.design@gmail.com';

    const html = `
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(String(data.email))}</p>
      <p><strong>Message:</strong></p>
      <div>${escapeHtml(data.message).replace(/\n/g, '<br/>')}</div>
    `;

    const { error } = await resend.emails.send({
      from: `Portfolio Contact <${data.email}`,
      replyTo: `${data.name} <${data.email}>`,
      to,
      subject: 'from the website form',
      html,
    });

    if (error) {
      console.error('Resend error', error);
      return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Contact POST error', err);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}

function escapeHtml(unsafe?: string) {
  if (!unsafe) return '';
  return unsafe
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

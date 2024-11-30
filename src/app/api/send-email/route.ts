import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { mailjet } from '@/server/mailjet';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { name, email, message, honeypot } = await req.json();

  // Server-side validation
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'All fields are required.' },
      { status: 400 }
    );
  }

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  if (!validateEmail(email)) {
    return NextResponse.json(
      { error: 'Invalid email address.' },
      { status: 400 }
    );
  }

  // Check honeypot field
  if (honeypot) {
    return NextResponse.json({ error: 'Spam detected.' }, { status: 400 });
  }

  try {
    const request = mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'contact@metacoreducation.co.uk',
            Name: 'MetaCORE Education',
          },
          To: [
            {
              Email: 'contact@metacoreducation.co.uk',
              Name: 'MetaCORE Education',
            },
          ],
          Subject: 'New Contact Form Submission',
          TextPart: `You have received a new message from ${name} (${email}):\n\n${message}`,
          HTMLPart: `<h3>You have received a new message from ${name} (${email}):</h3><p>${message}</p>`,
        },
      ],
    });

    await request;
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (_error) {
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}

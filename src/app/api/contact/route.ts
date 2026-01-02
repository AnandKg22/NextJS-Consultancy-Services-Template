import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { name, email, phone, subject, message } = await request.json();

        // In a real template, the user would provide their own API key via env vars
        // For the demo/template, we check if the key exists.
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: 'Email service not configured (RESEND_API_KEY missing).' },
                { status: 500 }
            );
        }

        const resend = new Resend(apiKey);

        // This is where the email is sent TO the site owner FROM the system/contact form
        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // Users should verify their own domain
            to: process.env.CONTACT_EMAIL || 'delivered@resend.dev', // Default to a safe test email
            subject: `New Contact Message: ${subject}`,
            html: `
        <h2>New Message from Consultancy Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

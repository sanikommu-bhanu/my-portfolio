import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim() || "Portfolio Contact Message";
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (name.length > 80 || subject.length > 160 || message.length > 5000) {
      return NextResponse.json(
        { error: "Input is too long. Please shorten your message." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS?.replace(/\s+/g, "");

    if (!host || !user || !pass) {
      return NextResponse.json(
        { error: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    const secure = process.env.SMTP_SECURE === "true" || port === 465;
    const toEmail = process.env.CONTACT_TO_EMAIL || "sanikommu.bhanu@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || user;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: `Portfolio Contact <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `New portfolio message\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
          <h2 style="margin:0 0 16px">New Portfolio Message</h2>
          <p style="margin:0 0 8px"><strong>Name:</strong> ${name}</p>
          <p style="margin:0 0 8px"><strong>Email:</strong> ${email}</p>
          <p style="margin:0 0 16px"><strong>Subject:</strong> ${subject}</p>
          <div style="padding:12px;border:1px solid #e5e7eb;border-radius:8px;background:#f9fafb;white-space:pre-wrap">${message}</div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form send failed:", error);
    return NextResponse.json(
      { error: "Unable to send message right now. Please try again." },
      { status: 500 }
    );
  }
}

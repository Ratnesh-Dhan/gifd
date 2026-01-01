"use server";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log(process.env.GODADDY_EMAIL);
  const { name, email, phone, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GODADDY_EMAIL,
      pass: process.env.GODADDY_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website" <${process.env.GODADDY_EMAIL}>`,
      to: process.env.GODADDY_EMAIL,
      replyTo: "gifdjsr@gmail@gmail.com",
      subject: "New Enquiry",
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

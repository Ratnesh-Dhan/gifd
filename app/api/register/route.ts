import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      gender,
      firstName,
      middleName,
      lastName,
      countryCode,
      mobileNumber,
      parentMobile,
      emailId,
      dateOfBirth,
      courseType,
      choiceOfCourse,
      country,
      state,
      city,
      address,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"New Register" <${process.env.GMAIL_USER}>`,
      to: "info@gifdinstitute.com",
      replyTo: "info@gifdinstitute.com",
      subject: `New Registration on GIFD by ${firstName + " " + lastName}`,
      html: `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <h2 style="margin-bottom: 10px;">New Student Registration</h2>

    <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse: collapse; border: 1px solid #ddd;">
      <tr style="background:#f5f5f5;">
        <td colspan="2"><strong>Personal Details</strong></td>
      </tr>
      <tr>
        <td><strong>Full Name</strong></td>
        <td>${gender} :  ${firstName} ${middleName || ""} ${lastName}</td>
      </tr>
      <tr>
        <td><strong>Date of Birth</strong></td>
        <td>${dateOfBirth}</td>
      </tr>

      <tr style="background:#f5f5f5;">
        <td colspan="2"><strong>Contact Details</strong></td>
      </tr>
      <tr>
        <td><strong>Email</strong></td>
        <td>${emailId}</td>
      </tr>
      <tr>
        <td><strong>Mobile Number</strong></td>
        <td>${countryCode} ${mobileNumber}</td>
      </tr>
      <tr>
        <td><strong>Parent Mobile</strong></td>
        <td>${parentMobile}</td>
      </tr>

      <tr style="background:#f5f5f5;">
        <td colspan="2"><strong>Course Details</strong></td>
      </tr>
      <tr>
        <td><strong>Course Type</strong></td>
        <td>${courseType}</td>
      </tr>
      <tr>
        <td><strong>Choice of Course</strong></td>
        <td>${choiceOfCourse}</td>
      </tr>

      <tr style="background:#f5f5f5;">
        <td colspan="2"><strong>Address</strong></td>
      </tr>
      <tr>
        <td><strong>Country</strong></td>
        <td>${country}</td>
      </tr>
      <tr>
        <td><strong>State</strong></td>
        <td>${state}</td>
      </tr>
      <tr>
        <td><strong>City</strong></td>
        <td>${city}</td>
      </tr>
      <tr>
        <td><strong>Full Address</strong></td>
        <td>${address}</td>
      </tr>
    </table>

    <p style="margin-top:15px; font-size:12px; color:#777;">
      This registration was submitted via the website.
    </p>
  </div>
`,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      full_name,
      email,
      phone,
      event_type,
      event_date,
      event_location,
      guests,
      budget,
      message,
    } = body;

    // Email to SmartLens
    await resend.emails.send({
      from: "SmartLens <onboarding@resend.dev>",
      to: "smartlens22157@gmail.com",
      subject: `📸 New Booking - ${event_type}`,
      html: `
        <h2>New Booking Received</h2>

        <p><strong>Name:</strong> ${full_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Event:</strong> ${event_type}</p>
        <p><strong>Date:</strong> ${event_date}</p>
        <p><strong>Location:</strong> ${event_location}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Budget:</strong> ${budget}</p>

        <h3>Client Message</h3>

        <p>${message}</p>
      `,
    });

    // Confirmation email to client
    await resend.emails.send({
  from: "SmartLens Media <onboarding@resend.dev>",
  to: email,
  subject: "🎉 We've Received Your Booking | SmartLens Media",

  html: `
  <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;padding:30px;background:#ffffff;border-radius:12px;border:1px solid #eee;">

      <h1 style="color:#d62828;">
        SmartLens Media
      </h1>

      <h2>
        Thank you, ${full_name}! 🎉
      </h2>

      <p>
        We have successfully received your booking request.
      </p>

      <p>
        Here is a summary of your booking:
      </p>

      <table style="width:100%;border-collapse:collapse;margin-top:20px;">
        <tr>
          <td><strong>Event</strong></td>
          <td>${event_type}</td>
        </tr>

        <tr>
          <td><strong>Date</strong></td>
          <td>${event_date}</td>
        </tr>

        <tr>
          <td><strong>Location</strong></td>
          <td>${event_location}</td>
        </tr>

        <tr>
          <td><strong>Phone</strong></td>
          <td>${phone}</td>
        </tr>
      </table>

      <br>

      <p>
        Our team will review your booking and contact you shortly to confirm every detail.
      </p>

      <p>
        If you have any questions, feel free to contact us.
      </p>

      <hr>

      <p>
        📞 0116882878
      </p>

      <p>
        📧 smartlens22157@gmail.com
      </p>

      <br>

      <p>
        <strong>SmartLens Media</strong><br>
        Capturing Moments. Creating Memories.
      </p>

  </div>
  `,
});

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
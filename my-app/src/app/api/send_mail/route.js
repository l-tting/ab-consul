import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

//async func 
export async function POST(request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { success: false, error: "Email service not configured" },
      { status: 500 },
    );
  }

  try {
    const body = await request.json();
    const { to, subject, html } = body;

    if (!to || !subject || !html) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      // Use this exact address for testing
      from: "onboarding@resend.dev",
      // This MUST be the email you used to sign up for Resend
      to: "brianletting01@gmail.com",
      subject: subject,
      html: html,
    });

    if (error) {
      return Response.json(
        { success: false, error: error.message },
        { status: 500 },
      );
    }

    return Response.json(
      { success: true, messageId: data?.id },
      { status: 200 },
    );
  } catch (err) {
    return Response.json(
      { success: false, error: "Invalid request body" },
      { status: 400 },
    );
  }
}

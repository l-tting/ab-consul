import { Resend } from "resend";

// Remove top-level instantiation
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { success: false, error: "Email service not configured" },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY); // ✅ runtime

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
      from: "no-reply@ab-consul.com",
      to: "brianletting01@gmail.com", // or use `to`
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

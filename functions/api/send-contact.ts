interface Env {
  RESEND_API_KEY: string;
}

interface ContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const data: ContactData = await context.request.json();

    if (!data.name || !data.email || !data.subject || !data.message) {
      return new Response(JSON.stringify({ error: 'Name, email, subject, and message are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const subjectLabels: Record<string, string> = {
      quote: 'Request a Quote',
      question: 'General Question',
      scheduling: 'Scheduling Inquiry',
      feedback: 'Feedback',
      other: 'Other',
    };
    const subjectLabel = subjectLabels[data.subject] || data.subject;

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #0f2942, #1e3a5f); padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Contact Form: ${subjectLabel}</h1>
        </div>
        <div style="background: #f9fafb; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; width: 120px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                <a href="mailto:${data.email}" style="color: #059669; text-decoration: none;">${data.email}</a>
              </td>
            </tr>
            ${data.phone ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                <a href="tel:${data.phone}" style="color: #059669; text-decoration: none; font-weight: 600;">${data.phone}</a>
              </td>
            </tr>` : ''}
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Subject</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${subjectLabel}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: 600; color: #374151; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #111827; white-space: pre-wrap;">${data.message}</td>
            </tr>
          </table>
        </div>
      </div>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Turf Cleaning Las Vegas <onboarding@resend.dev>',
        to: ['admin@elmobmarketing.com'],
        subject: `Contact: ${subjectLabel} from ${data.name}`,
        html: htmlBody,
        reply_to: data.email,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error('Resend API error:', error);
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  } catch (err) {
    console.error('Send contact error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};

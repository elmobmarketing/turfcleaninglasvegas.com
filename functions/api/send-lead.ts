interface Env {
  RESEND_API_KEY: string;
}

interface LeadData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  service: string;
  message: string;
  source: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const data: LeadData = await context.request.json();

    if (!data.name || !data.phone || !data.city) {
      return new Response(JSON.stringify({ error: 'Name, phone, and city are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const serviceLabel = data.service
      ? data.service === 'not-sure'
        ? 'Not sure yet'
        : data.service.charAt(0).toUpperCase() + data.service.slice(1) + ' Clean'
      : 'Not specified';

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #059669, #10b981); padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Lead from ${data.source || 'Website'}</h1>
        </div>
        <div style="background: #f9fafb; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; width: 120px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                <a href="tel:${data.phone}" style="color: #059669; text-decoration: none; font-weight: 600;">${data.phone}</a>
              </td>
            </tr>
            ${data.email ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                <a href="mailto:${data.email}" style="color: #059669; text-decoration: none;">${data.email}</a>
              </td>
            </tr>` : ''}
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">City/Area</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${data.city}</td>
            </tr>
            ${data.address ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Address</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${data.address}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Service</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${serviceLabel}</td>
            </tr>
            ${data.message ? `<tr>
              <td style="padding: 12px 0; font-weight: 600; color: #374151; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #111827;">${data.message}</td>
            </tr>` : ''}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #ecfdf5; border-radius: 8px; border: 1px solid #a7f3d0;">
            <p style="margin: 0; color: #065f46; font-size: 14px;">
              <strong>Action:</strong> Call ${data.name} at <a href="tel:${data.phone}" style="color: #059669; font-weight: 600;">${data.phone}</a> within 1 hour.
            </p>
          </div>
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
        to: ['info@sparklyturf.com'],
        subject: `New Lead: ${data.name} - ${data.city} (${serviceLabel})`,
        html: htmlBody,
        reply_to: data.email || undefined,
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
    console.error('Send lead error:', err);
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

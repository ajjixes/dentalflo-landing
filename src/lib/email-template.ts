/**
 * HTML email template for contact form submissions
 * 
 * @param formData The form data submitted by the user
 * @returns HTML string for the email body
 */
export const createContactEmailTemplate = (formData: {
  name: string;
  phone: string;
  email: string;
  clinicDetails: string;
  message: string;
}) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: 'Segoe UI', Arial, sans-serif;
          background: #f7f7fa;
          color: #222;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 450px;
          margin: 32px auto;
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .header-block {
          background: linear-gradient(120deg, #23243a 60%, #1a3b8b 100%);
          color: #fff;
          text-align: center;
          padding: 40px 20px 32px 20px;
        }
        .header-block h1 {
          margin: 0 0 8px 0;
          font-size: 1.6rem;
          font-weight: 600;
        }
        .header-block p {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 400;
        }
        .content {
          padding: 32px 24px 24px 24px;
        }
        .info-block {
          background: #f3f4f6;
          border-radius: 6px;
          padding: 16px 20px;
          margin-bottom: 18px;
        }
        .info-label {
          font-size: 12px;
          color: #6b7280;
          text-transform: uppercase;
          margin-bottom: 2px;
          letter-spacing: 0.5px;
        }
        .info-value {
          font-size: 15px;
          color: #23243a;
          font-weight: 500;
        }
        .message-block {
          margin: 24px 0 0 0;
        }
        .message-label {
          font-size: 12px;
          color: #6b7280;
          text-transform: uppercase;
          margin-bottom: 2px;
        }
        .message-content {
          background: #f7f7fa;
          border-radius: 6px;
          padding: 14px 16px;
          color: #374151;
          font-size: 14px;
          margin-top: 4px;
        }
        .cta {
          display: block;
          width: fit-content;
          margin: 32px auto 0 auto;
          background: #2563eb;
          color: #fff !important;
          text-decoration: none;
          font-weight: 600;
          padding: 12px 32px;
          border-radius: 6px;
          font-size: 15px;
          box-shadow: 0 2px 6px rgba(37,99,235,0.08);
          transition: background 0.2s;
        }
        .cta:hover {
          background: #1d4ed8;
        }
        .footer {
          text-align: center;
          color: #a1a1aa;
          font-size: 12px;
          padding: 18px 0 10px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header-block">
          <h1>New Contact Form Submission</h1>
          <p>A potential client has reached out via your website</p>
        </div>
        <div class="content">
          <div class="info-block">
            <div class="info-label">Full Name</div>
            <div class="info-value">${formData.name}</div>
          </div>
          <div class="info-block">
            <div class="info-label">Phone Number</div>
            <div class="info-value">${formData.phone}</div>
          </div>
          <div class="info-block">
            <div class="info-label">Email Address</div>
            <div class="info-value"><a href="mailto:${formData.email}" style="color:#2563eb;text-decoration:none;">${formData.email}</a></div>
          </div>
          <div class="info-block">
            <div class="info-label">Clinic Details</div>
            <div class="info-value">${formData.clinicDetails}</div>
          </div>
          <div class="message-block">
            <div class="message-label">Message</div>
            <div class="message-content">${formData.message}</div>
          </div>
          <a href="mailto:${formData.email}?subject=Re: DentalFlo AI Inquiry&body=Hello ${formData.name},%0D%0A%0D%0AThank you for contacting DentalFlo AI.%0D%0A%0D%0A" class="cta">Reply to this Lead</a>
        </div>
        <div class="footer">
          This message was sent via the DentalFlo AI contact form.<br>
          You can reply directly to this email to respond to ${formData.name}.
        </div>
      </div>
    </body>
    </html>
  `;
};

/**
 * Plain text email template for contact form submissions (fallback)
 * 
 * @param formData The form data submitted by the user
 * @returns Plain text string for the email body
 */
export const createContactEmailTextTemplate = (formData: {
  name: string;
  phone: string;
  email: string;
  clinicDetails: string;
  message: string;
}) => {
  return `
NEW CONTACT FORM SUBMISSION
✨ AI-Powered Booking

Full Name: ${formData.name}
Phone Number: ${formData.phone}
Email Address: ${formData.email}
Clinic Details: ${formData.clinicDetails}

Message:
${formData.message}

---
This message was sent via the DentalFlo AI contact form.
You can reply directly to this email to respond to ${formData.name}.
  `.trim();
};
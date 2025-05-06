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
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          line-height: 1.5;
          color: #1a2030;
          max-width: 600px;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          background-color: #f5f6fa;
        }
        .wrapper {
          width: 100%;
          background-color: #f5f6fa;
          margin: 0;
          padding: 0;
        }
        .header {
          padding: 25px 0;
          background-color: #504cee;
          text-align: center;
        }
        .logo {
          width: 36px;
          height: 36px;
          background-color: #ffffff;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          color: #504cee;
          font-weight: bold;
          font-size: 18px;
        }
        .header-content {
          color: white;
          margin: 0;
          padding: 0;
        }
        .header h1 {
          margin: 0;
          padding: 0;
          font-size: 22px;
          font-weight: 500;
        }
        .header p {
          margin: 5px 0 0;
          font-size: 14px;
          opacity: 0.9;
        }
        .section {
          padding: 24px 30px;
          background-color: #ffffff;
          border-radius: 0 0 4px 4px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .field-row {
          margin-bottom: 18px;
        }
        .label {
          font-size: 12px;
          text-transform: uppercase;
          color: #6b7280;
          margin-bottom: 5px;
          letter-spacing: 0.5px;
        }
        .value {
          font-size: 15px;
          margin-top: 0;
          margin-bottom: 0;
          color: #1a2030;
        }
        .message-block {
          margin-top: 24px;
          border-top: 1px solid #e5e7eb;
          padding-top: 20px;
        }
        .message-content {
          padding: 12px 15px;
          background-color: #f5f6fa;
          border-left: 3px solid #504cee;
          margin-top: 5px;
          color: #374151;
          font-size: 14px;
          border-radius: 0 4px 4px 0;
        }
        .footer {
          padding: 15px;
          background-color: #f5f6fa;
          font-size: 12px;
          color: #6b7280;
          text-align: center;
          border-top: 1px solid #e5e7eb;
        }
        a {
          color: #504cee;
          text-decoration: none;
        }
        .star-icon {
          display: inline-block;
          margin-right: 5px;
          color: #ffe234;
        }
        .ai-badge {
          display: inline-block;
          background-color: rgba(80, 76, 238, 0.1);
          color: #504cee;
          padding: 3px 8px;
          border-radius: 12px;
          font-size: 11px;
          margin: 15px auto;
        }
        @media only screen and (max-width: 480px) {
          .section {
            padding: 20px;
          }
          .footer {
            padding: 15px;
          }
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <div class="header-content">
            <div class="logo">D</div>
            <h1>New Contact Form Submission</h1>
            <p>A potential client has reached out via your website</p>
          </div>
        </div>
        
        <div class="section">
          <div class="field-row">
            <div class="label">Full Name</div>
            <div class="value">${formData.name}</div>
          </div>
          
          <div class="field-row">
            <div class="label">Phone Number</div>
            <div class="value">${formData.phone}</div>
          </div>
          
          <div class="field-row">
            <div class="label">Email Address</div>
            <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
          </div>
          
          <div class="field-row">
            <div class="label">Clinic Details</div>
            <div class="value">${formData.clinicDetails}</div>
          </div>
          
          <div class="message-block">
            <div class="label">Message</div>
            <div class="message-content">${formData.message}</div>
          </div>
          
          <div style="text-align: center;">
            <div class="ai-badge"><span class="star-icon">✨</span>AI-Powered Form</div>
          </div>
        </div>
        
        <div class="footer">
          <p>This message was sent via the DentalFlo AI contact form</p>
          <p>You can reply directly to this email to respond to ${formData.name}</p>
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
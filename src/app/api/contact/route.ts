import { NextResponse } from 'next/server';
import { MailgunClient } from "@/lib/mailgun";
import {  ContactSubmission, supabaseClient } from "@/lib/supabase";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  clinicDetails: string;
  message: string;
}

// Mailgun configuration for email sending
const MAILGUN_CONFIG = {
  apiKey: process.env.MAILGUN_API_KEY || '',
  domain: process.env.MAILGUN_DOMAIN || 'mg.dentalfloai.com',
  region: (process.env.MAILGUN_REGION as 'us' | 'eu') || 'us',
};

// Contact form email configuration
const CONTACT_EMAIL_CONFIG = {
  from: process.env.CONTACT_FROM_EMAIL || 'DentalFlo AI Contact <contact@mg.dentalfloai.com>',
  to: process.env.CONTACT_TO_EMAIL || 'info@dentalfloai.com.au', 
  subject: 'New Contact Form Submission - DentalFlo AI',
}; 

/**
 * Save contact form submission to Supabase database
 */
async function saveToDatabase(formData: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    if (!process.env.SUPABASE_SERVICE_KEY || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
      console.error("Missing Supabase credentials");
      return { success: false, error: "Database credentials not configured" };
    }

    const contactSubmission: ContactSubmission = {
      name: formData.name,
      email: formData.email,
      phone_number: formData.phone,
      clinic_details: formData.clinicDetails,
      message: formData.message
    };

    const { error } = await supabaseClient
      .from('contacts')
      .insert(contactSubmission)
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      return { success: false, error: `Database error: ${error.message}` };
    }

    return { success: true };
  } catch (error) {
    console.error("Error in saveToDatabase:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Unknown database error"
    };
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.clinicDetails || !formData.message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate Mailgun API key
    if (!MAILGUN_CONFIG.apiKey) {
      console.error("Mailgun API key is not configured");
      return NextResponse.json(
        { success: false, error: "Contact service is not properly configured" },
        { status: 500 }
      );
    }

    // Create Mailgun client
    const mailgun = new MailgunClient({
      apiKey: MAILGUN_CONFIG.apiKey,
      domain: MAILGUN_CONFIG.domain,
      region: MAILGUN_CONFIG.region,
    });

    // Create the HTML template directly here
    const htmlContent = `
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

    // Create text version
    const textContent = `
      NEW CONTACT FORM SUBMISSION
      
      Full Name: ${formData.name}
      Phone Number: ${formData.phone}
      Email Address: ${formData.email}
      Clinic Details: ${formData.clinicDetails}
      
      Message:
      ${formData.message}
      
      ---
      This message was sent via the DentalFlo AI contact form.
      You can reply directly to this email to respond to ${formData.name}.
    `;

    try {
      // Send email
      await mailgun.sendEmail({
        from: CONTACT_EMAIL_CONFIG.from,
        to: CONTACT_EMAIL_CONFIG.to,
        subject: CONTACT_EMAIL_CONFIG.subject,
        html: htmlContent,
        text: textContent,
        'h:Reply-To': `${formData.name} <${formData.email}>`,
      });
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      return NextResponse.json(
        { success: false, error: "Failed to send your message" },
        { status: 500 }
      );
    }

    // Save to database
    const dbResult = await saveToDatabase(formData);
    
    if (!dbResult.success) {
      console.error("Database save failed after successful email:", dbResult.error);
      return NextResponse.json({
        success: true,
        emailSuccess: true,
        dbSuccess: false,
        message: "Your message was sent successfully, but there was an issue saving your information. We'll still be in touch soon."
      });
    }

    return NextResponse.json({ 
      success: true,
      emailSuccess: true,
      dbSuccess: true
    });

  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
} 
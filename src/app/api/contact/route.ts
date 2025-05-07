import { NextResponse } from 'next/server';
import { MailgunClient } from "@/lib/mailgun";
import { createContactEmailTemplate, createContactEmailTextTemplate } from "@/lib/email-template";
import { supabaseAdmin, ContactSubmission } from "@/lib/supabase";

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

    const { error } = await supabaseAdmin
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

    // Prepare email templates
    const htmlContent = createContactEmailTemplate(formData);
    const textContent = createContactEmailTextTemplate(formData);

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
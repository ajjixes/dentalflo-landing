'use server';

import { MailgunClient } from "@/lib/mailgun";
import { createContactEmailTemplate, createContactEmailTextTemplate } from "@/lib/email-template";
import { supabaseAdmin, ContactSubmission } from "@/lib/supabase";

export interface ContactFormData {
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
    // First check if Supabase credentials are loaded properly
    if (!process.env.SUPABASE_SERVICE_KEY || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
      console.error("Missing Supabase credentials:", {
        hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasServiceKey: !!process.env.SUPABASE_SERVICE_KEY
      });
      return { success: false, error: "Database credentials not configured" };
    }

    // Map form data to database schema
    const contactSubmission: ContactSubmission = {
      name: formData.name,
      email: formData.email,
      phone_number: formData.phone,
      clinic_details: formData.clinicDetails,
      message: formData.message
    };

    // Insert data into the contacts table
    const { error } = await supabaseAdmin
      .from('contacts')
      .insert(contactSubmission)
      .select();

    if (error) {
      console.error("Supabase insert error:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
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

/**
 * Server action to handle contact form submission
 */
export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate the Mailgun API key is present
    if (!MAILGUN_CONFIG.apiKey) {
      console.error("Mailgun API key is not configured");
      return { 
        success: false, 
        error: "Contact service is not properly configured. Please try again later or contact us directly."
      };
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
      // send email first
      await mailgun.sendEmail({
        from: CONTACT_EMAIL_CONFIG.from,
        to: CONTACT_EMAIL_CONFIG.to,
        subject: CONTACT_EMAIL_CONFIG.subject,
        html: htmlContent,
        text: textContent,
        // Add reply-to so the recipient can easily reply to the sender
        cc: `${formData.name} <${formData.email}>`,
      });
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      return {
        success: false,
        emailSuccess: false,
        error: "Failed to send your message. Please try again later or contact us directly."
      };
    }

    // Only save to database if email was sent successfully
    const dbResult = await saveToDatabase(formData);
    
    if (!dbResult.success) {
      console.error("Database save failed after successful email:", dbResult.error);
      return {
        success: true,
        emailSuccess: true,
        dbSuccess: false,
        message: "Your message was sent successfully, but there was an issue saving your information. We'll still be in touch soon."
      };
    }

    return { 
      success: true,
      emailSuccess: true,
      dbSuccess: true
    };

  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { 
      success: false, 
      error: "An unexpected error occurred. Please try again later or contact us directly."
    };
  }
}
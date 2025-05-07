import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Check for missing configuration
if (!supabaseUrl) {
  console.warn('Supabase credentials missing:', { 
    hasUrl: !!supabaseUrl
  });
}

// Client for client-side operations (limited permissions)
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Client for server-side operations (service role with full access)
// export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
//   auth: {
//     autoRefreshToken: false,
//     persistSession: false
//   }
// });

// Type for contact submissions
export interface ContactSubmission {
  name: string;
  email: string;
  phone_number: string;
  clinic_details: string;
  message: string;
}
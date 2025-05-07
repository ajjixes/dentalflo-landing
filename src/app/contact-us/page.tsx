"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  clinicDetails: string;
  message: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    clinicDetails: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setStatusMessage(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if response is valid before parsing
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server returned an invalid response format. Please try again.");
      }

      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
        
        // Handle partial success - db saved but email failed
        if (result.dbSuccess === false && result.message) {
          setStatusMessage(result.message);
        }
        
        setFormData({
          name: "",
          phone: "",
          email: "",
          clinicDetails: "",
          message: "",
        });
      } else {
        setError(result.error || "An unexpected error occurred. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err instanceof Error ? err.message : "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <Navbar />
      
      <main className="w-full max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">We&apos;re here to help</h1>
            <p className="text-base md:text-lg opacity-80 mb-8">
              We&apos;re here to help you take your clinic to the next level with DentalFlo AI. 
              Whether you&apos;re interested in learning more about Chloe, setting up a demo, 
              or asking about our integration options, we&apos;re ready to assist you.
            </p>
            
            <div className="space-y-8 mt-4">
              <div>
                <h2 className="text-xl font-bold mb-2">Phone</h2>
                <p className="opacity-70">Call us at <b>0489261411</b> for immediate assistance.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-2">Email</h2>
                <p className="opacity-70">Drop us an email at <b>info@dentalfloai.com.au</b> with your questions or requests.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-2">Business Hours</h2>
                <p className="opacity-70">We&apos;re available Monday to Friday, 9:00 AM to 5:00 PM</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-2">Gold Coast Office</h2>
                <p className="opacity-70">Suite 311, 34 Glenferrie Drive,<br />Robina, Gold Coast, Qld 4226</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-muted/30 rounded-2xl p-6 md:p-8 shadow-sm border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            
            {submitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Thank you for contacting us!</h3>
                <p>{statusMessage || "We've received your message and will get back to you shortly."}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-4 rounded-lg mb-4">
                    <p>{error}</p>
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="clinicDetails" className="block text-sm font-medium mb-2">
                    Clinic Details
                  </label>
                  <Input
                    id="clinicDetails"
                    name="clinicDetails"
                    value={formData.clinicDetails}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Tell us about your clinic"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full rounded-md bg-muted border-input border px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-primary focus-visible:ring-[2px]"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? "Submitting..." : "SUBMIT"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

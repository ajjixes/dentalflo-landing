import Navbar from "@/components/navbar";


import Footer from "@/components/footer";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import Feature from "../(landing-section)/feature";
import Image from "next/image";
import Head from "next/head";

export default function Home() {

    return (
        <>
            <Head>
                <title>Privacy Policy | Dentalflo AI</title>
                <meta name="description" content="Privacy Policy for Dentalflo AI - updated May 5, 2025." />
            </Head>

            <div className="w-full flex flex-col items-center overflow-hidden">
                <Navbar />
                <div className="max-w-5xl p-6 py-40 px-4 md:px-6">
                    <h1 className="text-2xl font-bold mb-2">Terms and Conditions</h1>
                    <p><strong>Effective Date:</strong> 4th May 2025</p>
                    <p className="mt-2">
                        These Terms and Conditions ("Terms") govern your use of <a href="https://www.dentalfloai.com.au" className="text-primary">www.dentalfloai.com.au</a> ("Site"), owned and operated by Dentalflo AI Pty Ltd ("we", "our", or "us"). This Site offers access to our software-as-a-service (SaaS) platform providing AI-powered voice receptionist services, appointment booking, call transcription, CRM integration, and other tools tailored to dental practices.
                    </p>
                    <p className="my-4">
                        By using this Site, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                    </p>

                    <h2 className="text-xl font-semibold">1. Intellectual Property</h2>
                    <p>
                        All content on this Site, including text, graphics, logos, icons, images, and software, is the property of Dentalflo AI Pty Ltd and is protected by Australian and international intellectual property laws.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">2. Accounts and User Responsibilities</h2>
                    <p>When creating an account, you agree:</p>
                    <ul className="list-disc list-inside space-y-1 px-4">
                        <li>To provide accurate and current personal information;</li>
                        <li>To keep your account credentials secure;</li>
                        <li>Not to impersonate others or use the platform to harass, mislead, or violate any laws;</li>
                        <li>To use the platform only for lawful purposes.</li>
                    </ul>
                    <p>We may suspend or terminate your account if these Terms are breached.</p>

                    <h2 className="text-xl font-semibold mt-6">3. Services and Use of AI Features</h2>
                    <p>Our platform provides AI voice services that may process:</p>
                    <ul className="list-disc list-inside space-y-1 px-4">
                        <li>Call recordings and transcriptions</li>
                        <li>User interactions</li>
                        <li>CRM data</li>
                    </ul>
                    <p>
                        By using our services, you consent to the use of your interactions for improving service delivery, including internal quality reviews.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">4. Sale of Services & Subscriptions</h2>
                    <p>
                        The services offered are described accurately to the best of our ability. Subscriptions renew automatically unless cancelled. You may cancel any time through your account or by contacting us. No refunds will be issued for partial periods unless required by law.
                        We reserve the right to modify, reject, or cancel orders. If cancelled after payment, we will refund the amount paid.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">5. Payments</h2>
                    <p>We accept:</p>
                    <ul className="list-disc list-inside space-y-1 px-4">
                        <li>Credit Card</li>
                        <li>Debit</li>
                        <li>PayPal</li>
                        <li>Direct Debit</li>
                    </ul>
                    <p>
                        By providing payment information, you authorize us to charge the applicable fees. We reserve the right to cancel any transaction we deem unlawful or in violation of these Terms.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">6. Integration with Third-Party Services</h2>
                    <p>
                        We use third-party platforms as part of our services. We are not liable for downtime or damages resulting from these third-party tools. Your use of their features is subject to their respective terms.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">7. Limitation of Liability</h2>
                    <p>
                        To the maximum extent permitted by law, Dentalflo AI Pty Ltd and its affiliates shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the Site or services.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">8. Indemnity</h2>
                    <p>
                        You agree to indemnify and hold harmless Dentalflo AI Pty Ltd from any claims, losses, damages, liabilities, or expenses arising from your use of the Site or breach of these Terms.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">9. Consumer Protection Law</h2>
                    <p>
                        Nothing in these Terms limits your rights under the Australian Consumer Law or other applicable laws that cannot be excluded.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">10. Data Storage & Retention</h2>
                    <p>
                        Data generated via the platform (e.g., transcriptions, call metadata) is stored securely and may be retained for service delivery and analytics purposes unless a deletion request is made.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">11. Severability</h2>
                    <p>
                        If any part of these Terms is deemed unenforceable, the remainder shall remain in full force.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">12. Changes to Terms</h2>
                    <p>
                        We may update these Terms to reflect changes in our operations or legal obligations. Users will be notified via email or website updates.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">13. Contact Us</h2>
                    <p>
                        Dentalflo AI Pty Ltd<br />
                        <a href="mailto:hello@dentalfloai.com.au" className="text-primary">hello@dentalfloai.com.au</a><br />
                        (07) 2113 1176<br />
                        Suite 312 - 34-36 Glenferrie Drive, Robina QLD 4226
                    </p>
                </div>

                <Footer />
            </div >
        </>
    );
}


import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";

export default function PrivacyPolicy() {
    return (
        <>
            <Head >
                <title>Privacy Policy | Dentalflo AI</title>
                <meta name="description" content="Privacy Policy for Dentalflo AI - updated May 5, 2025." />
            </Head >

            <div className="w-full flex flex-col items-center overflow-hidden">
                <Navbar />
                <div className="max-w-5xl p-6 py-40 px-4 md:px-6">
                    <h1 className="text-2xl font-bold mb-2">Privacy Policy</h1>
                    <p><strong>Effective Date:</strong> 5th May 2025</p>
                    <p><strong>Last Updated:</strong> 5th May 2025</p>
                    <p><strong>Contact:</strong> <a href="mailto:hello@dentalfloai.com.au" className="text-primary">hello@dentalfloai.com.au</a> | (07) 2113 1176</p>
                    <p className="my-6">
                        Dentalflo AI is committed to protecting your personal data. This policy explains what we collect, how we use it, and your rights.
                    </p>

                    <h2 className="text-xl font-semibold">1. What We Collect</h2>
                    <ul className="list-disc list-inside space-y-1 px-4">
                        <li>Contact details (name, email, phone)</li>
                        <li>Browsing info (IP address, pages visited)</li>
                        <li>Voice AI interactions (call recordings, transcriptions)</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">2. How We Use It</h2>
                    <ul className="list-disc list-inside space-y-1 px-4">
                        <li>Provide demos and customer support</li>
                        <li>Improve our AI receptionist</li>
                        <li>Send service updates and marketing emails</li>
                        <li>Analyze website and platform performance</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">3. Who We Share It With</h2>
                    <ul className="list-disc list-inside space-y-1 px-4">
                        <li>CRM & marketing tools</li>
                        <li>Analytics providers</li>
                        <li>Call tracking vendors</li>
                    </ul>
                    <p>We do not sell your data.</p>

                    <h2 className="text-xl font-semibold mt-6">4. Your Rights</h2>
                    <ul className="list-disc list-inside space-y-1 px-4">
                        <li>Access, update, or delete your data</li>
                        <li>Opt out of marketing</li>
                        <li>Request data export or correction</li>
                    </ul>
                    <p>
                        To exercise your rights, email us at: <a href="mailto:hello@dentalfloai.com.au" className="text-primary">hello@dentalfloai.com.au</a>
                    </p>

                    <h2 className="text-xl font-semibold mt-6">5. Data Security</h2>
                    <p>We use encryption, secure servers, and strict employee confidentiality policies.</p>

                    <h2 className="text-xl font-semibold mt-6">6. International Users</h2>
                    <p>If you're in the EU, we process data under:</p>
                    <ul className="list-disc list-inside space-y-1 px-4">
                        <li>Consent</li>
                        <li>Contractual necessity</li>
                        <li>Legal obligations</li>
                        <li>Legitimate interest</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">7. Children's Privacy</h2>
                    <p>We do not collect data from children under 16.</p>

                    <h2 className="text-xl font-semibold mt-6">8. Updates</h2>
                    <p>We may update this policy. Revisit this page to stay informed.</p>
                </div>

                <Footer />
            </div>
        </>
    );
}

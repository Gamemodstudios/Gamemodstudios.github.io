import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | Gamemodstudios",
  description: "Privacy practices and user rights at Gamemodstudios",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12 text-gray-300 mt-5">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <p className="mb-4">
          This Privacy Policy describes how Gamemodstudios (“we”, “our”, or “us”) collects, uses, and stores information when you interact with any of our services including our Website, Authentication System, Documentation, Developer Portal, Gamemodstudios API, and Help/Support platform (collectively, the “Services”).
        </p>

        <section className="mb-8 p-4 bg-gray-800 rounded border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Foreword</h2>
          <p className="mb-2">
            This document has been prepared in accordance with applicable privacy laws and regulations, including but not limited to:
          </p>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>
              The California Consumer Privacy Act (CCPA). More information is available at&nbsp;
              <a href="https://oag.ca.gov/privacy/ccpa" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                oag.ca.gov
              </a>.
            </li>
            <li>
              The European Union General Data Protection Regulation (GDPR). More information is available at&nbsp;
              <a href="https://gdpr.eu" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                gdpr.eu
              </a>.
            </li>
          </ul>
          <p>
            Gamemodstudios, headquartered in Sweden, acts as the data controller for data collected through all Gamemodstudios Services.
          </p>
        </section>

        {/* Rest of the original content sections */}

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Data We Collect</h2>
        <p className="mb-4">
          We do not collect personally identifiable information unless voluntarily provided through account registration. Our authentication system (Gamemodstudios ID) securely stores limited profile data including your username and avatar, accessible only by authorized systems. We do not store sensitive personal data.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Cookies and Local Storage</h2>
        <p className="mb-4">
          We use cookies to store authentication tokens which allow you to securely access our APIs and services. These tokens are encrypted and contain only the necessary credentials to identify your active session.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>To authenticate and authorize access to Gamemodstudios services</li>
          <li>To ensure secure communication between you and our backend systems</li>
          <li>To manage your profile identity across services</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Sharing and Third Parties</h2>
        <p className="mb-4">
          We do not sell, rent, or share your personal data with third parties. We display third-party logos (such as GitHub, YouTube, X, and others) strictly for identification purposes. These links may lead to external sites governed by their own privacy policies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
        <p className="mb-4">
          You may access, update, or delete your Gamemodstudios ID data by visiting the official authentication portal. Changes to data can only be made via Gamemodstudios ID. We reserve the right to retain anonymized analytics and operational data for security and internal development.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Security</h2>
        <p className="mb-4">
          We employ encryption and secure access control to protect stored credentials and user data. All API communications are transmitted over HTTPS.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Policy Updates</h2>
        <p className="mb-4">
          This policy may be updated from time to time. Changes will be posted to this page with an updated effective date.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact</h2>
        <p className="mb-4">
          For any privacy-related inquiries, please contact us at <a href="mailto:gamemodstudios+legal@gmail.com" className="text-blue-600 hover:underline">gamemodstudios+legal@gmail.com</a>.
        </p>

        <p className="mt-12 text-sm text-gray-600">Effective Date: July 29, 2025</p>
      </main>
      <Footer />
    </>
  );
}
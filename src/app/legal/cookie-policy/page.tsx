import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cookie Policy | Gamemodstudios",
  description: "Details on how cookies are used across Gamemodstudios services",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12 text-gray-300 mt-5">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

        <p className="mb-4">
          This Cookie Policy explains how Gamemodstudios uses cookies and similar tracking technologies when you use our websites and services, including our main website, Gamemodstudios ID, documentation, API, developer portal, and support systems.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies?</h2>
        <p className="mb-4">
          Cookies are small text files stored on your device that allow us to recognize your browser or device. These help enhance security and functionality.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Types of Cookies We Use</h2>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li><strong>Authentication Cookies:</strong> Store secure API tokens to identify users and allow authorized access to services.</li>
          <li><strong>Functional Cookies:</strong> Maintain session state and UI preferences across our ecosystem.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Third-Party Cookies</h2>
        <p className="mb-4">
          We do not embed third-party advertising, analytics, or tracking cookies. External logos and links (e.g., to GitHub, X, YouTube, etc.) are used strictly for identification purposes and may be governed by those platforms' own cookie policies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Managing Cookies</h2>
        <p className="mb-4">
          You can control cookie behavior via your browser settings. However, disabling cookies may impact functionality, particularly authentication and session continuity across Gamemodstudios services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Policy Updates</h2>
        <p className="mb-4">
          We may update this Cookie Policy from time to time. Updates will be posted on this page with a revised effective date.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact</h2>
        <p className="mb-4">
          For questions about this Cookie Policy, contact us at
          <a href="mailto:gamemodstudios+legal@gmail.com" className="text-blue-500 hover:underline ml-1">gamemodstudios+legal@gmail.com</a>.
        </p>

        <p className="mt-12 text-sm text-gray-600">Effective Date: July 29, 2025</p>
      </main>
      <Footer />
    </>
  );
}

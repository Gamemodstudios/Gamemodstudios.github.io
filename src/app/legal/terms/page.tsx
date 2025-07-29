import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Service | Gamemodstudios",
  description: "Terms and conditions for using Gamemodstudios services",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12 text-gray-300 mt-5">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <p className="mb-4">
          These Terms of Service ("Terms") govern your access to and use of Gamemodstudios' websites,
          services, platforms, and applications, including but not limited to our main website,
          authentication system, documentation, developer portal, API services, and help/support center
          (collectively, the "Services").
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using our Services, you agree to be bound by these Terms. If you do not agree,
          do not use our Services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. User Accounts</h2>
        <p className="mb-4">
          Certain Services require a Gamemodstudios ID account. You are responsible for safeguarding
          your authentication credentials. Any activity under your account is your responsibility.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Acceptable Use</h2>
        <p className="mb-4">
          You agree to use our Services only for lawful purposes and in accordance with our
          <a href="/legal/acceptable-use" className="text-blue-500 hover:underline ml-1">Acceptable Use Policy</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
        <p className="mb-4">
          All content, software, and intellectual property associated with the Services is owned by
          Gamemodstudios or its licensors. You may not use, reproduce, or redistribute any part without
          express permission.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Third-Party Links</h2>
        <p className="mb-4">
          Our Services may contain links to third-party platforms such as GitHub, YouTube, X (Twitter),
          and others. We are not responsible for their content or policies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Termination</h2>
        <p className="mb-4">
          We reserve the right to suspend or terminate access to our Services at our discretion,
          particularly in cases of misuse or breach of these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Modifications</h2>
        <p className="mb-4">
          We may update these Terms periodically. The most current version will always be posted on this
          page, with an updated effective date.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed by and construed in accordance with the laws of Sweden, without
          regard to conflict of law principles.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact</h2>
        <p className="mb-4">
          For any questions or concerns about these Terms, please contact us at
          <a href="mailto:gamemodstudios+legal@gmail.com" className="text-blue-500 hover:underline ml-1">gamemodstudios+legal@gmail.com</a>.
        </p>

        <p className="mt-12 text-sm text-gray-600">Effective Date: July 29, 2025</p>
      </main>
      <Footer />
    </>
  );
}
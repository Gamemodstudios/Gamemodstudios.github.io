import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Developer Terms | Gamemodstudios",
  description: "Terms and conditions for using Gamemodstudios developer tools and SDKs",
};

export default function DeveloperTermsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12 text-gray-300 mt-5">
        <h1 className="text-4xl font-bold mb-8">Developer Terms</h1>

        <p className="mb-4">
          These Developer Terms ("Terms") apply to individuals and organizations (“Developers”) using Gamemodstudios development platforms, including but not limited to SDKs, modding APIs, documentation, and the Developer Portal.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. License Grant</h2>
        <p className="mb-4">
          Gamemodstudios grants you a limited, revocable, non-transferable license to use our SDKs and APIs solely for creating compatible mods, tools, or integrations for approved Gamemodstudios platforms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Ownership</h2>
        <p className="mb-4">
          You retain ownership of original content and code you develop. However, you grant Gamemodstudios a non-exclusive license to use, distribute, and reference such content to promote interoperability and platform integrity.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Restrictions</h2>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>You may not sell, sublicense, or repurpose Gamemodstudios SDKs or APIs outside permitted usage.</li>
          <li>You must not introduce security vulnerabilities, backdoors, or obfuscated malicious code into submitted work.</li>
          <li>You must follow the <a href="/legal/acceptable-use" className="text-blue-500 hover:underline">Acceptable Use Policy</a> at all times.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Compliance & Termination</h2>
        <p className="mb-4">
          Non-compliance may result in revocation of access to our developer tools and public removal of associated content. Gamemodstudios reserves the right to review and audit any integration using our tools.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Feedback</h2>
        <p className="mb-4">
          By submitting feedback or suggestions, you grant Gamemodstudios full rights to use it for improving our platforms without attribution or compensation.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Updates</h2>
        <p className="mb-4">
          We may revise these Terms periodically. Continued use of developer tools after such updates constitutes your agreement to the revised terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact</h2>
        <p className="mb-4">
          For inquiries related to development tools or compliance, contact us at
          <a href="mailto:gamemodstudios+legal@gmail.com" className="text-blue-500 hover:underline ml-1">gamemodstudios+legal@gmail.com</a>.
        </p>

        <p className="mt-12 text-sm text-gray-600">Effective Date: July 29, 2025</p>
      </main>
      <Footer />
    </>
  );
}
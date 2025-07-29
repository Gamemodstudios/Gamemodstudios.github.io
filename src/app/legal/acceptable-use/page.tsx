import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Acceptable Use Policy | Gamemodstudios",
  description: "Guidelines for responsible usage of Gamemodstudios services",
};

export default function AcceptableUsePolicyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12 text-gray-300 mt-5">
        <h1 className="text-4xl font-bold mb-8">Acceptable Use Policy</h1>

        <p className="mb-4">
          This Acceptable Use Policy ("Policy") outlines rules and expectations for using Gamemodstudios’ websites, services, APIs, developer tools, and support platforms (“Services”). By accessing or using the Services, you agree to comply with this Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Prohibited Conduct</h2>
        <p className="mb-4">You agree not to misuse the Services. Prohibited behavior includes but is not limited to:</p>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>Attempting unauthorized access to our infrastructure or user data</li>
          <li>Interfering with the security, integrity, or performance of our Services</li>
          <li>Hosting or distributing malware, spam, or pirated content</li>
          <li>Using the Services to harass, abuse, or threaten others</li>
          <li>Impersonating Gamemodstudios or any affiliated personnel</li>
          <li>Reverse-engineering, scraping, or abusing APIs or developer tools</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. User-Generated Content</h2>
        <p className="mb-4">
          If you upload or distribute content via Gamemodstudios platforms (e.g., mods, comments, support tickets), you are solely responsible for ensuring that content complies with laws and does not infringe the rights of others.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Enforcement</h2>
        <p className="mb-4">
          Violations of this Policy may result in temporary or permanent suspension of your access to the Services, removal of content, or legal action. Enforcement decisions are made at our sole discretion.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Reporting Abuse</h2>
        <p className="mb-4">
          If you become aware of any misuse of our Services, please report it immediately to
          <a href="mailto:gamemodstudios+legal@gmail.com" className="text-blue-500 hover:underline ml-1">gamemodstudios+legal@gmail.com</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Modifications</h2>
        <p className="mb-4">
          We may update this Policy at any time. Continued use of the Services constitutes your acceptance of any updates.
        </p>

        <p className="mt-12 text-sm text-gray-600">Effective Date: July 29, 2025</p>
      </main>
      <Footer />
    </>
  );
}
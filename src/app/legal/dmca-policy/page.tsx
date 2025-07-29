import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "DMCA & Content Removal Policy | Gamemodstudios",
  description: "Copyright removal procedures and takedown process",
};

export default function DmcaPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12 text-gray-300 mt-5">
        <h1 className="text-4xl font-bold mb-8">DMCA & Content Removal Policy</h1>

        <p className="mb-4">
          Gamemodstudios respects the intellectual property rights of others and expects users to do the same. This policy outlines our procedures for receiving and responding to content removal requests under the Digital Millennium Copyright Act (DMCA) and equivalent international standards.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Reporting Copyright Infringement</h2>
        <p className="mb-4">
          If you believe your copyright-protected work has been copied or used in a way that constitutes infringement, you may submit a written notice including:
        </p>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>Your full name and contact information (email, address, phone number)</li>
          <li>A description of the copyrighted work and where it is located on our Services</li>
          <li>A statement that you have a good faith belief the use is unauthorized</li>
          <li>A statement under penalty of perjury that the information is accurate</li>
          <li>Your physical or electronic signature</li>
        </ul>
        <p className="mb-4">
          Send copyright claims to:
          <br />
          <a href="mailto:gamemodstudios+legal@gmail.com" className="text-blue-500 hover:underline">gamemodstudios+legal@gmail.com</a>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Counter Notifications</h2>
        <p className="mb-4">
          If your content has been removed and you believe it was a mistake or misidentification, you may submit a counter notification with similar identifying information and a statement under penalty of perjury that you have the right to use the material.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Repeat Infringers</h2>
        <p className="mb-4">
          Users who are found to repeatedly violate intellectual property rights may have their accounts terminated.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Other Content Removal Requests</h2>
        <p className="mb-4">
          For non-copyright concerns (e.g., impersonation, defamation, harmful content), please contact us using the same email above and clearly outline your concern.
        </p>

        <p className="mt-12 text-sm text-gray-600">Effective Date: July 29, 2025</p>
      </main>
      <Footer />
    </>
  );
}
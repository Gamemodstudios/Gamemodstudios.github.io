import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "End User License Agreement (EULA) | Gamemodstudios",
  description: "Terms governing the use of Gamemodstudios software products",
};

export default function EulaPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12 text-gray-300 mt-5">
        <h1 className="text-4xl font-bold mb-8">End User License Agreement (EULA)</h1>

        <p className="mb-4">
          This End User License Agreement ("Agreement") is a legal contract between you ("User") and Gamemodstudios ("Licensor") governing your use of Gamemodstudios software products, including games, mods, tools, and related applications ("Software").
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. License Grant</h2>
        <p className="mb-4">
          Gamemodstudios grants you a non-exclusive, non-transferable, revocable license to use the Software solely for personal, non-commercial purposes consistent with the intended use.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Restrictions</h2>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>You may not modify, distribute, sell, sublicense, or create derivative works of the Software without explicit permission.</li>
          <li>Reverse engineering, decompiling, or attempting to extract source code is strictly prohibited.</li>
          <li>Use of the Software to engage in unlawful activities or violate others' rights is forbidden.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Ownership</h2>
        <p className="mb-4">
          All intellectual property rights in the Software remain with Gamemodstudios and its licensors.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Updates and Support</h2>
        <p className="mb-4">
          Gamemodstudios may provide updates, patches, or support services at its discretion, which will be governed by this Agreement.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Termination</h2>
        <p className="mb-4">
          This Agreement is effective until terminated. It will terminate automatically if you fail to comply with its terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Disclaimer of Warranty</h2>
        <p className="mb-4">
          The Software is provided "as is," without warranties of any kind, express or implied.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
        <p className="mb-4">
          Gamemodstudios shall not be liable for any damages arising from the use or inability to use the Software.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Governing Law</h2>
        <p className="mb-4">
          This Agreement is governed by the laws of Sweden, without regard to conflict of laws principles.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact</h2>
        <p className="mb-4">
          For questions regarding this Agreement, please contact us at <a href="mailto:gamemodstudios+legal@gmail.com" className="text-blue-500 hover:underline">gamemodstudios+legal@gmail.com</a>.
        </p>

        <p className="mt-12 text-sm text-gray-600">Effective Date: July 29, 2025</p>
      </main>
      <Footer />
    </>
  );
}
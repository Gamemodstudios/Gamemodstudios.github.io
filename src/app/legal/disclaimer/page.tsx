import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Disclaimer | Gamemodstudios",
  description: "Legal disclaimers regarding content, trademarks, and liability",
};

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12 text-gray-300 mt-5">
        <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>

        <p className="mb-4">
          The information provided by Gamemodstudios on its websites and services is for general informational purposes only. All content is provided in good faith; however, we make no representations or warranties of any kind regarding the accuracy, adequacy, or reliability of any information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. External Links Disclaimer</h2>
        <p className="mb-4">
          Our websites may contain links to external sites or services, including but not limited to GitHub, YouTube, X (Twitter), Discord, Patreon, TikTok, and Twitch. These links are provided for identification and convenience only. We do not control, endorse, or assume responsibility for the content or practices of any third-party websites.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Trademarks and Logos</h2>
        <p className="mb-4">
          “Gamemodstudios” and the Gamemodstudios logo are trademarks of Gamemodstudios. All third-party names, brands, and logos (e.g., GitHub, YouTube, X, etc.) are the property of their respective owners. Use of these trademarks is for identification only and does not imply any endorsement or affiliation.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. No Professional Advice</h2>
        <p className="mb-4">
          Nothing on our platforms constitutes professional, legal, or technical advice. Users should seek qualified assistance where appropriate.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitation of Liability</h2>
        <p className="mb-4">
          To the fullest extent permitted by law, Gamemodstudios disclaims all liability for any damages arising out of your use or reliance on the Services. Use of the Services is at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact</h2>
        <p className="mb-4">
          If you have questions or concerns about this disclaimer, you may contact us at
          <a href="mailto:gamemodstudios+legal@gmail.com" className="text-blue-500 hover:underline ml-1">gamemodstudios+legal@gmail.com</a>.
        </p>

        <p className="mt-12 text-sm text-gray-600">Effective Date: July 29, 2025</p>
      </main>
      <Footer />
    </>
  );
}

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logos & Brand Usage | Gamemodstudios",
  description: "Official guidelines for using Gamemodstudios logos and branding",
};

export default function LogosPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-12 text-gray-300 mt-5">
        <h1 className="text-4xl font-bold mb-8">Gamemodstudios Logos & Brand Usage</h1>

        <p className="mb-6">
          Gamemodstudios values the integrity and consistent presentation of its brand. These guidelines ensure that our logos and branding materials are used properly and respectfully to maintain our identity and reputation.
        </p>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Official Logos</h2>
          <p className="mb-4">
            Below are the official Gamemodstudios logos for digital and print use. Please use the appropriate version according to your context.
          </p>

          <div className="flex flex-wrap gap-8 mb-6">
            <div className="flex flex-col items-center w-48">
              <Image src="/logos/gamemodstudios-logo-primary.svg" alt="Gamemodstudios Primary Logo" className="w-full h-auto" />
              <p className="mt-2 text-center text-sm">Primary Logo (Full Color)</p>
            </div>
            <div className="flex flex-col items-center w-48">
              <Image src="/logos/gamemodstudios-logo-mono.svg" alt="Gamemodstudios Monochrome Logo" className="w-full h-auto" />
              <p className="mt-2 text-center text-sm">Monochrome Logo (Black/White)</p>
            </div>
            <div className="flex flex-col items-center w-30">
              <Image src="/logos/gamemodstudios-icon.svg" alt="Gamemodstudios Icon" className="w-full h-auto" />
              <p className="mt-2 text-center text-sm">Icon Only</p>
            </div>
          </div>

          <a
            href="/downloads/gamemodstudios-logos.zip"
            className="inline-block px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition"
            download
          >
            Download Logo Assets
          </a>
        </section>

        <section className="mb-10">
  <h2 className="text-3xl font-semibold mb-4">Product Branding: Gamemodstudios SDK & Gamemodstudios HUB</h2>
  <p className="mb-4">
    The following product-specific branding assets are provided for documentation, press kits, third-party integrations, or Gamemodstudios-related media. Please follow all usage restrictions noted below.
  </p>

  <div className="flex flex-wrap gap-8 mb-6">
    <div className="flex flex-col items-center w-48">
      <Image src="/logos/gamemodstudios_sdk.svg" alt="GMS SDK Logo" className="w-full h-auto" />
      <p className="mt-2 text-center text-sm">Gamemodstudios SDK Logo</p>
    </div>
    <div className="flex flex-col items-center w-48">
      <Image src="/logos/gamemodstudios_hub.svg" alt="GMS HUB Logo" className="w-full h-auto" />
      <p className="mt-2 text-center text-sm">Gamemodstudios HUB Logo</p>
    </div>
  </div>

  <a
    href="/downloads/gamemodstudios_branding.zip"
    className="inline-block px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition"
    download
  >
    Download Gamemodstudios Product Logos
  </a>

  <h3 className="text-xl font-semibold mt-8 mb-2">Usage Restrictions</h3>
  <ul className="list-disc ml-6 space-y-2 text-gray-400">
    <li>Do not modify or alter these logos in any way.</li>
    <li>Do not use these logos in a misleading or unauthorized manner, including as part of your project branding unless officially approved.</li>
    <li>Gamemodstudios SDK and Gamemodstudios HUB trademarks remain the property of Gamemodstudios at all times.</li>
    <li>Use only in contexts directly related to approved Gamemodstudios integrations or documentation.</li>
  </ul>
</section>


        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Usage Guidelines</h2>
          <ul className="list-disc ml-6 space-y-3 text-gray-400">
            <li>
              Always use the official logos from the assets provided. Do not create or alter the logos.
            </li>
            <li>
              Maintain adequate clear space around the logo equal to the height of the “G” in Gamemodstudios to ensure visibility and impact.
            </li>
            <li>
              Do not stretch, skew, rotate, or otherwise distort the logos.
            </li>
            <li>
              Use the full-color logo on light backgrounds. Use the monochrome version on dark backgrounds or when color printing is limited.
            </li>
            <li>
              Do not change the logo colors or add effects such as drop shadows, gradients, or outlines.
            </li>
            <li>
              Do not combine the logos with other graphic elements or text that could confuse the brand identity.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Trademark Notice</h2>
          <p className="text-gray-400 mb-4">
            “Gamemodstudios” and the Gamemodstudios logo are trademarks of Gamemodstudios. Unauthorized use of Gamemodstudios trademarks or branding materials is strictly prohibited.
          </p>
          <p className="text-gray-400">
            Other names or brands are trademarks of their respective owners. All third-party trademarks, including logos of GitHub, YouTube, X (Twitter), TikTok, Twitch, Patreon, and Discord, are the property of their respective owners.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Permission & Contact</h2>
          <p className="mb-4">
            If you require permission for uses beyond these guidelines or have any questions about proper logo usage, please contact us:
          </p>
          <a href="mailto:gamemodstudios+legal@gmail.com" className="text-blue-500 hover:underline">
            gamemodstudios+legal@gmail.com
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
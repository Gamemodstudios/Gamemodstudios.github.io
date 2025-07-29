import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function LegalIndexPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12 text-gray-300 mt-5">
        <h1 className="text-4xl font-bold mb-6">Legal Center</h1>
        <p className="mb-6">Welcome to the legal center for Gamemodstudios. Here you'll find all relevant documents governing our platforms and services.</p>
        <ul className="list-disc ml-6 space-y-4">
          <li><a href="/legal/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</a></li>
          <li><a href="/legal/terms" className="text-blue-500 hover:underline">Terms of Service</a></li>
          <li><a href="/legal/cookie-policy" className="text-blue-500 hover:underline">Cookie Policy</a></li>
          <li><a href="/legal/disclaimer" className="text-blue-500 hover:underline">Disclaimer</a></li>
          <li><a href="/legal/acceptable-use" className="text-blue-500 hover:underline">Acceptable Use Policy</a></li>
          <li><a href="/legal/dmca-policy" className="text-blue-500 hover:underline">DMCA/Content Removal Policy</a></li>
          <li><a href="/legal/developer-terms" className="text-blue-500 hover:underline">Developer Terms</a></li>
          <li><a href="/legal/eula" className="text-blue-500 hover:underline">End User License Agreement (EULA)</a></li>
          <li><a href="/legal/gmsmml" className="text-blue-500 hover:underline">Gamemodstudios Minecraft Mod License (GMSMML)</a></li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
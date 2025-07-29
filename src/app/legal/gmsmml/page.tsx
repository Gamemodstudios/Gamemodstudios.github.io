import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gamemodstudios Minecraft Mod License (GMSMML) | Gamemodstudios",
  description: "Official license governing use and distribution of Gamemodstudios Minecraft mods",
};

export default function GmsmmlPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12 text-gray-300 mt-5">
        <h1 className="text-4xl font-bold mb-8">
          Gamemodstudios Minecraft Mod License (GMSMML) – v1.1
        </h1>

        <p className="mb-8 font-semibold">Copyright © Gamemodstudios. All rights reserved.</p>

        <p className="mb-6">
          This license governs the use, distribution, and modification of Minecraft mods developed and published by <strong>Gamemodstudios</strong> (“the Mods”). By downloading, installing, using, or modifying any of our Mods, you agree to the terms of this license.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Usage</h2>
        <ul className="list-disc ml-6 space-y-2 mb-6">
          <li>You are free to use the Mods for personal or commercial gameplay.</li>
          <li>
            Showcase the Mods in commercial content (e.g., YouTube videos, livestreams) as long as credit is clearly given to <strong>Gamemodstudios</strong>. Credit may be placed in the video or stream description, and must include a link to the official Modrinth page — for example: <br />
            <a href="https://modrinth.com/mod/op_tools" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              https://modrinth.com/mod/op_tools
            </a>
          </li>
          <li>
            Include the Mods in free or commercial modpacks, provided proper credit is given (see Section 5).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Modification</h2>
        <ul className="list-disc ml-6 space-y-2 mb-6">
          <li>You may modify the Mods for personal or educational use.</li>
          <li>You may share modified versions privately or non-commercially, provided credit is given.</li>
          <li className="font-semibold">You may <em>not</em> modify and distribute the Mods for commercial purposes (e.g., in paid products, services, or mod marketplaces).</li>
          <li className="font-semibold">You may <em>not</em> use any part of the Mods’ code, assets, or content in commercial derivative works without express written permission.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Prohibited Actions</h2>
        <ul className="list-disc ml-6 space-y-2 mb-6">
          <li>You may not sell the Mods or place them behind any paywall (e.g., Patreon exclusives, early access, NFTs).</li>
          <li>You may not reupload the Mods to third-party websites, repositories, or launchers without explicit written permission from Gamemodstudios, regardless of attribution.</li>
          <li>You may not claim authorship or ownership of any part of the Mods.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Modpacks</h2>
        <p className="mb-6">
          You are allowed to include the Mods in modpacks, both free and commercial, without asking for permission, if:
        </p>
        <ul className="list-disc ml-6 space-y-2 mb-6">
          <li>Credit is given to <strong>Gamemodstudios</strong>.</li>
          <li>A link to the official mod page (e.g., <a href="https://modrinth.com/mod/op_tools" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://modrinth.com/mod/op_tools</a>) is provided.</li>
          <li>The modpack does not include modified versions of the Mods (see Section 2 for modification rules).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Attribution Requirements</h2>
        <p className="mb-6">
          If you use the Mods in any public content (videos, streams, modpacks, showcases), you must include:
        </p>
        <ul className="list-disc ml-6 space-y-2 mb-6">
          <li>The name of the Mod.</li>
          <li>The name “Gamemodstudios”.</li>
          <li>A link to the official Modrinth or GitHub page.</li>
        </ul>
        <p className="mb-6">This attribution can be placed in a description or relevant credit section.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Support and Liability</h2>
        <ul className="list-disc ml-6 space-y-2 mb-6">
          <li>The Mods are provided “as is” without warranty of any kind.</li>
          <li>Gamemodstudios is not responsible for any issues, crashes, data loss, or other damages caused by the use of our Mods.</li>
          <li>Compatibility with other mods or specific Minecraft versions is not guaranteed.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. License Changes</h2>
        <p className="mb-6">
          This license may be updated in the future. Continued use of our Mods indicates your acceptance of any new versions of this license.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
        <p className="mb-4">
          For questions, special permissions, or collaborations, please contact: <br />
          <a href="mailto:gamemodstudios@gmail.com" className="text-blue-500 hover:underline">
            gamemodstudios@gmail.com
          </a>
        </p>

        <p className="mt-12 text-sm text-gray-600">Effective Date: July 29, 2025</p>
      </main>
      <Footer />
    </>
  );
}
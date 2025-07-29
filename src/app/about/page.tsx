"use client";

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <><div className="min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
          <Navbar />

          <h1 className="text-4xl font-extrabold text-white mb-6 text-center mt-15">
              Gamemodstudios
          </h1>
          <p className="text-xl text-gray-300 text-center mb-4">
              🎮 A Collective of Creators. A Playground for Innovation. A Home for Modders.
          </p>

          <p className="max-w-3xl text-lg text-gray-400 leading-relaxed text-center mb-10">
              Gamemodstudios isn`t a traditional company — we`re a passionate collective of gamers,
              developers, and creators with one shared goal: to empower players and modders by
              creating affordable, open, and moddable gaming experiences. We operate more like a
              friend group than a corporation — where collaboration, freedom, and fun guide everything we do.
          </p>

          <nav className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 text-center">Quick Links</h2>
              <ul className="flex flex-col sm:flex-row gap-4 justify-center">
                  <li>
                      <Link
                          href="/about/contact"
                          className="px-6 py-3 bg-blue-700 text-white font-medium rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-in-out block text-center"
                      >
                          Contact Us
                      </Link>
                  </li>
                  <li>
                      <Link
                          href="/about/goal"
                          className="px-6 py-3 bg-green-700 text-white font-medium rounded-lg shadow-md hover:bg-green-800 transition duration-300 ease-in-out block text-center"
                      >
                          Our Vision & Goals
                      </Link>
                  </li>
                  <li>
                      <Link
                          href="/about/team"
                          className="px-6 py-3 bg-purple-700 text-white font-medium rounded-lg shadow-md hover:bg-purple-800 transition duration-300 ease-in-out block text-center"
                      >
                          Meet the Team
                      </Link>
                  </li>
              </ul>
          </nav>

          <hr className="w-1/2 border-t-2 border-gray-600 my-10" />

          <div className="max-w-4xl text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                  At Gamemodstudios, we envision a future where:
              </p>
              <ul className="list-disc list-inside text-left text-gray-400 space-y-2">
                  <li><strong className="text-white">🆓 Accessibility:</strong> Games are low-cost or free — prioritizing people over profit.</li>
                  <li><strong className="text-white">🔧 Moddability:</strong> Every game has built-in mod support and user-friendly tools.</li>
                  <li><strong className="text-white">🛠️ Openness:</strong> Our platforms invite remixing, expanding, and innovating without restrictions.</li>
                  <li><strong className="text-white">🤝 Community:</strong> Developers and players collaborate as equals — co-creating the experience.</li>
              </ul>
          </div>

          <hr className="w-1/2 border-t-2 border-gray-600 my-10" />

          <div className="max-w-4xl text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">Mods & Community Content</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                  We`re proud to foster a thriving modding ecosystem. Our mods are crafted with passion and shared freely:
              </p>
              <ul className="text-gray-300 space-y-2 text-left list-disc list-inside">
                  <li><strong className="text-white">🔨 OP Tools:</strong> A Minecraft mod that gives you op tools and armor that almost makes you a god.</li>
              </ul>
              <p className="text-lg text-gray-400 mt-4">
                  👉 Browse the full catalog on our <Link href="https://modrinth.com/organization/gamemodstudios" target="_blank" className="text-blue-400 hover:underline">Modrinth Organization</Link>.
              </p>
          </div>

          <hr className="w-1/2 border-t-2 border-gray-600 my-10" />

          <div className="max-w-4xl text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
              <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
                  <li><strong className="text-white">🚀 Innovation:</strong> We experiment boldly and create with curiosity.</li>
                  <li><strong className="text-white">🎓 Accessibility:</strong> Everyone should be able to play, mod, and build — no barriers.</li>
                  <li><strong className="text-white">❤️ Passion:</strong> We do it for the love of the craft — not for corporate gain.</li>
                  <li><strong className="text-white">🔄 Collaboration:</strong> We work with each other, not just for each other.</li>
              </ul>
          </div>

          <hr className="w-1/2 border-t-2 border-gray-600 my-10" />

          <div className="text-center mt-10">
              <p className="text-xl text-gray-200 mb-6">
                  Whether you're a player, developer, modder, or curious mind — you're welcome here. Let`s build the future of gaming, together.
              </p>
              <Link
                  href="/about/contact"
                  className="inline-block px-8 py-4 bg-indigo-700 text-white font-bold text-lg rounded-full shadow-lg hover:bg-indigo-800 transition duration-300 ease-in-out transform hover:scale-105"
              >
                  Join the Movement 🚀
              </Link>
          </div>
      </div>
      <Footer /></>
  );
};

export default AboutPage;

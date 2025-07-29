import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ScrollToTopButton />
      <main className="flex flex-col items-center justify-start min-h-screen pt-28 pb-8 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark"> {/* Added background classes */}
        <div className="flex flex-col items-center justify-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center text-foreground leading-tight">
            Get in Touch
          </h1>
          <p className="text-xl sm:text-2xl text-center max-w-3xl text-gray-600 dark:text-gray-300">
            Have questions, need support, or just want to chat? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Left Column: Contact Form */}
          <div className="bg-white dark:bg-[#1f1f2a] rounded-lg shadow-xl p-8 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out border border-gray-200 dark:border-gray-700 hidden">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Send us a message</h2>
            <form action="YOUR_FORM_SUBMISSION_ENDPOINT" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-800 text-foreground transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-800 text-foreground transition-colors"
                  placeholder="your@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-800 text-foreground transition-colors"
                  placeholder="Regarding an issue, feedback, etc."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-800 text-foreground transition-colors"
                  placeholder="Describe your inquiry..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Other Contact Channels & Info */}
          <div className="flex flex-col gap-8">
            {/* Email Contact */}
            <div className="bg-white dark:bg-[#1f1f2a] rounded-lg shadow-xl p-8 text-center flex flex-col items-center transform hover:scale-[1.01] transition-transform duration-300 ease-in-out border border-gray-200 dark:border-gray-700">
              <Image src="/icons/email.svg" alt="Email icon" width={48} height={48} className="mb-4 dark:invert" />
              <h2 className="text-2xl font-bold text-foreground mb-3">Email Us</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For general inquiries, support requests, or partnership discussions, send us an email.
              </p>
              <a
                href="mailto:gamemodstudios+support@gmail.com"
                className="inline-flex items-center justify-center bg-blue-600 text-white py-2 px-5 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md"
              >
                gamemodstudios+support@gmail.com
              </a>
            </div>

            {/* Discord Community */}
            <div className="bg-white dark:bg-[#1f1f2a] rounded-lg shadow-xl p-8 text-center flex flex-col items-center transform hover:scale-[1.01] transition-transform duration-300 ease-in-out border border-gray-200 dark:border-gray-700">
              <Image src="/icons/socials/discord.svg" alt="Discord icon" width={48} height={48} className="mb-4 dark:invert" />
              <h2 className="text-2xl font-bold text-foreground mb-3">Join Our Community on Discord</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Connect directly with our team and other developers in real-time. Get quick answers, share ideas, and participate in our growing community.
              </p>
              <a
                href="https://discord.gg/KyPfy4Kgb3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#5865F2] text-white py-2 px-5 rounded-full font-semibold hover:bg-[#4752C4] transition-colors shadow-md"
              >
                <Image src="/icons/socials/discord-white.svg" alt="Discord logo" width={20} height={20} className="mr-2" />
                Join Discord
              </a>
            </div>

            {/* General Information / Follow Us */}
            <div className="bg-white dark:bg-[#1f1f2a] rounded-lg shadow-xl p-8 text-center flex flex-col items-center transform hover:scale-[1.01] transition-transform duration-300 ease-in-out border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-foreground mb-3" id='stay-connected'>Stay Connected</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Follow us on social media for the latest updates, news, and insights from Gamemodstudios.
              </p>
              <div className="flex gap-6 justify-center">
                <a
                  href="https://github.com/gamemodstudios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Image src="/icons/socials/github-mark.svg" alt="GitHub" width={32} height={32} className="dark:invert" />
                </a>
                <a
                  href="https://x.com/Gamemodstudios0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Image src="/icons/socials/x.svg" alt="Twitter" width={32} height={32} className="dark:invert" />
                </a>
                <a
                  href="https://www.youtube.com/@Gamemodstudios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="YouTube"
                >
                  <Image src="/icons/socials/youtube.svg" alt="YouTube" width={32} height={32} className="dark:invert" />
                </a>
                <a
                  href="https://www.tiktok.com/@gamemodstudios_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="TikTok"
                >
                  <Image src="/icons/socials/tiktok.svg" alt="TikTok" width={32} height={32} className="dark:invert" />
                </a>
                <a
                  href="https://www.twitch.tv/gamemodstudios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Twitch"
                >
                  <Image src="/icons/socials/twitch.svg" alt="Twitch" width={32} height={32} className="dark:invert" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from 'react';


interface LinkItem {
  text: string;
  href: string;
  external?: boolean;
}

interface FooterLinkSectionProps {
  title: string;
  links: LinkItem[];
}

interface SocialLink {
  href: string;
  alt: string;
  src: string;
  className?: string;
  width: number;
  height: number;
}

const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({ title, links }) => (
  <div className="flex flex-col gap-4 col-span-1 md:col-span-1">
    <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
    <ul className="space-y-2 text-sm">
      {links.map((link: LinkItem, index: number) => (
        <li key={index}>
          <Link
            href={link.href}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            target={link.external ? "_blank" : "_self"}
            rel={link.external ? "noopener noreferrer" : ""}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// Main App component props interface
interface AppProps {
  companyName?: string;
  companyDescription?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  companyWebsiteUrl?: string;
  linkSections?: { title: string; links: LinkItem[] }[];
  legalLinks?: LinkItem[];
  showNewsletter?: boolean;
  newsletterTitle?: string;
  newsletterDescription?: string;
  newsletterPlaceholder?: string;
  newsletterButtonText?: string;
  socialLinks?: SocialLink[];
  copyrightText?: string;
}

export default function Footer({
  companyName = "Gamemodstudios",
  companyDescription = "Empowering players and creators with affordable, open, and moddable games.",
  logoSrc = "/logo.svg",
  logoAlt = "Gamemodstudios Logo",
  logoWidth = 80,
  logoHeight = 80,
  companyWebsiteUrl = "/",

  linkSections = [
    {
      title: "Products",
      links: [
        { text: "All Games", href: "/games" },
        { text: "All Mods", href: "/mods" },
        { text: "Op_Tools", href: "https://modrinth.com/mod/op_tools" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Our Goal", href: "/about/goal" },
        { text: "Contact Us", href: "/about/contact" },
      ],
    },
  ],

  // Legal Links Props
  legalLinks = [
    { text: "Privacy Policy", href: "/legal/privacy-policy" },
    { text: "Terms of Service", href: "/legal/terms" },
    { text: "Cookie Policy", href: "/legal/cookie-policy" },
    { text: "Disclaimer", href: "/legal/disclaimer" },
  ],

  showNewsletter = false,
  newsletterTitle = "Stay Updated",
  newsletterDescription = "Subscribe to our newsletter for the latest news and updates.",
  newsletterPlaceholder = "Your email address",
  newsletterButtonText = "Subscribe",

  socialLinks = [
    {
      href: "https://github.com/gamemodstudios",
      alt: "GitHub",
      src: "/icons/github-mark.svg",
      width: 30,
      height: 30,
      className: "dark:invert",
    },
    {
      href: "https://www.youtube.com/@Gamemodstudios",
      alt: "YouTube",
      src: "/icons/youtube.svg",
      width: 30,
      height: 30,
      className: "dark:invert",
    },
    {
      href: "https://x.com/Gamemodstudios0",
      alt: "X (Twitter)",
      src: "/icons/x.svg",
      width: 30,
      height: 30,
      className: "dark:invert",
    },
    {
      href: "https://www.tiktok.com/@gamemodstudios_official",
      alt: "TikTok",
      src: "/icons/tiktok.svg",
      width: 30,
      height: 30,
      className: "dark:invert",
    },
    {
      href: "https://www.twitch.tv/gamemodstudios",
      alt: "Twitch",
      src: "/icons/twitch.svg",
      width: 30,
      height: 30,
      className: "dark:invert",
    },
    {
      href: "https://www.patreon.com/Gamemodstudios",
      alt: "Patreon",
      src: "/icons/patreon.svg",
      width: 30,
      height: 30,
      className: "dark:invert",
    },
    {
      href: "https://discord.gg/KyPfy4Kgb3",
      alt: "Discord",
      src: "/icons/discord.svg",
      width: 30,
      height: 30,
      className: "dark:invert",
    },
  ],

  // Copyright Props
  copyrightText = `© ${new Date().getFullYear()} Gamemodstudios. All rights reserved. “Gamemodstudios” and the Gamemodstudios logo are trademarks of Gamemodstudios. Unauthorized use of Gamemodstudios trademarks or branding materials is strictly prohibited. Other names or brands are trademarks of their respective owners. All third-party trademarks, including logos of GitHub, YouTube, X (Twitter), TikTok, Twitch, Patreon, and Discord, are the property of their respective owners. Use of these logos is for identification purposes only and does not imply endorsement or affiliation.`
}: AppProps) {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const fullDisclaimer = copyrightText;

  return (
    <footer className="w-full py-12 px-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-[#18181b] mt-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center md:justify-items-start text-center md:text-left">
        {/* Left Section: Branding */}
        <div className="flex flex-col items-center md:items-start col-span-1 md:col-span-1">
          <Link href={companyWebsiteUrl} className="flex items-center gap-2 mb-4">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={logoWidth}
              height={logoHeight}
              className="dark"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://placehold.co/80x80/CCCCCC/000000?text=Logo";
              }} // Fallback for image
            />
            <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {companyName}
            </span>
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
            {companyDescription}
          </p>
        </div>

        {/* Center Sections: Dynamic Link Categories */}
        {linkSections.map((section, index) => (
          <FooterLinkSection key={index} title={section.title} links={section.links} />
        ))}

        {/* Legal Links Section */}
        <FooterLinkSection title="Legal" links={legalLinks} />

        {/* Right Section: Newsletter */}
        {showNewsletter && (
          <div className="flex flex-col gap-4 col-span-1 md:col-span-1 items-center md:items-start">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
              {newsletterTitle}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {newsletterDescription}
            </p>
            <form className="w-full max-w-xs">
              <input
                type="email"
                placeholder={newsletterPlaceholder}
                className="w-full p-2 mb-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {newsletterButtonText}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Bottom Section: Copyright and Social Links */}
      <div className="border-t border-gray-200 dark:border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400 max-w-7xl mx-auto">
        <div className="text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Gamemodstudios.{" "}
            <button
              onClick={() => setShowDisclaimer(!showDisclaimer)}
              className="underline text-blue-600 hover:text-blue-800 transition"
            >
              Legal
            </button>
          </p>
          {showDisclaimer && (
            <div className="mt-2 px-4 text-left text-xs text-gray-500 max-w-4xl mx-auto">
              <p>{fullDisclaimer}</p>
            </div>
          )}
        </div>
        <div className="flex gap-4">
          {socialLinks.map((social: SocialLink, index: number) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Image
                src={social.src}
                alt={social.alt}
                width={social.width}
                height={social.height}
                className={social.className}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = `https://placehold.co/${social.width}x${social.height}/CCCCCC/000000?text=${social.alt.substring(0, 2)}`;
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
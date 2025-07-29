import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Gamemodstudios | Revolutionizing Gaming',
  description: 'Revolutionizing the gaming industry with unforgettable experiences',
  keywords: ['gamemodstudios', 'gaming', 'modding', 'community', 'documentation'],
  authors: [{ name: 'Gamemodstudios' }],
  openGraph: {
    title: 'Gamemodstudios | Revolutionizing Gaming',
    description: 'Revolutionizing the gaming industry with unforgettable experiences',
    url: 'https://gamemodstudios.github.io/',
    images: [
      {
        url: 'https://gamemodstudios.github.io/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gamemodstudios OG Image',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://gamemodstudios.github.io/',
  },
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply Tailwind utilities directly to the body */}
      <body className={`${geistSans.className} m-0 p-0 w-full h-full overflow-x-hidden bg-dark-bg`}>
        {children}
        {/* External Scripts */}
        <Script
          src="https://kit.fontawesome.com/601675ef74.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/gm-webkit@latest/spiners/progress-indicators.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
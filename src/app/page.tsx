'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Define the type for a Label
interface LabelProps {
  text: string;
  type: 'game' | 'mod' | 'upcoming' | 'featured' | 'default';
}

const Label = ({ text, type }: LabelProps) => {
  let bgColorClass = 'bg-gray-700';
  let textColorClass = 'text-white';

  switch (type) {
    case 'game':
      bgColorClass = 'bg-green-500';
      break;
    case 'mod':
      bgColorClass = 'bg-blue-500';
      break;
    case 'upcoming':
      bgColorClass = 'bg-yellow-500';
      textColorClass = 'text-gray-900';
      break;
    case 'featured':
      bgColorClass = 'bg-red-500';
      break;
    default:
      break;
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${bgColorClass} ${textColorClass}`}
    >
      {text}
    </span>
  );
};

// Define the type for Link properties
interface PortfolioLink {
  href: string;
  ariaLabel: string;
  external: boolean;
}

// Define the type for PortfolioCard component props
interface PortfolioCardProps {
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  description: string;
  discoverLink?: PortfolioLink;
  installLink?: PortfolioLink;
  labels?: LabelProps[];
  disabled?: boolean;
  unannounced?: boolean;
}

// Portfolio Card Component
const PortfolioCard = ({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  title,
  description,
  discoverLink,
  installLink,
  labels,
  disabled = false,
  unannounced = false,
}: PortfolioCardProps) => {
  // If unannounced, render a special placeholder card
  if (unannounced) {
    return (
      <div className="card rounded-lg bg-gray-900 shadow-md flex flex-col overflow-hidden opacity-70 cursor-not-allowed h-72 items-center justify-center text-center p-4">
        <div className="text-white">
          <h3 className="mb-3 text-2xl font-semibold">🤫 Top Secret Project 🤫</h3>
          <p className="mb-4 text-base text-gray-400">
            Something exciting is brewing... This project is currently under development and will be announced soon!
          </p>
          <p className="text-sm text-gray-500">Stay tuned for updates!</p>
        </div>
      </div>
    );
  }

  // Existing conditional classes for disabled state (only apply if not unannounced)
  const cardClasses = `
    card rounded-lg shadow-md flex flex-col overflow-hidden
    ${disabled ? 'bg-gray-900 opacity-50 cursor-not-allowed' : 'bg-card-bg transition-transform duration-300 hover:-translate-y-2'}
  `;

  const buttonClasses = `
    inline-block rounded-md px-5 py-2 font-bold text-black transition-all duration-300
    ${disabled ? 'bg-gray-600 cursor-not-allowed' : 'bg-sky-500 hover:scale-105 hover:bg-cyan-400'}
  `;

  return (
    <div className={cardClasses}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className={`w-full rounded-t-lg object-cover ${disabled ? 'grayscale' : ''}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          {labels && labels.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {labels.map((label, index) => (
                <Label key={index} text={label.text} type={label.type} />
              ))}
            </div>
          )}
          <h3 className={`mb-3 text-2xl font-semibold ${disabled ? 'text-gray-400' : 'text-white'}`}>{title}</h3>
          <p className={`mb-4 text-base ${disabled ? 'text-gray-500' : 'text-gray-300'}`}>{description}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-auto">
          {discoverLink && (
            <Link
              href={disabled ? '#' : discoverLink.href}
              className={buttonClasses}
              aria-label={discoverLink.ariaLabel}
              target={discoverLink.external && !disabled ? '_blank' : '_self'}
              rel={discoverLink.external && !disabled ? 'noopener noreferrer' : ''}
              onClick={(e) => disabled && e.preventDefault()}
            >
              Discover
            </Link>
          )}
          {installLink && (
            <Link
              href={disabled ? '#' : installLink.href}
              className={buttonClasses}
              aria-label={installLink.ariaLabel}
              target={installLink.external && !disabled ? '_blank' : '_self'}
              rel={installLink.external && !disabled ? 'noopener noreferrer' : ''}
              onClick={(e) => disabled && e.preventDefault()}
            >
              Install
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};


export default function Home() {
  useEffect(() => {
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
      ctaButton.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#portfolio')?.scrollIntoView({
          behavior: 'smooth',
        });
      });
    }
  }, []);

  const portfolioItems: PortfolioCardProps[] = [
      {
      imageSrc: "/images/mods/optools.svg",
      imageAlt: "Op-Tools Mod Preview Image",
      imageWidth: 500,
      imageHeight: 500,
      title: "Op_tools",
      description:
        "A Minecraft mod that gives you op tools and armor that almost makes you a god.",
      discoverLink: { href: "https://modrinth.com/mod/op_tools", ariaLabel: "Read About Op-Tools Mod", external: true },
      installLink: { href: "https://modrinth.com/mod/op_tools#download", ariaLabel: "Install Op-Tools Mod", external: true },
      labels: [{ text: "Mod", type: "mod" }, { text: "Minecraft", type: "default" }, { text: "Featured", type: "featured" }],
    },
    {
      imageSrc: "/images/games/Quantum_transit.webp",
      imageAlt: "Quantum Transit Game Preview Image",
      imageWidth: 500,
      imageHeight: 300,
      title: "Quantum Transit",
      description:
        "A futuristic game set in 3000 AD where you control the flow of traffic as a young operator, enabling a dynamic multiplayer experience with unique mod support.",
      discoverLink: { href: "/games/quantum_transit", ariaLabel: "View Quantum Transit Details", external: false },
      installLink: { href: "/Launcher/index.html", ariaLabel: "Install Quantum Transit", external: false },
      labels: [{ text: "Game", type: "game" }, { text: "Multiplayer", type: "default" }],
      unannounced: true,
    },
    {
      imageSrc: "/images/games/Terra Runner.webp",
      imageAlt: "Terra Runner Game Preview Image",
      imageWidth: 500,
      imageHeight: 300,
      title: "Terra Runner",
      description:
        "Embark on an epic adventure in Terra Runner, a captivating 2D game developed by Game Mod Studios, where exploration, building, and survival are at the heart of the experience. Dive into a vibrant world filled with endless possibilities and thrilling challenges.",
      discoverLink: { href: "/games/terra_runner", ariaLabel: "Discover Terra Runner Features", external: false },
      installLink: { href: "#", ariaLabel: "Install Terra Runner", external: false },
      labels: [{ text: "Game", type: "game" }, { text: "2D", type: "default" }, { text: "Upcoming", type: "upcoming" }],
      unannounced: true,
    }
  ];


  return (
    <>
      {/* Add Inter font styling */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        .text-shadow-neon {
          text-shadow: 0 0 5px #00eaff, 0 0 10px #00eaff, 0 0 15px #00eaff, 0 0 20px #00eaff;
        }
      `}</style>

      <Navbar />

      <header className="hero flex h-screen items-center justify-center bg-hero-background bg-cover bg-center text-center text-red-500 bg-[url('/images/hero-background.webp')]">
        <div className="hero-text">
          <h1 className="text-shadow-neon text-6xl font-bold md:text-7xl lg:text-8xl">
            Gamemodstudios
          </h1>
          <p className="text-shadow-neon mt-5 text-xl md:text-2xl lg:text-3xl">
            Revolutionizing the gaming industry with unforgettable experiences
          </p>
          <a href="#portfolio" id="cta-button" className="cta-button mt-8 inline-block rounded-md bg-sky-500 px-6 py-3 font-bold uppercase text-black transition-all duration-300 hover:scale-105 hover:bg-sky-600">
            Explore Our Collection
          </a>
        </div>
      </header>

      <section className="welcome-section bg-dark-bg px-5 py-16 text-center text-white">
        <h1 className="mb-8 text-4xl font-bold">Welcome to Gamemodstudios</h1>
        <p className="mb-12 text-lg">
          Your hub for innovative gaming experiences and community-driven content.
        </p>

        <div className="welcome-container mx-auto grid max-w-6xl gap-10 md:grid-cols-3 pt-8">
          <div className="welcome-content rotate-[-4deg] rounded-lg bg-welcome-content-bg p-6 text-white shadow-lg shadow-sky-500 md:rotate-[-4deg]">
            <h2 className="mb-4 text-2xl font-semibold">About Us</h2>
            <p className="mb-4">
              At Gamemodstudios, we believe in the power of community and creativity.
            </p>
            <p className="font-bold">
              Join us on this exciting journey!{' '}
              <Link href="/about" className="text-sky-500 hover:underline">
                Learn More
              </Link>
            </p>
          </div>
          <div className="welcome-content translate-y-[-50px] rounded-lg bg-welcome-content-bg p-6 text-white shadow-lg shadow-sky-500 md:translate-y-[-50px]">
            <h2 className="mb-4 text-2xl font-semibold">Get Involved</h2>
            <p className="mb-4">
              Whether you're a gamer, modder, or developer, there's a place for you here.
            </p>
            <p className="font-bold">
              Join our community and start creating!{' '}
              <Link href="/about/contact" className="text-sky-500 hover:underline">
                Join Now
              </Link>
            </p>
          </div>
          <div className="welcome-content rotate-[4deg] rounded-lg bg-welcome-content-bg p-6 text-white shadow-lg shadow-sky-500 md:rotate-[4deg]">
            <h2 className="mb-4 text-2xl font-semibold">Stay Updated</h2>
            <p className="mb-4">
              Follow us on social media for the latest news and updates.
            </p>
            <p className="font-bold">
              Connect with us!{' '}
              <a href="/about/contact#stay-connected" className="text-sky-500 hover:underline">
                Follow Us
              </a>
            </p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio bg-dark-bg px-5 py-16 text-center text-white">
        <h2 className="mb-10 text-4xl font-bold">Featured Creations</h2>
        <div className="portfolio-gallery mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} {...item} />
          ))}
        </div>
        <div className="text-center mt-12 flex flex-wrap justify-center gap-4">
          <Link href="/games" className="rounded-md bg-sky-500 px-6 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400">
            Explore More Games
          </Link>
          <Link href="/mods" className="rounded-md bg-sky-500 px-6 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400">
            Explore More Mods
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

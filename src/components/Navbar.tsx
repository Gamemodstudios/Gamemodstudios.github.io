'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GetUser } from '@/utils/ran/getUser';

interface UserMetadata {
  profile_picture?: string; // Made optional
  // Add other properties from Supabase UserMetadata
}

interface AuthUser {
  user_metadata: UserMetadata;
  // Include other relevant User properties if you access them, e_g.,
  // id: string;
  // email: string;
}

// Ensure GetUserResponse accurately reflects what GetUser returns
interface GetUserResponse {
  data: {
    user: AuthUser | null;
  };
  error: any; // Consider making this more specific if you know the error type
}

interface NavDropdownProps {
  label: string;
  children: React.ReactNode;
}

const NavDropdown = ({ label, children }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setIsOpen(false), 120);
  };

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={triggerRef}
        className="font-bold text-white hover:text-sky-500 md:mt-0 md:flex-row md:mr-2 md:ml-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {label}
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 w-48 mt-7 bg-black/90 border border-gray-700 rounded shadow-lg py-2 z-50 animate-fade-in"
        >
          {children}
        </div>
      )}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchUser = async () => {
      const response: GetUserResponse = await GetUser();
      if (response.data && response.data.user) {
        setUser(response.data.user);
      } else {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const navigateToGamemodstudios = () => {
    window.location.href = '/';
  };

  const navigateProfile = () => {
    window.location.href = 'https://gamemodstudios-id.vercel.app/profile';
  };

  // Construct redirectUrl carefully. In a real application, you'd want to ensure this
  // is correctly handled for deployment environments (e.g., using environment variables).
  // For local development, this is often fine.

  // const redirectUrl = `http://localhost:3001/auth/login?redirect_uri=${window.location.origin}${pathname}/callback`;

  // Provide a default profile picture if user.user_metadata.profile_picture is undefined
  const profilePictureSrc = user?.user_metadata?.profile_picture || '/default-profile-pic.webp';


  return (
    <nav className="fixed top-0 z-50 flex w-full flex-col items-center justify-between bg-black/80 p-4 transition-transform duration-300 ease-in-out md:flex-row md:px-12">
      <div className="flex items-center">
        <Image
          src="/logo-laying.svg"
          alt="Gamemodstudios Logo"
          width={100}
          height={70}
          className="cursor-pointer"
          onClick={navigateToGamemodstudios}
          priority
        />
      </div>
      <ul className="mt-4 flex list-none flex-col text-left md:mt-0 md:flex-row md:mr-auto md:ml-8">
        <li>
          <Link href="/" className={`p-2 font-bold text-white hover:text-sky-500 ${pathname === '/' ? 'text-sky-500' : ''}`}>
            Home
          </Link>
        </li>
        <li>
          <NavDropdown label="Games">
            <Link
              href="/games"
              className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-sky-500"
            >
              All Games
            </Link>
            <Link
              href="/games/quantum_transit"
              className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-sky-500"
            >
              Quantum Transit
            </Link>
          </NavDropdown>
        </li>
        <li>
          <NavDropdown label="Mods">
            <Link
              href="/mods"
              className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-sky-500"
            >
              All Mods
            </Link>
            <Link
              href="https://modrinth.com/mod/op_tools"
              className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-sky-500"
            >
              Op_tools
            </Link>
          </NavDropdown>
        </li>
        <li>
          <NavDropdown label="About Us">
            <Link
              href="/about"
              className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-sky-500"
            >
              About Us
            </Link>
            <Link
              href="/about/goal"
              className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-sky-500"
            >
              Our Goal
            </Link>
            <Link
              href="/about/team"
              className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-sky-500"
            >
              Team
            </Link>
            <Link
              href="/about/contact"
              className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-sky-500"
            >
              Contact
            </Link>
            <Link
              href="/legal"
              className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-sky-500"
            >
              Legal
            </Link>
          </NavDropdown>
        </li>
        <li>
          <a
            href="https://gamemodstudios-docs.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 font-bold text-white hover:text-sky-500 md:mt-0 md:flex-row md:mr-1 md:ml-auto"
          >
            Documentation
          </a>
        </li>
      </ul>
      {/*
      <div className="profile mt-4 flex items-center text-white md:mt-0 md:ml-20 hidden">
        {user ? (
          <Image
            src={profilePictureSrc}
            alt="Profile Pic"
            width={50}
            height={50}
            className="profile-pic cursor-pointer rounded-full"
            onClick={navigateProfile}
          />
        ) : (
          <Link href={redirectUrl} className="login-button rounded-md bg-sky-500 px-6 py-2 font-bold uppercase text-white hover:bg-sky-600 transition-colors duration-300 scale-100 hover:scale-105">
            Login
          </Link>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;
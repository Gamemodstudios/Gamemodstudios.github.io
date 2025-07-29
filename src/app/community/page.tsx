import Image from 'next/image';
import Link from 'next/link';

// You will import your Navbar and Footer components here
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CommunityPage() {
  return (
    <>
      <Navbar />

      <main className="community-page">
        <h1 className="text-4xl font-bold mt-25 text-center">Community Hub</h1>
        <p className="mt-4 text-center">
          Welcome to the Gamemodstudios community hub! Connect with fellow gamers, share your creations, and get involved.
        </p>

        {/* Add more content here */}
      </main>

      <Footer />
    </>
  );
}
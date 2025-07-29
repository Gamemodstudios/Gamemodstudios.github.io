import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function GoalPage() {
  return (
    <>
      <Navbar />
      <ScrollToTopButton />
      <main className="flex flex-col items-center justify-start min-h-screen pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center text-foreground leading-tight">
            What exactly is our goal with Gamemodstudios?
          </h1>
          <p className="text-xl sm:text-2xl text-center max-w-3xl text-gray-600 dark:text-gray-300">
            Well that is what we hope to explain with this page. Happy reading!
          </p>
        </div>

        <div className="text-lg text-center max-w-2xl text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            At Gamemodstudios, we are more than just a platform; we are a <b>collaborative group of gamers, developers, and creators</b>. Our vision is to fundamentally redefine what it means to build games by creating an ecosystem that champions <b>affordability, openness, and moddability</b>.
          </p>
          <p>
            We firmly believe in fostering <b>creative freedom</b> for everyone. This means providing <b>accessible tooling</b> and built-in mod support that empowers players and creators to customize, remix, and build upon existing works. Our goal is to cultivate <b>open ecosystems</b> where innovation isn't gatekept, but rather shared and co-created by a strong, community-first approach.
          </p>
          <p>
            We are driven by <b>passion, not just profit</b>. Our commitment is to low-cost or free games and tools that prioritize accessibility over monetization. We envision a future of gaming where <b>players and creators are on equal footing</b>, contributing to a vibrant, evolving landscape.
          </p>
          <p>
            We're not here to simply monetize every asset; we're here to <b>co-create the future of gaming</b> with you.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
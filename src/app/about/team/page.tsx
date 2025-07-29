import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Image from 'next/image';


interface TeamMember {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
  bio?: string;
  socials: {
    github?: string;
    website?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Axelsson09",
    title: "Owner & Founder & Website Developer & Mod Developer",
    imageUrl: "/team/axelsson09.jpg",
    bio: "The driving force behind Gamemodstudios, handling everything from strategic direction to developing the website and core modding tools.",
    socials: {
      github: "https://github.com/Axelsson09",
      website: "https://axelsson09.github.io/",
    },
  },
  {
    id: 2,
    name: "Rezzler1",
    title: "Owner & Founder & Lead Tester & Quality Control",
    imageUrl: "/team/rezzler1.png",
    bio: "Ensuring every aspect of Gamemodstudios meets the highest standards. Rezzler1 focuses on testing and quality to deliver a robust platform.",
    socials: {
        github: "https://github.com/Rezzler1",
    },
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <ScrollToTopButton />
      <main className="flex flex-col items-center justify-start min-h-screen pt-28 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center text-foreground leading-tight">
            Meet the Team
          </h1>
          <p className="text-xl sm:text-2xl text-center max-w-3xl text-gray-600 dark:text-gray-300">
            We're a passionate group of gamers, developers, and creators united by a shared vision.
          </p>
        </div>

        {/* Team Cards Grid - Adjusting grid for fewer members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl"> {/* Changed to sm:grid-cols-2 and max-w-4xl */}
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white dark:bg-[#1f1f2a] rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-200 dark:border-gray-700"
            >
              <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400">
                <Image
                  src={member.imageUrl}
                  alt={`Picture of ${member.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h2 className="text-xl font-bold text-foreground mb-1">
                {member.name}
              </h2>
              <p className="text-blue-600 dark:text-blue-300 font-medium mb-3">
                {member.title}
              </p>
              {member.bio && (
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {member.bio}
                </p>
              )}

              {/* Social Media Links */}
              <div className="flex justify-center gap-4 mt-auto pt-2">
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Image
                      src="/icons/socials/github-mark.svg"
                      alt="GitHub"
                      width={24}
                      height={24}
                      className="dark:invert"
                    />
                  </a>
                )}
                {member.socials.website && (
                  <a
                    href={member.socials.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label={`${member.name}'s Website`}
                  >
                    <Image
                      src="/icons/globe.svg"
                      alt="Website"
                      width={24}
                      height={24}
                      className="dark:invert"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for Joining the Team */}
        <div className="bg-white dark:bg-[#1f1f2a] rounded-lg shadow p-6 w-full max-w-md text-center mt-12 border border-gray-200 dark:border-gray-700">
          <p className="mb-4 text-lg font-medium text-foreground">
            Interested in joining our team?
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
            As a growing project driven by passion, we're always open to connecting with individuals who share our vision for open, affordable, and moddable games. If you're a developer, tester, designer, or advocate looking to contribute, we'd love to hear from you!
          </p>
          <a
            href="mailto:gamemodstudios+join@gmail.com"
            className="inline-flex items-center justify-center bg-blue-600 text-white py-2 px-5 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            Connect With Us
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
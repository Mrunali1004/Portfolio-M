import MagicButton from "@/components/MagicButton";
import Image from "next/image";
import headshotImg from "../assets/images/headshot.png";
import ArrowDown from "../assets/icons/arrow-down.svg";

export const Hero = () => {
  return (
    <div className="pt-32 relative z-2">
      <div className="container">
        <div className="flex flex-col items-center animate-fade">
          <Image
            src={headshotImg}
            alt="Mrunali Zalavadiya headshot"
            className="rounded-full size-[125px]"
          />
          <div className="bg-gray-950 border border-gray-800 mt-2 px-4 py-1.5 inline-flex items-center gap-3 rounded-full">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-pingLarge"></div>
            </div>
            <div className="text-small font-medium">
              Seeking a Full-Time Dev Role
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl md:text-5xl text-center mt-8 tracking-wide font-bold">
              Hi there, I&apos;m Mrunali!
            </h1>
            <p className="mt-4 text-center text-white/80 md:text-lg">
              I&apos;m a software developer that is endlessly curious and eager
              to learn. I bring enthusiasm, adaptability, and a fresh
              perspective to every project.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <a href="#projects">
              <MagicButton
                title="See my Work"
                icon={<ArrowDown className="size-4" />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

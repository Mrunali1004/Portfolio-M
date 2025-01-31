"use client";

import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import Image from "next/image";
import CardHeader from "@/components/CardHeader";
import { useEffect, useState } from "react";
import { hobbies, books } from "@/data";
import { motion } from "framer-motion";
import { useRef } from "react";

const interval = 2000;

export const About = () => {
  const constraintRef = useRef(null);
  const [bookIndex, setBookIndex] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setBookIndex((prevIndex) => (prevIndex + 1) % books.length);
    }, interval);

    return () => clearInterval(cycle);
  }, []);
  return (
    <div className="py-12" id="about">
      <div className="container">
        <SectionHeader
          subheader="About Me"
          title="I am a Software Developer"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <Card className="p-5 my-10">
          <div className="text-md text-white-800 py-10 text-center">
            <p className="mb-4 ">
              I&apos;m a passionate developer 💻 with a love for building
              dynamic web applications, both on the{" "}
              <strong className="bg-gradient-to-r from-emerald-400 to-emerald-200 text-transparent bg-clip-text">
                front-end and back-end
              </strong>
              . I enjoy solving real-world problems through code ⚙️ and
              continuously expanding my skill set 📚.
            </p>

            <p>
              I&apos;m currently seeking{" "}
              <strong className="bg-gradient-to-r from-emerald-400 to-emerald-200 text-transparent bg-clip-text">
                new opportunities
              </strong>{" "}
              🚀 where I can contribute my skills, learn new technologies, and
              grow as a developer 🌱. If you&apos;re looking for a passionate
              software developer, feel free to reach out to discuss potential
              collaborations or job opportunities! 💬
            </p>

            <div className="pt-10">
              <a
                href="/pdf/Mrunali Zalavadiya.pdf"
                download="Mrunali_Zalavadiya_Resume.pdf"
              >
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 relative">
                  <span>Download My Resume 📄</span>
                </button>
              </a>
            </div>
          </div>
        </Card>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Some of my interests outside of code. Try interacting with the hobby chips!"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-400 to-emerald-200 rounded-full py-1.5 absolute cursor-grab active:cursor-grabbing"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore what I've been reading recently."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image
                  src={books[bookIndex]}
                  alt="book cover"
                  className="animate-fade"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

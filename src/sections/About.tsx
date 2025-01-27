"use client";

import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import Image from "next/image";
import mapImage from "@/assets/images/MapToronto.png";
import headshot from "@/assets/images/headshot.png";
import CardHeader from "@/components/CardHeader";
import { useEffect, useState } from "react";
import { hobbies, toolbox, books } from "@/data";
import { ToolboxItems } from "@/components/ToolboxItems";
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
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          subheader="About Me"
          title="I am a Software Developer"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
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
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
            digital experiences."
              />
              <ToolboxItems
                items={toolbox}
                itemsWrapperClassName="animate-moveLeft [animation-duration:40s]"
              />
              <ToolboxItems
                items={toolbox}
                className="mt-6"
                itemsWrapperClassName="animate-moveRight [animation-duration:20s]"
              />
            </Card>
          </div>
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
              <Image
                src={mapImage}
                alt="Map image"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 rounded-full outline outline-3 outline-emerald-300 flex justify-center items-center">
                <div className="absolute inset-0 rounded-full bg-emerald-300 -z-10"></div>
                <div className="absolute inset-0 rounded-full bg-emerald-300 -z-20 animate-ping [animation-duration:2s]"></div>

                <Image
                  src={headshot}
                  alt="Mrunali's portrait"
                  className="size-14 rounded-full"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";

import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import SectionHeader from "@/components/SectionHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { toolbox } from "@/data";

const Skills = () => {
  return (
    <div className="py-20" id="skill">
      <div className="container">
        <SectionHeader title="Skills" subheader="" description="" />
        <div className="w-full h-20 flex justify-center items-center">
            <div
              className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-400 to-emerald-200 rounded-full py-1.5 cursor-grab active:cursor-grabbing"
            >
              <span className="font-medium text-gray-950">Frontend | </span>
              <span className="font-medium text-gray-950">Backend | </span>
              <span className="font-medium text-gray-950">DevOps</span>
            </div>
        </div>

        <div className="pt-10">
          <Card className="h-[280px] md:col-span-3 lg:col-span-2">
            <CardHeader
              title=""
              description="Explore the technologies and tools behind my innovative digital creations."
              className="flex justify-center items-center"
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
      </div>
    </div>
  );
};

export default Skills;

import React from "react";

const SectionHeader = ({
  title,
  subheader,
  description,
}: {
  title: string;
  subheader: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-emerald-200 bg-clip-text text-transparent">
          {subheader}
        </p>
      </div>
      <h2 className="text-3xl md:text-5xl text-center mt-6 font-bold max-w-2xl mx-auto">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-white/80 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;

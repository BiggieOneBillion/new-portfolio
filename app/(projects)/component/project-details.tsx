import React from "react";
import { v4 as uuidv4 } from "uuid";

const ProjectDetails = ({ datum }: { datum: any }) => {
  return (
    <div className="border  border-blacky  border-white h-fit grid grid-cols-4">
      <span className="lg:w-[300px] text-center border-blacky border-white font-mono py-4 text-sm text-blacky text-white capitalize border-r ">
        {datum.name}
      </span>
      <span className="lg:w-[300px] text-center border-blacky border-white font-mono py-4 text-sm text-blacky text-white capitalize border-r ">
        {datum.description}
      </span>
      <div className="lg:w-[300px] flex flex-wrap justify-center items-center gap-2 border-blacky border-white font-mono py-4 text-sm text-blacky text-white capitalize border-r ">
        {datum.stack.map((technology: any) => (
          <span
            key={uuidv4()}
            className="text-sm font-light cursor-pointer hover:border-[rgba(0,0,0,0.5)]y hover:border-white transition-all duration-300 ease-in-out p-1 rounded-lg border border-[rgba(0,0,0,0.2)]y border-white/40 text-blacky text-white"
          >
            {technology}
          </span>
        ))}
      </div>
      <div className="lg:w-[300px] flex flex-col items-start justify-center gap-2 pl-10 border-blacky border-white font-mono py-4 text-sm text-blacky text-white capitalize ">
        <a
          target="_blank"
          href={datum.links.website}
          className="actual-link underline-offset-2 underline cursor-pointer"
        >
          Website link
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;

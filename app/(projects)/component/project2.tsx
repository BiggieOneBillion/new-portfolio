import React from "react";
import { v4 as uuidv4 } from "uuid";
import ProjectDetails from "./project-details";
import { GrContactInfo } from "react-icons/gr";
import { motion } from "framer-motion";
import { data } from "./project-data";
import { LinkPreview } from "@/components/global/link-preview";

function GridSmallBackgroundDemo({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[50rem] border w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
      <p className=" relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        {children}
      </p>
    </div>
  );
}

const Projects = () => {
  return (
    <GridSmallBackgroundDemo>
      <div
        id="projects"
        className="bg-white/70y h-[100vh] p-20 w-full flex justify-center items-center rounded"
      >
        <div className="space-y-10 md:mx-5 lg:mx-0">
          <h1 className="text-3xl font-semibold font-mono text-blacky text-white bg-clip-text text-bordery">
            Projects
          </h1>
          {/* TABLE HEADERS */}
          <header className="border  border-blacky border-white h-fit md:grid md:grid-cols-4  lg:flex lg:justify-center lg:items-center">
            <span className="lg:w-[300px] text-center border-blacky border-white font-mono py-4 text-base text-blacky text-white capitalize border-r ">
              Name
            </span>
            <span className="lg:w-[300px] text-center border-blacky border-white font-mono py-4 text-base text-blacky text-white capitalize border-r ">
              Description
            </span>
            <span className="lg:w-[300px] text-center border-blacky border-white font-mono py-4 text-base text-blacky text-white capitalize border-r ">
              Tech Stack
            </span>
            <span className="lg:w-[300px] text-center border-blacky border-white font-mono py-4 text-base text-blacky text-white capitalize">
              Links
            </span>
          </header>
          {/* PROJECTS */}
          <div className="space-y-5">
            {/* FIRST PROJECT */}
            {data.map((datum) => (
              <LinkPreview url={datum.links.website} key={uuidv4()}>
                <ProjectDetails datum={datum} />
              </LinkPreview>
            ))}
          </div>
        </div>
      </div>
    </GridSmallBackgroundDemo>
  );
};

export default Projects;

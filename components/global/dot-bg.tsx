import React from "react";
import { TimelineDemo } from "./timeline";

type Props = {
  children: React.ReactNode
}

export function DotBackgroundDemo({children}:Props) {
  return (
    <div className="h-fit overflow-hidden w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="text-4xly sm:text-7xly font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-20">
        {children}
      </div>
    </div>
  );
}
"use client";
import React from "react";
import { SparklesCore } from "./sparkles";
import { TextRevealCard } from "./TextReveal";
import { InfiniteMovingCards } from "./infinte-moving-cards";
import { technology } from "@/lib/constant";
import { FlipWords } from "./flip-words";

export function SparklesPreview() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-centery md:pl-[14rem] justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={0.8}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {/* <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Build great products
      </h1> */}
      <div className="flex flex-col gap-1 md:gap-5">
        <h3 className="text-white/70 font-medium uppercase md:text-lg">
          Chukwu Chinwendu
        </h3>
        <h1 className="text-5xl lg:text-8xl font-semibold text-white/90 mb-5 sm:mb-0 md:hidden">Full Stack Developer</h1>
        <section className="md:flex items-center hidden ">
          <FlipWords
            words={["Front End", "Back End", "Full Stack"]}
            className="text-5xl lg:text-8xl font-semibold text-white/90 mb-5 sm:mb-0"
          />
          <span className="text-5xl lg:text-8xl font-semibold text-white/90 mb-5 sm:mb-0">
            Developer
          </span>
        </section>
        {/* <TextRevealCard revealText="Front-End / Back-End" text="Full Stack Developer">
        </TextRevealCard> */}
        <p className="text-sm capitalize sm:text-base font-medium ">
          In the symphony of pixels and code,
          <br /> I orchestrate seamless and captivating web experiences
        </p>
        <InfiniteMovingCards items={technology} />
      </div>
    </div>
  );
}

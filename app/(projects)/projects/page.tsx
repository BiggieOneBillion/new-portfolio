"use client";
import { DotBackgroundDemo } from "@/components/global/dot-bg";
import { TabsDemo } from "../component/projects";
import { StickyScrollRevealDemo } from "../component/scrollReveal";
import Projects from "../component/project2";

export default function ProjectPage() {
  return (
    <DotBackgroundDemo>
      <section className="h-[100vh]">
        <Projects />
      </section>
    </DotBackgroundDemo>
  );
}

"use client";
import { DotBackground } from "@/components/global/dot-bg";
import Projects from "../component/project2";

export default function ProjectPage() {
  return (
    <DotBackground>
      <section className="h-[100vh]">
        <Projects />
      </section>
    </DotBackground>
  );
}

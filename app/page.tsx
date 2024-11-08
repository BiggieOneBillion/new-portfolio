import { DotBackgroundDemo } from "@/components/global/dot-bg";
import { LampComponent } from "@/components/global/Lamp";
import { SparklesPreview } from "@/components/global/sparksbg";
import { TimelineDemo } from "@/components/global/timeline";

export default function Home() {
  return (
    <div className="flex flex-col gap-4y relative p-2">
      {/* <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50  backdrop-blur-lg flex items-center border-b">
        Dashboard
      </h1> */}
      {/* <section className="w-[500px]y">
        <LampComponent />
      </section> */}
      {/* first style */}
      <SparklesPreview />
      <DotBackgroundDemo>
        <TimelineDemo />
      </DotBackgroundDemo>
    </div>
  );
}

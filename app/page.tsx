import { DotBackground } from "@/components/global/dot-bg";
import { SparklesPreview } from "@/components/global/sparksbg";
import { TimelineDemo } from "@/components/global/timeline";

export default function Home() {
  return (
    <div className="flex flex-col gap-4y relative p-2">
      <SparklesPreview />
      <DotBackground>
        <TimelineDemo />
      </DotBackground>
    </div>
  );
}

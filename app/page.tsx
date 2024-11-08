import { DotBackground } from "@/components/global/dot-bg";
import { SparklesPreview } from "@/components/global/sparksbg";
import { TimelineContainer } from "@/components/global/timeline";

export default function Home() {
  return (
    <div className="flex flex-col gap-4y relative p-2">
      <SparklesPreview />
      <DotBackground>
        <TimelineContainer />
      </DotBackground>
    </div>
  );
}

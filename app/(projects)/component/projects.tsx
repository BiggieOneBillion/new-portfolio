"use client";

import Image, { StaticImageData } from "next/image";
import { Tabs } from "@/components/global/tabs";
import Logistics from "@/public/logistics.png";
import Movies from "@/public/movies.png";
import Link from "next/link";

export function TabsDemo() {
  const tabs = [
    // {
    //   title: "E-commerce Website",
    //   value: "ecommerce",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-50 to-violet-100">
    //       <p>E-commerce Website</p>
    //       <DummyContent />
    //     </div>
    //   ),
    // },
    {
      title: "Logistics Platform",
      value: "logistics",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#222526ed] to-[#222526]">
          <div className="flex items-center justify-between">
            <p>Logistics Platform</p>
            <div className="text-sm flex items-center gap-4">
              <Link href="#" className="p-1 rounded border">Github Link </Link>
              <Link href="#" className="p-1 rounded border">Web Link </Link>
            </div>
          </div>
          <DummyContent imgUrl={Logistics} />
        </div>
      ),
    },
    // {
    //   title: "Inventory Management",
    //   value: "inventory",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-50 to-violet-100">
    //       <p>Inventory Management</p>
    //       <DummyContent />
    //     </div>
    //   ),
    // },
    {
      title: "Movies",
      value: "movies",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#B91C1B] to-[#B91C1B]">
           <div className="flex items-center justify-between">
            <p>Movies</p>
            <div className="text-sm flex items-center gap-4">
              <Link href="#" className="p-1 rounded border">Github Link </Link>
              <Link href="#" className="p-1 rounded border">Web Link </Link>
            </div>
          </div>
          <DummyContent imgUrl={Movies} />
        </div>
      ),
    },
    // {
    //   title: "Video Call Service",
    //   value: "video",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-50 to-violet-100">
    //       <p>Video Call Service</p>
    //       <DummyContent />
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto lg:w-[50rem] items-start justify-start my-20y">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({ imgUrl }: { imgUrl?: StaticImageData }) => {
  return (
    <section className="space-y-5">
      <Image
        src={imgUrl ? imgUrl : ""}
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[30%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
      <h1>Hello boss</h1>
    </section>
  );
};

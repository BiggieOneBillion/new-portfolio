"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "./timeline-component";


export function TimelineContainer() {
  const data = [
    //  2024
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Worked as an Intern for Krownpay and later was promoted to a
            full-time worker
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={"/krownpay_1.png"}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={"/Krownpay_2.png"}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Jun 2024 - Aug 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Worked as a Web Development Trainer with OLOTU SQUARE for PING - An
            NGO interested in empowering young people with digital skills.
          </p>
          <ul className="flex flex-col gap-2 list-outside list-disc mb-8 ">
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
              Trained over 20 developers in modern web development, achieving a
              90% course completion rate with positive feedback.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
              Led workshops on state management, component-based architecture,
              and full-stack best practices, enhancing problem-solving skills.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
              Developed a project-based curriculum for real-world application
              development, improving hands-on coding abilities.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
              Provided code reviews and one-on-one support, helping students
              debug and adopt clean coding standards.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
              Created training materials and exercises aligned with industry
              standards and trends.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
              Taught version control using Git and GitHub, emphasizing
              collaborative development and best practices
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    //  2023
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Worked as a freelancer, creating websites and applications for
            various clients.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I gained more experience in working with different technologies and
            tools, including React, Next.js, Tailwind CSS, Flutter, Dart, React
            Native, and more. As i had different client with diverse needs and
            as such i had to learn and adapt to different technologies and
            tools.
          </p>
        </div>
      ),
    },
    {
      title: "Aug 2023 - Jan 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Worked at Ultino Resources Limited on contract as a Front-end
            developer using React.js.
          </p>
          <ul className="flex flex-col gap-2 list-outside list-disc mb-8">
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
              We Developed scalable web applications using React.js, Redux,
              Node.js, and REST APIs.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
              I Refactored existing codebases to enhance application
              responsiveness by improving loading times,
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
              Also integrated third-party libraries and APIs to expand
              functionality, improving the overall user experience I also
              engaged in cross-functional collaboration with back-end developers
              and conducted code reviews to uphold coding quality and
              consistency
            </li>
          </ul>
        </div>
      ),
    },
    // 2022
    {
      title: "Sep 2021 - Dec 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Worked at Shooly Brandt on contract as a Front-end developer using
            React.js.
          </p>
          <ul className="flex flex-col gap-2 list-outside list-disc mb-8">
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
              {" "}
              Led the development and maintenance of the company&apos;s website
              front-end using JavaScript (ES6), CSS3, HTML, and React.js.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
              Enhanced website performance by optimizing code and implementing
              best practices, resulting in significantly improved page load
              time.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
              Collaborated closely with design and cross-functional teams to
              improve UI/UX, ultimately increasing user engagement.
            </li>
          </ul>
        
        </div>
      ),
    },
    {
      title: "Summary",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-10">
            I have experience working with various technologies and tools to
            develop and maintain both new and existing codebases. My work
            includes projects as a freelancer and collaboration within teams of
            diverse backgrounds and skill levels. I believe that clear and
            concise communication is essential to success, as it enables
            effective collaboration and ensures that project goals are met
            efficiently. <br />I love to work with you, and I&apos;m excited to see
            what we can achieve together!
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

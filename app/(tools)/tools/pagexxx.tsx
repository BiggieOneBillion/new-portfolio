"use client"
import { HoverEffect } from "@/components/global/hover-effect-cards";
import {
  Container,
  JavaLogo,
  JavaScriptLogo,
  NestJSLogo,
  ReactLogo,
  TypeScriptLogo,
} from "../component";

export default function ToolsPage() {
  return (
     <section className="h-screen flex items-center justify-center">
        <CardHoverEffect />
     </section>
  );
}

function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={project1} />
    </div>
  );
}

export const project1 = [
  {
    component: (
      <Container className="circle-3">
        <ReactLogo className="h-8 w-8 dark:text-white" />
      </Container>
    ),
    title: "React",
    bgColor: "#61DAFB",
  },
  {
    component: (
      <Container className="circle-3">
        <JavaScriptLogo className="h-8 w-8 dark:text-white" />
      </Container>
    ),
    title: "Javascript",
    bgColor: "#F7DF1E",
  },
  {
    component: (
      <Container className="circle-3">
        <TypeScriptLogo className="h-8 w-8 dark:text-white" />
      </Container>
    ),
    title: "Typescript",
    bgColor: "#61DAFB",
  },
  {
    component: (
      <Container className="circle-3">
        <NestJSLogo className="dark:text-white" />
      </Container>
    ),
    title: "Nest Js",
    bgColor: "#E0234E",
  },
  {
    component: (
      <Container className="circle-3">
        <NestJSLogo className="h-8 w-8 dark:text-white" />
      </Container>
    ),
    title: "Nest Js",
    bgColor: "#E0234E",
  },
  {
    component: (
      <Container className="circle-3">
        <NestJSLogo className="h-8 w-8 dark:text-white" />
      </Container>
    ),
    title: "Nest Js",
    bgColor: "#E0234E",
  },
];
// export const projects = [
//   {
//     title: "Stripe",
//     description:
//       "A technology company that builds economic infrastructure for the internet.",
//     link: "https://stripe.com",
//   },
//   {
//     title: "Netflix",
//     description:
//       "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
//     link: "https://netflix.com",
//   },
//   {
//     title: "Google",
//     description:
//       "A multinational technology company that specializes in Internet-related services and products.",
//     link: "https://google.com",
//   },
//   {
//     title: "Meta",
//     description:
//       "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
//     link: "https://meta.com",
//   },
//   {
//     title: "Amazon",
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     link: "https://amazon.com",
//   },
//   {
//     title: "Microsoft",
//     description:
//       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//     link: "https://microsoft.com",
//   },
// ];

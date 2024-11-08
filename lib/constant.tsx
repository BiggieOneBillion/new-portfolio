import Category from "@/components/icons/category";
import Logs from "@/components/icons/clipboard";
import Templates from "@/components/icons/cloud_download";
import Home from "@/components/icons/home";
import Payment from "@/components/icons/payment";
import Settings from "@/components/icons/settings";
import Workflows from "@/components/icons/workflows";
import { ReactElement } from "react";

import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandFlutter } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaJava } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";

export const technology: { tech: string; icons?: any; iconColor: string }[] = [
  {
    tech: "React",
    icons: <FaReact color="#61DAFB"/>,
    iconColor: "#61DAFB ",
  },
  {
    tech: "Next js",
    icons: <TbBrandNextjs color="#FFFFFF"/>,
    iconColor: "#FFFFFF",
  },
  {
    tech: "Flutter",
    icons: <TbBrandFlutter color="#02569B" />,
    iconColor: "#02569B",
  },
  {
    tech: "Node js",
    icons: <FaNodeJs color="#339933" />,
    iconColor: "#339933",
  },
  {
    tech: "Express Js",
    icons: <SiExpress color="#FFFFFF"/>,
    iconColor: "#FFFFFF",
  },
  {
    tech: "MongoDB",
    icons: <DiMongodb color="#47A248"/>,
    iconColor: "#47A248",
  },
  {
    tech: "Java",
    icons: <FaJava color="#007396"/>,
    iconColor: "#007396",
  },
  {
    tech: "Spring boot",
    icons: <BiLogoSpringBoot color="#6DB33F"/>,
    iconColor: "#6DB33F",
  },
];

export const clients = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
}));

export const menuOptions = [
  { name: "Home", Component: Home, href: "/" },
  { name: "Projects", Component: Category, href: "/projects" },
  // { name: "Work Tools", Component: Workflows, href: "/tools" },
  // { name: "Settings", Component: Settings, href: "/settings" },
  // { name: "Billing", Component: Payment, href: "/billing" },
  // { name: "Templates", Component: Templates, href: "/templates" },
  // { name: "Logs", Component: Logs, href: "/logs" },
];

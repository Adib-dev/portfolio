import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

import mapImage from "@/assets/images/mymap.png";
import locationPin from "@/assets/images/location-pin.png";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import { motion } from "framer-motion";

import JavascriptIcon from "@/assets/icons/javascript.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import MongoDBIcon from "@/assets/icons/mongodb.svg";
import GithubIcon from "@/assets/icons/github.svg";
import CPlusPlusIcon from "@/assets/icons/c++.svg";
import NodeIcon from "@/assets/icons/node.svg";
import PythonIcon from "@/assets/icons/python.svg";
import SupabaseIcon from "@/assets/icons/supabase.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import JestIcon from "@/assets/icons/jest.svg";
import ThreeJSIcon from "@/assets/icons/threejs.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { useRef } from "react";

const toolboxItems = [
  { title: "Javascript", iconType: JavascriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CSSIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Next", iconType: NextIcon },
  { title: "MongoDB", iconType: MongoDBIcon },
  { title: "Github", iconType: GithubIcon },
  { title: "C++", iconType: CPlusPlusIcon },
  { title: "Node", iconType: NodeIcon },
  { title: "Python", iconType: PythonIcon },
  { title: "Supabase", iconType: SupabaseIcon },
  { title: "Tailwind", iconType: TailwindIcon },
  { title: "Express", iconType: ExpressIcon },
  { title: "Jest", iconType: JestIcon },
  { title: "ThreeJS", iconType: ThreeJSIcon },
];

const hobbies = [
  {
    title: "Music",
    emoji: "🎶",
    top: `${Math.floor(Math.random() * 80)}%`,
    left: `${Math.floor(Math.random() * 80)}%`,
  },
  {
    title: "Traveling",
    emoji: "✈️",
    top: `${Math.floor(Math.random() * 80)}%`,
    left: `${Math.floor(Math.random() * 80)}%`,
  },
  {
    title: "Pet",
    emoji: "🐱",
    top: `${Math.floor(Math.random() * 80)}%`,
    left: `${Math.floor(Math.random() * 80)}%`,
  },
  {
    title: "Food",
    emoji: "🍕",
    top: `${Math.floor(Math.random() * 80)}%`,
    left: `${Math.floor(Math.random() * 80)}%`,
  },
  {
    title: "Nature",
    emoji: "🌳",
    top: `${Math.floor(Math.random() * 80)}%`,
    left: `${Math.floor(Math.random() * 80)}%`,
  },
  {
    title: "Fitness",
    emoji: "💪",
    top: `${Math.floor(Math.random() * 80)}%`,
    left: `${Math.floor(Math.random() * 80)}%`,
  },
  {
    title: "Movies",
    emoji: "🎬",
    top: `${Math.floor(Math.random() * 80)}%`,
    left: `${Math.floor(Math.random() * 80)}%`,
  },
  {
    title: "Gaming",
    emoji: "🎮",
    top: `${Math.floor(Math.random() * 80)}%`,
    left: `${Math.floor(Math.random() * 80)}%`,
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div id="about" className="py-16">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and What inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book over" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the techs and tools I use to craft exceptional  digital experiences."
              />
              <ToolboxItems
                items={toolboxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6 "
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interest and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-orange-400 to-red-600 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-32 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image src={locationPin} alt="location" className="size-28" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

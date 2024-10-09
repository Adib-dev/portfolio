"use client";

import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";

import Spheres from "../components/Spheres";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Experience } from "@/components/Experience";
import { useState } from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="spinner animate-spin rounded-full h-12 w-12 border-2 border-t-transparent"></div>
    </div>
  );
};

export const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  const loader = () => {
    setTimeout(() => {
      setLoaded(true); // Signal that loading is complete
    }, 2000);
  };

  loader();

  return (
    <div
      id="hero"
      className="py-32 relative z-0 overflow-x-clip md:py-48 lg:py-60"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Spheres />
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="bg-black border border-white/15 px-4 py-1.5 inline-flex items-center gap-4 rounded-full">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full  animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
            Building Exceptional User Experiences
          </h1>
          {/* <p className="mt-4 text-center text-white/60 md:text-lg">
            Hey there! Iam Adib. I specialize in creating high performing,
            functional apps. Looking forward to work with you.
          </p> */}
          <div
            style={{
              filter: "drop-shadow(0 0 200px  rgba(255, 61, 0, 1))",
            }}
          >
            <div
              className="relative"
              style={{
                filter: "drop-shadow(0 0 10px rgba(255, 110, 0, 1))",
              }}
            >
              <div className="flex">
                <Canvas
                  style={{
                    filter: "drop-shadow(0 0 1px white)",
                    opacity: loaded ? 0.7 : 0,
                    transition: "opacity 1s ease, transform 3s ease",
                  }}
                  camera={{ position: [0, 1.4, 10], fov: 30 }}
                >
                  <Experience />
                </Canvas>
                <p className="mt-72 px-6 flex items-center text-center text-white/60 md:text-lg absolute top-36 left-1/2 -translate-x-1/2 -translate-y-1/2 size-72 border  border-white/15 bg-black/85 backdrop-blur-3xl h-44 rounded-full">
                  Hey there! Iam Adib. I specialize in creating high performing,
                  functional apps. Looking forward to work with you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>🖐️</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

"use client";

import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import Spheres from "../components/Spheres";
import { Experience } from "@/components/Experience";

import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [typing, setTyping] = useState(false);

  const introduction = `<Hello World!>\nI'm Adib.\nA web developer with a passion for turning lines of code into seamless digital experiences. I specialize in crafting innovative web-apps that not only look good but work brilliantly. I firmly believe that the web should be both functional and fun. Whether it’s a sleek portfolio, a dynamic e-commerce platform, or just a great user experience, I’m here to build the future, one pixel at a time.`;

  useEffect(() => {
    // Simulate loading completion
    const timer = setTimeout(() => {
      setLoaded(true);
      setTimeout(() => setTyping(true), 1000);
    }, 3000); // Adjust the loading time as needed

    return () => clearTimeout(timer);
  }, []);

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
          <div
            style={{
              filter: "drop-shadow(0 0 200px  rgba(255, 61, 0, 1))",
              opacity: loaded ? 1 : 0,
            }}
          >
            <div
              className="relative mb-60"
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
                <div className="w-full mt-72 p-6 flex justify-center text-white/60 md:text-lg absolute top-36 left-1/2 -translate-x-1/2 border border-white/15 bg-black/85 h-auto rounded-2xl">
                  {typing && (
                    <TypeAnimation
                      style={{ whiteSpace: "pre-line" }}
                      sequence={[introduction]}
                      wrapper="span"
                      speed={80}
                      repeat={1}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center">
          <button className="relative z-10 inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Download CV</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="relative z-10 inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>🖐️</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

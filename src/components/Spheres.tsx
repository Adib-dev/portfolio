"use client";

import React, { useState, useEffect, useRef } from "react";

const Spheres = () => {
  // State to track the current position (mouse or tilt)
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // Ref to store the target position (mouse or tilt)
  const targetPosition = useRef({ x: 0, y: 0 });

  // Constants to control the movement and latency
  const movementFactor = 0.2; // For the biggest sphere (moves the least)
  const maxMovementFactor = 0.5; // For the smallest sphere (moves the most)
  const easingFactor = 0.05; // Controls how fast the spheres catch up

  // Effect to handle mouse and tilt movements
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Update target position when mouse moves (for desktop)
      targetPosition.current = {
        x: event.clientX - window.innerWidth / 2, // Centering the X position
        y: event.clientY - window.innerHeight / 2, // Centering the Y position
      };
    };

    const handleDeviceTilt = (event: DeviceOrientationEvent) => {
      const { beta, gamma } = event; // Beta is front-back tilt, gamma is left-right tilt
      const x = gamma || 0; // Tilt on the left-right axis
      const y = beta || 0; // Tilt on the front-back axis
      targetPosition.current = {
        x: ((x / 90) * window.innerWidth) / 2, // Map gamma tilt to screen width
        y: ((y / 90) * window.innerHeight) / 2, // Map beta tilt to screen height
      };
    };

    // Add event listener for mousemove on all devices
    window.addEventListener("mousemove", handleMouseMove);

    // Check if the device supports orientation events (typically on mobile devices)
    if (window.DeviceOrientationEvent) {
      // Add event listener for device tilt on mobile devices
      window.addEventListener("deviceorientation", handleDeviceTilt);
    }

    // Function to smoothly update the current position towards the target position
    const updatePosition = () => {
      setPosition((prevPosition) => ({
        x:
          prevPosition.x +
          (targetPosition.current.x - prevPosition.x) * easingFactor,
        y:
          prevPosition.y +
          (targetPosition.current.y - prevPosition.y) * easingFactor,
      }));
      requestAnimationFrame(updatePosition); // Continuously request animation frames for smooth transitions
    };

    updatePosition(); // Start the position update loop

    // Cleanup event listeners when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleDeviceTilt);
    };
  }, []);

  // Render the spheres with adjusted movement based on the current position (mouse or tilt)
  return (
    <div>
      {/* Largest sphere (moves the least) */}
      <div
        className="size-[1420px] hero-ring"
        style={{
          left: `${position.x * movementFactor}px`,
          top: `${position.y * movementFactor}px`,
        }}
      />
      {/* Medium-sized sphere */}
      <div
        className="size-[1220px] hero-ring"
        style={{
          left: `${position.x * (movementFactor + 0.05)}px`,
          top: `${position.y * (movementFactor + 0.05)}px`,
        }}
      />
      {/* Smaller sphere */}
      <div
        className="size-[1020px] hero-ring"
        style={{
          left: `${position.x * (movementFactor + 0.08)}px`,
          top: `${position.y * (movementFactor + 0.08)}px`,
        }}
      />
      {/* Even smaller sphere */}
      <div
        className="size-[820px] hero-ring"
        style={{
          left: `${position.x * (movementFactor + 0.1)}px`,
          top: `${position.y * (movementFactor + 0.1)}px`,
        }}
      />
      {/* Smallest sphere (moves the most) */}
      <div
        className="size-[620px] hero-ring"
        style={{
          left: `${position.x * maxMovementFactor}px`,
          top: `${position.y * maxMovementFactor}px`,
        }}
      />
    </div>
  );
};

export default Spheres;

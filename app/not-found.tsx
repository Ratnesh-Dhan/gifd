"use client";
import React, { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";

interface Particles {
  left: number;
  top: number;
  delay: number;
  duration: number;
}
export default function ErrorPage() {
  const [glitchActive, setGlitchActive] = useState(false);
  // const [particles] = useState(() =>
  //   [...Array(30)].map(() => ({
  //     left: Math.random() * 100,
  //     top: Math.random() * 100,
  //     duration: 3 + Math.random() * 4,
  //     delay: Math.random() * 2,
  //   }))
  // );
  const [particles, setParticles] = useState<Particles[]>([]);

  useEffect(() => {
    const temp = new Array(20).fill(0).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 3,
    }));
    setParticles(temp);

    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Glitch overlay */}
      {glitchActive && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-white opacity-10"></div>
        </div>
      )}

      <div className="relative z-10 text-center max-w-2xl">
        {/* Animated error icon */}
        <div className="relative inline-block mb-6 sm:mb-8">
          <div className="absolute inset-0 animate-ping">
            <AlertCircle className="w-16 h-16 sm:w-20 md:w-24 text-white opacity-20" />
          </div>
          <AlertCircle
            className={`w-16 h-16 sm:w-20 md:w-24 mx-auto transition-transform duration-200 ${
              glitchActive ? "scale-110 translate-x-1" : ""
            }`}
          />
        </div>

        {/* Error code with glitch effect */}
        <h1
          className={`text-5xl sm:text-6xl md:text-8xl font-bold mb-4 transition-all duration-200 ${
            glitchActive ? "translate-x-1 text-red-500" : ""
          }`}
        >
          404
        </h1>

        {/* Animated divider */}
        <div className="relative h-1 w-48 sm:w-64 mx-auto mb-6 sm:mb-8 bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse"></div>
        </div>

        {/* Error message */}
        <p className="text-lg sm:text-xl mb-2 text-gray-300 px-4">
          Page Not Found
        </p>
        <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 px-4">
          The page you are looking for does not exist. Please try again later.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base"
          >
            Reload Page
          </button>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base"
          >
            Go Back
          </button>
        </div>

        {/* Floating particles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {/* {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${
                  3 + Math.random() * 4
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))} */}
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                animation: `float ${p.duration}s ease-in-out infinite`,
                animationDelay: `${p.delay}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
      `,
        }}
      />
    </div>
  );
}

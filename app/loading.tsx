"use client";
import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function LoadingPage() {
  const [fillLevel, setFillLevel] = useState(0);
  const [dots, setDots] = useState("");

  useEffect(() => {
    // Animate fill level
    const fillInterval = setInterval(() => {
      setFillLevel((prev) => {
        if (prev >= 100) return 0;
        return prev + 0.5;
      });
    }, 50);

    // Animate dots
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => {
      clearInterval(fillInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  const bubbles = [...Array(8)].map((_, i) => ({
    id: i,
    size: 10 + (() => Math.random())() * 20,
    left: (() => Math.random())() * 100,
    duration: 4 + (() => Math.random())() * 4,
    delay: (() => Math.random())() * 3,
  }));

  const particles = [...Array(6)].map((_, i) => ({
    id: i,
    left: (() => Math.random())() * 100,
    top: (() => Math.random())() * 100,
    duration: 3 + (() => Math.random())() * 4,
    delay: (() => Math.random())() * 2,
  }));

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 overflow-hidden relative">
      <style jsx global>{`
        @keyframes rise {
          0% {
            bottom: -50px;
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            bottom: 100%;
            opacity: 0;
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

        .bubble {
          animation: rise ease-in infinite;
        }

        .particle {
          animation: float ease-in-out infinite;
        }
      `}</style>

      {/* Liquid fill effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute bottom-0 left-0 right-0 bg-white transition-all duration-100 ease-linear"
          style={{
            height: `${fillLevel}%`,
            opacity: 0.03,
          }}
        >
          {/* Wave effect */}
          <div
            className="absolute top-0 left-0 right-0 h-32 -mt-16"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
            }}
          >
            <svg
              className="absolute top-0 w-full h-32"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              style={{
                transform: "translateY(-50%)",
              }}
            >
              <path
                fill="rgba(255,255,255,0.05)"
                fillOpacity="1"
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              >
                <animate
                  attributeName="d"
                  dur="3s"
                  repeatCount="indefinite"
                  values="
                    M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                    M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,106.7C960,107,1056,85,1152,69.3C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                    M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
                  "
                />
              </path>
            </svg>
          </div>
        </div>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Bubbles rising */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="bubble absolute rounded-full bg-white"
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              left: `${b.left}%`,
              bottom: "-50px",
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-md px-4">
        {/* Spinning loader */}
        <div className="relative inline-block mb-6 sm:mb-8">
          <div className="absolute inset-0 animate-ping opacity-20">
            <Loader2 className="w-16 h-16 sm:w-20 md:w-24" />
          </div>
          <Loader2 className="w-16 h-16 sm:w-20 md:w-24 mx-auto animate-spin" />
        </div>

        {/* Loading text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
          LOADING
        </h1>

        {/* Progress bar */}
        <div className="relative h-2 w-48 sm:w-64 mx-auto mb-6 sm:mb-8 bg-white bg-opacity-10 overflow-hidden rounded-full">
          <div
            className="absolute inset-y-0 left-0 bg-white transition-all duration-100 ease-linear rounded-full"
            style={{ width: `${fillLevel}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-pulse"></div>
          </div>
        </div>

        {/* Loading message */}
        <p className="text-base sm:text-lg text-gray-400 mb-2">
          Please wait{dots}
        </p>
        <p className="text-xs sm:text-sm text-gray-600">
          {Math.floor(fillLevel)}%
        </p>

        {/* Floating particles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {particles.map((p) => (
            <div
              key={p.id}
              className="particle absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

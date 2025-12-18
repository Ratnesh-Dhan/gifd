"use client";
import React, { useState, useEffect } from "react";

export default function CommingSoon() {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlash((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black rounded-full blur-3xl opacity-5 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-900 rounded-full blur-3xl opacity-5 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gray-800 rounded-full blur-3xl opacity-5 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Logo/Icon */}
        <div className="mb-12 animate-float">
          <div className="w-32 h-32 mx-auto bg-black rounded-full flex items-center justify-center shadow-2xl animate-spin-slow border-4 border-white">
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
              <svg
                className="w-16 h-16 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Coming Soon Text */}
        <h1
          className={`text-7xl md:text-9xl font-black mb-8 transition-all duration-300 tracking-tighter ${
            flash
              ? "text-red-600 scale-110 drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]"
              : "text-black scale-100 drop-shadow-2xl"
          }`}
        >
          COMING SOON
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-4xl text-gray-800 font-bold mb-16 animate-pulse">
          Something extraordinary is brewing
        </p>

        {/* Animated Lines */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-black to-transparent animate-shimmer"></div>
          <div className="w-4 h-4 bg-black rounded-full animate-ping"></div>
          <div
            className="h-1 w-32 bg-gradient-to-r from-transparent via-black to-transparent animate-shimmer"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {[
            {
              icon: "⚡",
              title: "Lightning Fast",
              desc: "Optimized Performance",
            },
            {
              icon: "🎨",
              title: "Beautiful Design",
              desc: "Stunning Aesthetics",
            },
            { icon: "🚀", title: "Innovative", desc: "Cutting Edge Tech" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-black text-white p-8 rounded-2xl shadow-2xl hover:scale-105 transform transition-all duration-300 animate-bounce"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: "3s",
              }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-black mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Social Icons
        <div className="flex gap-6 justify-center">
          {["FB", "TW", "IG", "LI"].map((item, index) => (
            <button
              key={index}
              className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center hover:scale-125 transform transition-all duration-300 shadow-lg hover:shadow-2xl font-black text-sm"
            >
              {item}
            </button>
          ))}
        </div> */}

        {/* Bottom Text */}
        <div className="mt-16">
          <p className="text-gray-600 font-semibold text-sm">
            Stay tuned for updates • Follow us on social media
          </p>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-random"
            style={{
              width: `${(() => Math.random())() * 8 + 4}px`,
              height: `${(() => Math.random())() * 8 + 4}px`,
              backgroundColor: i % 2 === 0 ? "#000" : "#666",
              left: `${(() => Math.random())() * 95}%`,
              top: `${(() => Math.random())() * 100}%`,
              animationDelay: `${(() => Math.random())() * 5}s`,
              animationDuration: `${(() => Math.random())() * 6 + 4}s`,
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes shimmer {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes grid {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }

        @keyframes float-random {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          25% {
            transform: translate(30px, -80px) scale(1.2);
          }
          50% {
            transform: translate(-20px, -150px) scale(0.8);
          }
          75% {
            transform: translate(40px, -220px) scale(1.1);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }

        .animate-grid {
          animation: grid 3s linear infinite;
        }

        .animate-float-random {
          animation: float-random 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

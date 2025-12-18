"use client";
import React, { useRef } from "react";
import PulsingImageCard from "@/components/PulsingImageCard";

const ImageShowcase = () => {
  const galleryImages = [
    "/extra_images/front-page/1.jpg",
    "/extra_images/front-page/2.jpg",
    "/extra_images/front-page/3.jpg",
    "/extra_images/front-page/7.jpg",
    "/extra_images/front-page/5.jpg",
    "/extra_images/front-page/6.jpg",
  ];

  return (
    <div className="min-h-screen  bg-black flex items-center justify-center py-20 w-full  relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className=" w-full relative z-10 max-w-[1260px]">
        {/* Header */}
        <div className="text-center mb-20 ">
          <div className="inline-block relative">
            <h2 className="text-7xl font-bold text-white mb-6 tracking-tight relative">
              Student{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-gray-300 to-white animate-pulse">
                Life
              </span>
              <div className="absolute -inset-4 bg-white opacity-5 blur-2xl -z-10"></div>
            </h2>
            <div className="h-1 bg-linear-to-r from-transparent via-white to-transparent"></div>
          </div>
          <p className="text-gray-400 mt-8 text-lg tracking-wide">
            Hear what our community has to say
          </p>
        </div>

        {/* Review Cards */}
        {/* <div className="relative h-[500px] mb-16"> */}
        <div className=" mb-16">
          <div
            id="gallery"
            className=" flex flex-wrap gap-4 justify-center items-center"
          >
            {" "}
            {/*"flex flex-nowrap gap-4 overflow-x-auto w-full"*/}
            {galleryImages.map((imageUrl, index) => (
              <PulsingImageCard
                imageUrl={imageUrl}
                // height={imageUrl[1]}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes starPop {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          60% {
            transform: scale(1.3) rotate(20deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageShowcase;

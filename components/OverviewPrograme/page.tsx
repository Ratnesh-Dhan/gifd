"use client";
import { OverviewProgrameProps } from "@/types";
import React from "react";
import ThreeHoverPhotoLinks from "../ThreeHoverPhotoLinks";
import Image from "next/image";
import ScrollingShowcase from "../ScrollingShowcase";

const OverviewPrograme = (properties: OverviewProgrameProps) => {
  return (
    <div>
      <div
        className="relative w-screen left-1/2 -translate-x-1/2 h-[35vh] md:min-h-[70vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${properties.top_image})`,
        }}
      ></div>
      <div className=" mx-10 md:my-10 my-10">
        <h3 className="text-2xl md:text-4xl font-bold my-4">
          {properties.b_title}
        </h3>
        <p className="whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-gray-700">
          {properties.b_para}
        </p>
        {/* <p className="whitespace-pre-line leading-loose tracking-wide md:text-xl text-lg text-gray-700">
          {properties.b_para}
        </p> */}
      </div>
      <ThreeHoverPhotoLinks
        tile_title={properties.tile_title}
        tiles={properties.tiles}
      />
      <div className="mb-10 md:mb-20 mx-6 md:mx-0">
        <h4 className="text-2xl md:text-4xl font-bold my-4">Our Tie-ups</h4>
        <p className="whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-gray-700 mb-6 md:mb-10">
          GIFD Jamshedpur maintains strong academic and industry tie-ups with
          reputed universities, recognized boards, and leading fashion and
          interior design industries. These collaborations ensure a curriculum
          aligned with industry standards, certified programs, and real-world
          exposure through workshops, internships, and live projects—giving
          students a clear edge in their professional careers
        </p>
        <div className="flex justify-around gap-10 overflow-auto no-scrollbar">
          <Image
            src={"/about/images.png"}
            alt="Sanskaram"
            width={200}
            height={200}
            className="border border-black"
          />
          <Image
            src={"/images/moving_array/3.jpg"}
            alt="Ftalents"
            width={200}
            height={200}
            className="border border-black"
          />
          <div className="border border-black min-w-[55vw] md:min-w-0 scale-100 flex items-center">
            <Image
              src={"/extra_images/part-1.png"}
              alt="NBVTE"
              width={200}
              height={200}
            />
          </div>
          <Image
            src={"/images/nsdc-logo.png"}
            alt="NSDC"
            width={200}
            height={200}
            className="border border-black"
          />
        </div>
      </div>
      <div>
        <h4 className="text-2xl md:text-4xl font-bold mx-6 md:mx-0">
          Facilities
        </h4>
        <ThreeHoverPhotoLinks tiles={properties.tiles} />
      </div>
      <h4 className="text-2xl md:text-4xl font-bold mx-6 md:mx-0">
        Placement Partners
      </h4>
      <ScrollingShowcase />
    </div>
  );
};

export default OverviewPrograme;

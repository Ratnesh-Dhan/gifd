"use client";
import { OverviewProgrameProps } from "@/types";
import React from "react";
import ThreeHoverPhotoLinks from "../ThreeHoverPhotoLinks";

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
    </div>
  );
};

export default OverviewPrograme;

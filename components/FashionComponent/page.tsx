"use client";
import React from "react";
import { FashionComponentProps } from "@/types";
import ThreeHoverPhotoLinks from "../ThreeHoverPhotoLinks";

const FashionComponent = (properties: FashionComponentProps) => {
  return (
    <div>
      <div
        className="w-full h-[70vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${properties.top_image})`,
        }}
      ></div>
      <div className="md:mx-60 mx-10 md:my-10 my-10 text-center">
        <h3 className="text-2xl md:text-4xl font-bold my-4">
          {properties.b_title}
        </h3>
        <p className="whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-gray-700 text-left">
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
      <div id="eligibility-criteria" className="mx-60">
        <div className="mx-16">
          <h3 className="text-4xl font-bold">{properties.c_title}</h3>
          <p className="text-lg md:text-xl leading-8 tracking-[0.5px] text-gray-700 my-10">
            {properties.c_content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FashionComponent;

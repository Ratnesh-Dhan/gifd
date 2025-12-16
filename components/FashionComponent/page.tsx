"use client";
import React from "react";
import { FashionComponentProps, TableContent } from "@/types";
import ThreeHoverPhotoLinks from "../ThreeHoverPhotoLinks";
import FeeStructureTable from "../Table_/page";
import ScrollingShowcase from "../ScrollingShowcase";

const FashionComponent = ({
  properties,
  table_,
}: {
  properties: FashionComponentProps;
  table_: TableContent;
}) => {
  return (
    <div>
      <div className="relative h-[70vh] md:mx-10 mx-5">
        <div
          className="absolute w-[100vw] h-[70vh] left-1/2 -translate-x-1/2 bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `url(${properties.top_image})`,
          }}
        ></div>
      </div>
      <div className=" mx-10 md:my-10 my-10 text-center">
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
      {/* offers / careers */}
      <div className="flex justify-center items-center">
        <div className="flex ">
          <div className="flex-1 text-center border-r-3 pr-30 ">
            <h3 className="md:text-4xl font-bold">It Offers</h3>
            <div>
              <ul className="text-left space-y-3 mt-4 md:mt-6">
                {properties.offer_para.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 text-base md:text-xl text-lg leading-relaxed tracking-wide"
                  >
                    <span className="block min-w-3 min-h-3 rounded-full bg-gradient-to-r from-amber-500 to-slate-600 mt-1"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 text-center pl-30">
            <h3 className="md:text-4xl font-bold">Career</h3>
            <div>
              <ul className="text-left space-y-3 mt-4 md:mt-6">
                {properties.career_para.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 text-base md:text-xl text-lg leading-relaxed tracking-wide"
                  >
                    {/* <span className="block w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mt-1"></span> */}
                    <span className="block min-w-3 min-h-3 rounded-full bg-gradient-to-r from-amber-500 to-slate-600 mt-1"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ThreeHoverPhotoLinks
        tile_title={properties.tile_title}
        tiles={properties.tiles}
      />
      <div id="eligibility-criteria" className="">
        <div className="mx-16">
          <h3 className="text-4xl font-bold">{properties.c_title}</h3>
          {/* <p className="text-lg md:text-xl leading-8 tracking-[0.5px] text-gray-700 my-10">
            {properties.c_content}
          </p> */}
          <ul className="space-y-3 mt-4 md:mt-6">
            {properties.c_content.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 text-base md:text-lg leading-relaxed tracking-wide"
              >
                <span className="block min-w-3 min-h-3 rounded-full bg-gradient-to-r from-amber-500 to-slate-600 mt-1"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="min-h-screen p-4 md:p-8">
        <h3 className="md:text-4xl font-bold  mb-10">
          <span className="mx-10">Fee Structure</span>
        </h3>
        <FeeStructureTable {...table_} />
      </div>
      <div className="mx-10 mt-20">
        <h3 className="md:text-4xl font-bold ">Placement Partners</h3>
      </div>
      <ScrollingShowcase />
    </div>
  );
};

export default FashionComponent;

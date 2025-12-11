"use client";
import Card from "@/components/Card/page";
import { CardObjects } from "@/types";
import React, { useState } from "react";

const Campus = () => {
  const [cardobjects1] = useState<CardObjects>({
    imageLink: "/images/tailoring-2.jpg",
    aleternateText: "Classes",
    text: "Classes",
    link: "/campus/Classes",
  });
  const [cardobjects2] = useState<CardObjects>({
    imageLink: "/images/modeling-1.jpg",
    aleternateText: "Events",
    text: "Events",
    link: "/campus/Events",
  });
  const [cardobjects3] = useState<CardObjects>({
    imageLink: "/images/textile.jpg",
    aleternateText: "Tours",
    text: "Tour",
    link: "/campus/Tour",
  });
  const [cardobjects4] = useState<CardObjects>({
    imageLink: "/images/interior-3.jpg",
    aleternateText: "Other",
    text: "Other",
    link: "/campus/Other",
  });
  return (
    <div className="">
      <div
        className="relative w-full h-[70vh] bg-cover bg-center "
        style={{
          backgroundImage: `url(/images/gallery-banner-2.png)`,
        }}
      >
        <h3 className="absolute bottom-22 md:text-9xl text-4xl md:ml-[10vw] ml-4">
          <span className="font-bold">Student</span>{" "}
          <span className="[text-shadow:5px_5px_0px_#FFCA28]">Life</span>
        </h3>
      </div>
      <div id="fancy" className="flex justify-center mb-8">
        <div className="flex gap-14 my-20 ">
          <Card {...cardobjects1} />
          <Card {...cardobjects2} />
          <Card {...cardobjects3} />
          <Card {...cardobjects4} />
        </div>
      </div>
    </div>
  );
};

export default Campus;

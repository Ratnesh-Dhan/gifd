import FourParts from "@/components/FourParts";
import React from "react";
import ScrollingShowcase from "../../../../components/ScrollingShowcase";
import Image from "next/image";

const Recognitions = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[99vw] bg-[url('/images/banners/recognition.jpg')] h-[70vh] bg-cover bg-center" />
      <div className="max-w-[1260px] flex items-center">
        <FourParts />
      </div>
      <Image
        src="/about/banner.png"
        alt="recognition"
        width={1200}
        height={600}
        className="my-10"
      />
      <ScrollingShowcase />
    </div>
  );
};

export default Recognitions;

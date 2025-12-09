import FourParts from "@/components/FourParts";
import React from "react";
import ScrollingShowcase from "../../../components/ScrollingShowcase";
import Image from "next/image";

const Recognitions = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <FourParts />

      <Image
        src="/about/banner.jpg"
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

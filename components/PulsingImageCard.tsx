import Image from "next/image";
import React from "react";

// Single reusable component
const PulsingImageCard = ({
  imageUrl,
}: // height,
{
  imageUrl: string;
}) => {
  return (
    <div className="">
      <Image
        src={imageUrl}
        alt="Student"
        width={400}
        height={0}
        style={{ objectFit: "fill" }}
        className="object-fill p-2 bg-white/30 rounded-lg"
      />
    </div>
  );
};

export default PulsingImageCard;

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
    <div className=" p-3">
      <Image src={imageUrl} alt="Student" width={400} height={300} />
    </div>
  );
};

export default PulsingImageCard;

import Image from "next/image";
import React from "react";

const SmallIconComp = ({
  image_link,
  text,
}: {
  image_link: string;
  text: string;
}) => {
  return (
    <div className="p-10 text-lg flex flex-col items-center text-white">
      <Image src={image_link} alt={text} height={80} width={80} />
      <p className="mt-2">{text}</p>
    </div>
  );
};

export default SmallIconComp;

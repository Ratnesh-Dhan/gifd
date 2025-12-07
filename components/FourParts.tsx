import Image from "next/image";
import React from "react";

const FourParts = () => {
  return (
    <div className="flex justify-center gap-8 mb-16">
      <div className="text-center">
        <Image
          src="/Jhantu_images/part-1.png"
          alt={"part1"}
          width={250}
          height={250}
        />
        <h3>Affiliated With NBVTE</h3>
      </div>
      <div className="text-center">
        <Image
          src="/Jhantu_images/part-2.png"
          alt={"part1"}
          width={250}
          height={250}
        />
        <h3>Jharkhand Govt. Registered</h3>
      </div>
      <div className="text-center">
        <Image
          src="/Jhantu_images/part-3.png"
          alt={"part1"}
          width={250}
          height={250}
        />
        <h3>An ISO Certified</h3>
      </div>
      <div className="text-center">
        <Image
          src="/Jhantu_images/part-4.png"
          alt={"part1"}
          width={250}
          height={250}
        />
        <h3>MSME Registered</h3>
      </div>
    </div>
  );
};

export default FourParts;

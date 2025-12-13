import Image from "next/image";
import React from "react";

const Vision = () => {
  return (
    <div className="md:mx-60 mx-0">
      <div id="missions" className="md:mx-10 mx-10 my-20">
        <div id="our-vision" className="mt-10">
          <h3 className="text-4xl font-bold text-amber-400 mb-4 text-center md:text-left">
            VISSION
          </h3>
          <div className="flex items-center">
            <Image
              src="/about/vision.png"
              alt="our-vision"
              width={300}
              height={200}
              className="rounded-xl"
            />
            <p className="md:ml-8 ml-0  whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-gray-700 text-left">
              It is our rare vision to infuse artistic & academic potential in
              the budding designers. The GIFD team is highly committed to offer
              a learning environment of ultimate standards in fashion pertaining
              to design, technology and management. We also promise to inspire
              our excessively creative student body to draw motivation from
              India’s textiles and crafts, keeping, global trends related to our
              industry we serve, in mind.{" "}
            </p>
          </div>
        </div>
        <div id="our-mission" className="mt-10">
          <h3 className="text-4xl font-bold text-amber-400 mb-4 text-center md:text-right">
            MISSION
          </h3>
          <div className="flex items-center">
            <p className="md:mr-8 mr-0 whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-gray-700 text-left">
              Converting raw talents in to a well-furnished professional by
              giving them a real taste of fashion world is our mission.
              Provision of a good educational environment for talented young men
              and women to nurture their innovative potential and to acquire
              different skills valuable to self-industry and society is our
              goal. Graduates who are committed to exacting standards of
              professional excellence and personal integrity will also be
              brought forth.{" "}
            </p>
            <Image
              src="/about/mission.png"
              alt="our-vision"
              width={300}
              height={200}
              className="rounded-xl"
            />
          </div>
        </div>
        <div id="our-commitment" className="mt-10">
          <h3 className="text-4xl font-bold text-amber-400 mb-4 text-center md:text-left">
            COMMITMENT
          </h3>
          <div className="flex items-center">
            <Image
              src="/about/commitment.png"
              alt="our-vision"
              width={300}
              height={200}
              className="rounded-xl"
            />
            <p className="md:ml-8 ml-0 whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-gray-700 text-left">
              Honing and bringing up the inventiveness of budding minds to raise
              the brilliant style statements by offering them industry oriented
              curriculum of international standards is our commitment.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;

"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <div className="mx-0">
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-x-hidden">
        <div className=" bg-[url('/images/banners/vision.jpg')] h-[70vh] bg-cover bg-center" />
      </div>
      <div id="missions" className="md:mx-10 mx-10 my-20">
        <div id="our-vision" className="mt-10">
          <h3 className="text-4xl font-bold text-amber-400 mb-4 text-center md:text-left">
            VISSION
          </h3>
          <div className="flex items-center">
            <motion.div
              initial={{ y: 0, rotate: 0 }}
              whileHover={{
                y: [0, -5, 5, -5, 5, 0],
                rotate: [0, -5, 5, -5, 5, 0],
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src="/about/vision.png"
                alt="our-vision"
                width={300}
                height={200}
                className="rounded-xl h-50 w-300 shadow-xl/30"
              />
            </motion.div>
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
            <motion.div
              initial={{ y: 0, rotate: 0 }}
              whileHover={{
                y: [0, -5, 5, -5, 5, 0],
                rotate: [0, -5, 5, -5, 5, 0],
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src="/about/mission.png"
                alt="our-vision"
                width={300}
                height={200}
                className="rounded-xl h-50 w-350 shadow-xl/30"
              />
            </motion.div>
          </div>
        </div>
        <div id="our-commitment" className="mt-10">
          <h3 className="text-4xl font-bold text-amber-400 mb-4 text-center md:text-left">
            COMMITMENT
          </h3>
          <div className="flex items-center">
            <motion.div
              initial={{ y: 0, rotate: 0 }}
              whileHover={{
                y: [0, -5, 5, -5, 5, 0],
                rotate: [0, -5, 5, -5, 5, 0],
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src="/about/commitment.png"
                alt="our-vision"
                width={300}
                height={200}
                className="rounded-xl h-50 w-150 shadow-xl/30"
              />
            </motion.div>
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

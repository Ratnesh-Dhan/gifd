import CommingSoon from "@/components/CommingSoon/page";
import { ThreeHoverPhotoLinksProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const facilities1: ThreeHoverPhotoLinksProps[] = [
  {
    image: "/images/garment-construction-lab-1.jpg",
    title: "Garment Construction Lab",
    desc: "Bring your fashion design to life in our well equipped pattern making lab. Where you can Turn you vision into reality.",
    link: "#",
  },
  {
    image: "/images/classroom-1.jpg",
    title: "Classroom",
    desc: "Our classroom is a space where you can learn the art of fashion and design. Where you can learn the art of fashion and design.",
    link: "#",
  },
  {
    image: "/images/pattern-making-lab-1.jpg",
    title: "Pattern Making Lab",
    desc: "Our pattern making lab is a space where you can learn the art of pattern making. Where you can learn the art of pattern making.",
    link: "#",
  },
];
const facilities2: ThreeHoverPhotoLinksProps[] = [
  {
    image: "/images/interior-design-studio-1.jpg",
    title: "Interior Design Studio",
    desc: "Our interior design studio is a space where you can learn the art of interior design. Where you can learn the art of interior design.",
    link: "#",
  },
  {
    image: "/images/computer-lab-1.jpg",
    title: "Computer Lab",
    desc: "Our computer lab is a space where you can learn the art of computer. Where you can learn the art of computer.",
    link: "#",
  },
  {
    image: "/images/beauty-studio-1.jpg",
    title: "Beauty Studio",
    desc: "Our beauty studio is a space where you can learn the art of beauty and grooming. Where you can learn the art of beauty and grooming.",
    link: "#",
  },
  {
    image: "/images/modeling-1.jpg",
    title: "Modeling Ramp",
    desc: "Our modeling ramp is a space where you can learn the art of modeling. Where you can learn the art of modeling.",
    link: "#",
  },
];
const Facilities = () => {
  return (
    <div>
      <div className="relative h-[35vh] md:h-[70vh] md:mx-10 mx-5 mb-6 md:mb-10">
        <div
          className="absolute w-[100vw] h-[35vh] md:h-[70vh] left-1/2 -translate-x-1/2 bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `url("/images/banners/facilities-1.jpg")`,
          }}
        >
          <h3 className="absolute bottom-22 md:text-9xl text-4xl md:ml-[10vw] ml-4">
            <span className="font-bold text-amber-400 [text-shadow:5px_5px_0px_rgb(0,0,0)]">
              Student
            </span>{" "}
            <span className="[text-shadow:5px_5px_0px_#FFCA28]">
              Facilities
            </span>
          </h3>
        </div>
      </div>
      <h4 className="text-2xl md:text-4xl font-bold mx-6 mb-4">Facilities</h4>
      <p className="mx-6 whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-gray-700 mb-4 md:mb-10">
        Our facilities include a modern pattern making lab, classroom, computer
        lab, beauty studio, modeling ramp, and interior design studio—offering a
        comprehensive and hands-on learning experience.
      </p>
      <div
        id="cards1"
        className="flex gap-8 py-6 md:py-10 md:mb-10 overflow-x-auto no-scrollbar px-6"
      >
        {facilities1.map((tile, index) => (
          <div
            key={index}
            className="shrink-0 bg-black rounded-3xl w-70 md:w-90 h-115 md:h-130 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.50)]"
          >
            <Link href={tile.link}>
              <div className="relative w-full h-[67%] md:h-[70%] rounded-t-3xl overflow-hidden">
                <Image
                  src={tile.image}
                  alt={tile.desc || ""}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-10 md:pt-2 font-bold">
                <h3
                  className={`text-[17px]/8 md:text-[23px]/12 mt-2 text-white ${
                    tile.title ? "block" : "hidden"
                  }`}
                >
                  {tile.title}
                </h3>
                <p
                  className={` font-extralight text-sm text-white ${
                    tile.desc ? "block" : "hidden"
                  }`}
                >
                  {tile.desc}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div
        id="cards2"
        className="flex gap-8 py-6 md:py-10 md:mb-10 overflow-x-auto no-scrollbar px-6"
      >
        {facilities2.map((tile, index) => (
          <div
            key={index}
            className="shrink-0 bg-black rounded-3xl w-70 md:w-90 h-115 md:h-130 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.50)]"
          >
            <Link href={tile.link}>
              <div className="relative w-full h-[67%] md:h-[70%] rounded-t-3xl overflow-hidden">
                <Image
                  src={tile.image}
                  alt={tile.desc || ""}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-10 md:pt-2 font-bold">
                <h3
                  className={`text-[17px]/8 md:text-[23px]/12 mt-2 text-white ${
                    tile.title ? "block" : "hidden"
                  }`}
                >
                  {tile.title}
                </h3>
                <p
                  className={` font-extralight text-sm text-white ${
                    tile.desc ? "block" : "hidden"
                  }`}
                >
                  {tile.desc}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Facilities;

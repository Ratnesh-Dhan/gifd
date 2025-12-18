import { ThreeHoverPhotoLinksProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeHovers = ({ tiles }: { tiles: ThreeHoverPhotoLinksProps[] }) => {
  return (
    <div className="flex flex-col items-center">
      <div id="fancy" className="flex-col justify-center mb-8">
        <div className="flex gap-10 my-4">
          {tiles.map((tile, index) => (
            <div
              key={index}
              className=" bg-black rounded-3xl w-90 h-130 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.50)]"
            >
              <Link href={tile.link}>
                <div className="relative w-full h-[80%] rounded-t-3xl overflow-hidden">
                  <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-10 pt-4 font-bold">
                  <h3 className="text-xl mt-4 text-amber-400">{tile.title}</h3>
                  <p className="text-3xl text-white">{tile.desc}</p>
                </div>
                <span
                  className="opacity-0 translate-x-[-6px] transition-all duration-200
           hover:opacity-100 hover:translate-x-20
           text-amber-500 text-2xl font-semibold"
                >
                  ⟶ fuck
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHovers;

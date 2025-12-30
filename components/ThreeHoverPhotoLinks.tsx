import { ThreeHoverPhotoLinksProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ThreeHoverPhotoLinks = ({
  tile_title = "",
  tiles,
}: {
  tile_title?: string;
  tiles: ThreeHoverPhotoLinksProps[];
}) => {
  return (
    <div className="flex flex-col">
      <div id="fancy" className="flex-col mb-8">
        <h3 className="text-2xl md:text-4xl mt-10 md:my-10 ml-5">
          <span className="font-bold">{tile_title}</span>
        </h3>
        <div
          id="cards"
          className="flex gap-8 py-6 overflow-x-auto no-scrollbar px-6"
        >
          {tiles.map((tile, index) => (
            <div
              key={index}
              className="shrink-0 bg-black rounded-3xl w-70 md:w-90 h-110 md:h-130 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.50)]"
            >
              <Link href={tile.link}>
                <div className="relative w-full h-[70%] rounded-t-3xl overflow-hidden">
                  <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-10 md:pt-4 font-bold">
                  <h3 className="text-xl mt-4 text-amber-400">{tile.title}</h3>
                  <p className="text-xl md:text-3xl text-white">{tile.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeHoverPhotoLinks;
// {/* <div className="p-10 border rounded-3xl w-100 h-150 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.50)]">
//             1
//           </div>
//           <div className="p-10 border rounded-3xl w-100 h-150 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.50)]">
//             2
//           </div>
//           <div className="p-10 border rounded-3xl w-100 h-150 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.50)]">
//             3
//           </div> */}
//         {/* </div>

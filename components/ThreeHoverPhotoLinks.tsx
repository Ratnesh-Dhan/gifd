import { ThreeHoverPhotoLinksProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ThreeHoverPhotoLinks = ({
  tile_title,
  tiles,
}: {
  tile_title: string;
  tiles: ThreeHoverPhotoLinksProps[];
}) => {
  return (
    <div className="flex flex-col items-center">
      <div id="fancy" className="flex-col justify-center mb-8">
        <h3 className="text-4xl my-10">
          <span className="font-bold">{tile_title}</span>
        </h3>
        <div className="flex gap-24 my-4">
          {tiles.map((tile, index) => (
            <div
              key={index}
              className=" bg-black rounded-3xl w-100 h-150 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.50)]"
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
                <div className="px-10 pt-4 font-bold">
                  <h3 className="text-xl mt-4 text-amber-400">{tile.title}</h3>
                  <p className="text-3xl text-white">{tile.desc}</p>
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

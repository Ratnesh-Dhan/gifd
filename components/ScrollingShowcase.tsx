"use client";
import {useEffect} from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/about/moving_array/1.png",
  "/about/moving_array/2.png",
  "/about/moving_array/3.png",
  "/about/moving_array/4.png",
  "/about/moving_array/5.png",
  "/about/moving_array/6.png",
  "/about/moving_array/7.png",
  "/about/moving_array/8.png",
  "/about/moving_array/9.png",
  "/about/moving_array/10.png",
  "/about/moving_array/11.jpg",
];

export default function ScrollingShowcase() {
  useEffect(() => {
    
  }, []);
  return (
    <div className="w-[80%] mx-auto py-10 overflow-hidden bg-transparent">
      <motion.div
        className="flex gap-10"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.15, rotate: 2 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="shrink-0 items-center flex"
          >
            <Image
              src={src}
              alt={`img-${i}`}
              width={200}   // 2x size bump
              height={150}
              className="rounded-xl border border-amber-400 object-cover shadow-lg"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

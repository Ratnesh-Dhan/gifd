"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/moving_array/1.jpg",
  "/images/moving_array/2.jpg",
  "/images/moving_array/3.jpg",
  "/images/moving_array/4.jpg",
  "/images/moving_array/5.png",
  "/images/moving_array/6.jpg",
  "/images/moving_array/7.jpg",
  "/images/moving_array/8.jpg",
  "/images/moving_array/9.jpg",
  "/images/moving_array/10.jpg",
  "/images/moving_array/11.jpg",
  "/images/moving_array/12.png",
];

export default function ScrollingShowcase() {
  useEffect(() => {}, []);
  return (
    <div className="w-[80%] mx-auto py-10 overflow-hidden bg-transparent">
      <motion.div
        className="flex gap-10"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 15,
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
              width={200} // 2x size bump
              height={150}
              className="rounded-xl border border-amber-400 object-cover shadow-lg"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

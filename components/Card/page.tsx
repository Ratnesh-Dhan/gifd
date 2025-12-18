import { CardObjects } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Card = (properties: CardObjects) => {
  return (
    <motion.div
      initial={{ y: 0, rotate: 0 }}
      whileHover={{
        y: [0, -5, 5, -5, 5, 0],
        rotate: [0, -5, 5, -5, 5, 0],
        transition: { duration: 0.3 },
      }}
    >
      <div className=" border bg-black rounded-3xl w-[300px] h-100 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.50)]">
        <Link href={properties.link}>
          <div className="relative w-full h-[70%] rounded-t-3xl overflow-hidden">
            <Image
              src={properties.imageLink}
              alt={properties.aleternateText}
              fill
              className="object-cover"
            />
          </div>
          <div className="px-10 pt-4 font-bold">
            <h3 className="text-3xl mt-10 text-white">{properties.text}</h3>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;

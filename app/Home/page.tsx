import FourParts from "@/components/FourParts";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen">
        <div id="video" className="h-[95vh] overflow-hidden">
          <video
            src="/video/output.mp4"
            className="w-full object-cover h-[95vh]"
            autoPlay
            loop
            playsInline
            muted
          />
        </div>
        <div id="about" className="flex mx-100 my-30 gap-8">
          <div>
            <span className="text-amber-400 text-lg">
              About Glam Institute of Fashion Designing
            </span>
            <h3 className="text-2xl my-3">
              A Best Platform To Learn <br /> Fashion Designing Courses
            </h3>
            <p className="leading-relaxed">
              Managing Director of Glam Institute of Fashion Designing is here
              with a vision of taking Education and Fashion to another level,
              she has come up with an educational system, which is exceptional
              in every aspect. Together with nascency and inventiveness, the
              students are also exposed to handicraft and handloom patrimony
              which offers them with idiosyncratically exclusive outlook which
              mingles conventional values with modern thought processes by
              design. Read more{" "}
            </p>
          </div>
          <Image
            src={"/jhantu_images/about-imf.png"}
            alt="about image"
            width={500}
            height={500}
          />
        </div>
        
        <FourParts />
      </div>
    </div>
  );
};

export default Home;

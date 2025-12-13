import FourParts from "@/components/FourParts";
import HomeHovers from "@/components/HomeHovers/page";
import Reviews from "@/components/Reviews/page";
import ScrollingShowcase from "@/components/ScrollingShowcase";
import { ThreeHoverPhotoLinksProps } from "@/types";
import Image from "next/image";
import React from "react";

const fashion_programs: ThreeHoverPhotoLinksProps[] = [
  {
    image: "/home/bachelors-1.jpg",
    title: "",
    desc: "Fashion Design",
    link: "/Programs/Overview/Bachelor",
  },
  {
    image: "/images/fashion_design-1.jpg",
    title: "",
    desc: "Interior Design",
    link: "/Programs/Overview/Master",
  },
  {
    image: "/images/fashion_design-5.jpg",
    title: "",
    desc: "Textile Design",
    link: "/Programs/Overview/Diploma",
  },
];

const interior_programs: ThreeHoverPhotoLinksProps[] = [
  {
    image: "/home/bachelors-1.jpg",
    title: "",
    desc: "Modeling",
    link: "/Programs/Overview/Bachelor",
  },
  {
    image: "/images/fashion_design-1.jpg",
    title: "",
    desc: "Beautician",
    link: "/Programs/Overview/Master",
  },
];

const Home = () => {
  return (
    <div>
      <div className="min-h-screen">
        <div id="video" className=" h-[95vh] bg-black overflow-hidden">
          <video
            src="/video/front-video-1.mp4"
            className="w-full object-cover h-[93vh] translate-y-[-30px]"
            autoPlay
            loop
            playsInline
            muted
          />
        </div>
        <div id="about" className="flex px-60 py-30 gap-8 items-center">
          <div className="flex-1">
            <span className="text-amber-400 text-xl">
              About Glam Institute of Fashion Designing...
            </span>
            <h3 className="text-4xl my-3 font-bold">
              A Best Platform To Learn <br /> Fashion Designing Courses
            </h3>
            <p className="whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-gray-700 text-left">
              Managing Director of Glam Institute of Fashion Designing is here
              with a vision of taking Education and Fashion to another level,
              she has come up with an educational system, which is exceptional
              in every aspect. Together with nascency and inventiveness, the
              students are also exposed to handicraft and handloom patrimony
              which offers them with idiosyncratically exclusive outlook which
              mingles conventional values with modern thought processes by
              design. A passionate impulse, determinacy of purpose and the
              knowledge are the basic traits which one must own to be a Winner.
              If you promise to invest with passion, perseverance and passion,
              we promise to convert your potential into a highly rewarding
              career. It is our intense dream to make Glam Institute of Fashion
              Designing a leader in the Fashion fraternity and this will be
              achieved by inspiring arty expression and skilled exchange of
              encounters which magnifies creation and newness in the industry
              and enables trend to shine forth. With the spirit of managing
              volatile changes in the world of Fashion Technology, our well
              prepared and trained faculty invite you wholeheartedly to join the
              GIFD fraternity and make our journey still beautiful and
              prosperous
            </p>
          </div>
          <div className="flex-shrink-0  ">
            <Image
              className="rounded-xl border border-black shadow-[0px_0px_30px_rgba(255,200,40,1)]"
              src={"/about/about-imf.png"}
              alt="about image"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="">
          <HomeHovers tiles={fashion_programs} />
          <HomeHovers tiles={interior_programs} />
        </div>
        <FourParts />
        <Reviews />
        {/* <div className="bg-amber-50 md:py-20 py-10">
          <ScrollingShowcase />
        </div> */}
      </div>
    </div>
  );
};

export default Home;

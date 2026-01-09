"use client";
import { useDevice } from "@/app/provideres/Devicecontext";
import FacilitiesBoxes from "@/components/FacilitiesBoxes";
import FourParts from "@/components/FourParts";
import HomeHovers from "@/components/HomeHovers/page";
import ImageShowcase from "@/components/ImageShowcase/page";
import SmallIconComp from "@/components/SmallIconComp/page";
import StudentReviews from "@/components/StudentReviews/page";
import { ThreeHoverPhotoLinksProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const fashion_programs: ThreeHoverPhotoLinksProps[] = [
  {
    image: "/images/fashion_design-1.jpg",
    title: "",
    desc: "Fashion Design",
    link: "/Programs/Overview/Bachelor",
  },
  {
    image: "/images/interior-11.jpg",
    title: "",
    desc: "Interior Design",
    link: "/Programs/Overview/Master",
  },
  {
    image: "/images/textile.jpg",
    title: "",
    desc: "Textile Design",
    link: "/Programs/Overview/Diploma",
  },
];

const interior_programs: ThreeHoverPhotoLinksProps[] = [
  {
    image: "/images/modeling-4.jpg",
    title: "",
    desc: "Modeling",
    link: "/Programs/Overview/Bachelor",
  },
  {
    image: "/images/beautician-2.jpg",
    title: "",
    desc: "Beautician",
    link: "/Programs/Overview/Master",
  },
];

const why_choose = [
  { image_link: "/icons/badge.png", text: "Certified Faculty" },
  { image_link: "/icons/integration.png", text: "Cutting edge curriculum" },
  { image_link: "/icons/partnership.png", text: "Industry Collaboration" },
  { image_link: "/icons/fashion-week.png", text: "Annual Fashion Show" },
  { image_link: "/icons/job-seeker.png", text: "Intership Oppurtunities" },
  { image_link: "/icons/global-network.png", text: "Global Exposure" },
  { image_link: "/icons/meetings.png", text: "Practical Labs" },
  { image_link: "/icons/show.png", text: "Industries Visit" },
];

const images = [
  "images/banners/front-banner-1.jpg",
  "images/banners/front-banner-2.jpg",
];

const Home = () => {
  const { isMobile } = useDevice();
  // const [readmoreAbout, setReadmoreAbout] = useState<boolean>(false);
  const [readmoreMobile, setReadmoreMobile] = useState(false);
  const [readmoreDesktop, setReadmoreDesktop] = useState(false);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div>
        {/* <div
          id="video"
          className="relative left-1/2 right-1/2 -mx-[50vw] w-screen h-[35vh] md:h-[80vh] overflow-hidden bg-black"
        >
          <video
            src="/video/front-video-1.mp4"
            className="absolute inset-0 w-screen h-[45vh] md:h-[80vh] object-cover -translate-y-[30px]"
            autoPlay
            loop
            muted
            playsInline
          />
        </div> */}
        <div className="relative h-[28vh] md:h-[53vh] xl:h-[70vh]">
          <div
            className="absolute w-[100vw] h-[28vh] md:h-[53vh] xl:h-[70vh] left-1/2 -translate-x-1/2 bg-cover bg-left flex items-center"
            style={{ backgroundImage: `url(${images[index]})` }}
          />
          {index === 1 ? (
            <div>
              <div className="relative">
                <div className="absolute left-6 md:left-30 top-30 md:top-40 xl:top-40">
                  <h3>
                    <span className="font-bold text-amber-400 text-3xl md:text-7xl xl:text-8xl">
                      2026
                    </span>
                    <br />
                    <span className="font-bold text-black text-2xl/8 md:text-5xl/15 xl:text-7xl/20">
                      Admission Open !
                    </span>
                  </h3>
                </div>
                <div className="relative left-1/2 -translate-x-1/2 w-screen">
                  <div className="absolute right-0 bg-amber-400 text-white font-bold text-base md:text-2xl xl:text-3xl p-3 md:p-5 ">
                    <h1>
                      Glam Institute of
                      <br />
                      Fashion Desigining
                    </h1>
                  </div>
                  {/* <button className="absolute right-3 md:right-10 top-32 md:top-80 xl:top-110 bg-amber-400 text-white font-bold py-[2px] px-2 md:px-4 md:py-3 text-lg md:text-3xl xl:text-4xl rounded-2xl">
                    Apply now
                  </button> */}
                </div>
              </div>
            </div>
          ) : (
            <div className="absolute left-43 top-10 md:left-75 md:top-20 font-bold">
              <span className="text-amber-400 text-3xl md:text-6xl xl:text-8xl">
                15+
              </span>
              <h4 className="text-2xl mb-1 md:mb-5 md:text-5xl/15 xl:text-7xl/20">
                Programmes
              </h4>
              <p className="text-sm md:text-2xl/8 xl-text-3xl/20 md:tracking-wider">
                B. Des Fashion / Interior
                <br />
                M. Des Fashion / Interior
                <br />
                Diploma Courses
              </p>
            </div>
          )}
          <div className="relative w-screen left-1/2 -translate-x-1/2">
            <Link
              href="/Register"
              className="absolute right-3 md:right-10 top-50 md:top-80 xl:top-110 bg-amber-400 text-white font-bold py-[4px] px-3 md:px-4 md:py-3 text-lg md:text-3xl xl:text-4xl rounded-2x hover:bg-amber-200 rounded-2xl"
            >
              Apply now
            </Link>
          </div>
        </div>
        <div
          id="about"
          className="flex md:flex-row flex-col mx-10 pt-10 md:gap-8 items-center"
        >
          <div className="flex-1">
            <span className="text-amber-400 text-lg md:text-xl">
              About Glam Institute of Fashion Designing...
            </span>
            <h3 className="text-2xl md:text-4xl my-3 font-bold">
              GIFD: Shaping the Future of Design
            </h3>
            <div className="mb-5 md:mb-0 whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-gray-700 text-left">
              Glam Institute of Fashion Designing is a premier institute in
              Jharkhand, dedicated to nurturing creativity and transforming
              passion into profession. This is located in the heart of
              Jamshedpur.
              <br />
              <br />
              The institute offers comprehensive education in Fashion Designing,
              Interior Designing, Modelling, and Beautician courses, empowering
              students with industry-ready skills and global exposure.
              <br />
              {/* ================= DESKTOP READ MORE ================= */}
              <div
                className={`
      hidden md:block overflow-hidden transition-[max-height] duration-500 ease-in-out
      ${readmoreDesktop ? "max-h-[550px]" : "max-h-32"}
    `}
              >
                <span>
                  {"\t"} We offer a wide range of Diploma, Bachelor’s, and
                  Master’s programs in Fashion and Interior Designing, along
                  with Certification Programs in Modelling and Beautician
                  courses. Our programs are designed to meet current industry
                  standards while encouraging innovation, creativity, and
                  practical excellence.
                  <br />
                  <br />
                  Glam Institute believes in learning beyond classrooms.
                  Students regularly interact with industry experts, participate
                  in industrial training programs, and gain real-world exposure
                  that prepares them for successful careers in the fashion and
                  design industry.
                  <br />
                  <br />
                  The institute has proudly joined hands with Sanskaram
                  University as an industry partner, making quality design
                  education more efficient, accessible, and career-oriented. Our
                  strong industry connections ensure students receive valuable
                  mentorship, internships, and placement support. Our alumni are
                  successfully working in reputed companies, fashion houses,
                  design studios, or have launched their own start-ups,
                  showcasing the institute’s commitment to excellence and
                  entrepreneurship.
                </span>
              </div>
              <button
                onClick={() => setReadmoreDesktop(!readmoreDesktop)}
                className="hidden md:inline mt-3 text-sm text-amber-500"
              >
                {readmoreDesktop ? "read less." : "read more..."}
              </button>
              {/* ================= MOBILE READ MORE ================= */}
              <div
                className={`
      md:hidden overflow-hidden transition-[max-height] duration-1000 ease-in-out
      ${readmoreMobile ? "max-h-[1000px]" : "max-h-0"}
    `}
              >
                <span>
                  {"\t"} We offer a wide range of Diploma, Bachelor’s, and
                  Master’s programs in Fashion and Interior Designing, along
                  with Certification Programs in Modelling and Beautician
                  courses. Our programs are designed to meet current industry
                  standards while encouraging innovation, creativity, and
                  practical excellence.
                  <br />
                  <br />
                  Glam Institute believes in learning beyond classrooms.
                  Students regularly interact with industry experts, participate
                  in industrial training programs, and gain real-world exposure
                  that prepares them for successful careers in the fashion and
                  design industry.
                  <br />
                  <br />
                  The institute has proudly joined hands with Sanskaram
                  University as an industry partner, making quality design
                  education more efficient, accessible, and career-oriented. Our
                  strong industry connections ensure students receive valuable
                  mentorship, internships, and placement support. Our alumni are
                  successfully working in reputed companies, fashion houses,
                  design studios, or have launched their own start-ups,
                  showcasing the institute’s commitment to excellence and
                  entrepreneurship.
                </span>
              </div>
              <button
                onClick={() => setReadmoreMobile(!readmoreMobile)}
                className="md:hidden mt-2 text-sm text-amber-500"
              >
                {readmoreMobile ? "read less." : "read more..."}
              </button>
            </div>
          </div>
          <div className="shrink-0  ">
            <Image
              className="rounded-xl border border-black shadow-[0px_0px_30px_rgba(255,200,40,1)]"
              src={"/about/about-imf.png"}
              alt="about image"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div
          id="stats"
          className="mt-20 md:mt-0 md:my-20 md:mx-10 mx-5 grid grid-cols-2 gap-y-8 justify-items-center md:flex md:flex-row md:justify-around md:items-center mb-5 md:mb-0 border-b-3 md:pb-10"
        >
          <div className="">
            <h3 className="text-4xl md:text-7xl mb-5">98%*</h3>
            <span className="text-sm md:text-lg">Placements</span>
          </div>
          <div>
            <h3 className="text-4xl md:text-7xl mb-5">20+</h3>
            <span className="text-sm md:text-lg">Industry Tie-ups</span>
          </div>
          <div>
            <h3 className="text-4xl md:text-7xl mb-5">500+</h3>
            <span className="text-sm md:text-lg">Succesfull alumni</span>
          </div>
          <div className="-translate-y-10 md:-translate-y-2">
            <Image
              src={"/icons/infinity.png"}
              alt="Life Time"
              height={10}
              width={120}
              className="-scale-60 md:scale-100"
            />
            <div className="-translate-y-5 md:-translate-y-2 ">
              <span className="text-sm md:text-lg">Lifetime assistance</span>
            </div>
          </div>
        </div>
        <div className={`${isMobile ? "hidden" : ""}`}>
          <h3 className="text-4xl mt-10 mb-5 font-bold mx-10 ">Courses</h3>
          <HomeHovers tiles={fashion_programs} />
          <HomeHovers tiles={interior_programs} />
        </div>
        <div className={`${isMobile ? "block" : "hidden"}`}>
          <h3 className="text-2xl mb-5 font-bold mx-10 ">Courses</h3>

          <HomeHovers tiles={[...fashion_programs, ...interior_programs]} />
        </div>
        <FacilitiesBoxes />
        <div className="relative left-1/2 -translate-x-1/2 w-screen mb-20">
          <div className="flex flex-col md:flex-row">
            <div className="text-center py-5 md:py-40 bg-[#f59e0b] md:w-1/2 w-full text-white">
              <span className="md:text-3xl text-2xl">
                Why
                <br />
                choose
              </span>
              <br />
              <h3 className="md:text-6xl text-3xl font-bold font-sans">GIFD</h3>
            </div>
            <div className="md:pr-40 bg-black border-b border-t border-r w-full flex flex-wrap">
              {why_choose.map((element, idx) => (
                <div key={idx} className="w-1/4">
                  <SmallIconComp
                    image_link={element.image_link}
                    text={element.text}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <StudentReviews />
        <FourParts />
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
          <ImageShowcase />
        </div>
        {/* <div className="bg-amber-50 md:py-20 py-10">
          <ScrollingShowcase />
        </div> */}
      </div>
    </div>
  );
};

export default Home;

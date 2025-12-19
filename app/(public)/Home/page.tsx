import FourParts from "@/components/FourParts";
import HomeHovers from "@/components/HomeHovers/page";
import ImageShowcase from "@/components/ImageShowcase/page";
import SmallIconComp from "@/components/SmallIconComp/page";
import StudentReviews from "@/components/StudentReviews/page";
import { ThreeHoverPhotoLinksProps } from "@/types";
import Image from "next/image";
import React from "react";

const fashion_programs: ThreeHoverPhotoLinksProps[] = [
  {
    image: "/images/fashion_design-1.jpg",
    title: "",
    desc: "Fashion Design",
    link: "/Programs/Overview/Bachelor",
  },
  {
    image: "/images/interior-3.jpg",
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
    image: "/images/modeling-3.jpg",
    title: "",
    desc: "Modeling",
    link: "/Programs/Overview/Bachelor",
  },
  {
    image: "/images/beautician-1.jpg",
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

const Home = () => {
  return (
    <div className="">
      <div>
        <div
          id="video"
          className="relative left-1/2 right-1/2 -mx-[50vw] w-screen h-[80vh] overflow-hidden bg-black"
        >
          <video
            src="/video/front-video-1.mp4"
            className="absolute inset-0 w-screen h-[80vh] object-cover -translate-y-[30px]"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div
          id="about"
          className="flex md:flex-row flex-col mx-10 pt-10 md:gap-8 items-center"
        >
          <div className="flex-1">
            <span className="text-amber-400 text-xl">
              About Glam Institute of Fashion Designing...
            </span>
            <h3 className="text-4xl my-3 font-bold">
              GIFD: Shaping the Future of Design
            </h3>
            <p className="whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-gray-700 text-left">
              Glam Institute of Fashion Designing is a premier institute in
              Jharkhand, dedicated to nurturing creativity and transforming
              passion into profession. This is located in the heart of
              Jamshedpur.
              <br />
              <br /> The institute offers comprehensive education in Fashion
              Designing, Interior Designing, Modelling, and Beautician courses,
              empowering students with industry-ready skills and global
              exposure. <br />
              {"\t"} We offer a wide range of Diploma, Bachelor’s, and Master’s
              programs in Fashion and Interior Designing, along with
              Certification Programs in Modelling and Beautician courses. Our
              programs are designed to meet current industry standards while
              encouraging innovation, creativity, and practical excellence.
              <br />
              <br />
              Glam Institute believes in learning beyond classrooms. Students
              regularly interact with industry experts, participate in
              industrial training programs, and gain real-world exposure that
              prepares them for successful careers in the fashion and design
              industry.
              <br />
              <br />
              The institute has proudly joined hands with Sanskaram University
              as an industry partner, making quality design education more
              efficient, accessible, and career-oriented. Our strong industry
              connections ensure students receive valuable mentorship,
              internships, and placement support. Our alumni are successfully
              working in reputed companies, fashion houses, design studios, or
              have launched their own start-ups, showcasing the institute’s
              commitment to excellence and entrepreneurship.
            </p>
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
          className="md:my-20 md:mx-10 mx-5 flex md:flex-row flex-col justify-around items-center md:border-b-3 pb-10"
        >
          <div className="">
            <h3 className="text-7xl mb-5">98%*</h3>
            <span className="text-lg">Placements</span>
          </div>
          <div>
            <h3 className="text-7xl mb-5">20+</h3>
            <span className="text-lg">Industry Tie-ups</span>
          </div>
          <div>
            <h3 className="text-7xl mb-5">500+</h3>
            <span className="text-lg">Succesfull alumni</span>
          </div>
          <div className="-translate-y-2">
            <Image
              src={"/icons/infinity.png"}
              alt="Life Time"
              height={10}
              width={120}
            />
            <span className="text-lg">Lifetime assistance</span>
          </div>
        </div>
        <div className="">
          <h3 className="text-4xl mb-5 font-bold md:mx-10">Courses</h3>
          <HomeHovers tiles={fashion_programs} />
          <HomeHovers tiles={interior_programs} />
        </div>
        <div className="relative left-1/2 -translate-x-1/2 w-screen mb-20">
          <div className="flex">
            {/*-mx-[50vw]*/}
            <div className="text-center md:py-40 bg-[#f59e0b] md:w-1/2 w-full text-white">
              <span className="text-3xl">
                Why
                <br />
                choose
              </span>
              <br />
              <h3 className="md:text-6xl font-bold font-sans">GIFD</h3>
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

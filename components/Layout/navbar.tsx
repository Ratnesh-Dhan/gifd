import React from "react";
import Links from "../Links/page";
import Dropper from "../Dropper";
import Image from "next/image";
// import AboutGIFD from "@/app/about/AboutGIFD";

interface subLinks {
  title: string;
  links: string;
}
interface items {
  title: string;
  href: string;
  photo?: string;
  sublinks?: subLinks[];
}

const Navbar = () => {
  const aboutItems: items[] = [
    {
      title: "About GIFD",
      href: "/about/AboutGIFD",
      photo: "/about/main-about.jpg",
    },
    {
      title: "Recognitions",
      href: "/about/Recognitions",
      photo: "/about/recognition.jpg",
    },
    {
      title: "Vision & Missions",
      href: "/about/Visions", 
      photo: "/about/vision-mission.jpg",
    },
    {
      title: "Faculties",
      href: "/about/Faculties",
      photo: "/about/faculty.jpg",
    },
  ];
  const programsItems: items[] = [
    {
      title: "Overview",
      href: "/programs/overview",
      photo: "",
      sublinks: [
        {
          title: "Bachelor's programe",
          links: "/Overview/Bachelor",
        },
        {
          title: "Master's programe",
          links: "",
        },
        {
          title: "Professional certification programe",
          links: "",
        },
      ],
    },
    {
      title: "Fashion",
      href: "/programs/first",
      photo: "",
      sublinks: [
        {
          title: "Bachelor's programe",
          links: "",
        },
        {
          title: "Master's programe",
          links: "",
        },
        {
          title: "Professional certification courses",
          links: "",
        },
      ],
    },
    {
      title: "Interior",
      href: "/programs/second",
      photo: "",
      sublinks: [
        {
          title: "Bachelor's programe",
          links: "",
        },
        {
          title: "Master's programe",
          links: "",
        },
        {
          title: "Professional certification courses",
          links: "",
        },
      ],
    },
    {
      title: "Modeling",
      href: "/programs/third",
      photo: "",
      sublinks: [
        {
          title: "Professional certification courses",
          links: "",
        },
      ],
    },
  ];
  const admissionsItems: items[] = [
    {
      title: "How to Apply",
      href: "/resources/first",
      photo: "/images/resources/first.jpg",
    },
    {
      title: "Fee Structure",
      href: "/resources/second",
      photo: "/images/resources/second.jpg",
    },
    {
      title: "Hostels",
      href: "/resources/third",
      photo: "/images/resources/third.jpg",
    },
    {
      title: "FAQ",
      href: "/resources/third",
      photo: "/images/resources/third.jpg",
    },
  ];
  return (
    <div className="border-b flex justify-around px-68 items-center h-20 bg-black text-white">
        <Image src="/main-logo.png" alt="GIFD Logo" width={150} height={150} className="" />
      <div className="flex gap-8 h-full">
        <Links href="/" size="text-xl" title="Home" />
        <Dropper size="text-xl" title="About" items={aboutItems} />
        <Dropper size="text-xl" title="Programs" items={programsItems} />
        <Dropper size="text-xl" title="Admissions" items={admissionsItems} />
        <Links href="/campus" size="text-xl" title="Life@GIFD" />
        <Links href="/jds" size="text-xl" title="JDS" />
        <Links href="/facilities" size="text-xl" title="Facilities" />
        <Links href="/Contact" size="text-xl" title="Contact" />
      </div>

      <div className="border rounded-sm p-3 font-bold shadow-[3px_3px_10px_rgba(0,0,0,0.70)] bg-amber-300 hover:bg-pink-400">
        Registration
      </div>
    </div>
  );
};

export default Navbar;

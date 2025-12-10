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
      href: "",
      photo: "/images/tailoring.jpg",
      sublinks: [
        {
          title: "Bachelor's programe",
          links: "/Programs/Overview/Bachelor",
        },
        {
          title: "Master's programe",
          links: "/Programs/Overview/Master",
        },
        {
          title: "Professional certification programe",
          links: "/Programs/Overview/Professional",
        },
      ],
    },
    {
      title: "Fashion",
      href: "",
      photo: "/images/fashion_design-2.jpg",
      sublinks: [
        {
          title: "Bachelor's programe",
          links: "/Programs/Fashion/Bachelor",
        },
        {
          title: "Master's programe",
          links: "/Programs/Fashion/Master",
        },
        {
          title: "Professional certification courses",
          links: "/Programs/Fashion/ProfessionalCertificate",
        },
      ],
    },
    {
      title: "Interior",
      href: "",
      photo: "/images/interior-1.jpg",
      sublinks: [
        {
          title: "Bachelor's programe",
          links: "/Programs/Interior/Bachelor",
        },
        {
          title: "Master's programe",
          links: "/Programs/Interior/Master",
        },
      ],
    },
    {
      title: "Modeling",
      href: "/Programs/Modeling",
      photo: "/images/modeling-1.jpg",
      sublinks: [
        {
          title: "Professional certification courses",
          links: "/Programs/Modeling",
        },
      ],
    },
  ];
  const admissionsItems: items[] = [
    {
      title: "How to Apply",
      href: "/Admissions/HowToApply",
      photo: "",
    },
    {
      title: "Fee Structure",
      href: "/Admissions/FeeStructure",
      photo: "/images/Fees.jpg",
    },
    {
      title: "Hostels",
      href: "/Admissions/Hostels",
      photo: "/images/Hostel.jpg",
    },
    {
      title: "FAQ",
      href: "/Admissions/Faq",
      photo: "/images/Faq.jpg",
    },
  ];
  return (
    <div className=" w-full z-10 border-b flex justify-around px-68 items-center h-20 bg-black text-white">
      <Image
        src="/main-logo.png"
        alt="GIFD Logo"
        width={150}
        height={150}
        className=""
      />
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

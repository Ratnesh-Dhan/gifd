import React from "react";
import Links from "../Links/page";
import DropMenu from "../DropMenu/page";
import Dropper from "../Dropper";
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
      photo: "fake-link",
    },
    {
      title: "Recognitions",
      href: "/about/Recognitions",
      photo: "fake-link",
    },
    {
      title: "Vision, Missions & Values",
      href: "/about/Visions",
      photo: "fake-link",
    },
    {
      title: "Faculties",
      href: "/about/Faculties",
      photo: "fake-link",
    },
  ];
  const schoolItems: items[] = [
    {
      title: "first",
      href: "/school/first",
      photo: "/images/school/first.jpg",
    },
    {
      title: "second",
      href: "/school/second",
      photo: "/images/school/second.jpg",
    },
    {
      title: "third",
      href: "/school/third",
      photo: "/images/school/third.jpg",
    },
  ];
  const programsItems: items[] = [
    {
      title: "Fashion",
      href: "/programs/first",
      photo: "/images/programs/first.jpg",
      sublinks: [
        {
          title: "Bachelor's programe",
          links: "fake-link",
        },
        {
          title: "Master's programe",
          links: "fake-link",
        },
        {
          title: "Professional certification courses",
          links: "fake-link",
        },
      ],
    },
    {
      title: "Interior",
      href: "/programs/second",
      photo: "/images/programs/second.jpg",
      sublinks: [
        {
          title: "Bachelor's programe",
          links: "fake-link",
        },
        {
          title: "Master's programe",
          links: "fake-link",
        },
        {
          title: "Professional certification courses",
          links: "fake-link",
        },
      ],
    },
    {
      title: "Modeling",
      href: "/programs/third",
      photo: "/images/programs/third.jpg",
      sublinks: [
        {
          title: "Professional certification courses",
          links: "fake-link",
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
    <div className="border-b-1 flex justify-around px-68 items-center h-20">
      <h2 className="text-3xl text-amber-400 font-bold bg-amber-800 rounded-xl px-3">
        GIFD LOGO
      </h2>
      <div className="flex gap-8 h-[100%]">
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

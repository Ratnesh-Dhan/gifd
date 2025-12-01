import React from "react";
import Links from "../Links/page";
import DropMenu from "../DropMenu/page";
import Dropper from "../Dropper";

interface items {
  title: string;
  href: string;
  photo?: string;
}

const Navbar = () => {
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
      title: "first",
      href: "/programs/first",
      photo: "/images/programs/first.jpg",
    },
    {
      title: "second",
      href: "/programs/second",
      photo: "/images/programs/second.jpg",
    },
    {
      title: "third",
      href: "/programs/third",
      photo: "/images/programs/third.jpg",
    },
    {
      title: "fourth",
      href: "/programs/fourth",
      photo: "/images/programs/fourth.jpg",
    },
    {
      title: "fifth",
      href: "/programs/fifth",
      photo: "/images/programs/fifth.jpg",
    },
    {
      title: "sixth",
      href: "/programs/sixth",
      photo: "/images/programs/sixth.jpg",
    },
  ];
  const resourcesItems: items[] = [
    {
      title: "first",
      href: "/resources/first",
      photo: "/images/resources/first.jpg",
    },
    {
      title: "second",
      href: "/resources/second",
      photo: "/images/resources/second.jpg",
    },
    {
      title: "third",
      href: "/resources/third",
      photo: "/images/resources/third.jpg",
    },
  ];
  return (
    <div className="border-b-1 flex justify-around px-68 items-center h-20">
      <h2 className="text-3xl text-amber-400 font-bold bg-amber-800 rounded-xl px-3">
        GIFD LOGO
      </h2>
      <div className="flex gap-5 h-[100%]">
        <Links href="/" size="text-xl" title="Home" />
        <Links href="/about" title="About" size="text-xl" />
        <Dropper size="text-xl" title="School" items={schoolItems} />
        <Dropper size="text-xl" title="Programs" items={programsItems} />
        <Dropper size="text-xl" title="Resources" items={resourcesItems} />
        <Links href="/Contact" size="text-xl" title="Contact" />
        <Links href="/Gallary" size="text-xl" title="Gallery" />
        <Links href="/Login" size="text-xl" title="Login" />
      </div>

      <div className="border rounded-sm p-3 font-bold shadow-[3px_3px_10px_rgba(0,0,0,0.70)] bg-amber-300">
        Registration
      </div>
    </div>
  );
};

export default Navbar;

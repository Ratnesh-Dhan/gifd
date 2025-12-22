"use client";
import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { items } from "@/types";
import Links from "./Links/page";
import Dropper from "./Dropper";

const MobileMenu = ({
  about,
  programs,
  admissions,
  life,
  jds,
  facilities,
  contact,
}: {
  about: items[];
  programs: items[];
  admissions: items[];
  life: string;
  jds: string;
  facilities: string;
  contact: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //   useEffect(() => {
  //     document.body.style.overflow = isOpen ? "hidden" : "auto";
  //   }, [isOpen]);

  return (
    <div className="relative">
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`
    fixed top-0 left-0 h-screen w-[80vw] max-w-[320px]
    bg-black text-white z-50
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        {/* Menu items */}
        <nav className="mt-20 flex flex-col gap-6 pl-10 text-lg">
          <Links href="/" size="text-lg" title="Home" />
          <Dropper size="text-lg" title="About" items={about} />
          <Dropper size="text-lg" title="Programs" items={programs} />
          <Dropper size="text-lg" title="Admissions" items={admissions} />
          <Links href={life} size="text-lg" title="Life@GIFD" />
          <Links href={jds} size="text-lg" title="JDS" />
          <Links href={facilities} size="text-lg" title="Facilities" />
          <Links href={contact} size="text-lg" title="Contact" />
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;

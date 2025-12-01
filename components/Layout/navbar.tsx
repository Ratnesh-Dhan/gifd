import React from "react";
import Links from "../Links/page";
import DropMenu from "../DropMenu/page";
import Dropper from "../Dropper";

const Navbar = () => {
  return (
    <div className="border-b-1 flex justify-around px-68 items-center h-20">
      <h2 className="text-3xl text-amber-400 font-bold bg-amber-800 rounded-xl px-3">
        GIFD LOGO
      </h2>
      <div className="flex gap-5 h-[100%]">
        <Links href="/" size="text-xl" title="Home" />
        <Links href="/about" title="About" size="text-xl" />
        <Dropper size="text-xl" title="School" />
        <Dropper size="text-xl" title="Programs" />
        <Dropper size="text-xl" title="Resources" />
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

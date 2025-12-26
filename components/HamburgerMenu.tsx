import React from "react";

const HamburgerMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col gap-1.5 p-2"
    >
      <span
        className={`w-6 h-0.5 bg-linear-to-r from-[#FFD479] to-[#B8860B] transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-linear-to-r from-[#FFD479] to-[#B8860B] transition-all duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-linear-to-r from-[#FFD479] to-[#B8860B] transition-all duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  );
};

export default HamburgerMenu;

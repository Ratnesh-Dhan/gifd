"use client";
import { items } from "@/types";
import { useEffect, useState } from "react";
import Links from "./Links/page";

const MobileMenuChildrens = ({
  size,
  title,
  items,
  whichMenu,
  setWhichMenu,
  myIndex,
}: {
  size: string;
  title: string;
  items: items[];
  whichMenu: number;
  setWhichMenu: React.Dispatch<React.SetStateAction<number>>;
  myIndex: number;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [subMenu, setSubMenu] = useState<number>(-1);

  useEffect(() => {
    if (isOpen) {
      setWhichMenu(myIndex);
    } else {
      setWhichMenu(-1);
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${size} flex items-center gap-2 hover:text-gray-600 transition-colors text-left`}
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${
            whichMenu === myIndex ? "rotate-0" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {whichMenu === myIndex ? (
            // Cross icon
            <>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </>
          ) : (
            // Down arrow icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          )}
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          whichMenu === myIndex
            ? "max-h-96 opacity-100 mt-3"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 pl-4">
          {items.map((item, index) => (
            <div key={index}>
              {item.sublinks === undefined ? (
                <Links
                  href={item.href}
                  title={item.title}
                  size="text-gray-400 font-sans"
                />
              ) : (
                <div className="flex flex-col">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`${size} flex items-center gap-2 hover:text-gray-600 transition-colors text-left`}
                  >
                    <span>{item.title}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        whichMenu === myIndex ? "rotate-0" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {whichMenu === myIndex ? (
                        // Cross icon
                        <>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </>
                      ) : (
                        // Down arrow icon
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      )}
                    </svg>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenuChildrens;

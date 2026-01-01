"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import Links from "./Links/page";

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
const Dropper = ({
  title,
  size = "",
  items,
}: {
  title: string;
  size?: string;
  items: items[];
}) => {
  const isBrowser = typeof window !== "undefined";
  const [makeActive, setMakeActive] = useState(false);
  const enterHandler = () => {
    setMakeActive(true);
  };
  const leaveHandler = () => {
    setMakeActive(false);
  };
  const clickHandler = () => {
    setMakeActive(!makeActive);
  };

  return (
    <div
      className={`relative ${size === "" ? "" : `${size}`} hover-text-color`}
      onMouseOver={enterHandler}
      onMouseLeave={leaveHandler}
      onClick={clickHandler}
    >
      <div className="cursor-pointer h-full flex justify-left items-center md:justify-center">
        {title}
      </div>
      {/* // Because now document.body is only touched AFTER mount in the browser, not during server render. */}
      {isBrowser
        ? createPortal(
            <AnimatePresence>
              {makeActive && (
                <motion.div
                  id="dropper-menu"
                  className="absolute border flex left-0 items-wrap justify-center w-screen bg-slate-900 h-full md:h-[600px] top-32 z-50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="text-white text-2xl flex flex-wrap justify-center gap-5 mx-auto py-10">
                    {items.map((items, index) => (
                      <div key={index}>
                        {items.sublinks === undefined ? (
                          <Link
                            href={items.href}
                            className=" "
                            onClick={leaveHandler}
                          >
                            <div className="text-center min-h-[170px] flex flex-col justify-between">
                              {items.photo === "" ? (
                                <div className="w-60 h-40 rounder-lg bg-amber-300">
                                  photo
                                </div>
                              ) : (
                                <Image
                                  src={items.photo || ""}
                                  alt={items.title}
                                  height={180}
                                  width={180}
                                  className="rounded-xl"
                                />
                              )}
                              <span className="">{items.title}</span>
                            </div>
                          </Link>
                        ) : (
                          <div className="max-w-[210px] ">
                            <div className="text-left">
                              {" "}
                              {/* w-[180px] */}
                              {items.photo === "" ? (
                                <div className="w-60 h-30 bg-amber-300">
                                  photo
                                </div>
                              ) : (
                                <div className="text-center max-w-[180px]">
                                  <Image
                                    src={items.photo || ""}
                                    alt={items.title}
                                    height={180}
                                    width={180}
                                    className="rounded-xl"
                                  />
                                  <span className="">{items.title}</span>
                                </div>
                              )}
                            </div>
                            <div id="sub-links">
                              <ul className="text-lg mt-8 mr-5   mx-1 max-w-[20ch] break-words flex-col items-right">
                                {items.sublinks === undefined
                                  ? null
                                  : items.sublinks.map((item, index) => (
                                      <li
                                        key={index}
                                        className="mb-2"
                                        onClick={leaveHandler}
                                      >
                                        <Links
                                          href={item.links}
                                          title={item.title}
                                        />
                                      </li>
                                    ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>,
            document.body
          )
        : null}
    </div>
  );
};

export default Dropper;

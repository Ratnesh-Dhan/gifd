"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { createPortal } from "react-dom";

const Dropper = ({ title, size = "" }: { title: string; size?: string }) => {
  const [makeActive, setMakeActive] = useState(false);
  const leaveHandler = () => {
    setMakeActive(false);
  };
  const enterHandler = () => {
    setMakeActive(true);
  };
  return (
    <div
      onMouseOver={enterHandler}
      onMouseLeave={leaveHandler}
      className={`relative ${size === "" ? "" : `${size}`}`}
    >
      <div className="cursor-pointer h-full flex items-center justify-center">
        {title}
      </div>
      {createPortal(
        <AnimatePresence>
          {makeActive && (
            <motion.div
              id="dropper-menu"
              className="absolute border flex left-0 items-center justify-center w-screen bg-slate-900 h-[600px] top-20 z-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default Dropper;

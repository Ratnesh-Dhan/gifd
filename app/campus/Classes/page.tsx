"use client";
import Masonry from "@/components/Masonry/page";
import { MasonryItems } from "@/types";
import React, { useState } from "react";

const Classes = () => {
  const [items] = useState<MasonryItems[]>([
    { id: 1, img: "/images/fashion_design-4.jpg", url: "", height: 600 },
    { id: 2, img: "/images/student-2.jpg", url: "", height: 1000 },
    { id: 3, img: "/images/fashion_design-4.jpg", url: "", height: 600 },
    { id: 4, img: "/images/fashion_design-4.jpg", url: "", height: 600 },
    { id: 5, img: "/images/fashion_design-4.jpg", url: "", height: 600 },
    { id: 6, img: "/images/gallery-banner-2.png", url: "", height: 400 },
    { id: 7, img: "/images/fashion_design-4.jpg", url: "", height: 600 },
    { id: 8, img: "/images/fashion_design-4.jpg", url: "", height: 600 },
    { id: 9, img: "/images/fashion_design-4.jpg", url: "", height: 600 },
    { id: 10, img: "/images/fashion_design-4.jpg", url: "", height: 600 },
    { id: 11, img: "/images/student-2.jpg", url: "", height: 1000 },
    { id: 12, img: "/images/fashion_design-4.jpg", url: "", height: 600 },
    { id: 13, img: "/images/student-1.jpg", url: "", height: 1000 },
  ]);
  return (
    <div className="bg-slate-900">
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
    </div>
  );
};

export default Classes;

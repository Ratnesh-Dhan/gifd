"use client";
import OverviewPrograme from "@/components/OverviewPrograme/page";
import { OverviewProgrameProps } from "@/types";
import React, { useState } from "react";

const Professional = () => {
  const [properties] = useState<OverviewProgrameProps>({
    top_image: "/images/banners/fashion-master-2.jpg",
    b_title:
      "Become a Skilled Fashion Professional with Glam Institute of Fashion Designing's Professional Certifcation Program!",
    b_para: `Glam Institute’s bachelor program is built to shape individuals into confident, industry-ready fashion professionals. The curriculum focuses on both design and technical mastery, allowing students to explore areas such as Fashion Illustration, Textile Understanding, Pattern Making, Garment Construction, and Fashion Presentation.

Instead of just theory, students learn through real-world exposure—projects, workshops, runway participation, industrial visits, and hands-on assignments. Anyone who has completed 10+2 or equivalent and meets the eligibility requirements can pursue this program.

The program is led by experienced faculty members with professional expertise in the fashion industry. The learning approach is practical, enabling students to transform ideas into final creative outcomes suitable for brands, fashion houses, or independent ventures. Students gain exposure to professional working environments through internships and fashion events, helping them build a strong portfolio before graduation.

With well-equipped labs, studios, and creative spaces, students get continuous opportunities to experiment, develop, and showcase their work. Industry interactions, events, and project-based learning ensure students stay aligned with evolving fashion trends.

            Graduates of the program walk out prepared for careers in fashion designing, styling, merchandising, and independent entrepreneurship—ready to compete in both national and international fashion platforms.`,
    tiles: [
      {
        title: "Master",
        desc: "testing the texts",
        link: "/Programs/Fashion/Master",
        image: "/extra_images/woman-with-tablet-phone.jpg",
      },
      {
        title: "master",
        desc: "testing the texts",
        link: "/Overview/Master",
        image: "/extra_images/woman-with-tablet-phone.jpg",
      },
      {
        title: "master",
        desc: "testing the texts",
        link: "/Programs/Master",
        image: "/extra_images/woman-with-tablet-phone.jpg",
      },
    ],
    tile_title: "Professional Certification programe",
  });
  return (
    <div>
      <OverviewPrograme {...properties} />
    </div>
  );
};

export default Professional;

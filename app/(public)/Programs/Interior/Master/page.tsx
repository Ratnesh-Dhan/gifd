"use client";
import FashionComponent from "@/components/FashionComponent/page";
import { FashionComponentProps, TableContent } from "@/types";
import React, { useState } from "react";

const Master = () => {
  const [properties] = useState<FashionComponentProps>({
    top_image: "/images/interior-10.jpg",
    b_title: "Master in Interior Design",
    b_para: `The Master in Interior Design program is an advanced, industry-focused curriculum designed for individuals who want to build expertise in creating functional, aesthetic, and innovative interior environments. It goes far beyond basic design principles, offering a deep dive into spatial planning, materials, lighting, color theory, sustainability, and modern design technologies.

Students learn to conceptualize and execute projects across residential, commercial, retail, hospitality, and institutional spaces. The program emphasizes both creativity and technical precision—training learners to think like designers who can blend artistic vision with practical problem-solving.

Throughout the course, students engage in studio-based learning, real-world projects, model making, digital drafting, and 3D visualization using industry-standard tools. They also explore emerging trends such as smart interiors, green design, ergonomic planning, and experiential spaces.

The goal is simple: to develop highly skilled interior designers who can conceptualize, communicate, and deliver professional-grade design solutions in a competitive global market.`,
    offer_para: [
      "Advanced training in spatial planning and interior design concepts",
      "Mastery of materials, textures, lighting, and color applications",
      "Hands-on studio practice with real-world design projects",
      "Workshops on sustainable, smart, and ergonomic design",
      "Portfolio development for high-level professional opportunities",
      "Guidance in design research, presentation skills, and client communication",
    ],
    career_para: [
      "Interior Designer",
      "Senior Interior Design Consultant",
      "Space Planner",
      "Residential & Commercial Designer",
      "Furniture & Product Designer",
      "Lighting Designer",
      "Exhibition & Set Designer",
      "Retail & Hospitality Interior Specialist",
      "Design Project Manager",
    ],
    tiles: [
      {
        title: "Master's",
        desc: "Interior Design",
        link: "/Overview/Bachelor",
        image: "/images/interior-9.jpg",
      },
      {
        title: "Master's",
        desc: "Fashion",
        link: "/Overview/Master",
        image: "/images/fashion_design-3.jpg",
      },
      {
        title: "Master's",
        desc: "Textile",
        link: "/Overview/Master",
        image: "/images/textile-2.jpg",
      },
    ],
    tile_title: "Master's programe",
    c_title: "Eligibility Criteria & Duration ",
    c_content: [
      `Applicants must hold a Bachelor’s degree in Interior Design, Architecture, Civil Engineering, Fine Arts, or any related design discipline OR a B.A./B.Sc in any field with a demonstrated interest in design from a recognized institution`,
      "Duration: 2 Years.",
    ],
  });
  const [table] = useState<TableContent>({
    registrationFee: 8500,
    table_title: "Masters in Interior Design",
    course_duration: "2 years (4 sem)",
    feeData: [
      {
        semester: 1,
        semesterFee: 33000,
        year: 1,
        yearlyFee: 66000,
      },
      {
        semester: 2,
        semesterFee: 33000,
        year: 1,
        yearlyFee: null,
      },
      {
        semester: 3,
        semesterFee: 33000,
        year: 2,
        yearlyFee: 66000,
      },
      {
        semester: 4,
        semesterFee: 33000,
        year: 2,
        yearlyFee: null,
      },
    ],
  });
  return (
    <div>
      <FashionComponent properties={properties} table_={table} />
    </div>
  );
};

export default Master;

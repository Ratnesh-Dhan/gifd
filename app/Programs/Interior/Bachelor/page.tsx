"use client";
import FashionComponent from "@/components/FashionComponent/page";
import { FashionComponentProps, TableContent } from "@/types";
import React, { useState } from "react";

const Bachelor = () => {
  const [properties] = useState<FashionComponentProps>({
    top_image: "/images/interior-6.jpg",
    b_title: "Bachelor in Interior Design",
    b_para: `A Bachelor in Interior Design is crafted for individuals who think differently—those who notice details, question space, and imagine better possibilities. This program blends creativity with technical precision, transforming students into confident design thinkers capable of shaping meaningful and inspiring environments. Through immersive studio work, material exploration, space planning, and hands-on design exercises, learners master the art of balancing aesthetics, comfort, and functionality.

Students gain exposure to residential, commercial, retail, and hospitality interiors while learning advanced digital tools such as CAD, 3D visualization, and rendering software. With industry-driven projects, workshops, and real-world experience, the program nurtures originality, innovation, and professional readiness. By graduation, students develop a strong design identity and a polished portfolio that reflects their vision, creativity, and mastery of spatial design.`,
    offer_para: [
      "Strong foundation in space planning, interior styling, and design principles",
      "Hands-on learning through model-making, drafting, rendering, and visual presentation",
      "Exploration of materials, textures, finishes, lighting concepts, and furniture design",
      "Training in industry software such as AutoCAD, SketchUp, Revit, and 3D visualization tools",
      "Exposure to residential, commercial, retail, office, and hospitality interior concepts",
      "Live design studios, workshops, and real-world problem-solving experience",
      "Guidance from industry professionals, architects, and design mentors",
      "Focus on sustainable design, modern aesthetics, and future-driven interior solutions",
    ],
    career_para: [
      "Interior Designer for residential, commercial, or hospitality spaces",
      "Furniture Designer or Modular Furniture Specialist",
      "Interior Stylist for homes, retail showrooms, or décor brands",
      "Space Planner or Layout Consultant",
      "Exhibition, Retail, and Visual Display Designer",
      "Set Designer for film, television, and events",
      "Design Entrepreneur or Freelance Interior Consultant",
      "Fashion Educator, Lecturer, or Academic Researcher",
    ],
    tiles: [
      {
        title: "Bachelor's",
        desc: "Interior",
        link: "/Overview/Bachelor",
        image: "/images/interior-9.jpg",
      },
      {
        title: "Bachelor's",
        desc: "Fashion",
        link: "/Overview/Master",
        image: "/images/fashion_design-3.jpg",
      },
      {
        title: "Bachelor's",
        desc: "Textile",
        link: "/Overview/Master",
        image: "/images/textile-2.jpg",
      },
    ],
    tile_title: "Bachelor's programe",
    c_title: "Eligibility Criteria & Duration ",
    c_content: [
      `Applicants must have completed 10+2 (or equivalent) from a recognized board, preferably with an interest in design, art, architecture, or creative studies. No prior design background is required; a basic aptitude for creativity and spatial understanding is sufficient.`,
      "Duration: 2 Years.",
    ],
  });
  const [table] = useState<TableContent>({
    registrationFee: 8500,
    table_title: "Bachelor's in Interior Design",
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

export default Bachelor;

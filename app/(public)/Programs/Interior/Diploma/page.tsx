"use client";
import FashionComponent from "@/components/FashionComponent/page";
import { FashionComponentProps, TableContent } from "@/types";
import React, { useState } from "react";

const Diploma = () => {
  const [properties] = useState<FashionComponentProps>({
    top_image: "/images/interior-12.jpg",
    b_title: "Diploma in Interior Design",
    b_para: `The Diploma in Interior Design is designed for individuals who are curious about spaces and passionate about creating functional, well-planned interiors. This program focuses on building strong practical skills and design fundamentals, enabling students to understand how interior spaces are planned, designed, and executed in real-world settings.

The course combines creativity with technical training through hands-on studio work, space planning, material studies, and basic design principles. Students gain exposure to residential, commercial, and retail interiors while learning essential tools such as CAD drafting and basic 3D visualization. Emphasis is placed on understanding layouts, lighting, finishes, furniture selection, and ergonomics.

With project-based learning, workshops, and practical assignments, the diploma prepares students for entry-level roles in the interior design industry. By the end of the program, learners develop practical knowledge, professional discipline, and a foundational portfolio that reflects their skills and readiness to work under professional designers or design firms.
`,
    offer_para: [
      "Strong foundation in space planning, interior styling, and basic design principles",
      "Hands-on training in drafting, rendering, model-making, and visual presentation",
      "Introduction to materials, textures, finishes, lighting concepts, and furniture basics",
      "Training in essential industry tools such as AutoCAD, SketchUp, and basic 3D visualization",
      "Exposure to residential, commercial, retail, and office interior concepts",
      "Studio-based learning with practical assignments and real-world design problems",
      "Guidance from experienced faculty and industry professionals",
      "Understanding of sustainable practices and contemporary interior design trends",
    ],

    career_para: [
      "Junior Interior Designer",
      "Interior Design Assistant",
      "Interior Stylist",
      "Space Planning Assistant",
      "Furniture Design Assistant or Modular Furniture Executive",
      "Retail Display or Visual Merchandising Assistant",
      "Set Design Assistant for events or media projects",
      "Freelance Interior Design Support Professional",
    ],

    tiles: [
      {
        title: "Diploma",
        desc: "Interior Design",
        link: "#",
        image: "/images/interior-9.jpg",
      },
      {
        title: "Diploma",
        desc: "Fashion Design",
        link: "/Programs/Fashion/Diploma",
        image: "/images/fashion_design-3.jpg",
      },
      {
        title: "Diploma",
        desc: "Textile Design",
        link: "/Programs/Textile/Diploma",
        image: "/images/textile-2.jpg",
      },
    ],
    tile_title: "Diploma programe",
    c_title: "Eligibility Criteria & Duration ",
    c_content: [
      `Applicants must have completed 10+2 (or equivalent) from a recognized board, preferably with an interest in design, art, architecture, or creative studies. No prior design background is required; a basic aptitude for creativity and spatial understanding is sufficient.`,
      "Duration: 1 and 2 Years.",
    ],
  });
  const [table] = useState<TableContent>({
    registrationFee: 6500,
    table_title: "Diploma in Interior Design",
    course_duration: "1 and 2 years (2 / 4 sem)",
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

export default Diploma;

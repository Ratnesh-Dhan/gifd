"use client";
import FashionComponent from "@/components/FashionComponent/page";
import { FashionComponentProps, TableContent } from "@/types";
import React, { useState } from "react";

const Diploma = () => {
  const [properties] = useState<FashionComponentProps>({
    top_image: "/images/banners/diploma-in-fashion-banner.jpg",
    b_title: "Diploma in Fashion Design",
    b_para: `The Diploma in Fashion Design is a focused, industry-oriented program that builds a strong foundation in design development and practical fashion skills. It guides students through the complete creative journey—from concept ideation to finished garments—ensuring they understand how ideas are transformed into wearable designs.

The course blends the technical and scientific aspects of apparel studies with the artistic side of fashion, including aesthetics, color theory, and design principles. Students gain hands-on experience in garment construction, pattern making, textile studies, fashion illustration, and basic digital design tools, allowing them to execute their ideas with clarity and confidence.

Alongside design skills, the program introduces students to market awareness and consumer preferences, helping them create fashion that is both creative and commercially relevant. Whether designing everyday prêt-à-porter wear or exploring higher-end fashion concepts, students learn to balance creativity with practicality.

Overall, the diploma prepares learners to enter the fashion industry with real skills, professional discipline, and the mindset of working designers—not amateurs experimenting without direction.
`,

    offer_para: [
      "Study of fashion trends and fashion history",
      "Indian regional crafts and textile specialities",
      "Garment drafting, draping, and construction techniques",
      "Fashion forecasting and the design development process",
      "Study of national and international fashion brands",
      "Technical and aesthetic aspects of fabric and textile studies",
      "Computer-aided fashion designing (CAD)",
      "Fundamentals of fashion merchandising",
      "National and international fashion marketing",
      "Creative innovation through advanced draping techniques",
    ],

    career_para: [
      "Fashion Designer / Assistant Designer",
      "Fashion Stylist",
      "Fashion Entrepreneur",
      "Fashion Consultant",
      "Costume Designer",
      "Designer in export houses and apparel brands",
      "Fashion Illustrator",
      "Fashion Coordinator",
    ],
    tiles: [
      {
        title: "Diploma",
        desc: "Fashion Design",
        link: "#",
        image: "/images/fashion_design-1.jpg",
      },
      {
        title: "Diploma",
        desc: "Interior Design",
        link: "/Programs/Interior/Diploma",
        image: "/images/interior-8.jpg",
      },
      {
        title: "Bachelor's",
        desc: "Textile Design",
        link: "/Programs/Textile/Diploma",
        image: "/images/textile.jpg",
      },
    ],
    tile_title: "Diploma programmes",
    c_title: "Eligibility Criteria & Duration ",
    c_content: [
      `
Applicants must have completed 10+2 (or equivalent) from a recognized board, preferably with an interest in design, art, architecture, or creative studies. No prior design background is required, a basic aptitude for creativity and spatial understanding is sufficient.
`,
      "Duration: 1 / 2 Years.",
    ],
  });
  const [table] = useState<TableContent>({
    registrationFee: 6500,
    table_title: "Diploma in Fashion Design",
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

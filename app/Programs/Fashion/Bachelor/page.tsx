"use client";
import FashionComponent from "@/components/FashionComponent/page";
import { FashionComponentProps, TableContent } from "@/types";
import React, { useState } from "react";

const Bachelor = () => {
  const [properties] = useState<FashionComponentProps>({
    top_image: "/about/banner.png",
    b_title: "Bachelor in Fashion Design",
    b_para: `The Fashion Design program provides an extensive and well-structured foundation in design development skills, ensuring that students understand every stage of the creative process from concept to creation. This course uniquely combines the scientific aspects of apparel studies with the expressive elements of art and aesthetics, giving learners a holistic perspective of the fashion industry.

It trains students to translate abstract ideas into tangible designs with precision, creativity, and purpose. Throughout the program, learners gain exposure to garment construction, textile knowledge, illustration, trend research, and digital design tools, so they can professionally execute their concepts in a competitive industry environment.

The curriculum also emphasizes understanding consumer behavior and market demands. Whether the goal is to create prêt-à-porter collections for everyday wear or venture into the exclusive world of haute couture, students are guided to develop a strong sense of style, commercial awareness, and adaptability to industry trends.

In short, it prepares students to think, design, and produce like actual fashion professionals instead of hobbyists playing with fabric.`,
    offer_para: [
      "Study of fashion trends & history",
      "Regional crafts and specialities of India",
      "Garment drafting, draping & construction",
      "Fashion forecasting & Design process",
      "Study of National and International Brands",
      "Technical and aesthetic aspect of fabric studies",
      "Computer aided designing",
      "Merchandising in Fashion",
      "National & International Marketing",
      "Innovation with Draping",
    ],
    career_para: [
      "Designer /Assistant designer",
      "Fashion stylist",
      "Fashion Entrepreneur",
      "Fashion consultant",
      "Costume designer",
      "Designer in export houses.",
      "Fashion illustrator",
      "Fashion coordinator",
    ],
    tiles: [
      {
        title: "Bachelor's",
        desc: "Fashion",
        link: "/Programs/Overview/Bachelor",
        image: "/images/fashion_design-1.jpg",
      },
      {
        title: "Bachelor's",
        desc: "Interior Design",
        link: "/Programs/Interior/Bachelor",
        image: "/images/interior-8.jpg",
      },
      {
        title: "Bachelor's",
        desc: "Textile",
        link: "/Programs/Textile/Bachelor",
        image: "/images/textile.jpg",
      },
    ],
    tile_title: "Bachelor's programe",
    c_title: "Eligibility Criteria & Duration ",
    c_content: [
      `The Fashion Design program is open to individuals who have successfully completed their higher secondary education (10+2) or an equivalent qualification from a recognized board. Applicants should possess a basic interest in art, fashion, trends, or creative expression. Prior design experience isn’t mandatory, but curiosity, visual imagination, and willingness to learn are strongly expected.

The duration of the program typically spans 3 to 4 years, depending on the institution and academic structure. This time includes classroom instruction, practical sessions, workshops, studio work, internships, and project-based assessments. The final year often includes a major design project or portfolio submission, preparing students for professional entry into the fashion industry.`,
    ],
  });
  const [table] = useState<TableContent>({
    registrationFee: 8500,
    table_title: "Bachelor in Fashion Design",
    course_duration: "3 years (6 sem)",
    feeData: [
      {
        semester: 1,
        semesterFee: 34000,
        year: 1,
        yearlyFee: 68000,
      },
      {
        semester: 2,
        semesterFee: 34000,
        year: 1,
        yearlyFee: null,
      },
      {
        semester: 3,
        semesterFee: 34000,
        year: 2,
        yearlyFee: 68000,
      },
      {
        semester: 4,
        semesterFee: 34000,
        year: 2,
        yearlyFee: null,
      },
      {
        semester: 5,
        semesterFee: 34000,
        year: 3,
        yearlyFee: 68000,
      },
      {
        semester: 6,
        semesterFee: 34000,
        year: 3,
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

"use client";
import FashionComponent from "@/components/FashionComponent/page";
import { FashionComponentProps, TableContent } from "@/types";
import React, { useState } from "react";

const ProfessionalCertificate = () => {
  const [properties] = useState<FashionComponentProps>({
    top_image: "/images/banners/certification-fashion.jpg",
    b_title: "Professional Certification",
    b_para: `The Fashion Design program provides an extensive and well-structured foundation in design development skills, ensuring that students understand every stage of the creative process from concept to creation. This course uniquely combines the scientific aspects of apparel studies with the expressive elements of art and aesthetics, giving learners a holistic perspective of the fashion industry.
        
        It trains students to translate abstract ideas into tangible designs with precision, creativity, and purpose. Throughout the program, learners gain exposure to garment construction, textile knowledge, illustration, trend research, and digital design tools, so they can professionally execute their concepts in a competitive industry environment.
        
        The curriculum also emphasizes understanding consumer behavior and market demands. Whether the goal is to create prêt-à-porter collections for everyday wear or venture into the exclusive world of haute couture, students are guided to develop a strong sense of style, commercial awareness, and adaptability to industry trends.
        
        In short, it prepares students to think, design, and produce like actual fashion professionals instead of hobbyists playing with fabric.`,

    offer_para: [
      "Fundamentals of boutique management and small fashion business operations",
      "Blouse designing, cutting, and stitching techniques",
      "Tailoring skills for women’s garments with proper fitting and finishing",
      "Understanding fabrics, measurements, and pattern basics",
      "Practical garment construction using industry sewing techniques",
      "Basics of fashion trends relevant to boutique-level collections",
      "Customer handling, order management, and client communication",
      "Costing, pricing, and basic merchandising for boutique setups",
      "Introduction to marketing and promotion for fashion boutiques",
      "Hands-on practice through real garment making and alterations",
    ],

    career_para: [
      "Boutique Owner or Boutique Manager",
      "Blouse Making and Tailoring Specialist",
      "Women’s Wear Tailor",
      "Fashion Boutique Entrepreneur",
      "Freelance Tailor or Garment Maker",
      "Production Assistant in small apparel units",
      "Costume or Blouse Designer for local brands",
      "Fashion Support Professional in boutique setups",
    ],
    tiles: [
      {
        title: "Certification in",
        desc: "Boutique Management",
        link: "#",
        image: "/images/boutique-1.jpg",
      },
      {
        title: "Certification in",
        desc: "Tailoring",
        link: "#",
        image: "/images/tailoring-2.jpg",
      },
      {
        title: "Certification in",
        desc: "Blouse Making",
        link: "#",
        image: "/images/pattern-making-lab-1.jpg",
      },
    ],
    tile_title: "Professional Certificate programmes",
    c_title: "Eligibility Criteria & Duration ",
    c_content: [
      `Candidates must have completed 8th or 10th grade from a recognized board.`,
      "Duration: 3 / 6 months.",
    ],
  });
  const [table] = useState<TableContent>({
    registrationFee: 1000,
    table_title: "Professional Certificate in Fashion Design",
    course_duration: "3 & 6 months",
    feeData: [
      {
        semester: 1,
        semesterFee: 5000,
        year: 0,
        yearlyFee: null,
      },
      {
        semester: 2,
        semesterFee: 5000,
        year: 0,
        yearlyFee: null,
      },
      {
        semester: 3,
        semesterFee: 5000,
        year: 0,
        yearlyFee: null,
      },
      {
        semester: 4,
        semesterFee: 5000,
        year: 0,
        yearlyFee: null,
      },
      {
        semester: 5,
        semesterFee: 5000,
        year: 0,
        yearlyFee: null,
      },
      {
        semester: 6,
        semesterFee: 5000,
        year: 0,
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

export default ProfessionalCertificate;

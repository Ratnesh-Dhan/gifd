"use client";
import FashionComponent from "@/components/FashionComponent/page";
import { FashionComponentProps, TableContent } from "@/types";
import React, { useState } from "react";

const Professional = () => {
  const [properties] = useState<FashionComponentProps>({
    top_image: "/about/banner.jpg",
    b_title: "Bachelor in Interior Design",
    b_para: `A Bachelor in Interior Design is crafted for individuals who think differently—those who notice details, question space, and imagine better possibilities. This program blends creativity with technical precision, transforming students into confident design thinkers capable of shaping meaningful and inspiring environments. Through immersive studio work, material exploration, space planning, and hands-on design exercises, learners master the art of balancing aesthetics, comfort, and functionality.

Students gain exposure to residential, commercial, retail, and hospitality interiors while learning advanced digital tools such as CAD, 3D visualization, and rendering software. With industry-driven projects, workshops, and real-world experience, the program nurtures originality, innovation, and professional readiness. By graduation, students develop a strong design identity and a polished portfolio that reflects their vision, creativity, and mastery of spatial design.`,
    offer_para: [
      "A deeper understanding of global fashion systems, luxury markets, and evolving industry demands.",
      "Advanced design training focused on innovation, sustainability, and high-level creative direction.",
      "Hands-on exposure to advanced garment construction, experimental draping, and material exploration.",
      "Access to industry tools including CAD, 3D design, virtual sampling, and digital pattern-making.",
      "Mentorship from industry experts, designers, and visiting faculty from leading fashion houses.",
      "Opportunities to work on live industry projects, internships, and research-based collaborations.",
      "Development of a professional, industry-ready portfolio showcasing advanced creative and technical skill.",
      "Preparation for leadership roles such as fashion designer, creative director, brand strategist, merchandiser, stylist, researcher, or educator.",
    ],
    career_para: [
      "Senior Fashion Designer / Lead Designer.",
      "Creative Director or Design Head.",
      "Fashion Brand Manager or Luxury Brand Strategist.",
      "Fashion Researcher and Trend Analyst.",
      "Fashion Entrepreneur or Founder of a design label.",
      "Costume Director for film, TV, and performing arts.",
      "Senior Fashion Consultant or Image Advisor.",
      "Fashion Educator, Lecturer, or Academic Researcher",
      "Sustainability Expert in textiles and ethical fashion.",
      "Innovation Lead in smart textiles, wearable tech, and material development",
    ],
    tiles: [
      {
        title: "bachelor",
        desc: "testing the texts",
        link: "/Overview/Bachelor",
        image: "/Jhantu_images/woman-with-tablet-phone.jpg",
      },
      {
        title: "master",
        desc: "testing the texts",
        link: "/Overview/Master",
        image: "/Jhantu_images/woman-with-tablet-phone.jpg",
      },
      {
        title: "master",
        desc: "testing the texts",
        link: "/Overview/Master",
        image: "/Jhantu_images/woman-with-tablet-phone.jpg",
      },
    ],
    tile_title: "Bachelor's programe",
    c_title: "Eligibility Criteria & Duration ",
    c_content: [
      `Applicants must have a bachelor’s degree in Fashion Design or a related 
    discipline such as Textile Design, Apparel Technology, 
    Fine Arts OR B.A/B.Sc in any discipline from a recognized institution.`,
      "Duration: 2 Years.",
    ],
  });
  const [table] = useState<TableContent>({
    registrationFee: 8500,
    table_title: "Bachelor in Fashion Design",
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

export default Professional;

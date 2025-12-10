"use client";
import FashionComponent from "@/components/FashionComponent/page";
import { FashionComponentProps, TableContent } from "@/types";
import React, { useState } from "react";

const Master = () => {
  const [properties] = useState<FashionComponentProps>({
    top_image: "/about/banner.png",
    b_title: "Master in Fashion Design",
    b_para: `The Fashion Design program provides an extensive and well-structured foundation in design development skills, ensuring that students understand every stage of the creative process from concept to creation. This course uniquely combines the scientific aspects of apparel studies with the expressive elements of art and aesthetics, giving learners a holistic perspective of the fashion industry.
    
    It trains students to translate abstract ideas into tangible designs with precision, creativity, and purpose. Throughout the program, learners gain exposure to garment construction, textile knowledge, illustration, trend research, and digital design tools, so they can professionally execute their concepts in a competitive industry environment.
    
    The curriculum also emphasizes understanding consumer behavior and market demands. Whether the goal is to create prêt-à-porter collections for everyday wear or venture into the exclusive world of haute couture, students are guided to develop a strong sense of style, commercial awareness, and adaptability to industry trends.
    
    In short, it prepares students to think, design, and produce like actual fashion professionals instead of hobbyists playing with fabric.`,
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
    tile_title: "Master's programe",
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
    table_title: "Master in Fashion Design",
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

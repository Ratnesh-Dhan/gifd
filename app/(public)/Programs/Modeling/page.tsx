"use client";
import FashionComponent from "@/components/FashionComponent/page";
import { FashionComponentProps, TableContent } from "@/types";
import React, { useState } from "react";

const Modeling = () => {
  const [properties] = useState<FashionComponentProps>({
    top_image: "/images/modeling_cover.jpg",
    b_title: "Professional Certification in Modeling",
    b_para: `Modeling is a dynamic and influential profession that brings fashion, creativity, and visual storytelling to life. From runways to magazine covers and digital campaigns, models play a central role in shaping trends, representing brands, and communicating style with confidence and precision. It’s a field that demands presence, versatility, discipline, and the ability to express a concept without saying a word.

A comprehensive modeling program equips aspiring models with essential skills such as posture, runway techniques, facial expressions, posing, and camera awareness. Students also receive training in grooming, styling, body language, and maintaining a professional portfolio—key elements that define a strong industry-ready profile. With hands-on sessions, photoshoots, and guided practice, learners build the confidence to handle diverse creative directions and high-pressure environments.

In addition to technique, the program focuses on understanding industry expectations—ranging from fashion and editorial modeling to commercial, advertising, and digital influencer roles. This prepares individuals to adapt to multiple segments of the fast-growing fashion ecosystem.

Ultimately, the aim is to transform raw talent into polished, confident professionals who can captivate audiences, represent designers, and stand out in a competitive global industry.`,
    offer_para: [
      "Training in runway walk, posture, posing, and movement",
      "Grooming, styling, and personal presentation sessions",
      "Camera-facing techniques for photoshoots and video shoots",
      "Portfolio development with professional guidance",
      "Industry etiquette and confidence-building workshops",
      "Exposure to fashion, editorial, and commercial modeling styles",
      "Practice sessions, mock shoots, and constructive feedback",
    ],
    career_para: [
      "Fashion / Runway Model",
      "Editorial / Magazine Model",
      "Commercial / Advertising Model",
      "E-commerce Model",
      "Print Media Model",
      "Fitness Model",
      "Catalog Model",
      "TVC / Brand Campaign Model",
      "Social Media / Influencer Model",
      "Event & Promotional Model",
    ],
    tiles: [
      {
        title: "bachelor",
        desc: "testing the texts",
        link: "/Overview/Bachelor",
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
        link: "/Overview/Master",
        image: "/extra_images/woman-with-tablet-phone.jpg",
      },
    ],
    tile_title: "Modeling certificatoin programe",
    c_title: "Eligibility Criteria & Duration ",
    c_content: [
      `Candidates must have completed 8th or 10th grade from a recognized board.`,
      "No prior modeling or fashion-related education is required.",
      "Duration: 3 months.",
    ],
  });
  const [table] = useState<TableContent>({
    registrationFee: 8500,
    table_title: "Master in Fashion Design",
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

export default Modeling;

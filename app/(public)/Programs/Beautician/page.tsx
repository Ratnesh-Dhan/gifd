"use client";
import FashionComponent from "@/components/FashionComponent/page";
import { FashionComponentProps, TableContent } from "@/types";
import React, { useState } from "react";

const Beautician = () => {
  const [properties] = useState<FashionComponentProps>({
    top_image: "/images/banners/8.jpg",
    b_title: "Professional Beautician Certification Course",
    b_para: `Professional beauty services are a skill-driven profession focused on enhancing appearance, confidence, and personal care through precise techniques and industry knowledge. Beauticians play a key role across salons, studios, fashion, wellness, and personal grooming sectors, delivering services that demand accuracy, hygiene, creativity, and consistency—not guesswork.

A comprehensive professional beautician certification course trains learners in core areas such as skincare, hair care, makeup application, nail services, spa therapies, and client consultation. The program emphasizes practical expertise, proper product usage, hygiene standards, and understanding different skin and hair types. Students receive hands-on training to ensure they can confidently perform services in real-world professional settings.

Beyond technical skills, the course covers industry standards, client management, service ethics, and salon professionalism. Learners are exposed to current beauty trends, tools, and techniques, preparing them to work across salons, freelance assignments, bridal services, wellness centers, and beauty brands.

The objective is simple: convert learners into certified, skilled beauticians who can deliver professional results, build client trust, and compete effectively in the fast-growing beauty and wellness industry.`,
    offer_para: [
      "Professional training in skincare, hair care, and makeup techniques",
      "Hands-on practice with industry-standard tools, products, and equipment",
      "Skin and hair analysis for personalized client treatments",
      "Hygiene, safety, and sanitation protocols as per industry standards",
      "Bridal, party, and occasion-based makeup training",
      "Salon etiquette, client consultation, and service professionalism",
      "Live practice sessions, demos, and expert feedback",
    ],
    career_para: [
      "Professional Beautician",
      "Salon Beauty Therapist",
      "Makeup Artist",
      "Bridal Makeup Specialist",
      "Skin Care Specialist",
      "Hair Stylist",
      "Nail Technician",
      "Spa Therapist",
      "Freelance Beautician",
      "Beauty Consultant / Trainer",
    ],
    tiles: [
      {
        title: "",
        desc: "Fundamentals of Makeup & Hair Trends",
        link: "/Overview/Bachelor",
        image: "/extra_images/woman-with-tablet-phone.jpg",
      },
      {
        title: "",
        desc: "Advance Pro Makeup & Hair Design",
        link: "/Overview/Master",
        image: "/extra_images/woman-with-tablet-phone.jpg",
      },
      {
        title: "",
        desc: "Specialization in Makeup & Hair Artistry",
        link: "/Overview/Master",
        image: "/extra_images/woman-with-tablet-phone.jpg",
      },
      {
        title: "",
        desc: "Diploma in Beauty and Hair Design",
        link: "/Overview/Master",
        image: "/extra_images/woman-with-tablet-phone.jpg",
      },
    ],
    tile_title: "Beautician certificatoin programe",
    c_title: "Eligibility Criteria & Duration ",
    c_content: [
      `Candidates must have completed 8th or 10th grade from a recognized board.`,
      "Duration: 3 / 4 / 5 / 6 months.",
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

export default Beautician;

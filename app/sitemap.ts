import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gifdinstitute.com";

  const routes = [
    "/",
    "/Contact",
    "/Facilities",
    "/jds",
    "/campus/Campus",

    // About
    "/about/AboutGIFD",
    "/about/Recognitions",
    "/about/Visions",
    "/about/Faculties",

    // Programs Overview
    "/Programs/Overview/Bachelor",
    "/Programs/Overview/Master",
    "/Programs/Overview/Diploma",
    "/Programs/Overview/Professional",

    // Fashion
    "/Programs/Fashion/Bachelor",
    "/Programs/Fashion/Master",
    "/Programs/Fashion/Diploma",
    "/Programs/Fashion/ProfessionalCertificate",

    // Interior
    "/Programs/Interior/Bachelor",
    "/Programs/Interior/Master",
    "/Programs/Interior/Diploma",

    // Modeling & Beautician
    "/Programs/Modeling",
    "/Programs/Beautician",

    // Admissions
    "/Admissions/HowToApply",
    "/Admissions/FeeStructure",
    "/Admissions/Hostels",
    "/Admissions/Faq",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    priority: route === "/" ? 1.0 : 0.8,
  }));
}

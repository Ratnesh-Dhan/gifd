import React from "react";
import Links from "../Links/page";
import Dropper from "../Dropper";
import Image from "next/image";
// import AboutGIFD from "@/app/about/AboutGIFD";

interface subLinks {
  title: string;
  links: string;
}
interface items {
  title: string;
  href: string;
  photo?: string;
  sublinks?: subLinks[];
}

const Navbar = () => {
  const aboutItems: items[] = [
    {
      title: "About GIFD",
      href: "/about/AboutGIFD",
      photo: "/about/main-about.jpg",
    },
    {
      title: "Recognitions",
      href: "/about/Recognitions",
      photo: "/about/recognition.jpg",
    },
    {
      title: "Vision & Missions",
      href: "/about/Visions",
      photo: "/about/vision-mission.jpg",
    },
    {
      title: "Faculties",
      href: "/about/Faculties",
      photo: "/about/faculty.jpg",
    },
  ];
  const programsItems: items[] = [
    {
      title: "Overview",
      href: "",
      photo: "/images/tailoring.jpg",
      sublinks: [
        {
          title: "Bachelor's programe",
          links: "/Programs/Overview/Bachelor",
        },
        {
          title: "Master's programe",
          links: "/Programs/Overview/Master",
        },
        {
          title: "Diploma programe",
          links: "/Programs/Overview/Diploma",
        },
        {
          title: "Professional certification programe",
          links: "/Programs/Overview/Professional",
        },
      ],
    },
    {
      title: "Fashion",
      href: "",
      photo: "/images/fashion_design-2.jpg",
      sublinks: [
        {
          title: "Bachelor's programe",
          links: "/Programs/Fashion/Bachelor",
        },
        {
          title: "Master's programe",
          links: "/Programs/Fashion/Master",
        },
        {
          title: "Diploma programe",
          links: "/Programs/Fashion/Diploma",
        },
        {
          title: "Professional certification courses",
          links: "/Programs/Fashion/ProfessionalCertificate",
        },
      ],
    },
    {
      title: "Interior",
      href: "",
      photo: "/images/interior-1.jpg",
      sublinks: [
        {
          title: "Bachelor's programe",
          links: "/Programs/Interior/Bachelor",
        },
        {
          title: "Master's programe",
          links: "/Programs/Interior/Master",
        },
        {
          title: "Diploma programe",
          links: "/Programs/Interior/Diploma",
        },
      ],
    },
    {
      title: "Modeling",
      href: "/Programs/Modeling",
      photo: "/images/modeling-1.jpg",
      sublinks: [
        {
          title: "Professional certification courses",
          links: "/Programs/Modeling",
        },
      ],
    },
  ];
  const admissionsItems: items[] = [
    {
      title: "How to Apply",
      href: "/Admissions/HowToApply",
      photo: "/images/how-to-apply.jpg",
    },
    {
      title: "Fee Structure",
      href: "/Admissions/FeeStructure",
      photo: "/images/Fees.jpg",
    },
    {
      title: "Hostels",
      href: "/Admissions/Hostels",
      photo: "/images/hostel.jpg",
    },
    {
      title: "FAQ",
      href: "/Admissions/Faq",
      photo: "/images/Faq.jpg",
    },
  ];
  return (
    <React.Fragment>
      <div className="bg-red-400 text-white flex">
        <div className=" w-[60vw] max-w-[1200px] flex justify-between pl-[25vw] pr-5 py-3">
          <span className="font-bold">Best Fashion institute in Jharkhand</span>
          <h3 className="flex items-center">
            <Image
              src="/extra_images/phone.png"
              alt="Phone"
              width={20}
              height={20}
            />
            <span className="font-bold ml-3">Phone</span> : +91-810 261 1868
          </h3>
        </div>
        <h3 className="pl-5 flex items-center">
          <Image
            src="/extra_images/email.png"
            alt="Mail"
            width={20}
            height={20}
          />
          <span className="font-bold ml-3">Email</span> : info@gifdintitute.com
        </h3>
      </div>
      <div className=" w-full z-10  flex justify-around  items-center h-22 bg-black text-white py-2">
        <div className="flex items-center">
          <Image
            src="/main-logo.png"
            alt="GIFD Logo"
            width={150}
            height={150}
            className=""
          />
          <h1 className="font-bold md:text-2xl text-xl bg-gradient-to-b from-[#FFD479] to-[#B8860B] text-transparent bg-clip-text">
            Glam Institute of
            <br /> Fashion Designing
          </h1>
        </div>
        <div className="flex md:gap-4 gap-2 h-full">
          <Links href="/" size="text-lg" title="Home" />
          <Dropper size="text-lg" title="About" items={aboutItems} />
          <Dropper size="text-lg" title="Programs" items={programsItems} />
          <Dropper size="text-lg" title="Admissions" items={admissionsItems} />
          <Links href="/campus/Campus" size="text-lg" title="Life@GIFD" />
          <Links href="/jds" size="text-lg" title="JDS" />
          <Links href="/Facilities" size="text-lg" title="Facilities" />
          <Links href="/Contact" size="text-lg" title="Contact" />
        </div>

        <div className="border text-black rounded-sm p-3 font-bold shadow-[3px_3px_10px_rgba(0,0,0,0.70)] bg-red-400 hover:bg-emerald-400">
          Registration
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;

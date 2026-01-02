import React from "react";
import Links from "../Links/page";
import Dropper from "../Dropper";
import Image from "next/image";
import MobileMenu from "../MobileMenu";
import { items } from "@/types";
// import { useDevice } from "@/app/provideres/Devicecontext";
// import AboutGIFD from "@/app/about/AboutGIFD";

const Navbar = () => {
  // const { isMobile } = useDevice();
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
      photo: "/images/overview-1.jpg",
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
    {
      title: "Beautician",
      href: "/Programs/Modeling",
      photo: "/images/beautician-1.jpg",
      sublinks: [
        {
          title: "Professional certification courses",
          links: "/Programs/Beautician",
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
      <div className="bg-amber-400  flex">
        <div className="md:w-[75vw]  flex justify-between pl-[10vw] md:pr-5 py-3 text-xs md:text-sm">
          <span className="text-sm hidden md:inline">
            Best Design institute in Jharkhand
          </span>
          <div className="flex items-center ">
            <Image
              src="/extra_images/phone.png"
              alt="Phone"
              width={20}
              height={20}
              className="mr-2"
            />
            <h3 className="flex hidden md:block">Phone : +91-810 261 1868</h3>
            <h3 className="flex flex-col md:hidden block">
              Phone :<br /> +91-810 261 1868
            </h3>
          </div>
        </div>
        <div className="pl-5 flex items-center">
          <Image
            src="/extra_images/email.png"
            alt="Mail"
            width={20}
            height={20}
            className="mr-2"
          />
          <h3 className="flex flex-col md:flex-row md:text-sm text-xs hidden md:block">
            Email : info@gifdinstitute.com
          </h3>
          <h3 className="flex flex-col md:flex-row md:text-sm text-xs block md:hidden">
            Email :<br /> info@gifdinstitute.com
          </h3>
        </div>
      </div>
      <div className="w-full z-10  flex justify-around  items-center h-20 md:h-22 bg-black text-white py-2">
        <div className="flex items-center">
          <Image
            src="/main-logo.png"
            alt="GIFD Logo"
            width={150}
            height={150}
            className="w-24 h-20 md:w-[150px] md:h-[120px]"
          />
          <h1 className="font-bold md:text-2xl text-lg bg-linear-to-b from-[#FFD479] to-[#B8860B] text-transparent bg-clip-text">
            Glam Institute of
            <br /> Fashion Designing
          </h1>
        </div>
        <div className="md:flex md:gap-4 gap-2 h-full hidden">
          <Links href="/" size="text-lg" title="Home" />
          <Dropper size="text-lg" title="About" items={aboutItems} />
          <Dropper size="text-lg" title="Programs" items={programsItems} />
          <Dropper size="text-lg" title="Admissions" items={admissionsItems} />
          <Links href="/campus/Campus" size="text-lg" title="Life@GIFD" />
          <Links href="/jds" size="text-lg" title="JDS" />
          <Links href="/Facilities" size="text-lg" title="Facilities" />
          <Links href="/Contact" size="text-lg" title="Contact" />
        </div>
        <div id="Mobile view" className="md:hidden">
          <MobileMenu
            about={aboutItems}
            programs={programsItems}
            admissions={admissionsItems}
            life={"/campus/Campus"}
            jds={"/jds"}
            facilities={"/Facilities"}
            contact={"/Contact"}
          />
        </div>
        <div className="hidden md:inline border text-black rounded-sm p-3 font-bold shadow-[3px_3px_10px_rgba(0,0,0,0.70)] bg-amber-400 hover:bg-emerald-400">
          Registration
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;

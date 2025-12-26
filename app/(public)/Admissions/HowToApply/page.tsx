import Link from "next/link";
import React from "react";

const HowToApply = () => {
  return (
    <div>
      <div className="w-[99vw] h-[70vh] bg-[url('/images/additional/21.jpg')] bg-cover bg-center left-1/2 -translate-x-1/2 relative"></div>
      <h4 className="m-4 md:m-10 whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-black text-left">
        We have single step application process for all Bachelor&apos;s and
        Master&apos;s degree programmes
      </h4>
      <h4 className="mt-4 mx-4 md:mx-10 md:mt-10 whitespace-pre-line leading-relaxed tracking-wide md:text-lg text-xs font-bold text-left">
        Step 1
      </h4>
      <p className="mx-4 md:mx-10 whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-gray-700 text-left">
        Applicant seeking admission to Glam Institute of Fashion Designing
        academy are required to fill out an{" "}
        <Link
          href={"/"}
          className="text-blue-600 hover:cursor hover:text-blue-400"
        >
          online form
        </Link>{" "}
        or offline application form that can be collected at our campus.
      </p>
      <div className="mx-4 md:mx-10 mt-4 md:mt-10 ">
        <h4 className="font-bold whitespace-pre-line leading-relaxed tracking-wide md:text-lg text-xs font-bold text-left">
          Application fee & charges:
        </h4>
        <ul className="list-disc mx-4 whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-gray-700 text-left">
          <li>Bachelors and Masters degree programme: Rs. 500/- </li>
          <li>Professional Certificate Courses: Rs. 250/-</li>
        </ul>
      </div>
      <div className="py-4 md:py-10 my-4 md:my-10 w-[80vw] md:w-[20vw] flex flex-col items-center mx-auto border rounded-xl whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-gray-700 text-left">
        <h4 className="pb-2 md:pb-4 mb-2 md:mb-4 border-b">
          Take the <span className="font-bold">next step</span>
        </h4>
        <Link
          href={"/"}
          className="bg-amber-500 text-white rounded px-4 md:px-8"
        >
          Apply Now
        </Link>
        <Link
          href={"/Contact"}
          className="bg-amber-500 text-white rounded px-4 md:px-8 my-2 md:my-4"
        >
          Connect with us
        </Link>
        <p>or visit our campus</p>
      </div>
      <h4 className="mt-4 mx-4 md:mx-10 md:mt-10 whitespace-pre-line leading-relaxed tracking-wide md:text-lg text-xs font-bold text-left">
        Eligibility Criteria
      </h4>
    </div>
  );
};

export default HowToApply;

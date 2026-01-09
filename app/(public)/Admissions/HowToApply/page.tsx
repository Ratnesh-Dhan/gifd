import Link from "next/link";
import React from "react";

const HowToApply = () => {
  return (
    <div>
      <div className="w-[99vw] h-[35vh] md:h-[70vh] bg-[url('/images/banners/HowToApply-banner.jpg')] bg-cover bg-center left-1/2 -translate-x-1/2 relative">
        <h3 className="text-black absolute bottom-8 md:bottom-22 md:text-9xl text-4xl md:ml-[10vw] ml-4">
          <span className="font-bold">How to</span>{" "}
          <span className="[text-shadow:3px_3px_0px_#FFCA28] md:[text-shadow:5px_5px_0px_#FFCA28]">
            Apply
          </span>
        </h3>
      </div>
      <h4 className="m-4 md:m-10 whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-black text-left">
        We have single step application process for all Bachelor&apos;s and
        Master&apos;s degree programmes
      </h4>
      <h4 className="mt-4 mx-4 md:mx-10 md:mt-10 whitespace-pre-line leading-relaxed tracking-wide md:text-2xl text-xs font-bold text-left">
        Step 1
      </h4>
      <p className="mx-4 md:mx-10 whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-left">
        Applicant seeking admission to Glam Institute of Fashion Designing
        academy are required to fill out an{" "}
        <Link
          href="/Register"
          className="text-blue-600 hover:cursor hover:text-blue-400"
        >
          online form
        </Link>{" "}
        or offline application form that can be collected at our campus.
      </p>
      <div className="mx-4 md:mx-10 mt-4 md:mt-10 ">
        <h4 className="font-bold whitespace-pre-line leading-relaxed tracking-wide md:text-2xl text-xs font-bold text-left">
          Application fee & charges:
        </h4>
        <ul className="list-disc mx-4 whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-left">
          <li>Bachelors and Masters degree programme: Rs. 500/- </li>
          <li>Professional Certificate Courses: Rs. 250/-</li>
        </ul>
      </div>
      <div className="py-4 md:py-10 my-4 md:my-10 w-[80vw] md:w-[20vw] flex flex-col items-center mx-auto border rounded-xl whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-gray-700 text-left">
        <h4 className="pb-2 md:pb-4 mb-2 md:mb-4 border-b">
          Take the <span className="font-bold">next step</span>
        </h4>
        <Link
          href="/Register"
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
      <div className="mx-18 my-10 md:my-20 whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-left">
        <h4 className="mt-4 md:mt-10 whitespace-pre-line leading-relaxed tracking-wide md:text-2xl text-xs font-bold text-left">
          Eligibility Criteria
        </h4>
        <h4 className="font-bold md:mt-10 md:mb-6">
          Bachelor&apos;s programme
        </h4>
        <ul className="list-disc">
          <li>
            A 10 + 2 pass certificate in any stream. Applicants appearing for
            their final examinations may still apply and receive provisional
            admission if selected.
          </li>
        </ul>
        <h4 className="font-bold md:mt-10 md:mb-6">Master&apos;s programme</h4>
        <ul className="list-disc">
          <li>
            A Bachelor&apos;s degree/diploma from a recognized university in any
            stream. Applicants appearing for their final examinations may still
            apply and receive provisional admission if selected.
          </li>
        </ul>
        <h4 className="font-bold md:mt-10 md:mb-6">Diploma programme</h4>
        <ul className="list-disc">
          <li>
            A 10<sup>th</sup> or 12<sup>th</sup> pass certificate in any stream.
            Applicants appearing for their final examinations may still apply
            and receive provisional admission if selected.
          </li>
        </ul>
        <h4 className="font-bold md:mt-10 md:mb-6">Certification programme</h4>
        <ul className="list-disc">
          <li>
            A 8<sup>th</sup> pass certificate in any stream.
          </li>
        </ul>
      </div>
      <div className="text-center whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-center mb-10 md:mb-20">
        <h3 className="font-bold text-2xl md:text-4xl">
          Ready to level up and turn
          <br /> your passion into a successful career?
        </h3>
        <p className="my-5 md:my-8 mx-5 md:mx-30">
          Begin your journey as a designer at GIFD Jamshedpur — the leading
          design institute in Jharkhand, shaping the future of fashion and
          interior design. Students gain real-world exposure, hands-on learning,
          and the perfect environment to unlock their creative potential.
        </p>
        <Link
          href="/Register"
          className="font-bold rounded-xl p-5 bg-amber-400 hover:shadow-[inset_0px_0px_10px_rgb(0,0,0)] text-white"
        >
          Join GIFD Jamshedpur
        </Link>
      </div>
    </div>
  );
};

export default HowToApply;

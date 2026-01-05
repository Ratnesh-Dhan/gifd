"use client";
import FeeStructureTable from "@/components/Table_/page";
import { TableContent } from "@/types";
import React, { useState } from "react";

const FeeStructure = () => {
  const [BachelorOfFashion] = useState<TableContent>({
    registrationFee: 6500,
    table_title: "Bachelor in Fashion Design",
    course_duration: "3 years (6 sem)",
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
      {
        semester: 5,
        semesterFee: 33000,
        year: 3,
        yearlyFee: 66000,
      },
      {
        semester: 6,
        semesterFee: 33000,
        year: 3,
        yearlyFee: null,
      },
    ],
  });

  const [BachelorOfInterior] = useState<TableContent>({
    registrationFee: 6500,
    table_title: "Bachelor's in Interior Design",
    course_duration: "3 years (6 sem)",
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
      {
        semester: 5,
        semesterFee: 33000,
        year: 3,
        yearlyFee: 66000,
      },
      {
        semester: 6,
        semesterFee: 33000,
        year: 3,
        yearlyFee: null,
      },
    ],
  });
  const [MasterOfFashion] = useState<TableContent>({
    registrationFee: 6500,
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
  const [MasterOfInterior] = useState<TableContent>({
    registrationFee: 6500,
    table_title: "Masters in Interior Design",
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
  const [DiplomaOfFashion] = useState<TableContent>({
    registrationFee: 6500,
    table_title: "Diploma in Fashion Design",
    course_duration: "1 and 2 years (2 / 4 sem)",
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
  const [DiplomaOfInterior] = useState<TableContent>({
    registrationFee: 6500,
    table_title: "Diploma in Interior Design",
    course_duration: "1 and 2 years (2 / 4 sem)",
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
  const [ProfessionalFashion] = useState<TableContent>({
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
  const [ProfessionalModeling] = useState<TableContent>({
    registrationFee: 1000,
    table_title: "Certification in Modeling",
    course_duration: "3 months",
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
    ],
  });

  const [Beautician] = useState<TableContent>({
    registrationFee: 1000,
    table_title: "Certification in Beautician",
    course_duration: "3 / 4 / 5 / 6 months",
    feeData: [
      {
        semester: 1,
        semesterFee: 7000,
        year: 1,
        yearlyFee: null,
      },
      {
        semester: 2,
        semesterFee: 7000,
        year: 1,
        yearlyFee: null,
      },
      {
        semester: 3,
        semesterFee: 7000,
        year: 1,
        yearlyFee: null,
      },
      {
        semester: 4,
        semesterFee: 7000,
        year: 1,
        yearlyFee: null,
      },
      {
        semester: 5,
        semesterFee: 7000,
        year: 1,
        yearlyFee: null,
      },
      {
        semester: 6,
        semesterFee: 7000,
        year: 1,
        yearlyFee: null,
      },
    ],
  });

  return (
    <div>
      <div
        className="relative w-screen -translate-x-1/2 left-1/2 h-[70vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'url("/images/fees_banner-2.jpg")',
        }}
      ></div>
      <h3 className="text-4xl text-center md:my-10">
        <span className="font-bold">Fee</span> Structure
      </h3>
      <div className="mx-4">
        <div className="flex mb-16 md:gap-6 gap-2" id="first">
          <div className="flex-1">
            <h3 className="text-3xl text-center mb-8">
              <span className="font-bold">Bachelor&apos;s</span> in Fashion
              Design
            </h3>
            <FeeStructureTable {...BachelorOfFashion} />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl text-center mb-8">
              <span className="font-bold">Bachelor&apos;s</span> in Interior
              Design
            </h3>
            <FeeStructureTable {...BachelorOfInterior} />
          </div>
        </div>
        <div className="flex mb-16 gap-6" id="second">
          <div className="flex-1">
            <h3 className="text-3xl text-center mb-8">
              <span className="font-bold">Master&apos;s</span> in Fashion Design
            </h3>
            <FeeStructureTable {...MasterOfFashion} />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl text-center mb-8">
              <span className="font-bold">Master&apos;s</span> in Interior
              Design
            </h3>
            <FeeStructureTable {...MasterOfInterior} />
          </div>
        </div>
        <div className="flex mb-16 gap-6" id="second">
          <div className="flex-1">
            <h3 className="text-3xl text-center mb-8">
              <span className="font-bold">Diploma</span> in Fashion Design
            </h3>
            <FeeStructureTable {...DiplomaOfFashion} />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl text-center mb-8">
              <span className="font-bold">Diploma</span> in Interior Design
            </h3>
            <FeeStructureTable {...DiplomaOfInterior} />
          </div>
        </div>
        <div className="flex mb-16 gap-6" id="third">
          <div className="flex-1">
            <h3 className="text-3xl text-center mb-8">
              <span className="font-bold">
                Professional Certification&apos;s
              </span>{" "}
              in Fashion Design
            </h3>
            <FeeStructureTable {...ProfessionalFashion} />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl text-center mb-8">
              <span className="font-bold">
                Professional Certificatoin&apos;s
              </span>{" "}
              in Modeling
            </h3>
            <FeeStructureTable {...ProfessionalModeling} />
          </div>
        </div>
        <div className="flex mb-16 gap-6" id="third">
          <div className="flex-1">
            <h3 className="text-3xl text-center mb-8">
              <span className="font-bold">Certification</span> in Beautician
            </h3>
            <FeeStructureTable {...Beautician} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;

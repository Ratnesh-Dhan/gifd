import { TableContent } from "@/types";
import React from "react";

export default function FeeStructureTable(table_: TableContent) {
  // const registrationFee = 8500;
  // const table_title = "Bachelor of Fashion design";
  // const course_duration = "3 years (6 sem)";
  // const feeData = [
  //   { semester: 1, semesterFee: 34000, year: 1, yearlyFee: 68000 },
  //   { semester: 2, semesterFee: 34000, year: 1, yearlyFee: null },
  //   { semester: 3, semesterFee: 34000, year: 2, yearlyFee: 68000 },
  //   { semester: 4, semesterFee: 34000, year: 2, yearlyFee: null },
  //   { semester: 5, semesterFee: 34000, year: 3, yearlyFee: 68000 },
  //   { semester: 6, semesterFee: 34000, year: 3, yearlyFee: null },
  // ];

  const totalFee =
    table_.registrationFee +
    table_.feeData.reduce((sum, item) => sum + item.semesterFee, 0);

  return (
    // <div className="min-h-screen bg-gradient-to-br from-red-50 via-indigo-50 to-purple-50 p-4 md:p-8">
    <div className="max-w-4xl mx-auto ">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        {/* <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 md:p-8 text-center"> */}
        <div className="bg-black p-6 md:p-8 text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-white text-center">
            {table_.table_title}
          </h3>
          <p className="text-white font-bold md:text-xl">
            Duration: {table_.course_duration}
          </p>
        </div>
        {/* Registration Fee Card */}
        <div className="text-center md:py-5 py-3">
          <h3>
            <span className="text-2xl font-bold">
              Registration Fee - ₹
              {table_.registrationFee.toLocaleString("en-IN")}{" "}
            </span>
            <span className="text-sm font-bold">(one time)</span>
          </h3>
        </div>
        {/* Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-200">
                <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Semester
                </th>
                <th className="px-4 md:px-6 py-4 text-center text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Semester Fee
                </th>
                <th className="px-4 md:px-6 py-4 text-right text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Yearly Fee
                </th>
              </tr>
            </thead>
            <tbody>
              {table_.feeData.map((item, index) => (
                <tr
                  key={item.semester}
                  className={`border-b border-gray-200 hover:bg-amber-100 transition-colors ${
                    item.yearlyFee
                      ? "border-l-4 border-l-amber-400"
                      : "border-l-4 border-l-transparent"
                  }`}
                >
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap ">
                    <div className="flex items-center">
                      <span className="text-sm md:text-base font-medium text-gray-900">
                        Semester {item.semester}
                      </span>
                      <span className="ml-2 text-xs text-gray-500">
                        (Year {item.year})
                      </span>
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                    <span className="text-sm md:text-base font-semibold text-gray-900">
                      ₹{item.semesterFee.toLocaleString("en-IN")}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                    {item.yearlyFee ? (
                      <div className="inline-flex items-center bg-gradient-to-r from-slate-400 to-amber-100 px-3 md:px-4 py-2 rounded-lg">
                        <span className="text-sm md:text-base font-bold text-black">
                          ₹{item.yearlyFee.toLocaleString("en-IN")}
                        </span>
                      </div>
                    ) : (
                      <span className="text-gray-400 text-xs md:text-sm">
                        —
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              {/* <tr className="bg-gradient-to-r from-indigo-600 to-purple-600"> */}
              <tr className="bg-black">
                <td
                  colSpan={2}
                  className="px-4 md:px-6 py-4 md:py-6 text-left text-sm md:text-lg font-bold text-white uppercase"
                >
                  Total Course Fee
                </td>
                <td className="px-4 md:px-6 py-4 md:py-6 whitespace-nowrap">
                  <div className="flex flex-col">
                    <span className="text-lg md:text-2xl font-bold text-amber-400">
                      ₹{totalFee.toLocaleString("en-IN")}
                    </span>
                    {"  "}
                    <span className="text-white">
                      *including registration fee.
                    </span>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        {/* Footer Note */}
        <div className="bg-gray-50 px-4 md:px-8 py-4 md:py-6 border-t border-gray-200">
          <p className="text-xs md:text-sm text-gray-600 text-center">
            * Fees are subject to revision. Additional charges may apply for
            hostel, transportation, and other facilities.
          </p>
        </div>
      </div>
    </div>
  );
}

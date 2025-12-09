"use client";

import { motion } from "framer-motion";

const feeData = [
  { label: "Registration Fee", amount: "₹5,000", frequency: "One-time" },
  { label: "Admission Fee", amount: "₹10,000", frequency: "One-time" },
  { label: "Tuition Fee", amount: "₹90,000", frequency: "Per Year" },
  { label: "Examination Fee", amount: "₹3,000", frequency: "Per Semester" },
  { label: "Studio / Lab Fee", amount: "₹15,000", frequency: "Per Year" },
  {
    label: "Material & Workshop Charges",
    amount: "₹20,000",
    frequency: "Per Year",
  },
  {
    label: "Library & Digital Resource Fee",
    amount: "₹5,000",
    frequency: "Per Year",
  },
];

export default function Table_() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto mt-10 p-6 rounded-xl bg-white shadow-lg border border-gray-200"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 tracking-wide">
        Fee Structure
      </h2>

      <motion.table
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full border-collapse"
      >
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="p-4 text-left font-medium">Component</th>
            <th className="p-4 text-left font-medium">Amount</th>
            <th className="p-4 text-left font-medium">Frequency</th>
          </tr>
        </thead>
        <tbody>
          {feeData.map((row, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="p-4">{row.label}</td>
              <td className="p-4 font-semibold">{row.amount}</td>
              <td className="p-4 text-gray-600">{row.frequency}</td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>

      <div className="mt-6 text-right text-lg font-semibold text-gray-800">
        Total Estimated Annual Cost:{" "}
        <span className="text-indigo-600">₹1,33,000*</span>
      </div>

      <p className="mt-2 text-sm text-gray-500">
        *Excludes one-time admission and registration fees.
      </p>
    </motion.div>
  );
}

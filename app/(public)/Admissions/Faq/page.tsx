"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the admission process?",
      answer:
        "The admission process involves filling out an online application form, submitting required documents (academic transcripts, ID proof, photographs), appearing for an entrance test or interview if applicable, and paying the registration fee. Once accepted, you'll receive an admission confirmation and can proceed with the enrollment.",
    },
    {
      question: "What documents are required for admission?",
      answer:
        "You'll need to submit: 10th and 12th mark sheets, transfer certificate, migration certificate, character certificate, passport-size photographs, Aadhar card, and caste certificate (if applicable). All documents should be attested copies along with originals for verification.",
    },
    {
      question: "Is there a scholarship program available?",
      answer:
        "Yes, we offer merit-based scholarships ranging from 10% to 100% fee waiver based on academic performance. We also have scholarships for economically disadvantaged students, sports achievers, and students from minority communities. Contact the admission office for detailed eligibility criteria.",
    },
    {
      question: "What are the hostel facilities like?",
      answer:
        "Our hostels provide fully furnished rooms with Wi-Fi connectivity, 24/7 security, laundry services, and nutritious mess facilities. Both AC and non-AC accommodations are available. Common areas include study rooms, recreation rooms, and gym facilities. Separate hostels are maintained for boys and girls.",
    },
    {
      question: "Can I pay the fees in installments?",
      answer:
        "Yes, semester fees can be paid in two installments. The first installment (60%) must be paid at the beginning of the semester, and the second installment (40%) within two months. Registration fee must be paid in full at the time of admission. Additional convenience charges may apply.",
    },
    {
      question: "What is the refund policy?",
      answer:
        "If you withdraw before the semester begins, 80% of the fee is refundable (registration fee is non-refundable). Within the first month: 50% refund. After one month: no refund. Refunds are processed within 30-45 working days from the withdrawal date.",
    },
    {
      question: "Are there placement opportunities?",
      answer:
        "Yes, we have a dedicated placement cell that collaborates with over 200+ companies. Our placement rate is consistently above 85%. We provide pre-placement training, soft skills development, mock interviews, and resume building workshops. Top recruiters include major tech companies, banks, and multinational corporations.",
    },
    {
      question: "What is the attendance requirement?",
      answer:
        "Students must maintain a minimum of 75% attendance in each subject to be eligible for semester examinations. Medical leaves are granted with proper documentation. Attendance is tracked daily and students can check their attendance status through the student portal.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* <h3 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 mb-4"> */}
          <h3 className="text-5xl md:text-7xl font-bold mb-4">FAQ</h3>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-amber-500"></div>
            <p className="text-gray-600 font-bold text-base md:text-lg uppercase tracking-wider">
              Frequently Asked Questions
            </p>
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Find answers to common questions about admissions, fees, facilities,
            and more
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-amber-100 hover:border-amber-300 transition-all duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 text-left hover:bg-amber-50 transition-colors duration-200"
              >
                <span className="text-base md:text-lg font-bold text-gray-900 flex-1">
                  {faq.question}
                </span>
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                    openIndex === index
                      ? "rotate-45 scale-110"
                      : "rotate-0 scale-100"
                  }`}
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                  <div className="border-t-2 border-amber-200 pt-4">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-black via-gray-900 to-black rounded-2xl shadow-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            Our team is here to help. Reach out to us for personalized
            assistance.
          </p>
          <Link
            href="/Contact"
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

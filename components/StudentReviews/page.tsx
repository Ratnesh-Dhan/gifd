"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function StudentReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Emma Rodriguez",
      program: "Fashion Design Graduate",
      review:
        "This school transformed my creative vision into reality. The instructors are industry professionals who genuinely care about your growth. The hands-on experience and networking opportunities opened doors I never imagined.",
      image: "/images/student-2.jpg",
    },
    {
      id: 2,
      name: "Marcus Chen",
      program: "Fashion Merchandising Graduate",
      review:
        "The curriculum perfectly balances creativity with business acumen. I learned everything from sketching concepts to understanding market trends. Now I'm working at a top fashion house in Milan.",
      image: "/images/student-1.jpg",
    },
    {
      id: 3,
      name: "Sophia Andersson",
      program: "Textile Design Graduate",
      review:
        "The facilities are world-class and the mentorship is unparalleled. I discovered my passion for sustainable fashion here and launched my own eco-friendly clothing line before graduation.",
      image: "/images/student-2.jpg",
    },
    {
      id: 4,
      name: "James Mitchell",
      program: "Pattern Making Graduate",
      review:
        "The technical skills I gained here are exceptional. From draping to CAD software, I mastered every aspect of garment construction. The portfolio I built helped me land my dream job immediately after graduation.",
      image: "/images/student-2.jpg",
    },
    {
      id: 5,
      name: "Aisha Patel",
      program: "Fashion Styling Graduate",
      review:
        "This program exceeded all my expectations. The industry connections and real-world projects prepared me perfectly for the fast-paced fashion world. I'm now styling for major editorial shoots.",
      image: "/images/student-1.jpg",
    },
    {
      id: 6,
      name: "Oliver Hansen",
      program: "Fashion Business Graduate",
      review:
        "The business side of fashion can be challenging, but this school made it accessible and exciting. I learned about brand management, marketing, and entrepreneurship. Now I run my own fashion consultancy.",
      image: "/images/student-2.jpg",
    },
  ];

  const currentReviews = reviews.slice(currentIndex, currentIndex + 3);
  const totalPages = Math.ceil(reviews.length / 3);
  const currentPage = Math.floor(currentIndex / 3) + 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(reviews.length - 3, prev + 3));
  };

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4 tracking-tight">
            STUDENT TESTIMONIALS
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from our graduates who are now shaping the future of fashion
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {currentReviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 p-8 text-center transition-all duration-300 hover:shadow-xl"
            >
              {/* Student Photo */}
              <div className="mb-6 flex justify-center">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>

              {/* Student Info */}
              <h3 className="font-bold text-xl text-black mb-2">
                {review.name}
              </h3>
              <p className="text-sm text-gray-600 mb-6">{review.program}</p>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed text-sm">
                {review.review}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="bg-black text-white p-3 hover:bg-gray-800 transition-colors duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <span className="text-black font-bold text-lg">
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentIndex >= reviews.length - 3}
            className="bg-black text-white p-3 hover:bg-gray-800 transition-colors duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

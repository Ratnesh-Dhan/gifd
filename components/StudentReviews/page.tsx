"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function StudentReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Nafisa Ahmed",
      program: "Fashion Designing",
      review:
        "GIFD provided the perfect blend of creativity and practical knowledge. The faculty were supportive, the learning environment was motivating, and the overall experience helped me grow confidently as a fashion professional.",
      image: "/images/set1/student-2.jpg",
    },
    {
      id: 2,
      name: "Padmawati Sidu",
      program: "Fashion Designing",
      review:
        "Glam Institute of Fashion Designing & faculties have put in all the efforts to groom us and make us fashionable professionals. It was a wonderful experience at GIFD",
      image: "/images/set1/student-12.jpg",
    },
    {
      id: 3,
      name: "Priyanka Gupta",
      program: "Interior Designing",
      review:
        "Studying at Glam Institute of Fashion Designing has been one of the best decisions I have made. It has been unforgettable. I am growing up as an individual .Enjoyed the caring and friendly environment, great facilities, and the variety of services offered. The standards are very high, which always makes me feel well-supported.",
      image: "/images/set1/student-33.jpg",
    },
    {
      id: 4,
      name: "Sumaiya Sayed",
      program: "Boutique Management",
      review:
        " I had a great time doing this course and everyone involved in glam fashion institute has made it a great experience. I look forward to doing more  with this institute in  future and have been recommending it to everyone I know. Thank you for all the assistance, guidance and providing a such platform to explore ourself  . it has been delightful and very gratifying.Loved every minue studying and gained great knowledge. Looking forward to life as a life coach and being part of changing lives for the better.",
      image: "/images/set1/student-4.jpg",
    },
    {
      id: 5,
      name: "Dipti Dubey",
      program: "Fashion Designing",
      review:
        "I had great experience in GIFD. I really admire our trainer and her teaching style, the way she teaches is excellent or beyond that. Loved the helpful faculty, the wonderful atmosphere, the effort they put in and every day of learning here!!",
      image: "/images/set1/student-52.jpg",
    },
    {
      id: 6,
      name: "Neha Kumari",
      program: "Fashion Designing Graduate",
      review:
        "The business side of fashion can be challenging, but this school made it accessible and exciting. I learned about brand management, marketing, and entrepreneurship. Now I run my own fashion consultancy.",
      image: "/images/set1/student-66.jpg",
    },
    {
      id: 7,
      name: "Sejal Patel",
      program: "Fashion Designing",
      review:
        " The course was well organized. Loved every minute of studying here. Special thanks to our trainer, as she was very helpful and her way of teaching was very easy to understand. Every single day, we gained great knowledge. The friendly atmosphere here was also quite enjoyable and not at all boring. I would recommend others to join GIFD and be a part of a wonderful organization.",
      image: "/images/set1/student-7.jpg",
    },
  ];

  const currentReviews = reviews.slice(currentIndex, currentIndex + 3);
  const totalPages = Math.ceil(reviews.length / 3);
  const currentPage = Math.floor(currentIndex / 3) + 1;
  // Calculate the maximum valid starting index (largest multiple of 3 <= reviews.length)
  const maxIndex = Math.floor((reviews.length - 1) / 3) * 3;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 3;
      return Math.min(maxIndex, nextIndex);
    });
  };

  return (
    <div className="min-h-screen py-20 px-6  bg-[linear-gradient(to_bottom,#f59e0b_40%,#ffffff_40%)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 ">
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
            disabled={currentIndex >= maxIndex}
            // disabled={currentIndex >= reviews.length - 3}
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

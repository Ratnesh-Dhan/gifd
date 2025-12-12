"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      course: "Computer Science",
      year: "Class of 2024",
      review:
        "The learning environment here is exceptional. The professors are knowledgeable and always willing to help. I've grown both academically and personally during my time here.",
      rating: 5,
      color: "from-gray-900 via-black to-gray-800",
      image: "/images/student-2.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      course: "Business Administration",
      year: "Class of 2023",
      review:
        "Outstanding program with real-world applications. The networking opportunities and career support have been invaluable to my professional development.",
      rating: 5,
      color: "from-black via-gray-900 to-black",
      image: "/images/student-2.jpg",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      course: "Engineering",
      year: "Class of 2024",
      review:
        "The hands-on approach to learning and state-of-the-art facilities have prepared me well for my career. The collaborative culture among students is truly inspiring.",
      rating: 5,
      color: "from-gray-800 via-black to-gray-900",
      image: "/images/student-2.jpg",
    },
    {
      id: 4,
      name: "David Patel",
      course: "Data Science",
      year: "Class of 2023",
      review:
        "Challenging curriculum that pushes you to excel. The research opportunities and industry connections have opened many doors for me.",
      rating: 5,
      color: "from-gray-900 via-gray-800 to-black",
      image: "/images/student-2.jpg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView) {
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        scrollTimeoutRef.current = setTimeout(() => {
          setActiveIndex((prev) => (prev + 1) % reviews.length);
        }, 100);
      }
    };
    // const handleScroll = () => {
    //   const section = sectionRef.current;
    //   if (!section) return;

    //   const rect = section.getBoundingClientRect();
    //   const inView = rect.top < window.innerHeight && rect.bottom > 0;

    //   if (inView) {
    //     document.body.style.overflow = "hidden"; // LOCK SCROLL

    //     if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    //     scrollTimeoutRef.current = setTimeout(() => {
    //       setActiveIndex((prev) => (prev + 1) % reviews.length);
    //     }, 100);
    //   } else {
    //     document.body.style.overflow = "auto"; // UNLOCK SCROLL
    //   }
    // };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      //   document.body.style.overflow = "auto";
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [reviews.length]);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-black flex items-center justify-center py-20 px-4 relative overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-7xl font-bold text-white mb-6 tracking-tight relative">
              Student{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white animate-pulse">
                Testimonials
              </span>
              <div className="absolute -inset-4 bg-white opacity-5 blur-2xl -z-10"></div>
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>
          <p className="text-gray-400 mt-8 text-lg tracking-wide">
            Hear what our community has to say
          </p>
        </div>

        {/* Review Cards */}
        <div className="relative h-[500px] mb-16">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === activeIndex
                  ? "opacity-100 scale-100 z-20"
                  : index < activeIndex
                  ? "opacity-0 scale-90 -translate-x-12 z-0"
                  : "opacity-0 scale-90 translate-x-12 z-0"
              }`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              {/* Outer glow container */}
              <div className="relative h-full p-1 group">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${review.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}
                ></div>

                {/* Card border */}
                <div
                  className={`relative h-full bg-gradient-to-br ${review.color} p-[2px] rounded-3xl`}
                >
                  <div className="h-full bg-black rounded-3xl p-12 flex flex-col justify-between relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 border-t-2 border-r-2 border-white/10 rounded-tr-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 border-b-2 border-l-2 border-white/10 rounded-bl-3xl"></div>

                    {/* Floating squares */}
                    <div className="absolute top-20 right-20 w-3 h-3 bg-white/20 rotate-45 animate-pulse"></div>
                    <div
                      className="absolute bottom-32 left-16 w-2 h-2 bg-white/30 rotate-45 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>

                    <div>
                      {/* Stars */}
                      <div className="flex gap-2 mb-8">
                        {[...Array(review.rating)].map((_, i) => (
                          <span
                            key={i}
                            className="text-white text-3xl transform hover:scale-125 transition-transform cursor-default inline-block hover:rotate-12"
                            style={{
                              animation:
                                index === activeIndex
                                  ? `starPop 0.6s ease-out ${i * 0.1}s both`
                                  : "none",
                            }}
                          >
                            ★
                          </span>
                        ))}
                      </div>

                      {/* Review text */}
                      <div className="relative">
                        <span className="text-white/20 text-7xl absolute -left-4 -top-6 font-serif leading-none">
                          &quot;
                        </span>
                        <p className="text-white text-2xl font-light leading-relaxed pl-8 pr-4 relative z-10">
                          {review.review}
                        </p>
                        <span className="text-white/20 text-7xl absolute -right-4 -bottom-10 font-serif leading-none">
                          &quot;
                        </span>
                      </div>
                    </div>

                    {/* Author info */}
                    <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
                      <div>
                        <p className="text-white text-2xl font-semibold tracking-wide mb-2">
                          {review.name}
                        </p>
                        <p className="text-gray-400 text-base mb-1">
                          {review.course}
                        </p>
                        <p className="text-gray-500 text-sm">{review.year}</p>
                      </div>

                      {/* Avatar */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-400 rounded-full blur-md opacity-50"></div>
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-white to-gray-400 flex items-center justify-center text-black font-bold text-3xl shadow-2xl">
                          {/* {review.name.charAt(0)} */}
                          <Image
                            src={review.image}
                            alt={review.name.charAt(0)}
                            width={200}
                            height={200}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-4 mb-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="relative group"
              aria-label={`Go to review ${index + 1}`}
            >
              <div
                className={`transition-all duration-500 rounded-full ${
                  index === activeIndex
                    ? "w-14 h-4 bg-white shadow-lg shadow-white/50"
                    : "w-4 h-4 bg-gray-600 group-hover:bg-gray-400 group-hover:scale-125"
                }`}
              ></div>
              {index === activeIndex && (
                <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-75"></div>
              )}
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-white via-gray-300 to-white transition-all duration-500 ease-out shadow-lg shadow-white/50"
            style={{
              width: `${((activeIndex + 1) / reviews.length) * 100}%`,
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
            }}
          ></div>
        </div>

        {/* Review counter */}
        <div className="text-center mt-6 text-gray-500 text-sm tracking-widest">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(reviews.length).padStart(2, "0")}
        </div>
      </div>

      <style>{`
        @keyframes starPop {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          60% {
            transform: scale(1.3) rotate(20deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Reviews;

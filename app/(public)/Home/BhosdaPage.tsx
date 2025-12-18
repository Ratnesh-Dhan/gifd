"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Award, Users, BookOpen, ChevronRight } from 'lucide-react';
import Layout from '@/components/Layout/page';

export default function BhosdaPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      title: "CRAFT YOUR",
      subtitle: "FASHION LEGACY",
      description: "Where creativity meets craftsmanship",
      image: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)"
    },
    {
      title: "DESIGN THE",
      subtitle: "FUTURE",
      description: "Innovative design education for tomorrow's leaders",
      image: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)"
    },
    {
      title: "TRANSFORM YOUR",
      subtitle: "CREATIVE VISION",
      description: "From concept to runway excellence",
      image: "linear-gradient(135deg, #1a1a1a 0%, #3d3d3d 100%)"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const programs = [
    { name: "Fashion Design", students: "120+", duration: "4 Years" },
    { name: "Textile Design", students: "80+", duration: "3 Years" },
    { name: "Fashion Marketing", students: "90+", duration: "2 Years" },
    { name: "Pattern Making", students: "60+", duration: "1 Year" }
  ];

  const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "500+", label: "Alumni Network" },
    { number: "95%", label: "Placement Rate" },
    { number: "50+", label: "Industry Partners" }
  ];

  return (
    <div className="bg-white text-black">
      <Layout>
      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: currentSlide === index ? 1 : 0,
              background: slide.image
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <div className="mb-4 inline-block">
                  <Sparkles className="w-12 h-12 mx-auto mb-4" />
                </div>
                <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
                  {slide.title}
                </h1>
                <h2 className="text-5xl md:text-7xl font-light mb-8 tracking-wider">
                  {slide.subtitle}
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-12 tracking-wide">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center group">
                    APPLY NOW
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
                    EXPLORE PROGRAMS
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 tracking-tight">
                SHAPING THE FUTURE OF FASHION
              </h2>
              <div className="w-20 h-1 bg-black mb-8"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Atelier Fashion School, we believe in nurturing raw talent and transforming it into creative excellence. Our world-class faculty and state-of-the-art facilities provide the perfect environment for aspiring designers to flourish.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With over 25 years of experience in fashion education, we've built a legacy of innovation, creativity, and industry leadership. Our graduates work with top fashion houses across the globe.
              </p>
              <button className="border-2 border-black px-8 py-4 font-semibold hover:bg-black hover:text-white transition-all duration-300 flex items-center group">
                DISCOVER OUR STORY
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-700 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="w-32 h-32 text-white opacity-20" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 tracking-tight">
              OUR PROGRAMS
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our diverse range of programs designed to match your passion and career goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white p-8 hover:bg-black hover:text-white transition-all duration-300 group cursor-pointer border border-gray-200"
              >
                <BookOpen className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                  {program.name}
                </h3>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{program.students} Students</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">⏱</span>
                    <span>{program.duration}</span>
                  </div>
                </div>
                <button className="font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                  LEARN MORE
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 tracking-tight">
              STUDENT EXCELLENCE
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Showcasing the extraordinary talent of our students
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-900 to-gray-700 mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="w-16 h-16 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Collection {item}</h3>
                <p className="text-gray-600">Student Name - Class of 2024</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="bg-black text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            READY TO START YOUR JOURNEY?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join the next generation of fashion innovators and turn your passion into a profession
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-10 py-5 text-lg font-semibold hover:bg-gray-200 transition-all duration-300">
              APPLY NOW
            </button>
            <button className="border-2 border-white text-white px-10 py-5 text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
              SCHEDULE A VISIT
            </button>
          </div>
        </div>
      </section> */}
    </Layout>
    </div>
  );
}
'use client'
import Image from "next/image";
import React, { useState } from "react";

const AboutGIFD = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div className="min-h-screen px-5">
      <div>
        <section className="max-w-6xl mx-auto pt-8 pb-16">
          <h3 className="font-bold md:text-6xl text-4xl text-center md:py-5 py-3 bg-linear-to-b from-[#FFD479] to-[#B8860B] text-transparent bg-clip-text">
            Message From Leadership
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-1 md:gap-12 items-start">
            {/* Founder */}
            <div className="rounded-xl p-6 ">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-5">
                {/* This is test */}
                <div className="shrink-0 bg-black rounded-3xl w-70 h-110 md:w-60 md:h-100 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.50)]">
                  <div className="relative w-full h-[70%] rounded-t-3xl overflow-hidden ">
                    <Image
                      src="/images/founder.jpg"
                      alt="Founder Image"
                      fill
                      className="object-cover scale-150 translate-x-5"
                    />
                  </div>
                  <div className="px-10 pt-5 font-bold">
                    <h3 className="text-lg mt-4 md:mt-0 text-amber-400">Founder</h3>
                    <p className="text-xl text-white">Mr. Prabhakar Kumar</p>
                  </div>
                </div>
                {/* test ends */}
                {/* <Image
                  src="/about/founder1.jpg"
                  alt="Founder Image"
                  width={400}
                  height={600}
                  className="rounded-[50] object-cover border-2 border-amber-500 bg-white shadow hover:shadow-xl transition duration-300"
                />
                <div>
                  <h3 className="text-xl font-semibold">Founder</h3>
                  <p className="text-sm text-gray-500">
                    Glam Institute of Fashion Designing
                  </p>
                </div> */}
                {/* <p className="text-gray-700 leading-relaxed text-sm md:text-base"> */}
                <p className=" whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-gray-700 text-left">
                  Fashion isn&apos;t just clothing — it&apos;s identity,
                  confidence, and expression. When I started Glam Institute of
                  Fashion Designing, my goal wasn&apos;t to build another
                  classroom. It was to create a space where raw ambition
                  transforms into skill, and talent evolves into mastery.
                  <br />
                  <br />
                  Every student who walks through our doors carries potential.
                  Our job is to shape it, sharpen it, and launch it into the
                  world with purpose. Here, you don&apos;t just learn design —
                  you learn discipline, creativity, professionalism, and the
                  mindset required to lead in the fashion industry.
                  <br />
                  <br />
                  The fashion world rewards courage, originality, and
                  consistency. At Glam Institute, that&apos;s exactly what we
                  build.
                </p>
              </div>
            </div>

            {/* Co-Founder */}
            <div className="rounded-xl p-6 ">
              <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:mb-5 justify-end">
                <p className="whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-gray-700 text-left">
                  Glam Institute was created with the belief that education
                  should feel empowering, practical, and forward-focused. The
                  fashion industry is evolving faster than ever — and so should
                  the people preparing to enter it.
                  <br />
                  <br />
                  We provide exposure, industry-driven curriculum, hands-on
                  experience, and a platform for every student to discover their
                  unique voice. Whether you&apos;re here to become a designer,
                  stylist, merchandiser, or creative leader — you&apos;ll find
                  the tools, guidance, and ecosystem to grow.
                  <br />
                  <br />
                  This institute isn&apos;t just the beginning of your
                  education. It&apos;s the beginning of your journey into the
                  real world of fashion.
                </p>
                {/* <div className="border">
                  <h3 className="text-xl font-semibold">Co‑Founder</h3>
                  <p className="text-sm text-gray-500">
                    Glam Institute of Fashion Designing
                  </p>
                </div>
                <Image
                  src="/cofounder.jpg"
                  alt="Co-Founder Image"
                  width={400}
                  height={600}
                  className="rounded-[50] object-cover border-2 border-amber-500 bg-white shadow hover:shadow-xl transition duration-300"
                /> */}
                <div className="shrink-0 bg-black rounded-3xl w-70 h-110 md:w-60 md:h-100 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.50)]">
                  <div className="relative w-full h-[70%] rounded-t-3xl overflow-hidden ">
                    <Image
                      src="/images/founder.jpg"
                      alt="Founder Image"
                      fill
                      className="object-cover scale-150 translate-x-5"
                    />
                  </div>
                  <div className="px-10 pt-5 font-bold">
                    <h3 className="text-lg mt-4 md:mt-0 text-amber-400">Co Founder</h3>
                    <p className="text-xl text-white">Dr. Prabhakar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      

      <section className="relative w-full px-6 md:px-16 py-4 md:py-20 overflow-hidden">
      {/* Background logo */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center opacity-20">
        <Image
          src="/main-logo.png"
          alt="GIFD Logo"
          width={900}
          height={900}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto">
        <span className="text-amber-500 font-bold text-sm md:text-base">
          About Glam Institute of Fashion Designing
        </span>

        <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
          A Best Platform To Learn <br className="hidden md:block" />
          Fashion Designing Courses
        </h3>

        {/* TEXT BLOCK */}
        <div className="relative">
          <p
            className={`
              text-gray-700 leading-relaxed tracking-wide md:text-xl text-lg
              overflow-hidden transition-all duration-500 ease-in-out
              ${expanded ? "max-h-[1000px]" : "max-h-40"}
              md:max-h-none
            `}
          >
            A passionate impulse, determinacy of purpose and the knowledge are
            the basic traits which one must own to be a Winner. If you promise
            to invest with passion, perseverance and passion, we promise to
            convert your potential into a highly rewarding career.

            <br /><br />

            It is our intense dream to make Glam Institute of Fashion Designing
            a leader in the Fashion fraternity and this will be achieved by
            inspiring arty expression and skilled exchange of encounters which
            magnifies creation and newness in the industry and enables trend to
            shine forth.

            <br /><br />

            With the spirit of managing volatile changes in the world of Fashion
            Technology, our well prepared and trained faculty invite you
            wholeheartedly to join the GIFD fraternity and make our journey
            still beautiful and prosperous.

            <br /><br />

            Managing Director of Glam Institute of Fashion Designing is here
            with a vision of taking Education and Fashion to another level,
            exposing students to handicraft and handloom patrimony while
            blending conventional values with modern thought processes.
          </p>

          {/* Fade effect when collapsed (mobile only) */}
          {!expanded && (
            <div className="md:hidden pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-white to-transparent" />
          )}
        </div>

        {/* Read more button (mobile only) */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="md:hidden mt-4 text-amber-500 font-semibold"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </div>
    </section>
    </div>
  );
};

export default AboutGIFD;



// <div className="flex justify-center md:mt-20 pb-20 ">
//         {/* <div className=" bg-[url('/main-logo.png')] bg-cover bg-center opacity-70"> */}
//         <div className=" relative z-0">
//           <div className="absolute inset-0 left-50 -z-10 opacity-35">
//             <Image
//               src="/main-logo.png"
//               alt="GIFD Logo"
//               width={1000}
//               height={1000}
//             />
//           </div>
//           <div className="z-10">
//             <span className="text-amber-500 font-bold">
//               About Glam Institute of Fashion Designing{" "}
//             </span>
//             <h3 className="text-3xl font-bold mt-4 mb-8">
//               A Best Platform To Learn
//               <br />
//               Fashion Designing Courses{" "}
//             </h3>
//             <p className="whitespace-pre-line leading-relaxed tracking-wide md:text-xl text-lg text-gray-700 text-left">
//               A passionate impulse, determinacy of purpose and the knowledge are
//               the basic traits which one must own to be a Winner. If you promise
//               to invest with passion, perseverance and passion, we promise to
//               convert your potential into a highly rewarding career. It is our
//               intense dream to make Glam Institute of Fashion Designing a leader
//               in the Fashion fraternity and this will be achieved by inspiring
//               arty expression and skilled exchange of encounters which magnifies
//               creation and newness in the industry and enables trend to shine
//               forth. With the spirit of managing volatile changes in the world
//               of Fashion Technology, our well prepared and trained faculty
//               invite you wholeheartedly to join the GIFD fraternity and make our
//               journey still beautiful and prosperous. <br />
//               Managing Director of Glam Institute of Fashion Designing is here
//               with a vision of taking Education and Fashion to another level,
//               she has come up with an educational system, which is exceptional
//               in every aspect. Together with nascency and inventiveness, the
//               students are also exposed to handicraft and handloom patrimony
//               which offers them with idiosyncratically exclusive outlook which
//               mingles conventional values with modern thought processes by
//               design. A passionate impulse, determinacy of purpose and the
//               knowledge are the basic traits which one must own to be a Winner.
//               If you promise to invest with passion, perseverance and passion,
//               we promise to convert your potential into a highly rewarding
//               career. It is our intense dream to make Glam Institute of Fashion
//               Designing a leader in the Fashion fraternity and this will be
//               achieved by inspiring arty expression and skilled exchange of
//               encounters which magnifies creation and newness in the industry
//               and enables trend to shine forth. With the spirit of managing
//               volatile changes in the world of Fashion Technology, our well
//               prepared and trained faculty invite you wholeheartedly to join the
//               GIFD fraternity and make our journey still beautiful and
//               prosperous.
//             </p>
//           </div>
//         </div>
//       </div>
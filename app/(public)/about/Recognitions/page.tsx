"use client";
import FourParts from "@/components/FourParts";
import React, { useState } from "react";
import ScrollingShowcase from "../../../../components/ScrollingShowcase";
import Image from "next/image";

const Recognitions = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [expanded2, setExpanded2] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[35vh] md:h-[70vh] md:mx-10 mx-5 mb-6 md:mb-10">
        <div className="absolute w-[100vw] h-[35vh] md:h-[70vh] left-1/2 -translate-x-1/2 bg-cover bg-center flex items-center bg-[url('/images/banners/recognition.jpg')]">
          <h3 className="absolute bottom-22 md:text-9xl text-4xl md:ml-[10vw] ml-4">
            <span className="font-bold text-amber-400 [text-shadow:4px_4px_0px_rgb(0,0,0)] md:[text-shadow:5px_5px_0px_rgb(0,0,0)]">
              Recognitions
            </span>
          </h3>
        </div>
      </div>
      <div
        id="Text area"
        className={` mx-6
              text-gray-700 leading-relaxed tracking-wide md:text-xl text-lg
              overflow-hidden transition-all duration-500 ease-in-out
              ${expanded ? "max-h-[2000px]" : "max-h-[400px]"}
              md:max-h-none
            `}
      >
        <h4 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-center">
          About sanskaram university
        </h4>
        <p>
          Sanskaram University is a recognized private university established
          under the Haryana Private Universities Act, 2006 and duly recognized
          by the University Grants Commission (UGC). The university is committed
          to delivering quality, industry-oriented education with a strong focus
          on academic excellence, innovation, and skill development. Its modern
          campus is strategically located just 40 km from the New Delhi
          International Airport, offering excellent connectivity and a vibrant
          academic environment that supports national and global learning
          opportunities.
          <br />
          <h4 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-center">
            Benefits to GIFD as an Education Partner of Sanskaram University
          </h4>
          Becoming an Education Partner of Sanskaram University has
          significantly strengthened the academic and professional value of Glam
          Institute of Fashion Designing (GIFD), Jamshedpur. This collaboration
          ensures that students receive recognized, structured, and
          industry-aligned education, enhancing their career prospects.
          <br />
        </p>
        <div className="text-gray-700 leading-relaxed tracking-wide md:text-xl text-lg my-4">
          Key benefits include:
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li>
              University-recognized degrees and diplomas, increasing academic
              credibility
            </li>
            <li>
              Standardized and updated curriculum aligned with national and
              industry benchmarks
            </li>
            <li>
              Enhanced academic support and guidance from university experts
            </li>
            <li>
              Greater acceptance of qualifications for higher education and
              employment
            </li>
            <li>Improved career opportunities through academic recognition</li>
            <li>
              Exposure to research, innovation, and skill development programs
            </li>
            <li>Stronger placement and internship pathways</li>
            <li>Increased trust among students and parents</li>
            <li>
              Brand value enhancement of GIFD at state and national levels
            </li>
          </ul>
          Through this partnership, GIFD ensures that students benefit from
          <span className="font-bold">
            {" "}
            ablend of creative education, academic excellence, and industry
            readiness
          </span>
          . The collaboration empowers students to pursue higher studies, secure
          professional opportunities, or establish successful entrepreneurial
          ventures with confidence.
        </div>
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="md:hidden my-4 text-amber-500 font-semibold"
      >
        {expanded ? "Read less" : "Read more"}
      </button>
      <div className="max-w-[1260px] flex items-center md:mt-15">
        <FourParts />
      </div>
      <div
        id="Text area2"
        className={` mx-6
              text-gray-700 leading-relaxed tracking-wide md:text-xl text-lg
              overflow-hidden transition-all duration-500 ease-in-out
              ${expanded2 ? "max-h-[2000px]" : "max-h-[400px]"}
              md:max-h-none
            `}
      >
        <h4 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-center">
          About NBVTE
        </h4>
        <p>
          The National Board of Vocational Training Education (NBVTE) is an
          autonomous vocational education board established under the ICA Act,
          2013 and registered with the Ministry of Corporate Affairs, Government
          of India. NBVTE works toward strengthening India’s skill ecosystem by
          offering quality, industry-aligned vocational education through a
          nationwide network of recognized training centers. Its certificate and
          diploma programs focus on practical learning, employability, and skill
          development, ensuring learners are prepared for real-world
          professional requirements.
        </p>
        <h4 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-center">
          Benefits of NBVTE Affiliation for Glam Institute of Fashion Designing
        </h4>
        <p>
          Affiliation with the National Board of Vocational Training Education
          (NBVTE) adds significant value to Glam Institute of Fashion Designing
          by enhancing credibility, academic structure, and student career
          prospects. NBVTE affiliation ensures that all courses follow
          standardized vocational education norms, emphasizing practical skills,
          industry relevance, and outcome-based training. This helps Glam
          Institute deliver programs that align with current fashion, interior,
          beauty, and modeling industry requirements. Students benefit from
          nationally recognized certification issued under NBVTE guidelines,
          which improves acceptance for employment, self-employment, and further
          skill advancement across India. The affiliation also provides quality
          monitoring, curriculum support, and structured assessment systems,
          ensuring consistent learning standards. With NBVTE affiliation, Glam
          Institute gains greater trust among students, parents, and industry
          partners while reinforcing its commitment to skill-based education and
          professional excellence in fashion and design training.
        </p>
      </div>
      <button
        onClick={() => setExpanded2(!expanded2)}
        className="md:hidden my-4 text-amber-500 font-semibold"
      >
        {expanded2 ? "Read less" : "Read more"}
      </button>

      <Image
        src="/about/banner.png"
        alt="recognition"
        width={1200}
        height={600}
        className="my-10"
      />
      <ScrollingShowcase />
    </div>
  );
};

export default Recognitions;

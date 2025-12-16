// import Image from "next/image";
// import React from "react";

import Image from "next/image";

// const FourParts = () => {
//   return (
//     <div className="flex justify-center gap-8 mb-16">
//       <div className="text-center">
//         <Image
//           src="/extra_images/part-1.png"
//           alt={"part1"}
//           width={250}
//           height={250}
//         />
//         <h3>Affiliated With NBVTE</h3>
//       </div>
//       <div className="text-center">
//         <Image
//           src="/extra_images/part-2.png"
//           alt={"part1"}
//           width={250}
//           height={250}
//         />
//         <h3>Jharkhand Govt. Registered</h3>
//       </div>
//       <div className="text-center">
//         <Image
//           src="/extra_images/part-3.png"
//           alt={"part1"}
//           width={250}
//           height={250}
//         />
//         <h3>An ISO Certified</h3>
//       </div>
//       <div className="text-center">
//         <Image
//           src="/extra_images/part-4.png"
//           alt={"part1"}
//           width={250}
//           height={250}
//         />
//         <h3>MSME Registered</h3>
//       </div>
//     </div>
//   );
// };

// export default FourParts;
// components/Affiliations.tsx
export default function Affiliations() {
  const partners = [
    { name: "Partner One", logo: "/extra_images/part-5.png" },
    { name: "Partner Two", logo: "/extra_images/part-2.png" },
    { name: "Partner Three", logo: "/extra_images/part-3.png" },
    { name: "Partner Four", logo: "/extra_images/part-4.png" },
    { name: "Partner Five", logo: "/extra_images/part-1.png" },
  ];

  return (
    <div className="w-full   py-20">
      <div className="   px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-left">
          Affiliations & Industry Partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-12 place-items-center">
          {partners.map((p, i) => (
            <div
              key={i}
              className="border border-black rounded-xl"
              // className="opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={250}
                height={250}
                className="rounded-xl"
                // className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

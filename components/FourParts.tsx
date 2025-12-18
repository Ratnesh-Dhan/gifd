import Image from "next/image";

export default function FourParts() {
  const partners = [
    { name: "Partner One", logo: "/extra_images/part-5.png" },
    { name: "Partner Two", logo: "/extra_images/part-2.png" },
    { name: "Partner Three", logo: "/extra_images/part-3.png" },
    { name: "Partner Four", logo: "/extra_images/part-4.png" },
    { name: "Partner Five", logo: "/extra_images/part-1.png" },
  ];

  return (
    <div className="relative  left-1/2 -translate-x-1/2 w-screen mt-20">
      <div className=" flex h-full">
        {/* LEFT – white content (opposite of above) */}
        <div className="bg-white w-full md:w-full flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-10">
            {partners.map((p, i) => (
              <div key={i} className="border border-black rounded-xl bg-white">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={180}
                  height={180}
                  className="rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – red title block */}
        <div className="bg-[#f59e0b] w-full md:w-1/3 flex items-center px-20 text-white">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Affiliations
            <br />
            & Industry
            <br />
            Partners
          </h2>
        </div>
      </div>
    </div>
  );
}

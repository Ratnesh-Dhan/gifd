import Enquiry from "@/components/Enquiry/page";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full h-[70vh] bg-[url('/Jhantu_images/connecting3.jpg')] bg-cover bg-center flex items-center"></div>
      <div className="flex justify-center mt-20">
        <div className="w-[20vw] h-[40vh] border">Map area</div>
        <div className="ml-10 mb-10">
          <span>Contact us ------</span>
          <h3 className="text-4xl my-4">
            Needs Help ? Let&apos;s Get
            <br /> in Touch
          </h3>
          <span>Get In Touch with us for more details.</span>
          <div className="mt-20 flex">
            <Image
              src="/icons/location.png"
              alt="locatoin"
              width={50}
              height={50}
            />
            <div className="ml-4">
              <h3 className="text-xl">Address:</h3>
              <span>
                2/4 , Birenu trade centre, pennar road , sakchi, 831001 1
              </span>
            </div>
          </div>
          <div className="mt-8 flex">
            <Image src="/icons/call.png" alt="phone" width={45} height={45} />
            <div className="ml-4">
              <h3 className="text-xl">Call Us: +91-810 261 1868</h3>
              <span>Office Time : 10:00 to 07:00 on Weekdays</span>
            </div>
          </div>
          <div className="mt-8 flex">
            <Image src="/icons/gmail.png" alt="gmail" width={45} height={45} />
            <div className="ml-4">
              <h3 className="text-xl">Email:</h3>
              <span>info@gifdinstitute.com </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" w-full bg-[url('/world-map.jpg')] bg-cover bg-center p-1"> */}
      <div className="relative w-full p-1">
        <div className="absolute inset-0 bg-lienar-to-b from-white to-transparent"></div>
        <div className="w-full bg-[url('/world-map.jpg')] bg-cover bg-center p-6 relative z-10">
          <div className="flex my-20">
            <div
              className="mask-b-from-50% mask-b-to-90%"
              // style={{
              //   WebkitMaskImage:
              //     "linear-gradient(to top, transparent 0%, white 90%)",
              //   maskImage:
              //     "linear-gradient(to top, transparent 60%, white 90%)",
              // }}
            >
              <Image
                src="/images/contact_us-2.png"
                alt="phone"
                width={900}
                height={350}
              />
            </div>
            <div className="mx-20">
              <h3 className="text-4xl my-4">Send an Inquiry</h3>
              <Enquiry />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

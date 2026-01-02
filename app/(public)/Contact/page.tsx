import Enquiry from "@/components/Enquiry/page";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1260px]">
      <div className="relative w-screen left-1/2 -translate-x-1/2 h-[70vh] bg-[url('/extra_images/connecting3.jpg')] bg-cover bg-center flex items-center"></div>
      <div className="md:border py-5 my-5 md:my-10 flex flex-col-reverse md:flex-row justify-start md:justify-center items-center md:mt-20">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3677.959790825079!2d86.20640545646698!3d22.803953757747106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e31dea81ca0b%3A0xafa77b568fdfb7c1!2sGlam%20Institute%20of%20Fashion%20Designing!5e0!3m2!1sen!2sin!4v1767185699258!5m2!1sen!2sin"
            width="650"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="hidden md:block"
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3677.959790825079!2d86.20640545646698!3d22.803953757747106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e31dea81ca0b%3A0xafa77b568fdfb7c1!2sGlam%20Institute%20of%20Fashion%20Designing!5e0!3m2!1sen!2sin!4v1767185699258!5m2!1sen!2sin"
            width="350"
            height="350"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="md:hidden block"
          />
        </div>
        <div className="ml-6 md:ml-10 mb-10 mr-6 md:mr-0">
          <h3 className="text-2xl md:text-4xl my-4 text-center">
            Needs Help ?
            <br />
            Let&apos;s Get in Touch
          </h3>
          <span className="text-center block">
            Get In Touch with us for more details.
          </span>
          <div className="mt-10 flex">
            <Image
              src="/icons/location.png"
              alt="locatoin"
              width={50}
              height={50}
            />
            <div className="ml-4 text-sm md:text-base">
              <h3 className="text-lg md:text-xl">Address:</h3>
              <span>
                2/4 , Birenu trade centre, pennar road , sakchi, 831001
              </span>
            </div>
          </div>
          <div className="mt-8 flex">
            <Image src="/icons/call.png" alt="phone" width={45} height={45} />
            <div className="ml-4 text-sm md:text-base">
              <h3 className="text-lg md:text-xl">Call Us: +91-810 261 1868</h3>
              <span>Office Time : 10:00 to 07:00 on Weekdays</span>
            </div>
          </div>
          <div className="mt-8 flex">
            <Image src="/icons/gmail.png" alt="gmail" width={45} height={45} />
            <div className="ml-4 text-sm md:text-base">
              <h3 className="text-lg md:text-xl">Email:</h3>
              <span>info@gifdinstitute.com </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" w-full bg-[url('/world-map.jpg')] bg-cover bg-center p-1"> */}
      <div className="relative w-full">
        <div className="absolute inset-0 bg-lienar-to-b from-white to-transparent"></div>
        <div className="w-full bg-[url('/world-map.jpg')] bg-cover bg-center p-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center my-5 md:my-20">
            <div
              className="mask-b-from-70% mask-b-to-90%"
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
            <div className="md:mx-20">
              <h3 className="text-4xl md:my-4 text-center md:text-left mb-4 md:mb-0">
                Send an Inquiry
              </h3>
              <Enquiry />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

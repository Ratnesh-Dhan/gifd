import React from "react";
import Buttons from "./Buttons";

const Socials = () => {
  return (
    <div className="reative">
      <div className="fixed top-[50%] flex-col z-50">
        <Buttons
          href="https://www.whatsapp.com/?lang=en"
          image="/whatsapp.png"
          alt="whatsapp"
        />
        <Buttons
          href="https://www.instagram.com/"
          image="/instagram.png"
          alt="instagram"
        />
        <Buttons
          href="https://www.facebook.com/"
          image="/facebook.png"
          alt="facebook"
        />
        <Buttons
          href="https://www.twitter.com/"
          image="/twitter.png"
          alt="twitter"
        />
      </div>
    </div>
  );
};

export default Socials;

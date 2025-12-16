import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Socials from "../Socials/page";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 400)); // 1.5 second delay
}
const Layout = async ({ children }: { children: ReactNode }) => {
  await getData();
  return (
    <div>
      <Navbar />
      <Socials />
      <div className="max-w-[1300px] mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Socials from "../Socials/page";
import { DeviceProvider } from "@/app/provideres/Devicecontext";
import { headers } from "next/headers";
import { userAgent } from "next/server";
import { Toaster } from "react-hot-toast";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 400)); // 1.5 second delay
}
const Layout = async ({ children }: { children: ReactNode }) => {
  const { device } = userAgent({ headers: await headers() });
  // const isMobile = device.type === "mobile";
  const isMobile = device.type === "mobile" || device.type === "tablet";

  await getData();
  return (
    <div>
      <DeviceProvider isMobile={isMobile}>
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <Socials />
        <div className="max-w-[1300px] mx-auto">{children}</div>
        <Footer />
      </DeviceProvider>
    </div>
  );
};

export default Layout;

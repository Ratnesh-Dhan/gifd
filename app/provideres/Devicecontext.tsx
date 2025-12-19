"use client";
import { createContext, useContext, ReactNode } from "react";

const DeviceContext = createContext({ isMobile: false });

export const DeviceProvider = ({
  isMobile,
  children,
}: {
  isMobile: boolean;
  children: ReactNode;
}) => {
  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevice = () => useContext(DeviceContext);

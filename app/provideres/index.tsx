"use client";
import { DeviceProvider } from "./Devicecontext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <DeviceProvider>{children}</DeviceProvider>;
}

import "@/styles/globals.css";

import { MainHeader } from "@/components/header";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { satoshi } from "./font";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background  antialiased",
          satoshi.className
        )}
      >
        <MainHeader />
        {children}
      </body>
    </html>
  );
}

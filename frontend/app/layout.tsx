import "@/styles/globals.css";

import Footer from "@/components/common/Footer";
import { MainHeader } from "@/components/header";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { satoshi, timmana } from "./font";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background  font-satoshi antialiased",
          satoshi.variable,
          timmana.variable
        )}
      >
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}

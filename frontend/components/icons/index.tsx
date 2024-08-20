import { cn } from "@/lib/utils";
import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      width={251}
      height={103}
      src={"/images/logo.svg"}
      alt="logo"
      className={cn("", className)}
    />
  );
};

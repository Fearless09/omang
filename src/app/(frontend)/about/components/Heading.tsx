import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="font-montserrat relative w-max text-[32px] font-semibold text-black">
      {children}
      <span
        className={cn(
          "absolute inset-x-0 -bottom-2.5 inline-block h-1.5 rounded-full bg-[#EFEFEF]",
          "after:absolute after:inset-y-0 after:left-0 after:w-[76px] after:rounded-full after:bg-gradient-to-r after:from-[#D3C1DD] after:to-[#EEC0BB]",
        )}
      />
    </h1>
  );
};

export default Heading;

"use client";

import { cn } from "@/lib/utils";
import { MousePointerClick } from "lucide-react";
import React, { ComponentProps, FC } from "react";

const Hero = () => {
  return (
    <section className="wrapper relative z-[2] max-w-[1020px] pt-[100px]">
      <h6 className="mx-auto mb-6 flex w-max items-center gap-1.5 rounded-full border border-[#0A7CFF]/10 bg-gradient-to-r from-[#0A7CFF]/5 to-[#B4D1EF]/10 px-4.5 py-2 backdrop-blur-md">
        <span className="size-2 animate-pulse rounded-full bg-[#0A7CFF]" />
        <span className="font-montserrat text-sm font-semibold text-[#0A7CFF]">
          Available For Project And Fulltime Role
        </span>
      </h6>

      <h1 className="font-montserrat mx-auto w-full max-w-[756px] text-center text-[clamp(36px,6.5vw,120px)]/[clamp(40px,6.5vw,124px)] font-extrabold text-pretty">
        USER
        <br />
        EXPERIENCE
        <br />
        DESIGNER
      </h1>

      <main className="font-inter mx-auto mt-5 flex w-full max-w-[756px] items-center justify-between text-sm/[20px] font-semibold text-black md:text-[15px]/[25px]">
        <span>
          CURRENTLY CRAFTING
          <br />
          EXPERIENCE AT <span className="text-[#0A7CFF]">Enoverlab</span>
        </span>

        <span>(2022 - PRESENT)</span>
      </main>

      <main className="relative mx-auto mt-20 w-full max-w-[800px]">
        <p className="font-sf_pro rounded-xl border-[1.5px] border-dashed border-[#99C8FF] p-5 text-center text-lg/[32px] tracking-wide text-pretty md:text-xl/[36px]">
          <SpecialChars>A passionate UI/UX</SpecialChars> designer with over 3
          years of experience crafting intuitive and beautiful digital
          experience My approach combines{" "}
          <SpecialChars>user-centric design thinking</SpecialChars> with a deep
          understanding of modern design principles and emerging technology.
          <SpecialChars>specialized in</SpecialChars>
        </p>

        <Specialization area="AI" />
        <Specialization area="Fintech" />
        <Specialization area="E-Commerce" />
        <Specialization area="Health Tech" />
      </main>
    </section>
  );
};

export default Hero;

const SpecialChars: FC<ComponentProps<"span">> = ({ className, ...props }) => {
  return <span className={cn("font-medium italic", className)} {...props} />;
};

const Specialization = ({
  area,
}: {
  area: "AI" | "Fintech" | "E-Commerce" | "Health Tech";
}) => {
  return (
    <div
      className={cn("absolute", {
        "animate-specialization-x -top-18 left-1/2 -translate-x-1/2":
          area === "AI",
        "animate-specialization-y top-1/2 -right-28 -translate-y-1/2":
          area === "Fintech",
        "animate-specialization-y top-1/2 -left-38 -translate-y-1/2 [--animation-direction:alternate-reverse]":
          area === "E-Commerce",
        "animate-specialization-x -bottom-18 left-1/2 -translate-x-1/2 [--animation-direction:alternate-reverse]":
          area === "Health Tech",
      })}
    >
      <MousePointerClick
        className={cn("-ml-2.5 size-5 translate-y-1.5 rotate-6", {
          "fill-[#FFC597] stroke-[#FFC597]": area === "AI",
          "fill-[#F3CDFE] stroke-[#F3CDFE]": area === "Fintech",
          "fill-[#81BCFFC9] stroke-[#81BCFFC9]": area === "E-Commerce",
          "fill-[#FFC972] stroke-[#FFC972]": area === "Health Tech",
        })}
      />
      <div
        className={cn(
          "font-montserrat rounded-full border border-white px-5 py-1.5 text-sm font-medium text-black",
          {
            "bg-[#FFC597] px-6": area === "AI",
            "bg-[#F3CDFE]": area === "Fintech",
            "bg-[#81BCFFC9]": area === "E-Commerce",
            "bg-[#FFC972]": area === "Health Tech",
          },
        )}
      >
        {area}
      </div>
    </div>
  );
};

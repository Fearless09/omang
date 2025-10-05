"use client";

import { cn } from "@/lib/utils";
import React, { ComponentProps, FC } from "react";

const Hero = () => {
  return (
    <section className="wrapper ipad:pt-[100px] relative z-[2] max-w-[970px] pt-[100px]">
      <h6 className="mx-auto mb-6 flex w-max items-center gap-1.5 rounded-full border border-white/20 bg-white/25 px-4.5 py-2.5 backdrop-blur-md">
        <span className="size-1.5 rounded-full bg-black" />
        <span className="font-montserrat text-sm font-medium text-black">
          Available For Project And Fulltime Role
        </span>
      </h6>

      <h1 className="ipad:text-[48px]/[76px] text-center text-[32px]/[48px] font-semibold sm:text-[38px]/[56px]">
        I&apos;m Omang ✌🏼 a <SpecialChars>Product Designer I</SpecialChars> help
        teams create fun, memorable,{" "}
        <SpecialChars>and human experiences</SpecialChars>. I specialized in
      </h1>

      <ul className="mt-16 flex flex-wrap items-center justify-center gap-4">
        {tags.map((tag, index) => (
          <li
            key={index}
            className={cn(
              "shrink-0 rounded-[10px] px-5 py-2.5 font-semibold tracking-[1.2] md:text-xl",
              tag.color,
            )}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {tag.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;

const SpecialChars: FC<ComponentProps<"span">> = ({ className, ...props }) => {
  return (
    <span
      className={cn("text-muted transition-300 ease-linear", className)}
      {...props}
    />
  );
};

const tags = [
  { name: "Fintech", color: "bg-[#F3CDFE]" },
  { name: "AI", color: "bg-[#FFC597]" },
  { name: "E-Commerce", color: "bg-[#B4D1EF]" },
  { name: "Health Tech", color: "bg-[#FDEDD3]" },
];

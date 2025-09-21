"use client";

import { cn } from "@/lib/utils";
import React, { ComponentProps, FC, useEffect, useState } from "react";

const Hero = () => {
  return (
    <section className="wrapper ipad:pt-[150px] max-w-[970px] pt-[100px]">
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

const specialColors = [
  "text-muted",
  "text-[#2859C5]",
  "text-[#FF2050]",
  "text-[#03A84E]",
  "text-[#FEAD8A]",
];

const SpecialChars: FC<ComponentProps<"span">> = ({ className, ...props }) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const inter = setInterval(() => {
      // if (index === specialColors.length - 1) {
      //   setIndex(0);
      // } else {
      //   setIndex((prev) => prev + 1);
      // }
      setIndex((prev) => (prev + 1) % specialColors.length);
    }, 2500);

    return () => clearInterval(inter);
  }, []);

  return (
    <span
      className={cn(
        "text-muted transition-all duration-1000 ease-linear",
        specialColors[index],
        className,
      )}
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

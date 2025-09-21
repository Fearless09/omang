import { cn } from "@/lib/utils";
import React from "react";

const Hero = () => {
  return (
    <section className="wrapper ipad:pt-[150px] max-w-[970px] pt-16 sm:pt-[100px]">
      <h1 className="ipad:text-[48px]/[76px] text-center text-[32px]/[48px] font-semibold sm:text-[38px]/[56px]">
        I&apos;m Omang ✌🏼 a{" "}
        <span className="text-muted">Product Designer I</span> help teams create
        fun, memorable,{" "}
        <span className="text-muted">and human experiences</span>. Specialized
        in
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

const tags = [
  { name: "Fintech", color: "bg-[#F3CDFE]" },
  { name: "AI", color: "bg-[#FFC597]" },
  { name: "E-Commerce", color: "bg-[#B4D1EF]" },
  { name: "Health Tech", color: "bg-[#FDEDD3]" },
];

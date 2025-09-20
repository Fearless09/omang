"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import React from "react";

const HowICreate = () => {
  return (
    <section className="wrapper mt-[100px]">
      <h1 className="heading">How I Create</h1>

      <main className="mt-13 grid grid-cols-1 gap-10 gap-x-5 sm:grid-cols-2 md:gap-x-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className={cn(
              "rounded-[12px] border-2 border-white bg-gradient-to-l from-white/50 to-white/30 px-7 py-10 lg:px-10 lg:pt-16 lg:pb-13",
              step.bg,
            )}
          >
            <div
              className={cn(
                "relative flex size-15 items-center justify-center rounded-full",
                step.iconColor,
              )}
            >
              <div
                className={cn(
                  "absolute size-full rounded-full blur-[10px]",
                  step.iconBg,
                )}
              />
              <Icon icon={step.icon} className="z-[1] size-7" />
            </div>

            <h1 className="ipad:text-2xl mt-5 text-xl font-semibold xl:text-[32px]">
              {step.title}
            </h1>
            <p className="mt-4 line-clamp-3 w-full max-w-[450px] truncate text-balance">
              {step.subttitle}
            </p>
          </div>
        ))}
      </main>
    </section>
  );
};

export default HowICreate;

const steps = [
  {
    bg: "from-[#FEEDEE] to-[#F2EAFE]",
    title: "DEFINE THE PROBLEM",
    subttitle:
      "identify the design purpose, target audience, and requirements. Research and gather inspiration to clarify the project's goals.",
    icon: "streamline-flex-color:code-monitor-1-flat",
    iconColor: "text-[#2859C5]",
    iconBg: "bg-[#8FBFFA]/50",
  },
  {
    bg: "from-[#EFF6FF] to-[#D9EDFF]",
    title: "CONCEPT AND SKETCHING",
    subttitle:
      "Brainstorming ideas, sketch rough concepts, and explore different virtual approaches. Refine your ideas and create a clear direction.  ",
    icon: "streamline-ultimate:design-tool-magic-wand-1-bold",
    iconColor: "text-[#FF2050]",
    iconBg: "bg-[#FF847D]/40 ",
  },
  {
    bg: "from-[#F3E0E1]/50 to-[#DAEEFF]",
    title: "DESIGN & BUILD",
    subttitle:
      "Craft visual and functional solutions to transform ideas into intuitive, scalable design.",
    icon: "fluent:design-ideas-16-filled",
    iconColor: "text-[#03A84E]",
    iconBg: "bg-[#86F1B7] ",
  },
  {
    bg: "from-[#F3E0E1] to-[#DCEDFD]",
    title: "REFINE & FINALIZE",
    subttitle:
      "Review and refine my design, ensuring it meets the project's objective. Make any necessary adjustments and finalize the design for implantation",
    icon: "solar:hand-stars-bold",
    iconBg: "bg-[#FFE9D8]",
    iconColor: "text-[#FEAD8A]",
  },
];

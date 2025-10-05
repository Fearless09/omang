import { cn } from "@/lib/utils";
import React from "react";

const Stats = () => {
  return (
    <section className="wrapper mt-[100px] flex flex-wrap items-stretch justify-between gap-x-5 gap-y-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={cn(
            "font-montserrat flex max-w-[390px] flex-1 flex-col gap-3.5 rounded-xl border border-white bg-gradient-to-l px-5 py-7.5 text-center font-semibold",
            stat.bg,
          )}
          data-aos="fade-up"
          data-aos-delay={index * 150}
        >
          <h1 className="text-[32px] md:text-[36px] lg:text-[40px]">
            {stat.value}
          </h1>
          <p className="text-[20px] font-medium md:text-[24px] lg:text-[28px]">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;

const stats = [
  { value: "3+", title: "Years Experience", bg: "from-[#EFF6FF] to-[#D9EDFF]" },
  {
    value: "10+",
    title: "Project Completed",
    bg: "from-[#FEEDEE] to-[#F2EAFE]",
  },
  { value: "25+", title: "Happy Client", bg: "from-[#EFF6FF] to-[#D9EDFF]" },
];

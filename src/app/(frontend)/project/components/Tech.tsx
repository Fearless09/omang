import { PROJECT } from "@/data/projects";
import React from "react";

const Tech = ({ tech }: PROJECT) => {
  return (
    <main className="mx-auto mt-10 max-w-[760px]">
      <h1
        className="font-sf_pro text-3xl font-medium text-black"
        data-aos="fade-up"
      >
        Technologies & Skills
      </h1>

      <ul className="mt-9 flex flex-wrap items-center gap-3">
        {tech.map((tech, index) => (
          <li
            key={index}
            className="font-sf_pro transition-300 rounded-[10px] bg-[#BDCDCC] px-3.5 py-2 tracking-wider text-black shadow-md shadow-black/15 hover:bg-[#DBEEFF]"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            {tech}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Tech;

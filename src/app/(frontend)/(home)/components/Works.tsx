import Projects from "@/components/shared/Projects";
import React from "react";

const Works = () => {
  return (
    <section className="wrapper mt-25">
      <h6 className="font-sf_pro text-2xl tracking-wide text-[#8F8F8F]">
        Selected Works
      </h6>
      <h1 className="font-sf_pro mt-4 max-w-[600px] text-3xl leading-[1.2] text-pretty md:mt-6 md:text-4xl lg:text-5xl">
        Crafting intuitive experiences for web and mobile platforms
      </h1>
      <Projects />
    </section>
  );
};

export default Works;

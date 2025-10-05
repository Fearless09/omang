import React from "react";
import Heading from "./Heading";
import Projects from "@/components/shared/Projects";

const Works = () => {
  return (
    <section className="wrapper mt-[88px]">
      <Heading>Featured Work</Heading>
      <Projects className="mt-[62px]" />
    </section>
  );
};

export default Works;

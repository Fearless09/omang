import React from "react";
import Heading from "./Heading";

const Approach = () => {
  return (
    <section className="wrapper mt-[100px] md:mt-[150px]">
      <Heading>My Approach</Heading>

      <p
        className="mt-12 w-full max-w-[790px] text-xl text-balance text-black"
        data-aos="fade-up"
      >
        Every project begins with research and empathy. I immerse myself in
        understanding the user&apos;s needs, pain points, and behaviors through
        interviews, surveys, and analytics. This foundation informs every design
        decision, ensuring that aesthetics serve functionality.
        <br />
        <br />
        I&apos;m a strong advocate for iterative design and rapid prototyping.
        By testing early and often, we can validate assumptions, gather
        feedback, and refine solutions before investing in full development.
      </p>
    </section>
  );
};

export default Approach;

import React from "react";
import Heading from "./Heading";

const Skills = () => {
  return (
    <section className="wrapper mt-12">
      <Heading>Skills & Expertise</Heading>

      <ul className="mt-[62px] flex max-w-[700px] flex-wrap gap-x-4 gap-y-6">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="rounded-[20px] bg-gradient-to-r from-[#D5C1DA] to-[#ECC0BD] px-6 py-2 text-xl text-black"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

const skills = [
  "User Research",
  "Wireframing",
  "Interaction Design",
  "Prototyping",
  "Figma",
  "Design Systems",
  "Usability Testing",
  "Information Architecture",
];

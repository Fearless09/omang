import Projects from "@/components/shared/Projects";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Works = () => {
  return (
    <section className="wrapper mt-[100px]">
      <h1 className="heading">Selected Works</h1>
      <Projects />
    </section>
  );
};

export default Works;

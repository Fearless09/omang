import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Heading from "./Heading";

const Hero = () => {
  return (
    <section className="wrapper ipad:pt-[100px] relative z-[2] flex items-center justify-between pt-[100px]">
      <main className="max-w-[700px] flex-1">
        <Heading>About Me</Heading>

        <p className="mt-12 text-xl text-balance text-black">
          I&apos;m a passionate UI/UX designer with over 3 years of experience
          crafting intuitive and beautiful digital experience My approach
          combines user-centric design thinking with a deep understanding of
          modern design principles and emerging technology
          <br />
          <br />I believe great design is invisible-it guides users seamlessly
          through their journey while creating moments of delight. Whether Im
          designing a mobile-app, web platform, or design system, my goal is
          always to solve real problem for real people.
        </p>
      </main>

      <main
        className={cn(
          "relative aspect-[2.49/2.78] w-[250px] shrink-0 rounded-3xl",
          "before:absolute before:inset-0 before:-z-[1] before:rotate-15 before:rounded-3xl before:bg-gradient-to-b before:from-[#F0B8BF] before:to-[#CEC7DB]",
        )}
      >
        <Image
          alt="Omang Thomas"
          src={"/profile.jpg"}
          fill
          priority
          className="rounded-3xl object-cover object-center"
        />
      </main>
    </section>
  );
};

export default Hero;

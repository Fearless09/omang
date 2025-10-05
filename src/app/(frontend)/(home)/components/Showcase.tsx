"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Carousel } from "nuka-carousel";
import React from "react";

const Showcase = () => {
  return (
    <section className="wrapper mt-[100px] overflow-hidden">
      <section className="overflow-clip" data-aos="fade-up">
        <Carousel
          autoplay
          arrows={true}
          className="aspect-[13.16/7.5] w-full overflow-clip rounded-[14px] border-2 border-white"
        >
          {slides.map((slide, index) => (
            <main
              className={cn(
                "relative aspect-[13.16/7.5] min-w-full gap-3 bg-[#E3FFF0]",
                slide.color,
              )}
              key={index}
            >
              <Image
                alt={slide.img}
                src={"/showcase" + slide.img}
                fill
                priority
              />
            </main>
          ))}
        </Carousel>
      </section>
    </section>
  );
};

export default Showcase;

const slides = [
  { id: 1, color: "bg-[#E3FFF0]", img: "/f.png" },
  { id: 2, color: "bg-[#F2ECE2]", img: "/d.png" },
];

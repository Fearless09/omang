"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Carousel } from "nuka-carousel";
import React from "react";

const Showcase = () => {
  return (
    <section className="wrapper mt-[100px] overflow-hidden">
      <section className="overflow-clip">
        <Carousel
          autoplay
          className="aspect-[13.16/8] w-full overflow-clip rounded-[24px] border-2 border-white"
        >
          {slides.map((slide, index) => (
            <main
              className={cn(
                "relative aspect-[13.16/8] min-w-full gap-3 bg-[#E3FFF0]",
                slide.color,
              )}
              key={index}
            >
              <Image
                alt={slide.img}
                src={"/showcase" + slide.img}
                fill
                priority
                // className="object-cover object-center"
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

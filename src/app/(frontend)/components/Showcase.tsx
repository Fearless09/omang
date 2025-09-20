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
          className="aspect-[13.16/8] w-full overflow-clip rounded-[12px] border-2 border-white"
        >
          {slides.map((slide, index) => (
            <main
              className={cn(
                "grid aspect-[13.16/8] min-w-full grid-cols-2 gap-3 bg-[#E3FFF0]",
                slide.color,
              )}
              key={index}
            >
              {slide.imgs.map((img, idx) => (
                <div className="relative" key={idx}>
                  <Image
                    alt={img}
                    src={"/showcase" + img}
                    fill
                    priority
                    // className="object-cover object-center"
                  />
                </div>
              ))}
            </main>
          ))}
        </Carousel>
      </section>
    </section>
  );
};

export default Showcase;

const slides = [
  { id: 1, color: "bg-[#E3FFF0]", imgs: ["/F1.png", "/F2.png"] },
  { id: 2, color: "bg-[#F2ECE2]", imgs: ["/D1.png", "/D2.png"] },
];

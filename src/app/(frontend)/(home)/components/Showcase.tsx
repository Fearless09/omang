"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Carousel } from "nuka-carousel";
import React from "react";

const Showcase = () => {
  return (
    <section className="wrapper mt-[100px] overflow-clip">
      {showcases.map((showcase, index) => (
        <section
          className={cn(
            "relative flex aspect-[13.16/7.5] max-h-[725] justify-between overflow-clip rounded-[10px] border-2 border-white md:rounded-[14px]",
            showcase.bg,
          )}
          key={index}
        >
          {showcase.imgs.map((img, imgIndex) => (
            <div className="-ml-5 max-w-1/2 rotate-12 md:-ml-10" key={imgIndex}>
              {Array.from({ length: 2 }).map((_, arrIndex) => (
                <Image
                  key={arrIndex}
                  alt={img}
                  src={img}
                  width={1532}
                  height={4096}
                  className={cn("animate-slide-up relative mt-5 h-max flex-1", {
                    "[animation-direction:reverse]": imgIndex === 1,
                  })}
                />
              ))}
            </div>
          ))}
        </section>
      ))}
    </section>
  );

  return (
    <section className="wrapper mt-[100px] overflow-hidden">
      <section className="overflow-clip">
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

const showcases = [
  { bg: "bg-[#E3FFF0]", imgs: ["/showcase/s1.png", "/showcase/s2.png"] },
];

const slides = [
  { id: 1, color: "bg-[#E3FFF0]", img: "/f.png" },
  { id: 2, color: "bg-[#F2ECE2]", img: "/d.png" },
];

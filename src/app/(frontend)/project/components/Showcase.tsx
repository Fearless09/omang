import { PROJECT } from "@/data/projects";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Showcase = ({ displayImgs, platform }: PROJECT) => {
  if (platform === "web") {
    return (
      <section className="relative my-25 space-y-10">
        {displayImgs.map((displayImg, index) => (
          <main
            key={index}
            className="grid grid-cols-1 grid-rows-[masonry] items-start gap-8 sm:grid-cols-[.6fr_.4fr]"
          >
            {displayImg.imgs.map((img, imgIndex) => (
              <img
                key={imgIndex}
                alt={img}
                src={img}
                className={cn("rounded-2xl object-contain object-center", {
                  "relative sm:sticky sm:top-25": imgIndex === 0,
                })}
              />
            ))}
          </main>
        ))}
      </section>
    );
  }

  return (
    <section className="my-25 space-y-10">
      {displayImgs.map((displayImg, index) => (
        <div
          key={index}
          className={cn(
            "relative flex items-center justify-evenly gap-5 rounded-xl px-5 py-10",
            displayImg.bgColor,
          )}
          data-aos="fade-up"
        >
          {displayImg.imgs.map((img, imgIndex) => (
            <div
              key={imgIndex}
              className={cn(
                "relative aspect-[2.74/5.6] max-w-[274px] flex-1 drop-shadow-xl drop-shadow-black/50",
              )}
              data-aos="fade-up"
              data-aos-delay={imgIndex * 150}
            >
              <Image
                alt={img}
                src={img}
                fill
                className="object-contain object-center"
              />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Showcase;

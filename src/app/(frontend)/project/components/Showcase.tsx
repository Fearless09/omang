import { PROJECT } from "@/data/projects";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Showcase = ({ displayImgs }: PROJECT) => {
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
              className={cn("relative aspect-[2.74/5.6] max-w-[274px] flex-1")}
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

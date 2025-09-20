import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section className="wrapper mt-[100px]">
      <h1 className="heading">Selected Works</h1>

      <main className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className={cn(
              "group relative aspect-[4.26/4.77] overflow-clip rounded-[12px] border-2 border-white bg-[#F3EAF080] pt-10",
              project.bg,
            )}
          >
            <div
              className={cn(
                "transition-300 relative h-full group-hover:scale-103",
                {
                  "ms-9 aspect-[4.26/4.77]": project.desktop,
                  "mx-auto aspect-[2.9/4.77]": !project.desktop,
                },
              )}
            >
              <Image
                alt={project.title}
                src={"/projects" + project.img}
                fill
                priority
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 flex cursor-pointer items-end justify-between gap-3.5 bg-white/25 px-4 pt-6 pb-5 backdrop-blur-[48px]">
              <div className="flex-1">
                <h2 className="font-libre-bodoni text-xl font-bold">
                  {project.title}
                </h2>
                <p className="mt-2.5 text-sm/[150%] font-medium text-black">
                  {project.subtitle}
                </p>
              </div>

              <div className="transition-300 flex size-0 shrink-0 items-center justify-center rounded-full bg-black text-white group-hover:size-9.5">
                <ArrowRight />
              </div>
            </div>

            {project.comingSoon && (
              <p className="absolute top-1/2 left-1/2 -translate-1/2 rounded-xl bg-white px-7 py-2.5 font-medium shadow-xl">
                Coming Soon.
              </p>
            )}
          </div>
        ))}
      </main>
    </section>
  );
};

export default Projects;

const projects = [
  {
    bg: "bg-[#EFF6FF]",
    img: "/de_shadows.png",
    title: "DE_SHADOWS",
    subtitle:
      "A platform for taking stocks inventory for Gadgets and Electronics.",
    href: "",
    desktop: true,
  },
  {
    bg: "bg-[#F3EAF080]",
    img: "/funpay.png",
    title: "FUNPAY",
    subtitle:
      "A fintech application designed to simplify international money transfers.",
    href: "",
  },
  {
    bg: "bg-[#E8E8E8]",
    img: "/montana.png",
    title: "MONTANA",
    subtitle:
      "A platform thet Revolutionize the dining experience through innovative design and features.",
    href: "",
  },
  {
    bg: "bg-[#E2E8FF]",
    img: "/medshop.png",
    title: "MEDSHOP",
    subtitle:
      "A platform that connect users with other pharmacists and reach out in case of an emergency.",
    href: "",
  },

  {
    bg: "bg-[#F2EAFE]",
    img: "/demo.png",
    title: "Title",
    subtitle: "Subtitle",
    href: "",
    comingSoon: true,
  },
  {
    bg: "bg-[#FEEDEE]",
    img: "/demo.png",
    title: "Title",
    subtitle: "Subtitle",
    href: "",
    comingSoon: true,
  },
];

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { ComponentProps, FC } from "react";
import { projects } from "@/data/projects";
import Link from "next/link";

type Props = FC<ComponentProps<"main">>;

const Projects: Props = ({ className, ...props }) => {
  return (
    <main
      className={cn(
        "mt-12 grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-2 2xl:grid-cols-3",
        className,
      )}
      {...props}
    >
      {projects.map((project, index) => (
        <Link
          key={index}
          className={cn("group relative overflow-clip")}
          href={project.comingSoon ? "#" : `/${project.id}/${project.title}`}
          data-aos="fade-up"
          data-aos-delay={index * 150}
        >
          {/* Mockup */}
          <div className="relative aspect-[6.33/5.77] overflow-clip rounded-[10px] border-2 border-white bg-[#F3EAF080]">
            <Image
              alt={project.title}
              src={project.mockup}
              fill
              className="transition-300 object-cover object-center group-hover:scale-105"
            />

            {project.comingSoon && (
              <p className="absolute top-1/2 left-1/2 -translate-1/2 rounded-xl border border-black/7 bg-white px-7 py-2.5 font-medium shadow-2xl">
                Coming Soon.
              </p>
            )}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <h5 className="font-sf_pro text-2xl font-semibold text-black">
              {project.title}
            </h5>
            <h6 className="font-sf_pro text-xl text-[#8F8F8F]">
              {project.year}
            </h6>
          </div>

          <p className="font-sf_pro mt-4 text-xl text-[#8F8F8F]">
            {project.subtitle}
          </p>

          <ul className="mt-4 flex items-center gap-3">
            {project.tags.map((tag, index) => (
              <li
                key={index}
                className="font-sf_pro transition-300 rounded-[8px] bg-[#BDCDCC] px-3 py-1.5 text-sm tracking-wider text-black hover:bg-[#DBEEFF]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </Link>
      ))}
    </main>
  );
};

export default Projects;

import React from "react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Intro from "./components/Intro";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Tech from "./components/Tech";
import CTA from "./components/CTA";
import Showcase from "./components/Showcase";

const ProjectPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    id: string;
    title: string;
  }>;
}) => {
  const filters = await searchParams;
  const project = projects.find(
    (project) => project.id === filters.id && project.title === filters.title,
  );

  if (!project) {
    return notFound();
  }

  return (
    <section className="wrapper relative z-[2] pt-[100px]">
      <Intro {...project} />

      <main
        className={cn(
          "my-25 flex aspect-[13.18/7.5] items-center justify-center",
          project.hero.bgColor,
        )}
        data-aos="fade-up"
      >
        <div className="relative aspect-[11.63/5.2] w-full max-w-[90%] overflow-clip rounded-lg shadow-2xl">
          <Image
            alt={project.title}
            src={project.hero.img}
            fill
            className="object-cover object-center"
          />
        </div>
      </main>

      <SectionBlock title="Overview of the project" data={project.overview} />
      <SectionBlock title="The Challenge" data={project.challenges} />
      <SectionBlock title="The Solution" data={project.solutions} />

      <Showcase {...project} />

      <SectionBlock title="Result" data={project.results} />

      <Tech {...project} />
      <CTA />
    </section>
  );
};

export default ProjectPage;

const SectionBlock = ({
  data,
  title,
}: {
  title: string;
  data: {
    heading?: string;
    decription: string;
  }[];
}) => {
  return (
    <main className="mx-auto mt-10 max-w-[760px]">
      <h1
        className="font-sf_pro text-2xl font-medium text-black sm:text-3xl"
        data-aos="fade-up"
      >
        {title}
      </h1>
      <div className="mt-5 text-base leading-[1.6] text-pretty text-[#555555] sm:text-lg md:text-xl">
        {data.map((item, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            {item.heading && (
              <h6 className="mt-6 font-medium text-black">{item.heading}</h6>
            )}
            <p className="mt-3.5">{item.decription}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

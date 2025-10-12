import React, { Fragment } from "react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Intro from "./components/Intro";
import { cn } from "@/lib/utils";
import Image from "next/image";

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

      {/* Images */}

      <SectionBlock title="Result" data={project.results} />

      <main className="mx-auto mt-10 max-w-[760px]">
        <h1 className="font-sf_pro text-3xl font-medium text-black">
          Technologies & Skills
        </h1>

        <ul className="mt-9 flex items-center gap-3">
          {project.tech.map((tech, index) => (
            <li
              key={index}
              className="font-sf_pro transition-300 rounded-[10px] bg-[#BDCDCC] px-3.5 py-2 tracking-wider text-black shadow-md shadow-black/15 hover:bg-[#DBEEFF]"
            >
              {tech}
            </li>
          ))}
        </ul>
      </main>
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
      <h1 className="font-sf_pro text-3xl font-medium text-black">{title}</h1>
      <div className="mt-5 text-xl/[1.6] text-pretty text-[#555555]">
        {data.map((item, index) => (
          <Fragment key={index}>
            {item.heading && (
              <h6 className="mt-6 font-medium text-black">{item.heading}</h6>
            )}
            <p className="mt-3.5">{item.decription}</p>
          </Fragment>
        ))}
      </div>
    </main>
  );
};

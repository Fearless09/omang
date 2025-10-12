"use client";

import { PROJECT } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Intro = ({ category, client, role, subtitle, title, year }: PROJECT) => {
  const router = useRouter();

  return (
    <section className="w-full max-w-[905px]">
      <button
        className="flex cursor-pointer items-center gap-2 text-sm font-medium text-[#737385] hover:underline"
        onClick={() => router.back()}
      >
        <span className="flex size-6.5 shrink-0 items-center justify-center rounded-full bg-[#141B34] text-white">
          <ArrowLeft className="size-4.5" />
        </span>
        Back to work
      </button>

      <div className="mt-6 flex items-center justify-between">
        <h1 className="text-6xl font-medium text-black">{title}</h1>
        <h6 className="text-base font-semibold text-[#8F8F8F]">{year}</h6>
      </div>

      <p className="mt-6 text-xl text-[#8F8F8F]">{subtitle}</p>

      <hr className="my-8 border-[#E5E5E5]" />

      <main className="flex items-start justify-between">
        <TextBlock heading="Client" value={client} />
        <TextBlock heading="Role" value={role} />
        <TextBlock heading="Category" value={category} />
      </main>

      <hr className="mt-7 border-[#E5E5E5]" />
    </section>
  );
};

export default Intro;

const TextBlock = ({ heading, value }: { heading: string; value: string }) => {
  return (
    <div className="text-base">
      <h5 className="text-[#8F8F8F]">{heading}</h5>
      <p className="mt-1.5 font-medium text-black">{value}</p>
    </div>
  );
};

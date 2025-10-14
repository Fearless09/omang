import { SocialLinks } from "@/components/shared/Navbar";
import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

const CTA = () => {
  return (
    <main className="relative mt-25 overflow-clip rounded-xl bg-[#DEECFB]/60 px-5 py-12">
      <div className="absolute -top-2 right-10 aspect-square w-[270px]">
        <Image
          alt=""
          src={"/appreciation.png"}
          fill
          className="object-contain object-center"
        />
      </div>

      <div className="relative z-1 flex flex-col items-center justify-center text-center text-pretty">
        <Heart className="size-10 fill-[#D0527F] stroke-[#D0527F] sm:size-12" />

        <h1 className="mt-8 text-5xl font-semibold text-[#0E3653]">
          Thanks for watching
        </h1>

        <p className="mt-5 text-xl text-[#8E8E8E]">
          Open to working on projects with you, contact via email
        </p>
        <p className="mt-3 text-xl text-[#8E8E8E]">omangthomas001@gmail.com</p>

        <ul className="mt-6 flex items-center gap-3.5">
          <SocialLinks />
        </ul>
      </div>
    </main>
  );
};

export default CTA;

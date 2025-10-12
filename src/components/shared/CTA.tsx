import React from "react";
import { SocialLinks } from "./Navbar";
import Link from "next/link";
import { PhoneIcon } from "lucide-react";

const CTA = () => {
  return (
    <section className="mt-[100px] px-4">
      <section className="wrapper rounded-[25px] bg-gradient-to-l from-[#EEE3E7] to-[#DCEEFF] px-6 py-10 md:px-12 md:pt-[52px] md:pb-[56px]">
        <div className="flex items-center justify-end gap-3.5">
          <SocialLinks />
        </div>

        <main className="font-inter mx-auto mt-7 w-full max-w-[688px] text-center text-[#404040]">
          <h1 className="text-4xl/[1.25] font-semibold sm:text-5xl/[60px] md:text-6xl/[80px] lg:text-7xl/[100px] xl:text-8xl/[120px]">
            Have an idea? Let&apos;s talk.
          </h1>

          <p className="mt-5 text-lg/[32px] md:text-xl/[36px] lg:text-[22px]/[38px]">
            We Create Visually attractive design from concept to final result.
            We create solutions that are bold and forward-looking.
          </p>

          <Link
            href={"https://wa.me/2349055584700"}
            target="_blank"
            className="transition-300 mt-8 inline-block cursor-pointer rounded-full bg-black px-7 py-3 text-white hover:bg-[#404040] active:scale-98"
          >
            Contact Now
          </Link>

          <p className="mt-3 font-mono text-sm font-semibold text-[#5B5B5B]">
            +234 905 558 4700
          </p>
        </main>
      </section>
    </section>
  );
};

export default CTA;


// Hi, I am desing a portfolio for a ui/ux designer, I want you to help me design a page that list of the selected works of the designer in card format, when the card is click it should take me to the work page that give me the details about the work/project. Can you do this? Thanks
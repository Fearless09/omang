"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Linkedin02Icon,
  MailAtSign01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Tooltip } from "react-tooltip";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="wrapper relative z-10 flex items-center justify-between py-7">
      <div className="hidden shrink-0 items-center gap-4 md:flex">
        <span className="relative h-[68px] w-[58px] overflow-clip rounded-[100%]">
          <Image
            alt="Thomas Omang"
            src={"/profile.jpg"}
            fill
            priority
            className="object-cover object-center"
          />
        </span>
        <div className="font-sf_pro flex flex-col gap-1 text-base/[100%] font-medium">
          <span className="text-[#5B5B5B]">I&apos;m</span>
          <span className="text-black">
            <span className="ipad:inline hidden">Omang,</span> Thomas Omang
          </span>
        </div>
      </div>

      <ul className="fixed top-5 left-1/2 flex h-14 w-full max-w-[250px] -translate-x-1/2 items-center justify-between gap-3 rounded-full bg-black px-8 py-3.5 text-white sm:max-w-[300px] sm:px-12 sm:py-5 md:top-auto">
        {navLinks.map((link, index) => (
          <li key={index} className="relative shrink-0">
            <Link
              href={link.href}
              className={cn("transition-300 text-sm sm:text-base", {
                "font-semibold": pathname === link.href,
              })}
              target={link.href.startsWith("http") ? "_blank" : "_self"}
            >
              {link.name}
            </Link>
            {pathname === link.href && (
              <span className="absolute left-1/2 block size-1.5 -translate-x-1/2 animate-pulse rounded-full bg-[#F5A7BC]" />
            )}
          </li>
        ))}
      </ul>

      <ul className="hidden items-center gap-2.5 md:flex">
        <SocialLinks />
      </ul>
    </header>
  );
};

export default Navbar;

export const SocialLinks = ({ sm }: { sm?: boolean }) => {
  return socialLinks.map((link, index) => (
    <React.Fragment key={index}>
      <Link
        href={link.href}
        target="_blank"
        className={cn(
          "transition-300 flex size-11 items-center justify-center rounded-full bg-black text-white hover:bg-black/80 active:scale-98",
          { "size-7.5": sm },
        )}
        data-tooltip-id={link.name}
      >
        <HugeiconsIcon
          icon={link.icon}
          className={cn("size-6", { "size-3.5": sm })}
        />
      </Link>
      <Tooltip id={link.name} content={link.name} />
    </React.Fragment>
  ));
};

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/omang-thomas-a6519b228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: Linkedin02Icon,
  },
  {
    name: "Mail",
    href: "mailto:omangthomas001@gmail.com",
    icon: MailAtSign01Icon,
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/2349055584700",
    icon: WhatsappIcon,
  },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  // {name: "Services", href: "#services"},
  // {name: "Portfolio", href: "#portfolio"},
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1KyGDeVTVJ8KUG5wuAKJk-3v5DDSvN18a/view?usp=drivesdk",
  },
];

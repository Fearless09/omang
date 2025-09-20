"use client";

import { OmangSvg } from "@/components/shared/Svg";
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

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="wrapper relative z-[2] flex items-center justify-between py-7">
      <OmangSvg className="relative hidden aspect-[9.1/3.1] w-full max-w-[90px] md:inline-block" />

      <nav className="fixed top-5 left-1/2 flex h-14 w-full max-w-[250px] -translate-x-1/2 items-center justify-between gap-3 rounded-full bg-black px-8 py-3.5 text-white sm:max-w-[300px] sm:px-12 sm:py-5 md:top-auto">
        {navLinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={cn("transition-300 text-sm sm:text-base", {
              "font-semibold": pathname === link.href,
            })}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <ul className="hidden items-center gap-2.5 md:flex">
        {socialLinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            title={link.name}
            className="transition-300 flex size-11 items-center justify-center rounded-full bg-black text-white hover:bg-black/80 active:scale-98"
          >
            <HugeiconsIcon icon={link.icon} className="size-6" />
          </Link>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin02Icon,
  },
  {
    name: "Mail",
    href: "#",
    icon: MailAtSign01Icon,
  },
  {
    name: "Whatsapp",
    href: "#",
    icon: WhatsappIcon,
  },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  // {name: "Services", href: "#services"},
  // {name: "Portfolio", href: "#portfolio"},
  { name: "Contact", href: "#contact" },
];

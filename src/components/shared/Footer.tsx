"use client";

import React from "react";
import { navLinks, SocialLinks } from "./Navbar";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-25 bg-[#DEECFB] pt-11 pb-6">
      <section className="wrapper">
        <main className="flex flex-col items-center justify-between gap-y-5 sm:flex-row">
          <h1 className="font-sf_pro text-2xl font-semibold text-black">
            Omang, Thomas Omang
          </h1>

          <ul className="flex items-center gap-3.5">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  className="transition-300 font-sf_pro text-sm font-medium tracking-wide text-black underline-offset-2 hover:underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </main>

        <hr className="mt-9 mb-6 border-[#B6B6B6]" />

        <main className="flex flex-col items-center justify-between gap-y-5 sm:flex-row">
          <p className="font-sf_pro text-xs text-[#898A8D]">
            Copyright &copy; {new Date().getFullYear()} Omang portfolio. All
            right reserved
          </p>

          <ul className="flex items-center gap-2">
            <SocialLinks sm />
          </ul>
        </main>
      </section>
    </footer>
  );
};

export default Footer;

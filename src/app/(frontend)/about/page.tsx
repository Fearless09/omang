import React from "react";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Approach from "./components/Approach";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Availability from "./components/Availability";
import Contacts from "./components/Contacts";

const Page = () => {
  return (
    <section>
      <Hero />
      <Stats />
      <Approach />
      <Works />
      <Skills />
      <Availability />
      <Contacts />
    </section>
  );
};

export default Page;

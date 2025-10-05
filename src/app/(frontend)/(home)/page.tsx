import Hero from "./components/Hero";
import HowICreate from "./components/HowICreate";
import Works from "./components/Works";
import Showcase from "./components/Showcase";

export default function Home() {
  return (
    <section>
      <Hero />
      <Showcase />
      <HowICreate />
      <Works />
    </section>
  );
}

import Background from "./components/Background";
import Hero from "./components/Hero";
import HowICreate from "./components/HowICreate";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Showcase from "./components/Showcase";

export default function Home() {
  return (
    <section className="min-h-dvh w-screen overflow-clip pb-[100px]">
      <Background />
      <Navbar />
      <Hero />
      <Showcase />
      <HowICreate />
      <Projects />
    </section>
  );
}

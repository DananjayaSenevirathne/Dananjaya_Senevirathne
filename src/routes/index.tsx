import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";
import { IntroLoader } from "@/components/IntroLoader";
import { Nav } from "@/components/Nav";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { MiniProjects } from "@/components/sections/MiniProjects";
import { Timeline } from "@/components/sections/Timeline";
import { Achievements } from "@/components/sections/Achievements";
import { BeyondCode } from "@/components/sections/BeyondCode";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <IntroLoader onDone={() => setReady(true)} />

      {ready && <SmoothScroll />}

      <Cursor />
      <Nav />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <MiniProjects />
        <Timeline />
        <Achievements />
        <BeyondCode />
        <Contact />
      </main>
    </>
  );
}
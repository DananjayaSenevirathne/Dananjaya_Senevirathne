import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    n: "01",
    name: "WorkzUp",
    overview:
      "A full-stack web-based job matching platform connecting employers and job seekers.",
    role: "Full Stack Developer",
    hue: "oklch(0.92 0.04 60)",
  },
  {
    n: "02",
    name: "Food Delivery App",
    overview:
      "Real-time food ordering platform with authentication and order tracking.",
    role: "Full Stack Developer",
    hue: "oklch(0.9 0.05 200)",
  },
  {
    n: "03",
    name: "E-Commerce Clothing",
    overview:
      "Scalable e-commerce platform with payments, authentication, and product management.",
    role: "Full Stack Developer",
    hue: "oklch(0.93 0.03 140)",
  },
  {
    n: "04",
    name: "Loan Approval Prediction",
    overview:
      "Machine learning system that predicts loan approvals and estimates maximum loan amounts.",
    role: "ML Developer",
    hue: "oklch(0.92 0.04 330)",
  },
];

function ProjectCard({ p }: { p: (typeof PROJECTS)[0] }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <div ref={ref} className="relative py-20 md:py-32">
      <div className="grid grid-cols-12 gap-6">
        <motion.div
          style={{ y }}
          className="col-span-12 aspect-[16/10] overflow-hidden rounded-lg md:col-span-7"
        >
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ backgroundColor: p.hue }}
          >
            <span className="font-display text-[12vw] text-foreground/15">
              {p.name.slice(0, 1)}
            </span>
          </div>
        </motion.div>

        <div className="col-span-12 flex flex-col justify-end md:col-span-5">
          <h3 className="font-display text-5xl md:text-7xl">
            {p.name}
          </h3>

          <p className="mt-6 text-muted-foreground">
            {p.overview}
          </p>

          <a
            href="#"
            className="group mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]"
          >
            Case Study
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative px-6 md:px-10">
      <div className="grid grid-cols-12 gap-6 pt-32">
        <div className="col-span-12 flex items-baseline gap-4 md:col-span-3">
          <span className="text-eyebrow text-muted-foreground">(03)</span>
          <span className="text-eyebrow text-muted-foreground">
            Selected Work
          </span>
        </div>

        <h2 className="col-span-12 text-huge md:col-span-9">
          Featured <span className="italic">projects.</span>
        </h2>
      </div>

      <div className="mt-12 divide-y divide-border">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </section>
  );
}
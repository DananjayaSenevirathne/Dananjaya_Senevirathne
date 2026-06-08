import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    year: "2020",
    title: "Completed G.C.E Ordinary Level",
    body: "Successfully completed G.C.E Ordinary Level Examination at St. Sylvester's College, Kandy, building a strong academic foundation and developing an interest in technology.",
  },
  {
    year: "2022",
    title: "G.C.E Advanced Level - Physical Science",
    body: "Completed G.C.E Advanced Level in the Physical Science stream at St. Sylvester's College, Kandy, studying Combined Mathematics, Physics, and Chemistry.",
  },
  {
    year: "2024",
    title: "Completed Diploma in Information Technology",
    body: "Successfully completed Diploma in Information Technology at SLIIT, strengthening programming, databases, networking, and software development fundamentals.",
  },
  {
    year: "2025",
    title: "Started BSc (Hons) Computer Science",
    body: "Began BSc (Hons) Computer Science at IIT Sri Lanka, affiliated with the University of Westminster, focusing on software engineering, web development, and modern computing technologies.",
  },
  {
    year: "2026",
    title: "Building Projects & Seeking Opportunities",
    body: "Developing full-stack applications, machine learning projects, and professional portfolio work while actively pursuing internship opportunities and industry experience.",
  },
];

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      id="timeline"
      ref={ref}
      className="relative px-6 py-32 md:px-12 md:py-48"
    >
      {/* Header */}
      <div className="mb-24 grid grid-cols-12 gap-6">
        <div className="col-span-12 flex items-baseline gap-4 md:col-span-3">
          <span className="text-eyebrow text-muted-foreground">
            (05)
          </span>

          <span className="text-eyebrow text-muted-foreground">
            Journey
          </span>
        </div>

        <h2 className="col-span-12 text-huge md:col-span-9">
          A <span className="italic">timeline.</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-[1400px]">

        {/* Center Line */}
        <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2">
          <motion.div
            style={{ height: lineHeight }}
            className="w-px origin-top bg-foreground"
          />
        </div>

        <div className="space-y-32">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.year}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative pl-12 md:grid md:grid-cols-2 md:gap-24 md:pl-0"
            >
              {/* Dot */}
              <div className="absolute left-3 top-10 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-background bg-[var(--signal)] md:left-1/2" />

              {/* Year */}
              <div
                className={`flex ${
                  i % 2 === 0
                    ? "justify-end md:pr-44"
                    : "justify-end md:pr-8"
                }`}
              >
                <div className="w-[500px] text-right">
                  <div className="font-display text-[7rem] italic leading-none text-foreground/10 md:text-[10rem]">
                    {step.year}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex justify-start md:pl-24">
                <div className="max-w-[650px]">
                  <h3 className="font-display text-3xl leading-[1.1] md:text-5xl">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
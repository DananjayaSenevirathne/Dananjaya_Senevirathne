import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MINI = [
  { name: "Coffee Shop Website", tag: "Web" },
  { name: "Student Enrollment", tag: "System" },
  { name: "Portfolio Website", tag: "Web" },
  { name: "Task Manager", tag: "Productivity" },
  { name: "Weather App", tag: "Data" },
  { name: "Calculator", tag: "Utility" },
];

export function MiniProjects() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-35%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-32 md:py-48"
    >
      <div className="grid grid-cols-12 gap-6 px-6 md:px-10">
        <div className="col-span-12 flex items-baseline gap-4 md:col-span-3">
          <span className="text-eyebrow text-muted-foreground">(04)</span>
          <span className="text-eyebrow text-muted-foreground">Lab</span>
        </div>

        <h2 className="col-span-12 text-huge md:col-span-9">
          Mini <span className="italic">experiments.</span>
        </h2>
      </div>

      <motion.div
        style={{ x }}
        className="mt-20 flex gap-6 px-6 md:gap-10 md:px-10"
      >
        {MINI.map((m, i) => (
          <motion.div
            key={m.name}
            whileHover={{ scale: 1.05, rotate: 0 }}
            style={{ rotate: i % 2 === 0 ? -3 : 3 }}
            className="group relative flex h-[420px] w-[300px] shrink-0 cursor-pointer flex-col justify-between rounded-lg border border-border bg-card p-6 md:h-[480px] md:w-[360px]"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground">
                0{i + 1} / 0{MINI.length}
              </span>

              <span className="font-mono text-xs text-muted-foreground">
                {m.tag}
              </span>
            </div>

            <div>
              <h3 className="font-display text-4xl md:text-5xl">
                {m.name}
              </h3>

              <div className="mt-4 h-px w-full bg-border" />

              <div className="mt-4 flex items-center justify-between font-mono text-xs">
                <span>Open Demo</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

const MINI = [
  {
    name: "Workzup Landing Page",
    tag: "Web",
    description:
      "Official website for Workzup, showcasing digital solutions, services, team information, and company portfolio.",
    link: "https://github.com/DananjayaSenevirathne/workzup",
  },
  {
    name: "Smart Campus API",
    tag: "Backend",
    description:
      "A Java-based REST API for monitoring campus environments through room management, sensor tracking, and real-time data collection.",
    link: "https://github.com/DananjayaSenevirathne/smart-campus-api",
  },
  {
    name: "Portfolio Website",
    tag: "Web",
    description:
      "A responsive portfolio website built to showcase projects, skills, and experience with a modern and interactive design.",
    link: "https://github.com/DananjayaSenevirathne",
  },
  {
    name: "Loan Approval System",
    tag: "ML",
    description:
      "A predictive analytics solution that evaluates loan applications and forecasts loan amounts using machine learning techniques.",
    link: "https://github.com/DananjayaSenevirathne",
  },
];

// Infinite effect
const LOOP_PROJECTS = [...MINI, ...MINI, ...MINI];

export function MiniProjects() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xTransform = useTransform(
  scrollYProgress,
  [0, 1],
  ["0%", "-50%"]
);

const x = useSpring(xTransform, {
  stiffness: 25,
  damping: 30,
  mass: 1,
});

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 md:py-32"
    >
      {/* HEADER */}

      <div className="grid grid-cols-12 gap-6 px-6 md:px-10">
        <div className="col-span-12 flex items-baseline gap-4 md:col-span-3">
          <span className="text-eyebrow text-muted-foreground">
            (04)
          </span>

          <span className="text-eyebrow text-muted-foreground">
            Lab
          </span>
        </div>

        <h2
          className="col-span-12 font-display text-[clamp(3rem,14vw,4.5rem)] leading-none md:col-span-9 md:text-8xl"
        >
          Mini <span className="italic">experiments.</span>
        </h2>
      </div>

      {/* CARDS */}

      <motion.div
        style={{ x }}
        className="mt-14 flex gap-5 px-6 md:mt-20 md:gap-8 md:px-10"
      >
        {LOOP_PROJECTS.map((m, i) => (
          <motion.a
            key={`${m.name}-${i}`}
            href={m.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.04,
              y: -12,
            }}
            transition={{
              duration: 0.35,
            }}
            style={{
              rotate: i % 2 === 0 ? -1.5 : 1.5,
            }}
            className="group relative flex h-[360px] w-[280px] shrink-0 flex-col justify-between rounded-[24px] border border-white/10 bg-[#030A2A] p-6 shadow-xl md:h-[420px] md:w-[330px] md:p-8"
          >
            {/* TOP */}

            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-white/40">
                0{(i % MINI.length) + 1} / 0{MINI.length}
              </span>

              <span className="font-mono text-xs text-white/50">
                {m.tag}
              </span>
            </div>

            {/* DESCRIPTION */}

            <div className="mt-8 min-h-[96px] md:min-h-[110px]">
              <p
                className="
                  max-w-[220px]
                  text-sm
                  leading-7
                  text-white/75
                "
              >
                {m.description}
              </p>
            </div>

            {/* TITLE */}

            <div>
              <h3
                className="font-display text-3xl leading-none text-white md:text-4xl"
              >
                {m.name}
              </h3>

              <div className="mt-6 h-px w-full bg-white/10" />

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-between
                  font-mono
                  text-xs
                  text-white
                "
              >
                <span>View Project</span>

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
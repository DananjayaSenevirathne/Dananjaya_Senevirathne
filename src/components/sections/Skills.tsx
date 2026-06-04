import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Cpu,
  Brain,
  Palette,
  ChevronRight,
} from "lucide-react";

const CATEGORIES = [
  {
    title: "Full Stack Development",
    code: "WEB",
    icon: Code2,
    desc: "Building scalable, high-performance web applications using modern frontend and backend technologies. From intuitive user interfaces to robust backend architectures, I create complete digital products that deliver real business value.",
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "Programming",
    code: "DEV",
    icon: Cpu,
    desc: "Strong foundation in programming principles, problem solving, software architecture, and modern development practices.",
    tech: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C#",
    ],
  },
  {
    title: "AI / Machine Learning",
    code: "ML",
    icon: Brain,
    desc: "Exploring machine learning models, data analysis, predictive systems, and AI-powered solutions to solve real-world challenges.",
    tech: [
      "Scikit Learn",
      "Pandas",
      "NumPy",
      "Feature Engineering",
      "Data Analysis",
    ],
  },
  {
    title: "Design & Collaboration",
    code: "UX",
    icon: Palette,
    desc: "Creating clean user experiences while collaborating efficiently within teams using modern design and development workflows.",
    tech: [
      "Figma",
      "Canva",
      "Git",
      "GitHub",
      "Agile",
      "OOP",
    ],
  },
];

export function Skills() {
  const [active, setActive] = useState(0);

  const current = CATEGORIES[active];
  const CurrentIcon = current.icon;

  return (
    <section
      id="skills"
      className="relative px-6 py-32 md:px-12 md:py-40"
    >
      {/* Header */}
      <div className="mb-20 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              (02)
            </span>

            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Capabilities
            </span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-9">
          <h2 className="text-huge">
            What I <span className="italic">do.</span>
          </h2>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid items-start gap-16 lg:grid-cols-[1fr_450px]">

        {/* LEFT SIDE - CARDS */}
        <div className="space-y-5">
          {CATEGORIES.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.button
                key={item.title}
                onClick={() => setActive(index)}
                whileHover={{
                  x: 10,
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.3,
                }}
                className={`group flex w-full items-center justify-between rounded-[32px] border p-8 text-left transition-all duration-500 ${
                  active === index
                    ? "bg-[#111827] text-white shadow-2xl"
                    : "bg-background hover:bg-accent"
                }`}
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs opacity-60">
                    0{index + 1}
                  </span>

                  <h3 className="font-display text-3xl md:text-5xl">
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center gap-5">
                  <span className="font-mono text-xs uppercase opacity-60">
                    {item.code}
                  </span>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                      active === index
                        ? "bg-white/10"
                        : "bg-black/5"
                    }`}
                  >
                    <Icon size={22} />
                  </div>

                  <motion.div
                    animate={{
                      x: active === index ? 5 : 0,
                    }}
                  >
                    <ChevronRight size={22} />
                  </motion.div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* RIGHT SIDE - STICKY PANEL */}
        <div className="hidden lg:block">
          <div className="sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground text-background">
                    <CurrentIcon size={30} />
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      Core Expertise
                    </p>
                  </div>
                </div>

                <h3 className="font-display text-5xl leading-none">
                  {current.title}
                </h3>

                <p className="mt-8 mb-10 text-lg leading-8 text-muted-foreground">
                  {current.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {current.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-4 py-2 font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
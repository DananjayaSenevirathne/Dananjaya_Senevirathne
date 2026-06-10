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
  "HTML",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "CSS",
  "Tailwind CSS",
]
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
      "Postman",
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
      className="relative px-6 py-24 md:px-12 md:py-40"
    >
      {/* Header */}
      <div className="mb-16 grid grid-cols-12 gap-6 md:mb-20">
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
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_450px] lg:gap-16">

        {/* LEFT SIDE - CARDS */}
        <div className="space-y-4 md:space-y-5">
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
                className={`group flex w-full flex-col items-start justify-between gap-5 rounded-[32px] border p-6 text-left transition-all duration-500 md:flex-row md:items-center md:p-8 ${
                  active === index
                    ? "bg-[#111827] text-white shadow-2xl"
                    : "bg-background hover:bg-accent"
                }`}
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="font-mono text-xs opacity-60">
                    0{index + 1}
                  </span>

                  <h3 className="font-display text-2xl md:text-5xl">
                    {item.title}
                  </h3>
                </div>

                <div className="flex w-full items-center justify-between gap-5 md:w-auto md:justify-start">
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
        <div className="block lg:block">
          <div className="mt-6 lg:sticky lg:top-32 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                <div className="mb-6 flex items-center gap-4 md:mb-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground text-background">
                    <CurrentIcon size={30} />
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      Core Expertise
                    </p>
                  </div>
                </div>

                <h3 className="font-display text-4xl leading-none md:text-5xl">
                  {current.title}
                </h3>

                <p className="mt-6 mb-8 text-base leading-7 text-muted-foreground md:mt-8 md:mb-10 md:text-lg md:leading-8">
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
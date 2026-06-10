import { motion } from "framer-motion";
import { FadeUp } from "../Reveal";

const TRAITS = [
  "Full Stack Development",
  "Machine Learning",
  "React Development",
  "UI / UX Design",
  "Problem Solving",
  "Team Collaboration",
  "Software Engineering",
  "TypeScript",
  "Node.js",
  "Continuous Learning",
];

const QUOTE =
  "I'm Dananjaya Senevirathne, a Computer Science undergraduate passionate about building impactful digital experiences. My journey combines full-stack development, machine learning, and modern web technologies to transform ideas into practical solutions. I enjoy solving complex problems, collaborating with teams, and continuously exploring emerging technologies that create meaningful value for people and businesses. Every project is an opportunity to innovate, learn, and deliver experiences that make a difference.";

export function About() {
  const words = QUOTE.split(" ");

  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 md:px-12 md:py-48"
    >
      {/* Background Text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h2 className="select-none font-display text-[22vw] italic text-black/[0.03] md:text-[15vw]">
          Who I'm
        </h2>
      </div>

      {/* Header */}
      <div className="relative z-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              (01)
            </span>

            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Who I'm
            </span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-9">
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-display text-[clamp(3rem,14vw,4rem)] italic leading-none tracking-[-0.05em] md:text-[8rem]"
          >
            Who I'm
          </motion.h2>
        </div>
      </div>

      {/* Main Text */}
      <div className="relative z-10 mt-24 grid grid-cols-12 gap-6">
        <div className="hidden md:col-span-2 md:block" />

        <div className="col-span-12 md:col-span-9">
          <p className="font-display text-2xl leading-[1.2] md:text-4xl">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0.15 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.025,
                }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </p>
        </div>
      </div>

      {/* Traits */}
{/* Skills Marquee */}
<div className="relative z-10 mt-24 overflow-hidden border-y border-border py-8 md:mt-32 md:py-10">
  <motion.div
    animate={{
      x: ["0%", "-50%"],
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "linear",
    }}
    className="flex whitespace-nowrap"
  >
    {[...TRAITS, ...TRAITS, ...TRAITS].map((trait, index) => (
      <div
        key={index}
        className="mx-6 flex items-center gap-5 md:mx-10 md:gap-8"
      >
        <span className="font-mono text-xs tracking-[0.25em] text-muted-foreground">
          {String((index % TRAITS.length) + 1).padStart(2, "0")}
        </span>

        <h3 className="font-display text-xl italic md:text-5xl">
          {trait}
        </h3>

        <span className="text-2xl opacity-30 md:text-4xl">
          •
        </span>
      </div>
    ))}
  </motion.div>
</div>
    </section>
  );
}
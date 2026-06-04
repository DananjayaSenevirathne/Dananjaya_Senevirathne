import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import portrait from "@/assets/Dananjaya_Senevirathne1.png";
import { Magnetic } from "../Magnetic";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start start", "end start"],
});

// IMAGE
const imageY = useTransform(scrollYProgress, [0, 1], [0, 250]);
const imageX = useTransform(scrollYProgress, [0, 1], [0, 150]);
const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
const imageOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);

// TEXT
const helloX = useTransform(scrollYProgress, [0, 1], [0, -250]);
const itsMeX = useTransform(scrollYProgress, [0, 1], [0, -500]);
const nameX = useTransform(scrollYProgress, [0, 1], [0, -750]);
const fullStackX = useTransform(scrollYProgress, [0, 1], [0, -350]);

// BLUR EFFECT
const blurValue = useTransform(
  scrollYProgress,
  [0, 0.5],
  ["blur(0px)", "blur(10px)"]
);

const textOpacity = useTransform(
  scrollYProgress,
  [0, 0.5],
  [1, 0.15]
);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* TEXT */}
      <div className="relative z-20 px-8 pt-32 md:px-14">
        <div className="mb-12 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-[var(--signal)]" />
          Portfolio — Vol. 01 / 2026
        </div>

        <div className="relative">
          <h1 className="font-display leading-[0.8] tracking-[-0.08em]">

  <motion.div
    style={{ x: helloX }}
    className="text-[6rem] md:text-[10rem]"
  >
    Hello
  </motion.div>

  <motion.div
    style={{ x: itsMeX }}
    className="italic text-[5rem] md:text-[8rem]"
  >
    It's me
  </motion.div>

  <motion.div
    style={{ x: nameX }}
    className="italic text-[6rem] md:text-[10rem]"
  >
    Dananjaya
  </motion.div>

    <motion.div
    style={{ x: fullStackX }}
    className="italic text-[6rem] md:text-[10rem]"
  
    
  >
    <p className="mt-10 max-w-xl text-xl  italic text-muted-foreground md:text-2xl">
          Full Stack Developer, Computer Science Undergraduate based in Sri Lanka.
        </p>
  </motion.div>


  </h1>
        </div>

        

        <div className="mt-12 flex flex-wrap gap-4">
          <Magnetic>
            <a
              href="#resume"
              className="inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3 text-background"
            >
              Resume
              <ArrowDownRight size={18} />
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href="#work"
              className="inline-flex items-center gap-3 rounded-full border border-foreground px-7 py-3"
            >
              Projects
              <ArrowUpRight size={18} />
            </a>
          </Magnetic>
        </div>
      </div>

      {/* IMAGE */}
      <motion.div
        style={{
          x: imageY,
          scale: imageScale,
        }}
        className="absolute bottom-0 right-[-5%] z-20"
      >
        <img
          src={portrait}
          alt="Dananjaya"
          className="h-[90vh] md:h-[115vh] w-auto object-contain"
        />
      </motion.div>

      {/* SCROLL */}
      <div className="absolute bottom-0 left-8 z-30 md:left-160">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Scroll Down ↓
        </span>
      </div>
    </section>
  );
}
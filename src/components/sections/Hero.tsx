import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import portrait from "@/assets/Dananjaya_Senevirathne1.png";
import { Magnetic } from "../Magnetic";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const update = () => {
      setIsMobile(media.matches);
    };

    update();
    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

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
const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/cv/Dananjaya_Senevirathne_CV.pdf";
  link.download = "Dananjaya_Senevirathne_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* TEXT */}
      <div className="relative z-20 px-6 pt-24 md:px-14 md:pt-32">
        <div className="mb-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:mb-12 md:text-xs">
          <span className="h-2 w-2 rounded-full bg-[var(--signal)]" />
          Portfolio — Vol. 01 / 2026
        </div>

        <div className="relative">
          <h1 className="font-display leading-[0.8] tracking-[-0.08em]">

  <motion.div
    style={{ x: isMobile ? 0 : helloX }}
    className="text-[clamp(3.5rem,17vw,6.5rem)] md:text-[10rem]"
  >
    Hello
  </motion.div>

  <motion.div
    style={{ x: isMobile ? 0 : itsMeX }}
    className="italic text-[clamp(2.8rem,13vw,5rem)] md:text-[8rem]"
  >
    It's me
  </motion.div>

  <motion.div
    style={{ x: isMobile ? 0 : nameX }}
    className="italic text-[clamp(3.5rem,16vw,6.5rem)] md:text-[10rem]"
  >
    Dananjaya
  </motion.div>

    <motion.div
    style={{ x: isMobile ? 0 : fullStackX }}
    className="italic text-[clamp(3.2rem,15vw,6rem)] md:text-[10rem]"
  
    
  >
    <p className="mt-6 max-w-xl text-base italic text-muted-foreground sm:text-lg md:mt-10 md:text-2xl">
          Full Stack Developer, Computer Science Undergraduate based in Sri Lanka.
        </p>
  </motion.div>


  </h1>
        </div>

        

        <div className="mt-10 flex flex-col gap-4 sm:flex-row md:mt-12">
          <Magnetic>
  <a
    href="/cv/Dananajaya%20senevirathne.pdf"
    download="Dananjaya_Senevirathne_CV.pdf"
    className="inline-flex items-center justify-center gap-3 rounded-full bg-foreground px-7 py-3 text-background"
  >
    Resume
    <ArrowDownRight size={18} />
  </a>
</Magnetic>

          <Magnetic>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-foreground px-7 py-3"
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
          x: isMobile ? 0 : imageY,
          scale: isMobile ? 1 : imageScale,
        }}
        className="relative z-20 mt-14 flex justify-center md:absolute md:bottom-0 md:right-[-5%] md:mt-0"
      >
        <img
          src={portrait}
          alt="Dananjaya"
          className="h-[52vh] w-full max-w-[340px] object-contain sm:h-[60vh] md:h-[115vh] md:max-w-none md:w-auto"
        />
      </motion.div>

      {/* SCROLL */}
      <div className="absolute bottom-0 left-6 z-30 hidden md:block md:left-160">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Scroll Down ↓
        </span>
      </div>
    </section>
  );
}
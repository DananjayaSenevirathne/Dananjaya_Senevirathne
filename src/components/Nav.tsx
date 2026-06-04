import { motion, useScroll, useSpring } from "framer-motion";

export function Nav() {
  const { scrollYProgress } = useScroll();

  const sx = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-50 h-[2px] origin-left bg-foreground"
        style={{ scaleX: sx, width: "100%" }}
      />

      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-5 mix-blend-difference md:px-10">
        <a href="#top" className="font-display text-2xl text-white">
          DS<span className="text-[var(--signal)]">.</span>
        </a>

        <nav className="hidden gap-8 font-mono text-[11px] uppercase tracking-[0.2em] text-white md:flex">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#timeline">Journey</a>
          <a href="#contact">Contact</a>
        </nav>

        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white">
        </span>
      </header>
    </>
  );
}
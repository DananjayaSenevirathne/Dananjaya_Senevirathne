import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const STATS = [
  { value: 6, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Technologies Learned" },
  { value: 2, suffix: "+", label: "Years of Development" },
  { value: 1, suffix: "", label: "Industry Experience" },
];

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2 });
    }
  }, [inView, count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Achievements() {
  return (
    <section className="border-y border-border px-6 py-20 md:px-10 md:py-24">
      <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-background p-5 md:p-10">
            <div className="font-display text-5xl md:text-8xl">
              <Counter to={s.value} />
              {s.suffix}
            </div>

            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:mt-4 md:text-xs">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const STEPS = [
  "Initializing Portfolio",
  "Loading Projects",
  "Connecting Modules",
  "Preparing Experience",
  "Access Granted",
  "Welcome ",
];

export function IntroLoader({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => {
        if (s >= STEPS.length - 1) {
          clearInterval(interval);
          setTimeout(() => setOpen(false), 500);
          setTimeout(onDone, 1100);
          return s;
        }
        return s + 1;
      });
    }, 460);

    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col justify-between bg-black p-6 text-white md:p-10"
          initial={{ opacity: 1 }}
          exit={{
  opacity: 0,
  scale: 1.05,
  clipPath: "inset(0 0 100% 0)",
}}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
            <span>Dananjaya Senevirathne</span>
            <span>Portfolio / 2026</span>
          </div>

          <div className="space-y-3 font-mono text-sm md:text-base">
            {STEPS.map((label, i) => (
              <motion.div
                key={label}
                className="flex items-center gap-4"
                initial={{ opacity: 0.15 }}
                animate={{ opacity: i <= step ? 1 : 0.15 }}
              >
                <span className="w-10 text-white/40">
                  [{String(i).padStart(2, "0")}]
                </span>

                <motion.span
                  className="h-2 w-2 rounded-full"
                  animate={{
                    backgroundColor:
                      i < step ? "#ef4444" : i === step ? "#ef4444" : "#444",
                    scale: i === step ? [1, 1.4, 1] : 1,
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: i === step ? Infinity : 0,
                  }}
                />

                <span className="flex-1">{label}</span>

                <span className="text-white/50">
                  {i < step ? "OK" : i === step ? "..." : ""}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
            <span>Awwwards / Editorial</span>

            <motion.span
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white"
            >
              {Math.round(((step + 1) / STEPS.length) * 100)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
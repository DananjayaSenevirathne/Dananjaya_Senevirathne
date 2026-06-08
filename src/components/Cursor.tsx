import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const sx = useSpring(x, {
    stiffness: 500,
    damping: 40,
    mass: 0.5,
  });

  const sy = useSpring(y, {
    stiffness: 500,
    damping: 40,
    mass: 0.5,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target as HTMLElement;
      setHover(!!target.closest("a,button,[data-magnetic]"));
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[99999] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-black"
        animate={{
          width: hover ? 40 : 12,
          height: hover ? 40 : 12,
        }}
        transition={{
          duration: 0.2,
        }}
      />
    </motion.div>
  );
}
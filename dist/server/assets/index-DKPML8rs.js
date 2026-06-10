import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import { useMotionValue, useSpring, motion, AnimatePresence, useScroll, useTransform, useInView, animate } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Code2, Cpu, Brain, Palette, ChevronRight, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true
    });
    let raf = 0;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}
function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, {
    stiffness: 500,
    damping: 40,
    mass: 0.5
  });
  const sy = useSpring(y, {
    stiffness: 500,
    damping: 40,
    mass: 0.5
  });
  const [hover, setHover] = useState(false);
  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target;
      setHover(!!target.closest("a,button,[data-magnetic]"));
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "pointer-events-none fixed left-0 top-0 z-[99999] hidden md:block",
      style: { x: sx, y: sy },
      children: /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "-translate-x-1/2 -translate-y-1/2 rounded-full bg-black",
          animate: {
            width: hover ? 40 : 12,
            height: hover ? 40 : 12
          },
          transition: {
            duration: 0.2
          }
        }
      )
    }
  );
}
const STEPS$1 = [
  "Initializing Portfolio",
  "Loading Projects",
  "Connecting Modules",
  "Preparing Experience",
  "Access Granted",
  "Welcome "
];
function IntroLoader({ onDone }) {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => {
        if (s >= STEPS$1.length - 1) {
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
  return /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "fixed inset-0 z-[10000] flex flex-col justify-between bg-black p-6 text-white md:p-10",
      initial: { opacity: 1 },
      exit: {
        opacity: 0,
        scale: 1.05,
        clipPath: "inset(0 0 100% 0)"
      },
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/60", children: [
          /* @__PURE__ */ jsx("span", { children: "Dananjaya Senevirathne" }),
          /* @__PURE__ */ jsx("span", { children: "Portfolio / 2026" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 font-mono text-sm md:text-base", children: STEPS$1.map((label, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "flex items-center gap-4",
            initial: { opacity: 0.15 },
            animate: { opacity: i <= step ? 1 : 0.15 },
            children: [
              /* @__PURE__ */ jsxs("span", { className: "w-10 text-white/40", children: [
                "[",
                String(i).padStart(2, "0"),
                "]"
              ] }),
              /* @__PURE__ */ jsx(
                motion.span,
                {
                  className: "h-2 w-2 rounded-full",
                  animate: {
                    backgroundColor: i < step ? "#ef4444" : i === step ? "#ef4444" : "#444",
                    scale: i === step ? [1, 1.4, 1] : 1
                  },
                  transition: {
                    duration: 0.6,
                    repeat: i === step ? Infinity : 0
                  }
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "flex-1", children: label }),
              /* @__PURE__ */ jsx("span", { className: "text-white/50", children: i < step ? "OK" : i === step ? "..." : "" })
            ]
          },
          label
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/60", children: [
          /* @__PURE__ */ jsx("span", { children: "Awwwards / Editorial" }),
          /* @__PURE__ */ jsxs(
            motion.span,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              className: "text-white",
              children: [
                Math.round((step + 1) / STEPS$1.length * 100),
                "%"
              ]
            },
            step
          )
        ] })
      ]
    }
  ) });
}
function Nav() {
  const { scrollYProgress } = useScroll();
  const sx = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "fixed left-0 top-0 z-50 h-[2px] origin-left bg-foreground",
        style: { scaleX: sx, width: "100%" }
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "fixed inset-x-0 top-0 z-40 flex items-center justify-between px-4 py-4 mix-blend-difference md:px-10 md:py-5", children: [
      /* @__PURE__ */ jsxs("a", { href: "#top", className: "font-display text-2xl text-white", children: [
        "DS",
        /* @__PURE__ */ jsx("span", { className: "text-[var(--signal)]", children: "." })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden gap-8 font-mono text-[11px] uppercase tracking-[0.2em] text-white md:flex", children: [
        /* @__PURE__ */ jsx("a", { href: "#about", children: "About" }),
        /* @__PURE__ */ jsx("a", { href: "#work", children: "Work" }),
        /* @__PURE__ */ jsx("a", { href: "#timeline", children: "Journey" }),
        /* @__PURE__ */ jsx("a", { href: "#contact", children: "Contact" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "hidden font-mono text-[11px] uppercase tracking-[0.2em] text-white sm:block" })
    ] })
  ] });
}
const portrait = "/assets/Dananjaya_Senevirathne1-3KZueDE4.png";
function Magnetic({
  children,
  className,
  strength = 0.4
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, {
    stiffness: 200,
    damping: 15
  });
  const sy = useSpring(y, {
    stiffness: 200,
    damping: 15
  });
  const handle = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const leave = () => {
    x.set(0);
    y.set(0);
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      "data-magnetic": true,
      onMouseMove: handle,
      onMouseLeave: leave,
      style: { x: sx, y: sy },
      className,
      children
    }
  );
}
function Hero() {
  const ref = useRef(null);
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
    offset: ["start start", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  useTransform(scrollYProgress, [0, 1], [0, 5]);
  useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);
  const helloX = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const itsMeX = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const nameX = useTransform(scrollYProgress, [0, 1], [0, -750]);
  const fullStackX = useTransform(scrollYProgress, [0, 1], [0, -350]);
  useTransform(
    scrollYProgress,
    [0, 0.5],
    ["blur(0px)", "blur(10px)"]
  );
  useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0.15]
  );
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref,
      id: "top",
      className: "relative min-h-screen overflow-hidden bg-background",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative z-20 px-6 pt-24 md:px-14 md:pt-32", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:mb-12 md:text-xs", children: [
            /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-[var(--signal)]" }),
            "Portfolio — Vol. 01 / 2026"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("h1", { className: "font-display leading-[0.8] tracking-[-0.08em]", children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                style: { x: isMobile ? 0 : helloX },
                className: "text-[clamp(3.5rem,17vw,6.5rem)] md:text-[10rem]",
                children: "Hello"
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                style: { x: isMobile ? 0 : itsMeX },
                className: "italic text-[clamp(2.8rem,13vw,5rem)] md:text-[8rem]",
                children: "It's me"
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                style: { x: isMobile ? 0 : nameX },
                className: "italic text-[clamp(3.5rem,16vw,6.5rem)] md:text-[10rem]",
                children: "Dananjaya"
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                style: { x: isMobile ? 0 : fullStackX },
                className: "italic text-[clamp(3.2rem,15vw,6rem)] md:text-[10rem]",
                children: /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-base italic text-muted-foreground sm:text-lg md:mt-10 md:text-2xl", children: "Full Stack Developer, Computer Science Undergraduate based in Sri Lanka." })
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col gap-4 sm:flex-row md:mt-12", children: [
            /* @__PURE__ */ jsx(Magnetic, { children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/cv/Dananajaya%20senevirathne.pdf",
                download: "Dananjaya_Senevirathne_CV.pdf",
                className: "inline-flex items-center justify-center gap-3 rounded-full bg-foreground px-7 py-3 text-background",
                children: [
                  "Resume",
                  /* @__PURE__ */ jsx(ArrowDownRight, { size: 18 })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(Magnetic, { children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#work",
                className: "inline-flex items-center justify-center gap-3 rounded-full border border-foreground px-7 py-3",
                children: [
                  "Projects",
                  /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
                ]
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            style: {
              x: isMobile ? 0 : imageY,
              scale: isMobile ? 1 : imageScale
            },
            className: "relative z-20 mt-14 flex justify-center md:absolute md:bottom-0 md:right-[-5%] md:mt-0",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: portrait,
                alt: "Dananjaya",
                className: "h-[52vh] w-full max-w-[340px] object-contain sm:h-[60vh] md:h-[115vh] md:max-w-none md:w-auto"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-6 z-30 hidden md:block md:left-160", children: /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground", children: "Scroll Down ↓" }) })
      ]
    }
  );
}
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
  "Continuous Learning"
];
const QUOTE = "I'm Dananjaya Senevirathne, a Computer Science undergraduate passionate about building impactful digital experiences. My journey combines full-stack development, machine learning, and modern web technologies to transform ideas into practical solutions. I enjoy solving complex problems, collaborating with teams, and continuously exploring emerging technologies that create meaningful value for people and businesses. Every project is an opportunity to innovate, learn, and deliver experiences that make a difference.";
function About() {
  const words = QUOTE.split(" ");
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "about",
      className: "relative overflow-hidden px-6 py-24 md:px-12 md:py-48",
      children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("h2", { className: "select-none font-display text-[22vw] italic text-black/[0.03] md:text-[15vw]", children: "Who I'm" }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 grid grid-cols-12 gap-6", children: [
          /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "(01)" }),
            /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Who I'm" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-9", children: /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, y: 80 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
              },
              className: "font-display text-[clamp(3rem,14vw,4rem)] italic leading-none tracking-[-0.05em] md:text-[8rem]",
              children: "Who I'm"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 mt-24 grid grid-cols-12 gap-6", children: [
          /* @__PURE__ */ jsx("div", { className: "hidden md:col-span-2 md:block" }),
          /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-9", children: /* @__PURE__ */ jsx("p", { className: "font-display text-2xl leading-[1.2] md:text-4xl", children: words.map((word, i) => /* @__PURE__ */ jsxs(
            motion.span,
            {
              className: "inline-block",
              initial: { opacity: 0.15 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: {
                duration: 0.4,
                delay: i * 0.025
              },
              children: [
                word,
                " "
              ]
            },
            i
          )) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 mt-24 overflow-hidden border-y border-border py-8 md:mt-32 md:py-10", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            animate: {
              x: ["0%", "-50%"]
            },
            transition: {
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            },
            className: "flex whitespace-nowrap",
            children: [...TRAITS, ...TRAITS, ...TRAITS].map((trait, index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "mx-6 flex items-center gap-5 md:mx-10 md:gap-8",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "font-mono text-xs tracking-[0.25em] text-muted-foreground", children: String(index % TRAITS.length + 1).padStart(2, "0") }),
                  /* @__PURE__ */ jsx("h3", { className: "font-display text-xl italic md:text-5xl", children: trait }),
                  /* @__PURE__ */ jsx("span", { className: "text-2xl opacity-30 md:text-4xl", children: "•" })
                ]
              },
              index
            ))
          }
        ) })
      ]
    }
  );
}
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
      "Tailwind CSS"
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
      "C#"
    ]
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
      "Data Analysis"
    ]
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
      "OOP"
    ]
  }
];
function Skills() {
  const [active, setActive] = useState(0);
  const current = CATEGORIES[active];
  const CurrentIcon = current.icon;
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "skills",
      className: "relative px-6 py-24 md:px-12 md:py-40",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-16 grid grid-cols-12 gap-6 md:mb-20", children: [
          /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "(02)" }),
            /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Capabilities" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-9", children: /* @__PURE__ */ jsxs("h2", { className: "text-huge", children: [
            "What I ",
            /* @__PURE__ */ jsx("span", { className: "italic", children: "do." })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid items-start gap-10 lg:grid-cols-[1fr_450px] lg:gap-16", children: [
          /* @__PURE__ */ jsx("div", { className: "space-y-4 md:space-y-5", children: CATEGORIES.map((item, index) => {
            const Icon = item.icon;
            return /* @__PURE__ */ jsxs(
              motion.button,
              {
                onClick: () => setActive(index),
                whileHover: {
                  x: 10,
                  scale: 1.01
                },
                transition: {
                  duration: 0.3
                },
                className: `group flex w-full flex-col items-start justify-between gap-5 rounded-[32px] border p-6 text-left transition-all duration-500 md:flex-row md:items-center md:p-8 ${active === index ? "bg-[#111827] text-white shadow-2xl" : "bg-background hover:bg-accent"}`,
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 md:gap-6", children: [
                    /* @__PURE__ */ jsxs("span", { className: "font-mono text-xs opacity-60", children: [
                      "0",
                      index + 1
                    ] }),
                    /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl md:text-5xl", children: item.title })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center justify-between gap-5 md:w-auto md:justify-start", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase opacity-60", children: item.code }),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: `flex h-12 w-12 items-center justify-center rounded-full ${active === index ? "bg-white/10" : "bg-black/5"}`,
                        children: /* @__PURE__ */ jsx(Icon, { size: 22 })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        animate: {
                          x: active === index ? 5 : 0
                        },
                        children: /* @__PURE__ */ jsx(ChevronRight, { size: 22 })
                      }
                    )
                  ] })
                ]
              },
              item.title
            );
          }) }),
          /* @__PURE__ */ jsx("div", { className: "block lg:block", children: /* @__PURE__ */ jsx("div", { className: "mt-6 lg:sticky lg:top-32 lg:mt-0", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 },
              transition: { duration: 0.35 },
              children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center gap-4 md:mb-8", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground text-background", children: /* @__PURE__ */ jsx(CurrentIcon, { size: 30 }) }),
                  /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Core Expertise" }) })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "font-display text-4xl leading-none md:text-5xl", children: current.title }),
                /* @__PURE__ */ jsx("p", { className: "mt-6 mb-8 text-base leading-7 text-muted-foreground md:mt-8 md:mb-10 md:text-lg md:leading-8", children: current.desc }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: current.tech.map((tech) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "rounded-full border border-border px-4 py-2 font-mono text-xs",
                    children: tech
                  },
                  tech
                )) })
              ]
            },
            current.title
          ) }) }) })
        ] })
      ]
    }
  );
}
const workzupImg = "/assets/Workzup-OTckvanZ.png";
const foodImg = "/assets/daily-dish-Dfjb2jat.png";
const studentImg = "/assets/Student-CuYMp6TN.png";
const PROJECTS = [
  {
    id: 1,
    n: "01",
    name: "WorkzUp",
    category: "Full Stack Platform",
    overview: "A full-stack web platform that connects job seekers with employers offering hourly, part-time, freelance, and short-term job opportunities in Sri Lanka.",
    description: "Connects job seekers and employers through secure job posting, searching, and skill-based matching.",
    tech: "Next.js • Node.js • PostgreSQL",
    image: workzupImg,
    github: "https://github.com/DananjayaSenevirathne/Workzup",
    demo: "https://workzup.vercel.app"
  },
  {
    id: 2,
    n: "02",
    name: "Food Delivery ",
    category: "Web Application",
    overview: "A modern food delivery platform that allows users to browse menus, manage carts, place orders, make secure online payments, and track order status in real-time.",
    description: "A full-stack food delivery application with user authentication, cart management, online payments, order tracking, and an admin dashboard for managing food items and customer orders.",
    tech: "React • Express • MongoDB",
    image: foodImg,
    github: "https://github.com/DananjayaSenevirathne/Daily-Dish",
    demo: "https://food-delivery.vercel.app"
  },
  {
    id: 3,
    n: "03",
    name: "SmartCampus Management System",
    category: "Education Management Platform",
    overview: "A full-featured campus management solution for handling students, attendance, analytics, and academic reporting.",
    description: "Developed a desktop-based academic management platform with secure authentication, role-based access control, student record management, attendance monitoring, dashboard analytics, and automated PDF/Excel report generation. The system integrates with MySQL for persistent data storage and provides a modern UI built with CustomTkinter for a seamless user experience.",
    tech: "Python • MySQL • CustomTkinter • ReportLab • OpenPyXL • Matplotlib",
    image: studentImg,
    github: "https://github.com/DananjayaSenevirathne/smartcampus-academic-management-system",
    demo: ""
  }
];
function ProjectItem({
  project,
  activeProject,
  setActiveProject
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.7
  });
  useEffect(() => {
    if (isInView) {
      setActiveProject(project);
    }
  }, [isInView, project, setActiveProject]);
  const isActive = activeProject?.id === project.id;
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      animate: {
        opacity: isActive ? 1 : 0.2,
        scale: isActive ? 1 : 0.85,
        filter: isActive ? "blur(0px)" : "blur(4px)"
      },
      transition: {
        duration: 0.7
      },
      className: "min-h-[48vh] flex items-center py-6 md:min-h-[70vh] md:py-0",
      children: /* @__PURE__ */ jsxs("div", { className: "grid w-full grid-cols-1 gap-6 md:grid-cols-12", children: [
        /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsx("span", { className: "font-mono text-2xl text-muted-foreground", children: project.n }) }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-9", children: [
          /* @__PURE__ */ jsx(
            motion.h3,
            {
              animate: {
                y: isActive ? 0 : 40
              },
              transition: {
                duration: 0.6
              },
              className: "\r\n              font-display\r\n              text-4xl\r\n              md:text-8xl\r\n              leading-none\r\n            ",
              children: project.name
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-base text-muted-foreground md:mt-6 md:text-xl", children: project.overview }),
          /* @__PURE__ */ jsx("div", { className: "\r\n            mt-8\r\n            font-mono\r\n            text-xs\r\n            uppercase\r\n            tracking-[0.3em]\r\n            text-muted-foreground\r\n          ", children: project.category })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-start md:col-span-1 md:justify-end", children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-7 w-7" }) })
      ] })
    }
  );
}
function Projects() {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "work",
      className: "px-6 py-24 md:px-12 md:py-32",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-20 md:mb-32", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-eyebrow text-muted-foreground", children: "(03)" }),
            /* @__PURE__ */ jsx("span", { className: "text-eyebrow text-muted-foreground", children: "Selected Work" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs(
            "h2",
            {
              className: "\r\n              mt-10\r\n              text-center\r\n              font-display\r\n              text-[clamp(3rem,15vw,5rem)]\r\n              md:text-[10rem]\r\n              leading-none\r\n            ",
              children: [
                "Featured",
                " ",
                /* @__PURE__ */ jsx("span", { className: "italic", children: "projects." })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12 gap-14 md:gap-24", children: [
          /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-7", children: /* @__PURE__ */ jsx("div", { className: "divide-y divide-border", children: PROJECTS.map((project) => /* @__PURE__ */ jsx(
            ProjectItem,
            {
              project,
              activeProject,
              setActiveProject
            },
            project.id
          )) }) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-5", children: /* @__PURE__ */ jsx("div", { className: "sticky top-24", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: {
                opacity: 0,
                y: 40
              },
              animate: {
                opacity: 1,
                y: 0
              },
              exit: {
                opacity: 0,
                y: -40
              },
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "\r\n                    overflow-hidden\r\n                    rounded-[32px]\r\n                    border\r\n                    border-border\r\n                    bg-white\r\n                  ",
                    children: /* @__PURE__ */ jsx(
                      motion.img,
                      {
                        src: activeProject.image,
                        alt: activeProject.name,
                        initial: {
                          opacity: 0
                        },
                        animate: {
                          opacity: 1
                        },
                        transition: {
                          duration: 0.3
                        },
                        className: "\r\n                      h-[240px]\r\n                      md:h-[350px]\r\n                      w-full\r\n                      object-cover\r\n                    "
                      },
                      activeProject.image
                    )
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "\r\n      font-mono\r\n      text-xs\r\n      uppercase\r\n      tracking-[0.3em]\r\n      text-muted-foreground\r\n    ",
                      children: activeProject.category
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-col items-start justify-between gap-4 sm:flex-row", children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-display text-4xl md:text-5xl", children: activeProject.name }),
                    /* @__PURE__ */ jsxs("div", { className: "flex gap-3 self-end sm:self-auto", children: [
                      /* @__PURE__ */ jsx(
                        "a",
                        {
                          href: activeProject.github,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "\r\n          flex\r\n          h-12\r\n          w-12\r\n          items-center\r\n          justify-center\r\n          rounded-full\r\n          border\r\n          border-border\r\n          transition-all\r\n          duration-300\r\n          hover:scale-110\r\n          hover:bg-black\r\n          hover:text-white\r\n        ",
                          children: /* @__PURE__ */ jsx(Github, { className: "h-5 w-5" })
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "a",
                        {
                          href: activeProject.demo,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "\r\n          flex\r\n          h-12\r\n          w-12\r\n          items-center\r\n          justify-center\r\n          rounded-full\r\n          border\r\n          border-border\r\n          transition-all\r\n          duration-300\r\n          hover:scale-110\r\n          hover:bg-black\r\n          hover:text-white\r\n        ",
                          children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-5 w-5" })
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm leading-7 text-muted-foreground md:text-base md:leading-8", children: activeProject.description }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "\r\n      mt-8\r\n      font-mono\r\n      text-xs\r\n      uppercase\r\n      tracking-[0.3em]\r\n      text-muted-foreground\r\n    ",
                      children: activeProject.tech
                    }
                  )
                ] })
              ]
            },
            activeProject.id
          ) }) }) })
        ] })
      ]
    }
  );
}
const MINI = [
  {
    name: "Workzup Landing Page",
    tag: "Web",
    description: "Official website for Workzup, showcasing digital solutions, services, team information, and company portfolio.",
    link: "https://github.com/DananjayaSenevirathne/workzup"
  },
  {
    name: "Smart Campus API",
    tag: "Backend",
    description: "A Java-based REST API for monitoring campus environments through room management, sensor tracking, and real-time data collection.",
    link: "https://github.com/DananjayaSenevirathne/smart-campus-api"
  },
  {
    name: "Portfolio Website",
    tag: "Web",
    description: "A responsive portfolio website built to showcase projects, skills, and experience with a modern and interactive design.",
    link: "https://github.com/DananjayaSenevirathne"
  },
  {
    name: "Loan Approval System",
    tag: "ML",
    description: "A predictive analytics solution that evaluates loan applications and forecasts loan amounts using machine learning techniques.",
    link: "https://github.com/DananjayaSenevirathne"
  }
];
const LOOP_PROJECTS = [...MINI, ...MINI, ...MINI];
function MiniProjects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const xTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-50%"]
  );
  const x = useSpring(xTransform, {
    stiffness: 25,
    damping: 30,
    mass: 1
  });
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref,
      className: "relative overflow-hidden py-20 md:py-32",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12 gap-6 px-6 md:px-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "col-span-12 flex items-baseline gap-4 md:col-span-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-eyebrow text-muted-foreground", children: "(04)" }),
            /* @__PURE__ */ jsx("span", { className: "text-eyebrow text-muted-foreground", children: "Lab" })
          ] }),
          /* @__PURE__ */ jsxs(
            "h2",
            {
              className: "col-span-12 font-display text-[clamp(3rem,14vw,4.5rem)] leading-none md:col-span-9 md:text-8xl",
              children: [
                "Mini ",
                /* @__PURE__ */ jsx("span", { className: "italic", children: "experiments." })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            style: { x },
            className: "mt-14 flex gap-5 px-6 md:mt-20 md:gap-8 md:px-10",
            children: LOOP_PROJECTS.map((m, i) => /* @__PURE__ */ jsxs(
              motion.a,
              {
                href: m.link,
                target: "_blank",
                rel: "noopener noreferrer",
                whileHover: {
                  scale: 1.04,
                  y: -12
                },
                transition: {
                  duration: 0.35
                },
                style: {
                  rotate: i % 2 === 0 ? -1.5 : 1.5
                },
                className: "group relative flex h-[360px] w-[280px] shrink-0 flex-col justify-between rounded-[24px] border border-white/10 bg-[#030A2A] p-6 shadow-xl md:h-[420px] md:w-[330px] md:p-8",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxs("span", { className: "font-mono text-xs text-white/40", children: [
                      "0",
                      i % MINI.length + 1,
                      " / 0",
                      MINI.length
                    ] }),
                    /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-white/50", children: m.tag })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "mt-8 min-h-[96px] md:min-h-[110px]", children: /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: "\r\n                  max-w-[220px]\r\n                  text-sm\r\n                  leading-7\r\n                  text-white/75\r\n                ",
                      children: m.description
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "h3",
                      {
                        className: "font-display text-3xl leading-none text-white md:text-4xl",
                        children: m.name
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "mt-6 h-px w-full bg-white/10" }),
                    /* @__PURE__ */ jsxs(
                      "div",
                      {
                        className: "\r\n                  mt-5\r\n                  flex\r\n                  items-center\r\n                  justify-between\r\n                  font-mono\r\n                  text-xs\r\n                  text-white\r\n                ",
                        children: [
                          /* @__PURE__ */ jsx("span", { children: "View Project" }),
                          /* @__PURE__ */ jsx(
                            "span",
                            {
                              className: "\r\n                    transition-transform\r\n                    duration-300\r\n                    group-hover:translate-x-1\r\n                  ",
                              children: "→"
                            }
                          )
                        ]
                      }
                    )
                  ] })
                ]
              },
              `${m.name}-${i}`
            ))
          }
        )
      ]
    }
  );
}
const STEPS = [
  {
    year: "2020",
    title: "Completed G.C.E Ordinary Level",
    body: "Successfully completed G.C.E Ordinary Level Examination at St. Sylvester's College, Kandy, building a strong academic foundation and developing an interest in technology."
  },
  {
    year: "2022",
    title: "G.C.E Advanced Level - Physical Science",
    body: "Completed G.C.E Advanced Level in the Physical Science stream at St. Sylvester's College, Kandy, studying Combined Mathematics, Physics, and Chemistry."
  },
  {
    year: "2024",
    title: "Completed Diploma in Information Technology",
    body: "Successfully completed Diploma in Information Technology at SLIIT, strengthening programming, databases, networking, and software development fundamentals."
  },
  {
    year: "2025",
    title: "Started BSc (Hons) Computer Science",
    body: "Began BSc (Hons) Computer Science at IIT Sri Lanka, affiliated with the University of Westminster, focusing on software engineering, web development, and modern computing technologies."
  },
  {
    year: "2026",
    title: "Building Projects & Seeking Opportunities",
    body: "Developing full-stack applications, machine learning projects, and professional portfolio work while actively pursuing internship opportunities and industry experience."
  }
];
function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "timeline",
      ref,
      className: "relative px-6 py-24 md:px-12 md:py-48",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-16 grid grid-cols-12 gap-6 md:mb-24", children: [
          /* @__PURE__ */ jsxs("div", { className: "col-span-12 flex items-baseline gap-4 md:col-span-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-eyebrow text-muted-foreground", children: "(05)" }),
            /* @__PURE__ */ jsx("span", { className: "text-eyebrow text-muted-foreground", children: "Journey" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "col-span-12 text-[clamp(3rem,14vw,4.5rem)] md:col-span-9 md:text-huge", children: [
            "A ",
            /* @__PURE__ */ jsx("span", { className: "italic", children: "timeline." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-[1400px]", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-0 h-full w-px bg-border md:left-1/2", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              style: { height: lineHeight },
              className: "w-px origin-top bg-foreground"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "space-y-24 md:space-y-32", children: STEPS.map((step, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 80 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              },
              className: "relative pl-10 md:grid md:grid-cols-2 md:gap-24 md:pl-0",
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute left-3 top-10 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-background bg-[var(--signal)] md:left-1/2" }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `flex ${i % 2 === 0 ? "justify-start md:justify-end md:pr-44" : "justify-start md:justify-end md:pr-8"}`,
                    children: /* @__PURE__ */ jsx("div", { className: "w-full text-left md:w-[500px] md:text-right", children: /* @__PURE__ */ jsx("div", { className: "font-display text-[clamp(3.5rem,18vw,7rem)] italic leading-none text-foreground/10 md:text-[10rem]", children: step.year }) })
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "flex justify-start md:pl-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[650px]", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl leading-[1.1] md:text-5xl", children: step.title }),
                  /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-7 text-muted-foreground md:mt-5 md:text-lg md:leading-8", children: step.body })
                ] }) })
              ]
            },
            step.year
          )) })
        ] })
      ]
    }
  );
}
const STATS = [
  { value: 6, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Technologies Learned" },
  { value: 2, suffix: "+", label: "Years of Development" },
  { value: 1, suffix: "", label: "Industry Experience" }
];
function Counter({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());
  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2 });
    }
  }, [inView, count, to]);
  return /* @__PURE__ */ jsx(motion.span, { ref, children: rounded });
}
function Achievements() {
  return /* @__PURE__ */ jsx("section", { className: "border-y border-border px-6 py-20 md:px-10 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-px bg-border md:grid-cols-4", children: STATS.map((s) => /* @__PURE__ */ jsxs("div", { className: "bg-background p-5 md:p-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "font-display text-5xl md:text-8xl", children: [
      /* @__PURE__ */ jsx(Counter, { to: s.value }),
      s.suffix
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:mt-4 md:text-xs", children: s.label })
  ] }, s.label)) }) });
}
const LINKS = [
  {
    icon: Github,
    href: "https://github.com/DananjayaSenevirathne"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/dananjaya-senevirathne/"
  },
  {
    icon: Mail,
    href: "mailto:dananjayasenevirathne674@gmail.com"
  },
  {
    icon: Phone,
    href: "tel:+94769417133"
  }
];
function Contact() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "contact",
      className: "relative overflow-hidden bg-[#0b0d1f] px-6 py-24 text-white md:px-12 md:py-40",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--signal)]/10 blur-[180px]" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 grid items-center gap-14 lg:grid-cols-2 lg:gap-20", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "mb-8 block font-mono text-xs uppercase tracking-[0.3em] text-white/50", children: "(09) Contact" }),
            /* @__PURE__ */ jsxs("h2", { className: "max-w-xl text-4xl font-bold leading-[1.05] sm:text-5xl md:text-8xl", children: [
              "Let's build",
              /* @__PURE__ */ jsx("br", {}),
              "something",
              /* @__PURE__ */ jsx("br", {}),
              "extraordinary."
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-lg text-base leading-relaxed text-white/60 md:mt-10 md:text-lg", children: "Whether you have a project in mind or just want to say hi, I'm always open to discussing new ideas, collaborations, and internship opportunities." }),
            /* @__PURE__ */ jsxs("div", { className: "mt-14", children: [
              /* @__PURE__ */ jsx("h4", { className: "mb-6 text-xl font-medium", children: "Connect" }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-4", children: LINKS.map((item, index) => {
                const Icon = item.icon;
                return /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: item.href,
                    className: "flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black",
                    children: /* @__PURE__ */ jsx(Icon, { size: 22 })
                  },
                  index
                );
              }) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-16 text-white/40", children: "Based in Sri Lanka | © 2026 Dananjaya Senevirathne" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-[40px] border border-white/10 bg-black/20 p-6 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.5)] md:p-10 lg:p-14", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-8 text-3xl font-bold md:mb-10 md:text-4xl", children: "Send a Message" }),
            /* @__PURE__ */ jsxs("form", { className: "space-y-6 md:space-y-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "mb-2 block text-white/60 md:mb-3", children: "Name" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Your Name",
                    className: "w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition-all focus:border-white/30 md:px-6"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "mb-2 block text-white/60 md:mb-3", children: "Email" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "email",
                    placeholder: "your@email.com",
                    className: "w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition-all focus:border-white/30 md:px-6"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "mb-2 block text-white/60 md:mb-3", children: "Message" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    rows: 5,
                    placeholder: "Tell me about your project...",
                    className: "w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition-all focus:border-white/30 md:px-6"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "submit",
                  className: "flex w-full items-center justify-center gap-3 rounded-full bg-[#E63946] py-5 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#D62839]",
                  children: [
                    "Send Message",
                    /* @__PURE__ */ jsx(Send, { size: 18 })
                  ]
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Index() {
  const [ready, setReady] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(IntroLoader, { onDone: () => setReady(true) }),
    ready && /* @__PURE__ */ jsx(SmoothScroll, {}),
    /* @__PURE__ */ jsx(Cursor, {}),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("main", { className: "relative", children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Skills, {}),
      /* @__PURE__ */ jsx(Projects, {}),
      /* @__PURE__ */ jsx(MiniProjects, {}),
      /* @__PURE__ */ jsx(Timeline, {}),
      /* @__PURE__ */ jsx(Achievements, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] })
  ] });
}
export {
  Index as component
};

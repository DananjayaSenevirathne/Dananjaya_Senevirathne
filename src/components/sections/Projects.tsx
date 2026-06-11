import { useState, useEffect, useRef } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { ArrowUpRight , Github} from "lucide-react";
import workzupImg from "@/assets/Workzup.png";
import foodImg from "@/assets/daily-dish.png";
import studentImg from "@/assets/Student.png";



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
  demo: "https://workzup.vercel.app",
},

  {
  id: 2,
  n: "02",
  name: "Food Delivery ",
  category: "Web Application",
  overview: "A modern food delivery platform that allows users to browse menus, manage carts, place orders, make secure online payments, and track order status in real-time.",
  description:   "A full-stack food delivery application with user authentication, cart management, online payments, order tracking, and an admin dashboard for managing food items and customer orders.",
  tech: "React • Express • MongoDB",
  image: foodImg,
  github: "https://github.com/DananjayaSenevirathne/Daily-Dish",
  demo: "https://food-delivery.vercel.app",
},



  {
    id: 3,
    n: "03",
    name: "Management System",
    category: "Education Management Platform",
    overview: "A full-featured campus management solution for handling students, attendance, analytics, and academic reporting.",
    description: "Developed a desktop-based academic management platform with secure authentication, role-based access control, student record management, attendance monitoring, dashboard analytics, and automated PDF/Excel report generation. The system integrates with MySQL for persistent data storage and provides a modern UI built with CustomTkinter for a seamless user experience.",
    tech: "Python • MySQL • CustomTkinter • ReportLab • OpenPyXL • Matplotlib",
    image: studentImg,
    github: "https://github.com/DananjayaSenevirathne/smartcampus-academic-management-system",
    demo: "",
  },

]; 


function ProjectItem({
  project,
  activeProject,
  setActiveProject,
}: any) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const isInView = useInView(ref, {
    amount: 0.2,
  });

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

  useEffect(() => {
    if (isInView) {
      setActiveProject(project);
    }
  }, [isInView, project, setActiveProject]);

  const isActive =
    activeProject?.id === project.id;

  return (
    <motion.div
      ref={ref}
animate={{
  opacity: isMobile ? 1 : isActive ? 1 : 0.25,
  scale: isMobile ? 1 : isActive ? 1 : 0.75,
  y: isMobile ? 0 : isActive ? 0 : 30,
  filter: isMobile
    ? "blur(0px)"
    : isActive
      ? "blur(0px)"
      : "blur(8px)",
}}
      transition={{
        duration: 0.7,
      }}
      className="flex items-center py-10 md:min-h-[45vh] md:py-0"
    >
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-12">

        <div className="md:col-span-2">
          <span className="font-mono text-xl md:text-2xl text-muted-foreground">
            {project.n}
          </span>
        </div>

        <div className="md:col-span-10">

          <motion.h3
            animate={{
  y: isMobile ? 0 : isActive ? 0 : 40,
  scale: isMobile ? 1 : isActive ? 1 : 0.8,
  opacity: isMobile ? 1 : isActive ? 1 : 0.3,
}}
            transition={{
              duration: 0.5,
            }}
            className="
              font-display
              text-4xl
              md:text-8xl
              leading-none
            "
          >
            {project.name}
          </motion.h3>

          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:mt-6 md:text-xl">
            {project.overview}
          </p>

          <div className="
            mt-8
            font-mono
            text-xs
            uppercase
            tracking-[0.3em]
            text-muted-foreground
          ">
            {project.category}
          </div>

          <div className="mt-6 flex gap-3 lg:hidden">

  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex h-12 w-12
      items-center
      justify-center
      rounded-full
      border
    "
  >
    <Github className="h-4 w-4" />
  </a>

  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex h-12 w-12
        items-center
        justify-center
        rounded-full
        border
      "
    >
      <ArrowUpRight className="h-4 w-4" />
    </a>
  )}

</div>

        </div>

       

      </div>
    </motion.div>
  );
}

export function Projects() {
  const [activeProject, setActiveProject] =
    useState(PROJECTS[0]);

  return (
    <section
      id="work"
      className="px-6 py-20 md:px-12 md:py-32"
    >
      {/* HEADER */}

      <div className="mb-8 md:mb-12">

        <div className="flex items-center gap-4">
          <span className="text-eyebrow text-muted-foreground">
            (03)
          </span>

          <span className="text-eyebrow text-muted-foreground">
            Selected Work
          </span>
        </div>

        <div className="flex justify-center">
          <h2
            className="
              mt-8
              text-center
              font-display
              text-[clamp(3rem,15vw,5rem)]
              md:text-[10rem]
              leading-none
            "
          >
            Featured{" "}
            <span className="italic">
              projects.
            </span>
          </h2>
        </div>

      </div>

      {/* CONTENT */}

      <div className="grid lg:grid-cols-12 gap-20">

  {/* LEFT SIDE */}
  <div className="lg:col-span-7">
    <div className="divide-y divide-border">
      {PROJECTS.map((project) => (
        <ProjectItem
          key={project.id}
          project={project}
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        />
      ))}
    </div>
  </div>

  {/* RIGHT SIDE */}
 
<div className="hidden lg:block lg:col-span-5">

<div className="sticky top-70">

  <AnimatePresence mode="wait">

    <motion.div
      key={activeProject.id}
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -50,
      }}
      transition={{
        duration: 0.5,
      }}
      className="rounded-[32px] border p-6 max-w-[400px] mx-auto"
    >

      <img
        src={activeProject.image}
        alt={activeProject.name}
        className="w-full rounded-2xl mb-8"
      />

      <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
        {activeProject.category}
      </div>

      <h3 className="font-display text-5xl mb-6">
        {activeProject.name}
      </h3>

      <p className="text-lg leading-9 text-muted-foreground">
        {activeProject.description}
      </p>

      <div className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
        {activeProject.tech}
      </div>

      <div className="mt-8 flex gap-4">

        <a
          href={activeProject.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full border"
        >
          <Github className="h-5 w-5" />
        </a>

        <a
          href={activeProject.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full border"
        >
          <ArrowUpRight className="h-5 w-5" />
        </a>

      </div>

    </motion.div>

  </AnimatePresence>

</div>

  </div>

</div>

    </section>
  );
}
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
import loanImg from "@/assets/LoanPrediction.png";


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
    name: "SmartCampus Management System",
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
    amount: 0.7,
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
        opacity: isMobile ? 1 : isActive ? 1 : 0.2,
        scale: isMobile ? 1 : isActive ? 1 : 0.85,
        filter: isMobile
          ? "blur(0px)"
          : isActive
            ? "blur(0px)"
            : "blur(4px)",
      }}
      transition={{
        duration: 0.7,
      }}
      className="flex items-center py-3 md:min-h-[70vh] md:py-0"
    >
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-12">

        <div className="md:col-span-2">
          <span className="font-mono text-xl md:text-2xl text-muted-foreground">
            {project.n}
          </span>
        </div>

        <div className="md:col-span-9">

          <motion.h3
            animate={{
              y: isMobile ? 0 : isActive ? 0 : 40,
            }}
            transition={{
              duration: 0.6,
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

        </div>

        <div className="flex justify-start md:col-span-1 md:justify-end">
          <ArrowUpRight className="h-7 w-7" />
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

      <div className="mb-20 md:mb-32">

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
              mt-6
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

      <div className="grid grid-cols-12 gap-8 md:gap-24">

        {/* LEFT SIDE */}

        <div className="col-span-12 order-2 md:order-1 md:col-span-7">

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

        <div className="col-span-12 order-1 md:order-2 md:col-span-5">

          <div className="mt-0 rounded-[32px] border border-border bg-card p-4 shadow-lg md:mt-0 md:bg-transparent md:p-0 md:shadow-none lg:sticky lg:top-24">

            <AnimatePresence mode="wait">

              <motion.div
              key={activeProject.id}
              initial={{
              opacity: 0,
              y: 40,
              }}

              animate={{
              opacity: 1,
              y: 0,
              }}

              exit={{
              opacity: 0,
              y: -40,
              }}
              >
                
                  <div className="overflow-hidden rounded-[28px] border border-border bg-white p-5 sm:p-6 w-full max-w-none">
                    <motion.img
                      key={activeProject.image}
                      src={activeProject.image}
                      alt={activeProject.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-[220px] object-cover sm:h-[260px] md:h-[350px] rounded-t-2xl object-center"
                    />

                    <div className="mt-4">

                      <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                        {activeProject.category}
                      </div>

                      <div className="mt-3 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">

                        <h3 className="font-display text-2xl md:text-4xl">
                          {activeProject.name}
                        </h3>

                        <div className="flex gap-3">
                          <a
                            href={activeProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white"
                          >
                            <Github className="h-4 w-4" />
                          </a>

                          <a
                            href={activeProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </div>

                      </div>

                      <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                        {activeProject.description}
                      </p>

                      <div className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                        {activeProject.tech}
                      </div>

                    </div>
                  </div>
              </motion.div>

            </AnimatePresence>

          </div>

        </div>

      </div>

    </section>
  );
}
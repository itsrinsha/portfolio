import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// Temporary placeholder images since the local images were incorrect/removed.
// Replace these with your actual images when ready!
const project1 = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000"; 
const project2 = "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000"; // Women's Fashion E-commerce placeholder
const project3 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000"; 
const project4 = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000"; // Travel placeholder

const projects = [
  {
    title: "Learnify E-Learning Platform",
    description: "A complete MERN stack e-learning ecosystem tailored for modern education. Features encompass interactive student and instructor dashboards, real-time messaging, and sophisticated course management.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: project1,
    github: "https://github.com/itsrinsha",
    live: "#",
  },
  {
    title: "Glanzio E-Commerce",
    description: "A premium, fully-responsive women's fashion ecommerce application designed for optimal conversion. Includes robust cart management, secure authentication, and a seamless checkout experience.",
    tech: ["React", "Redux", "Tailwind CSS", "Express"],
    image: project2,
    github: "https://github.com/itsrinsha",
    live: "#",
  },
  {
    title: "FinLayer Finance Dashboard",
    description: "A highly polished finance analytics dashboard providing clear data visualization, expense tracking, and transactional history with a focus on a high-density, usable interface.",
    tech: ["React", "Recharts", "Framer Motion", "Tailwind"],
    image: project3,
    github: "https://github.com/itsrinsha",
    live: "#",
  },
  {
    title: "EaseMyTrip Clone",
    description: "A pixel-perfect frontend UI clone of the EaseMyTrip travel booking platform. Built entirely with core web technologies, focusing on precise, responsive layouts and semantic markup.",
    tech: ["HTML5", "CSS3"],
    image: project4,
    github: "https://github.com/itsrinsha",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 px-6 bg-[var(--color-bg)] border-t border-gray-200 dark:border-white/5"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[4px] text-sm text-secondary mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-primary">
            Selected Projects
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="flex flex-col gap-28">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-14 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-full md:w-1/2 overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm bg-[var(--color-card)]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-700 aspect-video"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-full md:w-1/2"
              >

                <div className="flex flex-wrap gap-3 mb-5">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 text-sm rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-transparent dark:border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <h3 className="text-4xl font-bold text-primary mb-5">
                  {project.title}
                </h3>

                <p className="text-secondary leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex items-center gap-6">

                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-primary hover:text-accent transition"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-primary hover:text-accent transition"
                  >
                    <Github size={18} />
                    Source Code
                  </a>

                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
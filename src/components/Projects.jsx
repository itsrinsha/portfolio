import { motion } from "framer-motion";

const projects = [
  {
    title: "Learnify E-Learning Platform",
    description: "A comprehensive e-learning SaaS platform featuring dedicated student and instructor portals. Includes real-time socket messaging, advanced course lifecycle management, admin moderation tools, and detailed course metrics.",
    tech: ["React", "Node.js", "Socket.io", "Tailwind CSS"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "FinLayer Fintech Dashboard",
    description: "A luxury, high-end financial SaaS dashboard with a premium dark-theme aesthetic. Designed for high-density data visualization, featuring interactive charts, summary cards, and a sophisticated sidebar-based navigation layout.",
    tech: ["React", "Tailwind CSS", "Recharts", "Framer Motion"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Glanzio Fashion Store",
    description: "A modern, fully responsive e-commerce platform specializing in women's fashion. Built with clean product displays, robust shopping cart functionality, and a seamless checkout flow.",
    tech: ["React", "Redux", "Tailwind CSS", "JSON Server"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Modern Navbar Design",
    description: "A sleek, frontend-focused exploration of modern navigation patterns, emphasizing glassmorphism, responsive behavior, and smooth interactive states.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Web Clone Project",
    description: "A detailed UI/UX clone focusing on pixel-perfect alignment, complex layout structures, and replicating high-end production environments.",
    tech: ["HTML", "CSS", "Tailwind"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-sm font-medium tracking-widest text-secondary uppercase mb-3">03. Selected Works</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">
            Crafted with passion.
          </h3>
        </motion.div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="w-full md:w-3/5 group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] shadow-sm"
              >
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </motion.div>

              {/* Content Container */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full md:w-2/5 flex flex-col items-start"
              >
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium uppercase tracking-wider text-accent bg-accent/5 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <h4 className="text-3xl font-semibold text-primary mb-4">{project.title}</h4>
                <p className="text-secondary text-base leading-relaxed mb-8 font-light">
                  {project.description}
                </p>
                <div className="flex gap-6">
                  <a href={project.live} className="group flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors pb-1 border-b border-gray-300 hover:border-accent">
                    View Project
                    <svg className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </a>
                  <a href={project.github} className="group flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-gray-300">
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

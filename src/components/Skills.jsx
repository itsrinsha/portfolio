import { motion } from "framer-motion";
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaFigma } from "react-icons/fa";
import { SiRedux, SiExpress, SiVite, SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact },
  { name: "Redux", icon: SiRedux },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Vite", icon: SiVite },
  { name: "GitHub", icon: FaGithub },
  { name: "Figma", icon: FaFigma },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-gray-50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:w-1/3 flex flex-col"
        >
          <h2 className="text-sm font-medium tracking-widest text-secondary uppercase mb-3">02. Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-6">
            Technical toolkit.
          </h3>
          <p className="text-secondary text-lg font-light leading-relaxed">
            A curated set of technologies I use to build scalable, high-performance web applications with a focus on modern frontend architecture.
          </p>
        </motion.div>

        <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-transparent hover:border-gray-300 dark:hover:border-white/20 transition-colors group cursor-default"
              >
                <Icon className="text-xl text-gray-400 group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

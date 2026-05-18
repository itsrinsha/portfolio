<<<<<<< HEAD
import { motion } from "framer-motion";
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaFigma } from "react-icons/fa";
import { SiRedux, SiExpress, SiVite, SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "group-hover:text-sky-500" },
  { name: "Redux", icon: SiRedux, color: "group-hover:text-purple-500" },
  { name: "JavaScript", icon: FaJsSquare, color: "group-hover:text-yellow-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "group-hover:text-sky-400" },
  { name: "HTML5", icon: FaHtml5, color: "group-hover:text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "group-hover:text-blue-500" },
  { name: "Node.js", icon: FaNodeJs, color: "group-hover:text-green-500" },
  { name: "Express", icon: SiExpress, color: "group-hover:text-gray-800" },
  { name: "MongoDB", icon: SiMongodb, color: "group-hover:text-green-600" },
  { name: "Vite", icon: SiVite, color: "group-hover:text-purple-500" },
  { name: "GitHub", icon: FaGithub, color: "group-hover:text-gray-900" },
  { name: "Figma", icon: FaFigma, color: "group-hover:text-pink-500" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-white/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium tracking-widest text-secondary uppercase mb-3">02. Capabilities</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary tracking-tight mb-6">
            My technical toolkit.
          </h3>
          <p className="text-secondary text-lg max-w-2xl font-light">
            A diverse set of tools and technologies I use to build scalable, highly interactive applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-1 cursor-default"
              >
                <Icon className={`text-4xl text-gray-300 transition-colors duration-300 mb-4 ${skill.color}`} />
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
=======
import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiRedux, SiMongodb, SiExpress } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', desc: 'Structuring web pages with modern semantic elements.' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6', desc: 'Crafting responsive, beautiful layouts and animations.' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', desc: 'Building dynamic, interactive frontend experiences.' },
        { name: 'React', icon: <FaReact />, color: '#61DAFB', desc: 'Developing complex SPAs with component-based architecture.' },
        { name: 'Redux', icon: <SiRedux />, color: '#764ABC', desc: 'Managing application state predictably and efficiently.' },
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', desc: 'Creating scalable server-side applications with JS.' },
        { name: 'Express', icon: <SiExpress />, color: '#ffffff', desc: 'Routing and building robust Rest APIs for web apps.' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', desc: 'Designing flexible NoSQL schemas and data storage.' },
        { name: 'GitHub', icon: <FaGithub />, color: '#ffffff', desc: 'Version control and collaborative development.' },
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">My <span className="text-gradient">Skills</span></h2>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="skill-card glass-card"
                        >
                            <div className="skill-icon" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <h3 className="skill-name">{skill.name}</h3>
                            <p className="skill-desc">{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
>>>>>>> 0b8e4a5dd17f064ea47dbc194cc158a2f5209b82
};

export default Skills;

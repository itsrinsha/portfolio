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
};

export default Skills;

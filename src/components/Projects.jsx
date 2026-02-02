import React from 'react';
import { motion } from 'framer-motion';
import project1 from '../assets/Screenshot 2025-07-16 221103.png';
import project2 from '../assets/Screenshot 2025-07-21 061736.png';
import project3 from '../assets/ecommerce.png';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'MERN Ecommerce Platform',
            image: project3,
            category: 'Full Stack',
            github: 'https://github.com/rinshafathima9961-commits/rinsha',
            demo: '#',
        },
        {
            title: 'Modern Navbar Design',
            image: project1,
            category: 'Frontend',
            github: '#',
            demo: '#',
        },
        {
            title: 'Web Clone Project',
            image: project2,
            category: 'UI/UX',
            github: '#',
            demo: '#',
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Latest <span className="text-gradient">Projects</span></h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileInView={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="project-card glass-card"
                        >
                            <div className="project-img-wrapper">
                                <img src={project.image} alt={project.title} className="project-img" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} className="icon-btn"><Github size={20} /></a>
                                        <a href={project.demo} className="icon-btn"><ExternalLink size={20} /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category text-gradient">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

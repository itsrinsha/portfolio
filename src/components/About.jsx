import React from 'react';
import aboutImg from '../assets/WhatsApp Image 2025-09-15 at 5.17.27 PM.jpeg';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="about-image-side"
                >
                    <div className="about-img-container glass-card">
                        <img src={aboutImg} alt="Workspace" className="about-img" />
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="about-text-side"
                >
                    <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <p className="about-para">
                        Hello! I’m a passionate and dedicated software developer with a love for building efficient, user-friendly, and meaningful digital experiences. From developing responsive websites to solving complex coding challenges, I enjoy the creative and logical aspects of technology equally.
                    </p>
                    <p className="about-para">
                        I am constantly learning and exploring new technologies to stay updated in the fast-evolving world of web development. My goal is to write clean, efficient code and contribute to projects that make a meaningful impact. Whether working on solo projects or collaborating in a team, I bring creativity, attention to detail, and a dedication to delivering high-quality results.
                    </p>

                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-num text-gradient">1+</span>
                            <p className="stat-label">Year Experience</p>
                        </div>
                        <div className="stat-item">
                            <span className="stat-num text-gradient">3</span>
                            <p className="stat-label">Projects Completed</p>
                        </div>
                        <div className="stat-item">
                            <span className="stat-num text-gradient"></span>
                            <p className="stat-label"></p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

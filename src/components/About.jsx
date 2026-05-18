<<<<<<< HEAD
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium tracking-widest text-secondary uppercase mb-3">01. About Me</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">
            Designing with purpose,<br />building with precision.
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* Stats/Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8 border-t border-gray-200 pt-8"
          >
            <div>
              <p className="text-sm text-secondary mb-1">Focus</p>
              <p className="text-lg font-medium text-primary">UI/UX & MERN Stack Dev</p>
            </div>

            <div>
              <p className="text-sm text-secondary mb-1">Current Interest</p>
              <p className="text-lg font-medium text-primary">MERN Stack</p>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-secondary text-lg leading-relaxed space-y-6 font-light"
          >
            <p>
              I’m <span className="text-primary font-medium">Fathima Rinsha</span>, a MERN stack developer dedicated to creating seamless and aesthetic digital experiences. I specialize in bridging the gap between design and engineering, ensuring every interface is both beautiful and highly functional.
            </p>
            <p>
              With strong expertise in <span className="text-primary font-medium">React, JavaScript, HTML</span>, and <span className="text-primary font-medium">CSS</span>, I take pride in writing clean, scalable code while focusing heavily on micro-interactions and performance.
            </p>
            <p>
              I am continually learning and currently expanding my skill set into <span className="text-primary font-medium">Node.js and the full MERN stack</span> to build robust end-to-end applications. When I'm not coding, I'm exploring new design trends and refining my craft.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
=======
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
>>>>>>> 0b8e4a5dd17f064ea47dbc194cc158a2f5209b82
};

export default About;

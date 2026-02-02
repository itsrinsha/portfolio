import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import heroImg from '../assets/IMG_5462 (1).JPG';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <h2 className="hero-subtitle">Hello, I'm</h2>
                    <h1 className="hero-title">Rinsha</h1>
                    <h3 className="hero-role">
                        I'm a <span className="text-gradient">Software Developer</span>
                    </h3>

                    <div className="social-links">
                        <a href="https://github.com/rinshafathima9961-commits/rinsha" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/fathima-rinsha-ak-ba2b13373/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://www.instagram.com/rinshaa_ft/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Instagram size={24} />
                        </a>
                    </div>

                    <div className="hero-btns">
                        <a href="#projects" className="btn-primary">View My Work</a>
                        <a href="/resume.pdf" download className="btn-outline">Download CV</a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="hero-image-wrapper"
                >
                    <div className="image-blob">
                        <img src={heroImg} alt="Rinsha" className="hero-image" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

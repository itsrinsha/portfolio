<<<<<<< HEAD
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -200 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navLinks = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-md border-b border-gray-200/50 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-bold tracking-tight cursor-pointer text-primary"
          onClick={() => scrollToSection("home")}
        >
          Fathima Rinsha<span className="text-accent">.</span>
        </motion.h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium items-center">
          {navLinks.map((item, index) => (
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative cursor-pointer text-secondary hover:text-primary transition-colors capitalize"
            >
              {item}
              {activeSection === item && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-primary z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 py-6 px-6 flex flex-col gap-4 shadow-xl md:hidden"
        >
          {navLinks.map((item) => (
            <p
              key={item}
              onClick={() => scrollToSection(item)}
              className={`cursor-pointer text-lg capitalize font-medium ${activeSection === item ? 'text-accent' : 'text-secondary'}`}
            >
              {item}
            </p>
          ))}
        </motion.div>
      )}
    </nav>
  );
=======
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar-root ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#home" className="nav-logo">
                    <img src={logo} alt="Logo" className="logo-img" />
                    <span className="logo-text text-gradient">RINSHA</span>
                </a>

                {/* Desktop Menu */}
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                        >
                            {link.name}
                            <span className="link-underline"></span>
                        </a>
                    ))}
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">
                        Resume
                        <span className="link-underline"></span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu animate-fade-in">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="mobile-link"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mobile-link" onClick={() => setIsOpen(false)}>
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
>>>>>>> 0b8e4a5dd17f064ea47dbc194cc158a2f5209b82
};

export default Navbar;

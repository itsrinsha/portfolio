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
};

export default Navbar;

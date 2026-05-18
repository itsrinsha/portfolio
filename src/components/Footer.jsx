import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p className="copyright">
                    &copy; {new Date().getFullYear()} <span className="text-gradient font-bold">Rinsha</span>. All rights reserved.
                </p>
                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

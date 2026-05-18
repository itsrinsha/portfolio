import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 200) {
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${scrolled ? "bg-white/60 dark:bg-black/60 backdrop-blur-md border-b border-gray-200/50 dark:border-white/10 py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-bold tracking-tight cursor-pointer text-primary"
          onClick={() => scrollToSection("home")}
        >
          Fathima Rinsha<span className="text-accent">.</span>
        </motion.h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-sm font-medium items-center">
          {navLinks.map((item, index) => (
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative cursor-pointer text-secondary hover:text-primary transition-colors capitalize group"
            >
              {item}
              {activeSection === item ? (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              ) : (
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-primary z-50 p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-100 dark:border-white/10 shadow-xl overflow-hidden md:hidden"
          >
            <div className="flex flex-col py-6 px-8 gap-6">
              {navLinks.map((item) => (
                <p
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`cursor-pointer text-lg capitalize font-medium transition-colors ${activeSection === item ? 'text-accent' : 'text-secondary hover:text-primary'}`}
                >
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

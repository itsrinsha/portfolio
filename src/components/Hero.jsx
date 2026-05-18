import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-24 px-6 relative"
      >
        <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Text Content */}
          <div className="flex-1 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent font-medium tracking-wide mb-3 text-sm md:text-base">
                PORTFOLIO OF
              </p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary mb-6 leading-[1.1]">
                Fathima Rinsha<span className="text-accent">.</span><br />
                <span className="text-gray-400 font-normal">MERN Stack<br/>Developer</span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-secondary text-lg md:text-xl max-w-md leading-relaxed mb-10 font-light"
            >
              Crafting elegant, responsive, and user-centered digital experiences with modern web technologies.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-black transition-transform hover:scale-105 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                Selected Works
              </button>
              <button
                onClick={() => setShowResume(true)}
                className="bg-white text-primary border border-gray-200 px-8 py-3.5 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 cursor-pointer"
              >
                Resume
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 w-full max-w-sm flex justify-center md:justify-end relative"
          >
            <div className="absolute inset-0 bg-accent/5 rounded-3xl -rotate-6 transform scale-105 z-0"></div>
            <img
              src="./profile.JPG"
              alt="Rinsha"
              className="w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl relative z-10 transition-all duration-700"
              onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Rinsha&size=500&background=F3F4F6&color=111111'; }}
            />
          </motion.div>
        </div>
      </section>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-10"
            onClick={() => setShowResume(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-gray-50/50">
                <h3 className="font-semibold text-primary px-2">Rinsha_Resume.pdf</h3>
                <button
                  onClick={() => setShowResume(false)}
                  className="p-2 text-gray-500 hover:text-primary hover:bg-gray-200 rounded-full transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
              <div className="flex-1 w-full bg-gray-100">
                <iframe
                  src="/Rinsha_Resume.pdf#toolbar=0"
                  className="w-full h-full border-none"
                  title="Resume"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;

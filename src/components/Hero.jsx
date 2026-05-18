import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, FileText } from "lucide-react";

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
      >
        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24 relative z-10">
          
          {/* Text Content */}
          <div className="flex-1 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-secondary text-xs font-medium tracking-widest uppercase mb-6">
                MERN Full Stack Developer
              </span>
              <h1 className="text-5xl md:text-[5.5rem] font-bold tracking-tighter text-primary mb-6 leading-[1.05]">
                Fathima Rinsha <br />
                <span className="text-secondary font-light block text-4xl md:text-[4rem] mt-2">MERN Full Stack Developer.</span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-secondary text-lg md:text-xl max-w-lg leading-relaxed mb-10 font-normal"
            >
              Hi, I'm <strong className="text-primary font-medium">Fathima Rinsha</strong>. I specialize in building minimal, highly polished web interfaces that balance aesthetics with seamless functionality.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="group bg-primary text-[var(--color-bg)] px-7 py-3.5 rounded-xl font-medium hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-2 shadow-sm"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setShowResume(true)}
                className="bg-transparent text-primary border border-gray-200 dark:border-white/10 px-7 py-3.5 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-white/5 hover:border-gray-300 dark:hover:border-white/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-2"
              >
                <FileText size={16} className="text-secondary" />
                Resume
              </button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex-1 w-full max-w-sm flex justify-center md:justify-end relative"
          >
            <div className="absolute inset-0 bg-gray-100 dark:bg-white/5 rounded-[2rem] -rotate-3 transform scale-105 z-0 transition-transform duration-700 hover:rotate-0"></div>
            <img
              src="./profile.JPG"
              alt="Fathima Rinsha"
              className="w-full aspect-[4/5] object-cover rounded-[2rem] shadow-sm relative z-10 filter grayscale-[20%] hover:grayscale-0 transition-all duration-700"
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-md p-4 md:p-8"
            onClick={() => setShowResume(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[85vh] bg-[var(--color-bg)] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-white/10"
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-white/10">
                <h3 className="font-medium text-primary">Rinsha_Resume.pdf</h3>
                <button
                  onClick={() => setShowResume(false)}
                  className="p-2 text-secondary hover:text-primary hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="flex-1 w-full bg-gray-100 dark:bg-white/5">
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

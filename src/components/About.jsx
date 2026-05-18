import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 border-t border-gray-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-sm font-medium tracking-widest text-secondary uppercase mb-3">01. About</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">
            Designing with purpose,<br className="hidden md:block"/> building with precision.
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-start">
          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 flex flex-col gap-8 md:pr-8"
          >
            <div className="pb-6 border-b border-gray-200 dark:border-white/5">
              <p className="text-sm text-secondary mb-2 uppercase tracking-wider">Role</p>
              <p className="text-lg font-medium text-primary">UI/UX & MERN Stack Dev</p>
            </div>
            <div className="pb-6 border-b border-gray-200 dark:border-white/5">
              <p className="text-sm text-secondary mb-2 uppercase tracking-wider">Focus</p>
              <p className="text-lg font-medium text-primary">Responsive Design & Scalable Apps</p>
            </div>
            <div>
              <p className="text-sm text-secondary mb-2 uppercase tracking-wider">Location</p>
              <p className="text-lg font-medium text-primary">Kerala, India</p>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-8 text-secondary text-lg leading-relaxed space-y-6 font-light"
          >
            <p>
              I’m <strong className="text-primary font-medium">Fathima Rinsha</strong>, a developer dedicated to creating seamless and aesthetic digital experiences. I specialize in bridging the gap between design and engineering, ensuring every interface is both beautiful and highly functional.
            </p>
            <p>
              With strong expertise in <strong className="text-primary font-medium">React, JavaScript, HTML, and CSS</strong>, I take pride in writing clean, scalable code while focusing heavily on micro-interactions and overall performance. I believe that good design is invisible, and a great user experience is intuitive.
            </p>
            <p>
              I am continually learning and currently expanding my skill set into <strong className="text-primary font-medium">Node.js and the full MERN stack</strong> to build robust end-to-end applications. When I'm not coding, I'm exploring new design trends, refining my craft, and looking for new ways to challenge myself.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

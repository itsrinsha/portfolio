import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:rinshafathima9961@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="pt-32 pb-8 px-6 border-t border-gray-200 dark:border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 w-full"
        >
          <h2 className="text-sm font-medium tracking-widest text-secondary uppercase mb-4">04. What's Next?</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">
            Let's collaborate.
          </h3>
          <p className="text-secondary text-lg max-w-xl mx-auto font-light leading-relaxed mb-12">
            I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-6 text-left w-full mb-20">
            <div className="flex flex-col gap-2 relative group">
              <input type="text" id="name" name="name" required className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 py-3 text-primary placeholder-transparent focus:outline-none focus:border-primary transition-colors peer" placeholder="Name" />
              <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs font-medium text-secondary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary cursor-text">Name</label>
            </div>
            
            <div className="flex flex-col gap-2 relative group mt-2">
              <input type="email" id="email" name="email" required className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 py-3 text-primary placeholder-transparent focus:outline-none focus:border-primary transition-colors peer" placeholder="Email" />
              <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs font-medium text-secondary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary cursor-text">Email</label>
            </div>
            
            <div className="flex flex-col gap-2 relative group mt-2">
              <textarea id="message" name="message" required rows="1" className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 py-3 text-primary placeholder-transparent focus:outline-none focus:border-primary transition-colors peer resize-none" placeholder="Message"></textarea>
              <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs font-medium text-secondary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary cursor-text">Message</label>
            </div>

            <button type="submit" className="mt-6 bg-primary text-[var(--color-bg)] px-8 py-4 rounded-xl font-medium hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group">
              Send Message
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </form>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 dark:border-white/10 gap-6"
        >
          <div className="flex gap-8">
            <a href="https://github.com/itsrinsha" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
          </div>
          <p className="text-sm text-secondary font-light">
            © {new Date().getFullYear()} Fathima Rinsha. Crafted with precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

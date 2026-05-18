import { motion } from "framer-motion";

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
    <section id="contact" className="pt-32 pb-12 px-6 bg-white/50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 w-full"
        >
          <h2 className="text-sm font-medium tracking-widest text-secondary uppercase mb-4">04. What's Next?</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6">
            Get In Touch
          </h3>
          <p className="text-secondary text-lg max-w-xl mx-auto font-light leading-relaxed mb-12">
            I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-5 text-left w-full mb-16">
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-primary">Name</label>
              <input type="text" id="name" name="name" required className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-primary">Email</label>
              <input type="email" id="email" name="email" required className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="john@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-primary">Message</label>
              <textarea id="message" name="message" required rows="4" className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none" placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className="mt-2 bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-black transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 gap-4"
        >
          <p className="text-sm text-secondary">
            © {new Date().getFullYear()} Fathima Rinsha. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com" className="text-secondary hover:text-primary transition-colors text-sm font-medium">GitHub</a>
            <a href="https://linkedin.com" className="text-secondary hover:text-primary transition-colors text-sm font-medium">LinkedIn</a>
            <a href="https://twitter.com" className="text-secondary hover:text-primary transition-colors text-sm font-medium">Twitter</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

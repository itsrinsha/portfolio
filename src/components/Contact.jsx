import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Get in <span className="text-gradient">Touch</span></h2>

                <div className="contact-grid">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="contact-info"
                    >
                        <h3>Let's talk about your project</h3>
                        <p className="contact-p">I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

                        <div className="contact-details">
                            <div className="detail-item">
                                <div className="detail-icon"><Phone size={20} /></div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91 9961634340</p>
                                </div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-icon"><Mail size={20} /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>rinsha@gmail.com</p>
                                </div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-icon"><MapPin size={20} /></div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Kerala, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 30 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="contact-form-side glass-card"
                    >
                        <form action="https://formsubmit.co/rinshaa279@gmail.com" method="POST" className="contact-form">
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn-primary submit-btn">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="section-container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="section-title">Get In Touch</h2>
        <div className="accent-underline -mt-9 mb-10" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-muted-foreground mb-8">Feel free to reach out for collaborations, opportunities, or just a chat!</p>
          <div className="space-y-4">
            <a href="mailto:sruja03@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Mail className="text-primary" size={18} /></div>
              sruja03@gmail.com
            </a>
            <a href="https://github.com/sruja333" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Github className="text-primary" size={18} /></div>
              github.com/sruja333
            </a>
            <a href="https://linkedin.com/in/sruja-shashidhar-19a77728a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Linkedin className="text-primary" size={18} /></div>
              LinkedIn Profile
            </a>
          </div>
        </motion.div>

        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card space-y-4"
          onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:sruja03@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}`; }}>
          <input type="text" placeholder="Your Name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
            className="w-full px-4 py-3 bg-secondary rounded-lg border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
          <input type="email" placeholder="Your Email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
            className="w-full px-4 py-3 bg-secondary rounded-lg border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
          <textarea placeholder="Your Message" rows={4} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
            className="w-full px-4 py-3 bg-secondary rounded-lg border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
          <button type="submit" className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2">
            <Send size={18} /> Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

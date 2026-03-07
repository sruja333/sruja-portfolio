import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const owlVariants = {
  blink: {
    scaleY: [1, 0.1, 1],
    transition: { duration: 0.3, repeat: Infinity, repeatDelay: 3 },
  },
};

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="section-title">Get In Touch</h2>
        <div className="accent-underline -mt-9 mb-10" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
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

        {/* Cute owl animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          className="flex flex-col items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Owl body */}
            <div className="w-36 h-40 bg-secondary rounded-[50%_50%_48%_48%] border-2 border-border relative flex flex-col items-center justify-start pt-5">
              {/* Ears - rounder, friendlier */}
              <div className="absolute -top-5 left-3 w-5 h-7 bg-secondary rounded-t-full border-2 border-border border-b-0 rotate-[-10deg]" />
              <div className="absolute -top-5 right-3 w-5 h-7 bg-secondary rounded-t-full border-2 border-border border-b-0 rotate-[10deg]" />
              <div className="absolute -top-3 left-[18px] w-3 h-4 bg-primary/20 rounded-t-full rotate-[-10deg]" />
              <div className="absolute -top-3 right-[18px] w-3 h-4 bg-primary/20 rounded-t-full rotate-[10deg]" />

              {/* Eyes - bigger, friendlier */}
              <div className="flex gap-3 mb-1">
                <div className="w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center">
                  <motion.div
                    variants={owlVariants}
                    animate="blink"
                    className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                  >
                    <div className="w-3 h-3 rounded-full bg-primary-foreground translate-x-0.5 -translate-y-0.5" />
                  </motion.div>
                </div>
                <div className="w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center">
                  <motion.div
                    variants={owlVariants}
                    animate="blink"
                    className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                  >
                    <div className="w-3 h-3 rounded-full bg-primary-foreground translate-x-0.5 -translate-y-0.5" />
                  </motion.div>
                </div>
              </div>

              {/* Rosy cheeks */}
              <div className="flex gap-10 -mt-1 mb-0.5">
                <div className="w-4 h-2.5 rounded-full bg-pink-400/30" />
                <div className="w-4 h-2.5 rounded-full bg-pink-400/30" />
              </div>

              {/* Beak - smaller, cuter */}
              <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-primary mb-2" />

              {/* Belly */}
              <div className="w-18 h-12 bg-card/50 rounded-[50%] border border-border/50" />
            </div>

            {/* Feet */}
            <div className="flex justify-center gap-8 -mt-1">
              <div className="flex gap-0.5">
                <div className="w-2.5 h-3 bg-primary/50 rounded-b-full" />
                <div className="w-2.5 h-3 bg-primary/50 rounded-b-full" />
                <div className="w-2.5 h-3 bg-primary/50 rounded-b-full" />
              </div>
              <div className="flex gap-0.5">
                <div className="w-2.5 h-3 bg-primary/50 rounded-b-full" />
                <div className="w-2.5 h-3 bg-primary/50 rounded-b-full" />
                <div className="w-2.5 h-3 bg-primary/50 rounded-b-full" />
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg text-primary font-medium text-center"
          >
            Thank you for your time!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

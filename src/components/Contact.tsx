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
            <span className="flex items-center gap-3 text-muted-foreground select-all cursor-text">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Mail className="text-primary" size={18} /></div>
              sruja03@gmail.com
            </span>
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
            <div className="w-32 h-36 bg-secondary rounded-[50%_50%_45%_45%] border-2 border-border relative flex flex-col items-center justify-start pt-6">
              {/* Ears */}
              <div className="absolute -top-4 left-4 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-secondary" />
              <div className="absolute -top-4 right-4 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-secondary" />
              <div className="absolute -top-3 left-[18px] w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-primary/30" />
              <div className="absolute -top-3 right-[18px] w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-primary/30" />

              {/* Eyes */}
              <div className="flex gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-card border-2 border-border flex items-center justify-center">
                  <motion.div
                    variants={owlVariants}
                    animate="blink"
                    className="w-5 h-5 rounded-full bg-primary flex items-center justify-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  </motion.div>
                </div>
                <div className="w-10 h-10 rounded-full bg-card border-2 border-border flex items-center justify-center">
                  <motion.div
                    variants={owlVariants}
                    animate="blink"
                    className="w-5 h-5 rounded-full bg-primary flex items-center justify-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  </motion.div>
                </div>
              </div>

              {/* Beak */}
              <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-primary mb-2" />

              {/* Belly */}
              <div className="w-16 h-12 bg-card/50 rounded-[50%] border border-border/50" />
            </div>

            {/* Feet */}
            <div className="flex justify-center gap-6 -mt-1">
              <div className="flex gap-0.5">
                <div className="w-2 h-3 bg-primary/60 rounded-b-full" />
                <div className="w-2 h-3 bg-primary/60 rounded-b-full" />
                <div className="w-2 h-3 bg-primary/60 rounded-b-full" />
              </div>
              <div className="flex gap-0.5">
                <div className="w-2 h-3 bg-primary/60 rounded-b-full" />
                <div className="w-2 h-3 bg-primary/60 rounded-b-full" />
                <div className="w-2 h-3 bg-primary/60 rounded-b-full" />
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

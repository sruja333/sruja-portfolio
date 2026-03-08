import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

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
            <div className="flex items-center gap-3 text-muted-foreground select-all cursor-text">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Mail className="text-primary" size={18} /></div>
              sruja03@gmail.com
            </div>
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

        {/* Cute rabbit animation */}
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
            {/* Rabbit ears */}
            <div className="flex justify-center gap-3 -mb-2 relative z-10">
              <motion.div
                animate={{ rotate: [-3, 3, -3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-16 bg-secondary rounded-full border-2 border-border origin-bottom flex items-center justify-center"
              >
                <div className="w-2 h-10 bg-primary/20 rounded-full mt-1" />
              </motion.div>
              <motion.div
                animate={{ rotate: [3, -3, 3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-16 bg-secondary rounded-full border-2 border-border origin-bottom flex items-center justify-center"
              >
                <div className="w-2 h-10 bg-primary/20 rounded-full mt-1" />
              </motion.div>
            </div>

            {/* Rabbit head */}
            <div className="w-28 h-28 bg-secondary rounded-full border-2 border-border relative flex flex-col items-center justify-center z-20">
              {/* Eyes */}
              <div className="flex gap-6 mb-2">
                <motion.div
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
                  className="w-4 h-4 rounded-full bg-primary"
                />
                <motion.div
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
                  className="w-4 h-4 rounded-full bg-primary"
                />
              </div>

              {/* Nose */}
              <div className="w-3 h-2.5 bg-primary/60 rounded-full mb-1" />

              {/* Mouth */}
              <div className="flex gap-0.5">
                <div className="w-2.5 h-1.5 border-b-2 border-l-2 border-primary/40 rounded-bl-full" />
                <div className="w-2.5 h-1.5 border-b-2 border-r-2 border-primary/40 rounded-br-full" />
              </div>

              {/* Cheeks */}
              <div className="absolute left-2 top-1/2 w-4 h-3 bg-primary/10 rounded-full" />
              <div className="absolute right-2 top-1/2 w-4 h-3 bg-primary/10 rounded-full" />
            </div>

            {/* Rabbit body */}
            <div className="w-24 h-20 bg-secondary rounded-[50%_50%_45%_45%] border-2 border-border -mt-4 mx-auto relative z-10 flex items-center justify-center">
              <div className="w-14 h-12 bg-card/50 rounded-[50%] border border-border/50 mt-2" />
            </div>

            {/* Feet */}
            <div className="flex justify-center gap-4 -mt-1">
              <div className="w-8 h-4 bg-secondary border-2 border-border rounded-full" />
              <div className="w-8 h-4 bg-secondary border-2 border-border rounded-full" />
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

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import profileImg from "@/assets/profile.png";

const Hero = () => (
  <section className="min-h-screen flex items-center relative overflow-hidden">
    {/* Subtle glow */}
    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />

    <div className="section-container relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <img src={profileImg} alt="Sruja Shashidhar" className="w-20 h-20 rounded-full border-2 border-primary/50 mb-5 object-cover" />
        <p className="text-primary font-medium mb-3 tracking-wide">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">Sruja Shashidhar</h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light mb-6">
          AI / ML Engineer | Data Science & Intelligent Systems
        </p>
        <p className="text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          I build machine learning systems and data-driven applications that turn complex datasets into practical solutions. My interests include semantic search, machine learning pipelines, and scalable backend systems.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            View Projects
          </a>
          <a href="https://github.com/sruja333" target="_blank" rel="noopener noreferrer" className="px-5 py-3 border border-border rounded-lg text-foreground hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-2">
            <Github size={18} /> GitHub
          </a>
          <a href="https://linkedin.com/in/sruja-shashidhar-19a77728a/" target="_blank" rel="noopener noreferrer" className="px-5 py-3 border border-border rounded-lg text-foreground hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-2">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="https://drive.google.com/file/d/1mwrBPq0ilUbAXdoGu7h_MjIsFhot2jnq/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-5 py-3 border border-border rounded-lg text-foreground hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-2">
            <FileDown size={18} /> Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;

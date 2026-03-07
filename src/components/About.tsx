import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const About = () => (
  <section id="about" className="section-container">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
      <h2 className="section-title">About Me</h2>
      <div className="accent-underline -mt-9 mb-10" />
    </motion.div>

    <div className="grid md:grid-cols-2 gap-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
        <p className="text-muted-foreground leading-relaxed mb-6">
          I am a Computer Science student specializing in Bioinformatics at VIT Vellore, passionate about building intelligent systems that combine machine learning, data analysis, and backend engineering.
        </p>
        <p className="text-muted-foreground mb-2">My work focuses on:</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Machine Learning systems</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Data analytics and visualization</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Scalable APIs and backend services</li>
        </ul>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="glass-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <GraduationCap className="text-primary" size={20} />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Education</h3>
        </div>
        <p className="font-medium text-foreground">B.Tech – Computer Science (Bioinformatics)</p>
        <p className="text-muted-foreground">Vellore Institute of Technology, Vellore</p>
        <p className="text-sm text-muted-foreground mt-2">Expected Graduation: 2027</p>
        <p className="text-sm text-primary font-medium mt-1">CGPA: 8.39</p>
      </motion.div>
    </div>
  </section>
);

export default About;

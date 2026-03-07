import { motion } from "framer-motion";
import { Briefcase, Award, BookOpen } from "lucide-react";

const Experience = () => (
  <section id="experience" className="section-container">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <h2 className="section-title">Experience & Achievements</h2>
      <div className="accent-underline -mt-9 mb-10" />
    </motion.div>

    <div className="grid md:grid-cols-2 gap-6">
      {/* Experience */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Briefcase className="text-primary" size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Data Analyst Intern</h3>
            <p className="text-sm text-muted-foreground">Larsen & Toubro – Chennai</p>
          </div>
        </div>
        <p className="text-xs text-primary font-medium mb-4">June 2025 – July 2025</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />Performed exploratory data analysis using Python</li>
          <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />Cleaned and processed asset datasets</li>
          <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />Built Power BI dashboards for insights</li>
          <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />Developed regression models for predictive analysis</li>
        </ul>
      </motion.div>

      <div className="space-y-6">
        {/* Hackathon */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Award className="text-primary" size={20} />
            </div>
            <h3 className="font-semibold text-foreground">Achievements</h3>
          </div>
          <p className="text-foreground font-medium">Yantra Central Hackathon</p>
          <p className="text-sm text-muted-foreground">Finalist and winner of Best Women's Team</p>
        </motion.div>

        {/* Certifications */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="text-primary" size={20} />
            </div>
            <h3 className="font-semibold text-foreground">Certifications</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="skill-badge">SQL</span>
            <span className="skill-badge">Power BI</span>
            <span className="skill-badge">Associate Data Analyst – DataCamp</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Experience;

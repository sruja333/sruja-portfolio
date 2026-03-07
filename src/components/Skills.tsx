import { motion } from "framer-motion";
import { Code, Brain, BarChart3, Globe, Wrench } from "lucide-react";

const categories = [
  { icon: Code, title: "Programming", skills: ["Python", "SQL", "JavaScript"] },
  { icon: Brain, title: "Machine Learning", skills: ["scikit-learn", "XGBoost", "Regression", "Classification", "Time Series Forecasting"] },
  { icon: BarChart3, title: "Data Analysis", skills: ["Pandas", "NumPy", "Power BI", "Data Visualization"] },
  { icon: Globe, title: "Web & APIs", skills: ["FastAPI", "React", "REST APIs"] },
  { icon: Wrench, title: "Tools", skills: ["Docker", "Git", "AWS"] },
];

const Skills = () => (
  <section id="skills" className="section-container">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <h2 className="section-title">Skills</h2>
      <div className="accent-underline -mt-9 mb-10" />
    </motion.div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat, i) => (
        <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <cat.icon className="text-primary" size={20} />
            </div>
            <h3 className="font-semibold text-foreground">{cat.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map(s => <span key={s} className="skill-badge">{s}</span>)}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;

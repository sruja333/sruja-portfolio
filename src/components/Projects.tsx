import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Semantic Search & Fuzzy Clustering System",
    description: "Built a semantic search system on the 20 Newsgroups dataset (~20k documents) with fuzzy clustering and a custom semantic caching layer.",
    features: ["TF-IDF + Latent Semantic Analysis embeddings", "Fuzzy clustering with soft cluster memberships", "Cluster-aware semantic cache", "FastAPI service exposing search endpoints", "Cache threshold experiments"],
    tech: ["Python", "FastAPI", "scikit-learn", "UMAP", "Docker"],
    github: "https://github.com/sruja333/semantic-search-and-caching-system-with-fuzzy-clustering",
  },
  {
    title: "Carbon Footprint Prediction Web Application",
    description: "Full-stack ML web app that estimates users' monthly carbon footprint from lifestyle inputs.",
    features: ["Regression model predicting emissions", "FastAPI backend", "React frontend", "Deployed on AWS"],
    tech: ["Python", "React", "FastAPI", "Machine Learning", "AWS"],
    github: "https://github.com/sruja333/carbon-footprint-analyzer-using-ML",
  },
  {
    title: "Customer Churn Prediction",
    description: "Machine learning pipeline predicting telecom churn using the IBM Telco dataset.",
    features: ["Logistic regression baseline", "XGBoost final model", "ROC-AUC evaluation", "SHAP explainability"],
    tech: ["Python", "Pandas", "scikit-learn", "XGBoost"],
    github: "https://github.com/sruja333/churn-prediction",
  },
  {
    title: "Energy Demand Forecasting",
    description: "Time-series forecasting model predicting electricity demand.",
    features: ["Prophet forecasting model", "Daily and weekly seasonality modeling", "~0.108% MAPE accuracy"],
    tech: ["Python", "Pandas", "Prophet", "Time Series Forecasting"],
    github: "https://github.com/sruja333/forecast-electricity",
  },
];

const Projects = () => (
  <section id="projects" className="section-container">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <h2 className="section-title">Projects</h2>
      <div className="accent-underline -mt-9 mb-10" />
    </motion.div>

    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, i) => (
        <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card flex flex-col">
          <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
          <ul className="space-y-1 mb-5 text-sm text-muted-foreground">
            {project.features.map(f => (
              <li key={f} className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mb-5 mt-auto">
            {project.tech.map(t => (
              <span key={t} className="skill-badge text-xs">{t}</span>
            ))}
          </div>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary text-sm hover:underline">
            <Github size={16} /> View on GitHub <ExternalLink size={14} />
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;

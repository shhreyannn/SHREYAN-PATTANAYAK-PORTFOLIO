import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Research & Data",
    company: "Placfv's (SRM Placement Student Team)",
    location: "Chennai, Tamil Nadu, India",
    period: "Oct 2025 – Present",
    description: "Conducting placement-related research and data analysis to assist SRM's student placement activities.",
    current: true,
  },
  {
    role: "Machine Learning Intern",
    company: "Corizo",
    location: "Bangalore",
    period: "Nov 2024 – Dec 2024",
    description: "Developed ML models using Python, TensorFlow, and Scikit-learn. Optimized model accuracy and training time through feature engineering and hyperparameter tuning. Automated preprocessing pipelines using Pandas and NumPy.",
    current: false,
  },
  {
    role: "Machine Learning Training",
    company: "Corizo",
    location: "Bangalore",
    period: "Oct 2024 – Nov 2024",
    description: "Hands-on training on Python, Jupyter Notebook, TensorFlow, and ML fundamentals. Built supervised and unsupervised models as part of internship preparation.",
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      {exp.role}
                      {exp.current && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Current</span>
                      )}
                    </h3>
                    <p className="text-secondary font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                    <p>{exp.period}</p>
                    <p className="flex items-center gap-1 md:justify-end">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </p>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

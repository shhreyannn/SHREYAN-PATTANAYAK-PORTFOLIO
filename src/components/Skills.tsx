const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    category: "Machine Learning & AI",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Generative AI", "LLMs"],
  },
  {
    category: "Data Science",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy", "Data Visualization"],
  },
  {
    category: "ML Techniques",
    skills: ["Supervised Learning", "Unsupervised Learning", "PCA", "KMeans", "Feature Engineering", "Model Optimization"],
  },
  {
    category: "Development Tools",
    skills: ["Jupyter Notebook", "Git", "GitHub", "Version Control"],
  },
  {
    category: "Web Development",
    skills: ["React", "Full Stack Development", "REST APIs", "Responsive Design"],
  },
  {
    category: "Specialized Skills",
    skills: ["AI-assisted Development", "Prompt Engineering", "Data Preprocessing", "DSA in Python"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-primary mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-muted/50 border border-border text-foreground px-3 py-1.5 rounded-lg text-sm hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-secondary">
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card/50 border border-border rounded-lg p-4 flex items-center justify-between hover:border-secondary/50 transition-colors">
                <div>
                  <p className="font-semibold">Machine Learning Training</p>
                  <p className="text-sm text-muted-foreground">Corizo</p>
                </div>
                <span className="text-sm text-muted-foreground">Nov 2024</span>
              </div>
              <div className="bg-card/50 border border-border rounded-lg p-4 flex items-center justify-between hover:border-secondary/50 transition-colors">
                <div>
                  <p className="font-semibold">Machine Learning Internship</p>
                  <p className="text-sm text-muted-foreground">Corizo</p>
                </div>
                <span className="text-sm text-muted-foreground">Dec 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

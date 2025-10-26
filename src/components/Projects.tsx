import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Autonomous UAV with AI & Graphene-Based Power System",
    description: "Researched and documented AI-powered UAV design using graphene-infused hydrogen fuel cells for extended endurance, modular payloads, and autonomous operation.",
    date: "Mar 2025",
    tags: ["AI", "UAV", "Graphene Technology", "Autonomous Systems"],
    featured: true,
  },
  {
    title: "Job Cluster Insights",
    description: "Developed an AI-driven system to analyze job trends, skill requirements, and career recommendations using clustering and ML algorithms.",
    date: "Oct 2024",
    tags: ["Machine Learning", "Clustering", "Data Analysis", "Python"],
    github: "https://github.com/shhreyannn/Job-Cluster-Insights/blob/main/JobCluster%20Insights.ipynb",
    featured: true,
  },
  {
    title: "Stock Prediction",
    description: "Built ML models leveraging historical data and technical indicators for stock market trend prediction.",
    date: "Oct 2024",
    tags: ["Machine Learning", "Financial Analysis", "TensorFlow", "Python"],
    github: "https://github.com/shhreyannn/Stock-Prediction/blob/main/StockPredictionProjectShreyanPattanayak.ipynb",
    featured: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {project.featured && (
                  <span className="inline-block text-xs bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full mb-4">
                    Featured
                  </span>
                )}
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">{project.date}</span>
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/shhreyannn" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

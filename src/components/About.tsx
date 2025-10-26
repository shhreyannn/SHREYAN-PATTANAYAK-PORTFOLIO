const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="bg-card border border-border rounded-xl p-8 shadow-card animate-fade-in">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              I'm a Bachelor of Technology student in Computer Science and Engineering at <span className="text-primary font-semibold">SRM Institute of Science and Technology, Chennai</span>. 
            </p>
            
            <p className="text-lg text-foreground leading-relaxed mb-6">
              As an experienced Machine Learning Intern and developer, I have a strong focus on real-world ML applications, research, and efficient design. I've completed internships at <span className="text-secondary font-semibold">Corizo (in partnership with Wipro)</span> and contributed to AI-driven projects.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              Currently, I'm exploring cutting-edge technologies including <span className="text-accent font-semibold">AI-powered UAVs</span> and <span className="text-accent font-semibold">graphene-based power systems</span> for autonomous endurance. My passion lies in leveraging artificial intelligence and machine learning to solve complex real-world problems.
            </p>
          </div>

          {/* Languages */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card/50 border border-border rounded-lg p-4 text-center">
              <p className="text-muted-foreground text-sm mb-1">Languages</p>
              <p className="font-semibold">English (Proficient)</p>
            </div>
            <div className="bg-card/50 border border-border rounded-lg p-4 text-center">
              <p className="text-muted-foreground text-sm mb-1">Native</p>
              <p className="font-semibold">Hindi</p>
            </div>
            <div className="bg-card/50 border border-border rounded-lg p-4 text-center">
              <p className="text-muted-foreground text-sm mb-1">Native</p>
              <p className="font-semibold">Odia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

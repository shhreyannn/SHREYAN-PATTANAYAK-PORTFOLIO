import { GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    institution: "SRM Institute of Science and Technology",
    degree: "Bachelor of Technology - Computer Science & Engineering",
    location: "Chennai, Tamil Nadu",
    period: "Aug 2024 – Aug 2028",
    current: true,
  },
  {
    institution: "Mother's Public School",
    degree: "High School Diploma - Science",
    location: "Bhubaneswar, Odisha",
    period: "Jun 2022 – May 2024",
    current: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      {edu.institution}
                      {edu.current && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Current</span>
                      )}
                    </h3>
                    <p className="text-secondary font-semibold mt-1">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                    <p>{edu.period}</p>
                    <p className="flex items-center gap-1 md:justify-end">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

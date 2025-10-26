import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="bg-card border border-border rounded-xl p-8 shadow-card">
            <p className="text-center text-lg text-foreground mb-8">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <a 
                href="mailto:shreyanxd@gmail.com"
                className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">shreyanxd@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+918260480148"
                className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold">+91 8260480148</p>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/shreyan-pattanayak-410800244"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-semibold">Shreyan Pattanayak</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/shhreyannn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-semibold">shhreyannn</p>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground justify-center">
              <MapPin className="w-4 h-4" />
              <span>Chennai, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

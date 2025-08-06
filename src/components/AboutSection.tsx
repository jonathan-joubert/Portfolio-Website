import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Database, Globe, Shield } from "lucide-react";

export function AboutSection() {
  const skills = [
    "React", "C#", "Node.js", "Python", "Linux", "Docker",
    "PostgreSQL", "MongoDB", "Git", "Unity", "Java", "Bash"
  ];

  const expertise = [
    {
      icon: Globe,
      title: "Full-Stack Development",
      description: "Building modern web applications with React, Node.js, and TypeScript"
    },
    {
      icon: Terminal,
      title: "Linux Administration",
      description: "System administration, automation, and server management across various distributions"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing and optimizing databases for performance and scalability"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Hands-on experience with virtual machines and basic penetration testing, while building a strong foundation in secure coding practices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I am a passionate junior developer who loves to explore new technologies and solve complex problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              My Journey
            </h3>
            <p className="text-muted-foreground mb-4">
              I'm a junior developer with a strong passion for technology, open-source software, and problem-solving.
               My journey began when my father gave me an old computer running Ubuntu 10.04 LTS —
                that experience sparked a deep fascination with Linux and the world of open-source.
                 Since then, I've grown into full-stack development while nurturing my interest in system
                  administration and automation.
            </p>
            <p className="text-muted-foreground mb-6">
              I believe in writing clean, maintainable code and creating solutions that not 
              only work but are a joy to use. Whether it's building a responsive web application 
              or optimizing a server configuration, I approach every project with attention 
              to detail and a commitment to excellence.
            </p>
            
            <h4 className="text-lg font-semibold text-foreground mb-3">
              Technologies I love working with:
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {expertise.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-card hover:shadow-primary transition-all duration-300 border-border"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
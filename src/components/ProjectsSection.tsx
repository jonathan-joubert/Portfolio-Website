import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Terminal, Globe, Database } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Linux Server Dashboard",
      description: "A real-time monitoring dashboard for Linux servers with system metrics, log analysis, and automated alerts. Built with React and Node.js.",
      tech: ["React", "Node.js", "Socket.io", "Linux", "Bash"],
      icon: Terminal,
      github: "https://github.com/jonathan-joubert/linux-server-dashboard",
      demo: "https://linux-server-dashboard.demo.com",
      color: "text-primary"
    },
    {
      title: "Full-Stack Task Manager",
      description: "A collaborative task management application with real-time updates, user authentication, and team collaboration features.",
      tech: ["TypeScript", "Express.js", "PostgreSQL", "React", "Docker"],
      icon: Globe,
      github: "https://github.com/jonathan-joubert/task-manager",
      demo: "https://task-manager.demo.com", 
      color: "text-accent"
    },
    {
      title: "Database Optimization Tool",
      description: "An automated tool for analyzing and optimizing database performance with query analysis and index recommendations.",
      tech: ["Python", "PostgreSQL", "MongoDB", "Flask", "Docker"],
      icon: Database,
      github: "https://github.com/jonathan-joubert/db-optimizer",
      demo: "https://db-optimizer.demo.com",
      color: "text-gruvbox-blue"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, combining my passion for development and system administration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden shadow-card hover:shadow-primary transition-all duration-300 border-border"
            >
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg bg-secondary ${project.color}`}>
                    <project.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline"
                      className="text-xs border-primary/20 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="h-5 w-5 mr-2" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slot } from "@radix-ui/react-slot";
import { 
  Github,
  ExternalLink,
  Terminal,
  Globe,
  Database,
  Code2, 
  Server, 
  Brain, 
  Gamepad2, 
  Zap,
  Cpu,
  HardDrive,
  Settings,
  Monitor,
  Layers,
  GitBranch,
  Cloud,
  ShieldCheck,
  Wrench
 } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Shape Shuffle",
      description: "A hypercasual child-friendly mobile game inspired by the 'Hole in the Wall' gameshow. Built in Unity with C# and Blender for the Android platform",
      tech: ["C#", "Unity", "Blender", "Android", "Physics Engine"],
      icon: Terminal,
      github: "https://github.com/jonathan-joubert/shape-shuffle",
      color: "text-yellow"
    },
    {
      title: "Calc3D",
      description: "A cost estimation tool for 3D printing projects. Calculates filament usage, electricity cost, time, and material expenses based on user input. Includes exportable PDF invoices and supports multiple currencies. Built with Flutter for cross-platform use.",
      tech: ["Dart", "Flutter", "Cross-platform", "CMake", "PDF Generation"],
      icon: Globe,
      github: "https://github.com/jonathan-joubert/3d-Printer-Calculator",
      demo: "https://3d-calculator.fibco.co.za/", 
      color: "text-green"
    },
    {
      title: "Student Management System",
      description: "A C# Windows Forms application for managing student records. Features include adding, viewing, updating, and deleting student information, along with generating summary reports. Created in my second year of university.",
      tech: ["C#", "Git", "WinForms", ".NET 8"],
      icon: Database,
      github: "https://github.com/jonathan-joubert/PRG282",
      demo: "",
      color: "text-red"
    },
    {
      title: "Networking Company Website",
      description: "A responsive company website built with WordPress for a South African networking and fiber solutions provider. It includes SEO optimization, WPForms-based contact functionality with hCaptcha, and customized styling using HTML, CSS, and JavaScript.",
      tech: ["CSS", "HTML", "Wordpress", "JavaScript","hCaptcha","Yoast SEO", "WPForms"],
      icon: Globe,
      demo: "https://fibco.co.za/",
      color: "text-cyan"
    },
    {
      title: "Recruitment Company Website",
      description: "A professional business website for an international recruitment and staffing agency. Built with WordPress and customized with HTML, CSS, and JavaScript. Includes secure contact forms using hCaptcha and Smtp.js, along with SEO-focused enhancements.",
      tech: ["CSS", "HTML", "Wordpress", "JavaScript","hCaptcha","SEO", "Smtp.JS"],
      icon: Globe,
      demo: "https://hqhcglobal.com/",
      color: "text-orange"
    },
    {
      title: "Discord Bot",
      description: "An automated Discord bot developed for the Belgium Campus Chess Club that delivers the daily Chess.com puzzle directly to the community. This promotes regular engagement and skill development through consistent chess challenges.",
      tech: ["Replit", "JavaScript", "Node.js", "Discord", "Chess.com"],
      icon: Wrench,
      github: "https://github.com/jonathan-joubert/Replit-ChessBot",
      color: "text-maroon"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built using TypeScript, React, and Tailwind CSS to effectively showcase projects and skills. No need for a demo, you're already on the site!",
      tech: ["TypeScript", "React", "Tailwind", "HTML", "Node.js","reCaptcha", "emailJS"],
      icon: Monitor,
      github: "https://github.com/jonathan-joubert/Portfolio-Website",
      color: "text-jade"
    },
    {
      title: "Sign Language Translator <Ongoing>",
      description: "An AI-powered application leveraging computer vision and machine learning to translate sign language gestures into text and speech, aiming to enhance communication accessibility.",
      tech: ["OpenCV", "Python", "Mediapipe", "Tensorflow", "Git", "SASL"],
      icon: Brain,
      color: "text-indigo"
    },
    {
      title: "Student Wellness Management System",
      description: "A comprehensive wellness management solution combining a JSP web portal for student login and registration with a Java Swing desktop app for managing appointments, counselors, and feedback. Built with PostgreSQL and JavaDB, following MVC architecture for scalable and maintainable design.",
      tech: ["Swing", "Java", "Git", "Derby", "PostgreSQL", "JSP Web App"],
      github: "https://github.com/jonathan-joubert/Student-Wellness-App",
      icon: Layers,
      color: "text-mint"
    },
    {
    title: "Community Portal Website",
    description: "A dynamic community portal built with Node.js, Express.js, and EJS, featuring server-side rendered pages including Home, About, Events, Contact, and Thank You. Includes a functional contact form and modular route management for scalable web development.",
    tech: ["Node.js", "Express.js", "EJS", "JavaScript", "Nodemon"],
    github: "https://github.com/jonathan-joubert/WPR381", 
    icon: Cloud,
    color: "text-gold"
  },
      {
    title: "Student Academic Performance Analaysis",
    description: "A data-driven machine learning project analyzing student demographics, study habits, parental involvement, and extracurricular activities to predict academic performance and support personalized interventions.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Tensorflow", "ML", "XGboost"],
    github: "https://github.com/jonathan-joubert/MLG382", 
    demo: "https://mlg382.onrender.com/",
    icon: Zap,
    color: "text-magenta"
  },

    
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These are some of my recent projects, which showcase my passion for development
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
                

                <p className="text-muted-foreground mb-5 line-clamp-5 text-sm text-muted-foreground transition-all duration-300 ease-in-out line-clamp-2 group-hover:line-clamp-none group-hover:overflow-visible">
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
                  {project.github &&(
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
                  )}
                  

                  {project.demo &&(
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
                  )}
                  
                </div>
              </div>

              {/* Hover effect */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="h-5 w-5 mr-2" />
            <a href="https://github.com/jonathan-joubert" target="_blank">View More on GitHub</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Server, 
  Database, 
  Brain, 
  Gamepad2, 
  Terminal,
  Zap,
  Globe,
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

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const categories = {
    Frontend: [
      { name: "React", icon: Code2 },
      { name: "Wordpress", icon: Globe },
      { name: "TypeScript", icon: Zap },
      { name: "JavaScript", icon: Wrench },
      { name: "HTML5", icon: Monitor },
      { name: "CSS3", icon: Layers },
      { name: "Tailwind CSS", icon: Settings },
    ],
    Backend: [
      { name: "Node.js", icon: Wrench },
      { name: "Python", icon: Terminal },
      { name: "Flask", icon: Server },
      { name: "RESTful APIs", icon: Cloud },
      { name: "Java", icon: Code2 },
      { name: ".Net", icon: Settings },
      { name: "Microservices", icon: Layers }
    ],
    Database: [
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "Apache Derby", icon: Database },
      { name: "Database Design", icon: Settings },
      { name: "Query Optimization", icon: Zap }
    ],
    "AI & Data Science": [
      { name: "Python", icon: Code2 },
      { name: "TensorFlow", icon: Cpu },
      { name: "Pandas", icon: Wrench },
      { name: "NumPy", icon: HardDrive },
      { name: "Scikit-learn", icon: Zap },
      { name: "Data Analysis", icon: Brain },
      { name: "Jupyter", icon: Settings },
      { name: "Matplotlib", icon: ShieldCheck },
      { name: "OpenCV", icon: Monitor }
    ],
    "Game Development": [
      { name: "Unity", icon: Gamepad2 },
      { name: "C#", icon: Code2 },
      { name: "Game Design", icon: Monitor },
      { name: "Blender", icon: Layers },
      { name: "Physics Systems", icon: Brain }
    ],
    Linux: [
      { name: "Debian", icon: Server },
      { name: "Arch btw", icon: Zap },
      { name: "RHEL", icon: Brain },
      { name: "Bash Scripting", icon: Terminal },
      { name: "System Administration", icon: ShieldCheck },
      { name: "Docker", icon: Cloud },
      { name: "Server Management", icon: Server }
    ],
    Tools: [
        {name: "VS Code",icon: Terminal },
        {name: "Netbeans",icon: Wrench },
        {name: "Git",icon: GitBranch },
        {name: "GitHub",icon: Cloud },
        {name: "Vite",icon: Zap },
        {name: "Anaconda",icon: Brain },
        {name: "Glassfish Server",icon: Server },
    ]
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across different domains
          </p>
        </div>

        {/* Category Toggle Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(categories).map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Skills Display */}
        <Card className="p-8 shadow-card border-border">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
            {activeCategory}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories[activeCategory as keyof typeof categories].map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors group"
                >
                  <IconComponent className="h-8 w-8 text-primary group-hover:text-primary/80 transition-colors" />
                  <span className="text-xs text-muted-foreground text-center font-medium">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
}
import { Instagram, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/jonathan-joubert",
      color: "hover:text-foreground"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://www.linkedin.com/in/jr-joubert/",
      color: "hover:text-foreground"
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t border-border py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="ghost"
              size="icon"
              asChild
              className={`transition-colors ${link.color}`}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
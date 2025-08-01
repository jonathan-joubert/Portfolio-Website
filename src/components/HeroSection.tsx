import { AnimatedText } from "./AnimatedText";
import { Terminal, Code2, Server, ChevronDown } from "lucide-react";

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutElement = document.querySelector('#about');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-hero pt-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center space-x-4">
          <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
            <Terminal className="h-8 w-8 text-primary" />
          </div>
          <div className="p-3 rounded-full bg-accent/10 border border-accent/20">
            <Code2 className="h-8 w-8 text-accent" />
          </div>
          <div className="p-3 rounded-full bg-gruvbox-blue/10 border border-gruvbox-blue/20">
            <Server className="h-8 w-8 text-gruvbox-blue" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-foreground">
          Hi, my name is{" "}
          <span className="text-primary">Jonathan Joubert</span>
        </h1>

        <div className="text-xl sm:text-2xl mb-8 text-muted-foreground">
          I am a <AnimatedText />
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Passionate about building efficient, scalable solutions and exploring the endless 
          possibilities of open-source technologies. From crafting elegant web applications 
          to optimizing Linux systems, I love turning complex problems into simple, 
          elegant solutions.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2 bg-secondary/50 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span>Available for opportunities</span>
          </div>
          <div className="flex items-center space-x-2 bg-secondary/50 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span>Based in South Africa</span>
          </div>
        </div>
      </div>
      
      {/* Scroll down button */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all duration-300 animate-[bounce_2s_ease-in-out_infinite]"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="h-6 w-6 text-primary" />
      </button>
    </section>
  );
}
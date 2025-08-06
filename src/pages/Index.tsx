import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { SocialLinks } from "@/components/SocialLinks";
import { Chatbot } from "@/components/Chatbot";
import { SkillsSection } from "@/components/SkillsSection";
import { Footer } from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <SocialLinks />
      
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="justify-start px-0 text-muted-foreground hover:text-primary hover:bg-transparent"
                >
                  {item.name}
                </Button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Based in South Africa</p>
              <p>Available for opportunities</p>
              <p>Open source enthusiast</p>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">About This Site</h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>Built with React & TypeScript</p>
              <p>Styled with Tailwind CSS</p>
              <p>Gruvbox color scheme</p>
              <p>Responsive design</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Jonathan Joubert. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Made with ❤️ and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
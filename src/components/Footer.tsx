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
    <footer className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Navigation</h3>
            <nav className="flex flex-col">
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
              <a href="https://www.google.com/maps/place/Kempton+Park" target="_blank"><p>Based in South Africa, Kempton Park</p></a>
              <a href="tel:+27812663246" target="_blank"><p>(+27) 81 266 3246</p></a>
              <a href="mailto:rjoubert@fibco.co.za" target="_blank"><p>rjoubert@fibco.co.za</p></a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Opportunities welcome</h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>I'm currently open to full-time and internship opportunities. If you're looking for someone passionate about
                   technology with a strong foundation and a drive to keep improving — let's connect.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 mb-5">
          <div className="flex flex-col items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              ©{currentYear} Jonathan Joubert. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
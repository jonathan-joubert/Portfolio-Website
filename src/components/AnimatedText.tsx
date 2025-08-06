import { useEffect, useState } from "react";

const roles = [
  "Software Developer",
  "Linux Enthusiast", 
  "Full-Stack Developer",
  "System Administrator",
  "Cybersecurity Enthusiast"
];

export function AnimatedText() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = roles[currentRole];
      
      if (isDeleting) {
        setDisplayText(current.substring(0, displayText.length - 1));
        
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length + 1));
        
        if (displayText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentRole, displayText, isDeleting]);

  return (
    <span className="text-primary font-semibold">
      {displayText}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
}
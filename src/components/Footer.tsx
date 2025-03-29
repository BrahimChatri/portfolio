
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="bg-card border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-display font-bold">
              Brahim<span className="text-accent1">.</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Back-End & Software Engineer
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/BrahimChatri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary/50 p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/brahim-chatri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary/50 p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:brahim.chatri.dev@gmail.com"
              className="bg-secondary/50 p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Email Me"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Brahim. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-secondary/50 p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

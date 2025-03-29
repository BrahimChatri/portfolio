
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-accent1 text-xl md:text-2xl font-medium mb-2">Hi, I'm</h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Brahim
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-muted-foreground mb-6">
              Back-End & Software Engineer
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              I build robust, scalable back-end systems and APIs that power modern applications.
              Specializing in Python, Flask, and cloud technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                asChild 
                className="bg-accent1 hover:bg-accent1/90 text-white px-6"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="border-accent1 text-accent1 hover:bg-accent1/10"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent1/30">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1000" 
                alt="Brahim - Software Engineer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-8 w-8 text-accent1" />
          </a>
        </div>
      </div>
    </section>
  );
}

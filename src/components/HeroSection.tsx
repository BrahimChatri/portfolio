import { useState, useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "I specialize in building robust, scalable back-end systems and APIs, using modern technologies like Python, Rust, Django, Flask, and cloud infrastructure to deliver high-quality solutions that power today's web and mobile applications.";
  const typingSpeed = 40; // milliseconds per character
  const cursorRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;

    if (isTyping) {
      typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, typingSpeed);
    }

    return () => clearInterval(typingInterval);
  }, [isTyping]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-accent1 text-xl md:text-2xl font-bold mb-2 animate-slide-up tracking-wide">Hi, I'm</h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-4 animate-slide-up tracking-tight text-gray-900 dark:text-white drop-shadow-sm" style={{ animationDelay: "0.4s" }}>
              Brahim
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.6s" }}>
              Back-End & Software Engineer
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 animate-slide-up relative font-medium leading-relaxed" style={{ animationDelay: "0.8s" }}>
              {displayText}
              <span 
                ref={cursorRef} 
                className={`inline-block w-0.5 h-5 bg-accent1 ml-1 ${isTyping ? 'animate-blink' : ''}`}
              ></span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                asChild
                className="bg-accent1 hover:bg-accent1/90 text-white px-6 animate-slide-up font-bold"
                style={{ animationDelay: "1s" }}
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-accent1 text-accent1 hover:bg-accent1/10 animate-slide-up font-bold"
                style={{ animationDelay: "1.2s" }}
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center animate-fade-in mt-8 lg:mt-0" style={{ animationDelay: "0.5s" }}>
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent1/30 shadow-lg">
              <img
                src="hero-image.jpeg"
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
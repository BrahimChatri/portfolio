
import { Code, Coffee, Server } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="col-span-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg mb-4">
              Hello! I'm Brahim, a passionate back-end engineer with expertise in building 
              robust server-side applications. With a strong foundation in software engineering 
              principles, I specialize in crafting efficient, scalable, and maintainable code.
            </p>
            <p className="text-lg mb-4">
              I have extensive experience working with Python, Flask, and various database 
              technologies. My approach combines technical expertise with a deep understanding 
              of business requirements to deliver solutions that drive real value.
            </p>
            <p className="text-lg mb-6">
              Beyond coding, I'm passionate about open-source contributions, staying current 
              with emerging technologies, and sharing knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="skill-tag">Problem Solver</span>
              <span className="skill-tag">Team Player</span>
              <span className="skill-tag">Continuous Learner</span>
              <span className="skill-tag">Detail-Oriented</span>
            </div>
          </div>
          <div className="col-span-1 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="grid gap-6">
              <div className="p-6 bg-card rounded-lg shadow-md card-hover">
                <Server className="h-8 w-8 text-accent1 mb-2" />
                <h3 className="text-xl font-display font-semibold mb-2">Back-end Expert</h3>
                <p className="text-muted-foreground">
                  Specialized in building robust APIs and server-side architectures.
                </p>
              </div>
              
              <div className="p-6 bg-card rounded-lg shadow-md card-hover">
                <Code className="h-8 w-8 text-accent1 mb-2" />
                <h3 className="text-xl font-display font-semibold mb-2">Clean Coder</h3>
                <p className="text-muted-foreground">
                  Advocate for clean, maintainable, and well-tested code.
                </p>
              </div>
              
              <div className="p-6 bg-card rounded-lg shadow-md card-hover">
                <Coffee className="h-8 w-8 text-accent1 mb-2" />
                <h3 className="text-xl font-display font-semibold mb-2">Problem Solver</h3>
                <p className="text-muted-foreground">
                  Passionate about solving complex challenges with elegant solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

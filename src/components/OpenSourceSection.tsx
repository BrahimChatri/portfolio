
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Contribution {
  project: string;
  description: string;
  link: string;
  tags: string[];
}

const contributions: Contribution[] = [
  {
    project: "Flask",
    description: "Contributed performance improvements to the routing system and fixed multiple bugs in the template rendering engine.",
    link: "#",
    tags: ["Python", "Performance", "Bug Fix"]
  },
  {
    project: "Django REST Framework",
    description: "Implemented new serializer features and improved authentication mechanisms.",
    link: "#",
    tags: ["Python", "API", "Feature"]
  },
  {
    project: "Pytest",
    description: "Enhanced the fixture system and contributed to the documentation improvements.",
    link: "#",
    tags: ["Python", "Testing", "Documentation"]
  },
  {
    project: "FastAPI",
    description: "Added support for new authentication methods and fixed security vulnerabilities.",
    link: "#",
    tags: ["Python", "Security", "Authentication"]
  }
];

export function OpenSourceSection() {
  return (
    <section id="open-source" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">Open Source Contributions</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
          I'm passionate about contributing to open source projects. Here are some of the projects I've contributed to:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contributions.map((contribution, index) => (
            <div 
              key={contribution.project}
              className="bg-card border border-border rounded-lg p-6 animate-fade-in card-hover"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-display font-semibold">{contribution.project}</h3>
                <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-accent1">
                  <a href={contribution.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${contribution.project} contributions`}>
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground mb-4">{contribution.description}</p>
              <div className="flex flex-wrap gap-2">
                {contribution.tags.map(tag => (
                  <span key={tag} className="skill-tag text-xs py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button asChild className="bg-accent1 hover:bg-accent1/90">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              <span>View My GitHub Profile</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

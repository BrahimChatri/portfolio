
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink?: string;
  demoLink?: string;
}

const projects: Project[] = [
  {
    title: "Cloud Resource Manager",
    description: "A Python-based tool for efficiently managing and monitoring cloud resources across AWS and GCP with automated scaling and cost optimization features.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "Flask", "AWS", "Terraform", "Redis"],
    githubLink: "#",
    demoLink: "#"
  },
  {
    title: "Data Processing Pipeline",
    description: "High-performance ETL pipeline handling large-scale data processing using Python, Kafka, and PostgreSQL with real-time analytics capabilities.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "Kafka", "PostgreSQL", "Docker", "Celery"],
    githubLink: "#",
    demoLink: "#"
  },
  {
    title: "API Gateway Service",
    description: "Microservice-based API gateway handling authentication, rate limiting, and request routing for a distributed backend system.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "FastAPI", "MongoDB", "Docker", "Kubernetes"],
    githubLink: "#"
  },
  {
    title: "Automation Framework",
    description: "Extensible automation framework for infrastructure management with advanced scheduling and reporting capabilities.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "Celery", "RabbitMQ", "Ansible", "Flask"],
    githubLink: "#",
    demoLink: "#"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="overflow-hidden bg-card border border-border animate-fade-in card-hover"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-display">{project.title}</CardTitle>
                <CardDescription className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="skill-tag text-xs py-0.5">
                      {tag}
                    </span>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.githubLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                )}
                {project.demoLink && (
                  <Button size="sm" asChild className="bg-accent1 hover:bg-accent1/90">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <span>Demo</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

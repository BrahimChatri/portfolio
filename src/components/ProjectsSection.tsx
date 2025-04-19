
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
    title: "Restaurant Rating Finder",
    description: "This Python project fetches restaurant data within a specified city and filters out restaurants with ratings below given rate using the Google Places API. The data is saved in both CSV and JSON formats for easy access and analysis.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "Flask", "AWS", "web scraping", "API", "Google Places API", "CSV", "JSON"],
    githubLink: "https://github.com/BrahimChatri/restaurants_finder",
    demoLink: "#"
  },
  {
    title: "Flask Task Manager",
    description: "Flask Task Manager is a sleek, modern web application built using Flask and TailwindCSS, allowing users to easily register, log in, and manage their daily tasks. With a clean, intuitive interface, this app helps users stay organized and on top of their to-do lists. Featuring seamless task management, real-time updates, and an elegant user experience, it’s perfect for anyone looking to boost their productivity.",
    image: "home.png",
    tags: ["Python", "Flask", "HTML", "AWS", "API", "TailwindCSS", "JSON"],
    githubLink: "https://github.com/BrahimChatri/flask-task-manager",
    demoLink: "http://chestnutlobster.onpella.app/"
  },  
  {
    title: "Ad-Free Video Tool",
    description: "This is a simple web application built with Flask, allowing users to input YouTube or Instagram URLs to watch videos without ads and download them directly to their devices. The app uses yt-dlp to download the videos and provides an ad-free viewing experience.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "Flask", "yt-dlp", "web scraping", "API"],
    githubLink: "https://github.com/BrahimChatri/ad-free-video-tool",
    demoLink: "https://watch-free-navy.vercel.app/"
  },
  {
    title: "VenomShield",
    description: "VenomShield, your NFT guardian on Discord! This bot helps you verify holders on the Venom Network and manage roles based on users' NFT holdings.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "Discord", "Blockchain", "API", "NFT", "Venom Network"],
    githubLink: "https://github.com/BrahimChatri/venom-holders-verify.git",
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

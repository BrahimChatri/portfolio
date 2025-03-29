
export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Rust", "Bash"]
    },
    {
      title: "Back-end Frameworks",
      skills: ["Flask", "Django", "FastAPI"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "SQLite"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "RESTful APIs", "GraphQL", "Microservices", "System Design"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-card rounded-lg p-6 shadow-md animate-fade-in card-hover"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <h3 className="text-xl font-display font-semibold mb-4 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

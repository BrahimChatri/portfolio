
import { ArrowUpRight, Award } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
  icon?: string;
}

const certifications: Certification[] = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "October 2023",
    link: "#",
    icon: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png"
  },
  {
    title: "Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "July 2022",
    link: "#",
    icon: "https://cloud.google.com/static/certification/images/cloud-developer.svg"
  },
  {
    title: "Python Professional Certification",
    issuer: "Python Institute",
    date: "March 2022",
    link: "#"
  },
  {
    title: "Database Administration Specialist",
    issuer: "MongoDB University",
    date: "January 2022",
    link: "#",
    icon: "https://university.mongodb.com/assets/img/certification-badges/MongoDB-Certified-DBA-Associate.png"
  },
  {
    title: "Kubernetes Application Developer",
    issuer: "Cloud Native Computing Foundation",
    date: "September 2021",
    link: "#"
  },
  {
    title: "REST API Design and Implementation",
    issuer: "Pluralsight",
    date: "June 2021",
    link: "#"
  }
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a 
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-6 animate-fade-in card-hover flex flex-col"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {cert.icon ? (
                      <img src={cert.icon} alt={cert.title} className="w-10 h-10 object-contain" />
                    ) : (
                      <Award className="w-10 h-10 text-accent1" />
                    )}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-1">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm">{cert.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

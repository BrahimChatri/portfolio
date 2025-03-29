
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { OpenSourceSection } from "@/components/OpenSourceSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <OpenSourceSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;


import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Mohan Kishore Abburi | Technical Solution Architect</title>
        <meta name="description" content="Experienced Technical Solution Architect with 15+ years in IT industry, specializing in Java/J2EE, Microservices, and Business Rules Management Systems." />
      </Helmet>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

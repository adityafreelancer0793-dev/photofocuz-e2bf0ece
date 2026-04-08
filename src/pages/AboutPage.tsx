import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us | Photofocuz Wedding Photography";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;

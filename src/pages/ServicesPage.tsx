import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Services | Photofocuz Wedding Photography";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;

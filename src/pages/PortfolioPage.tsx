import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const PortfolioPage = () => {
  useEffect(() => {
    document.title = "Wedding Portfolio India | Photo Focuz";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <PortfolioSection />
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;

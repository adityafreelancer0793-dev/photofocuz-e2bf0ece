import Navbar from "@/components/Navbar";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const ReviewsPage = () => {
  useEffect(() => {
    document.title = "Client Reviews | Photo Focuz Wedding Photography";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ReviewsSection />
      </div>
      <Footer />
    </div>
  );
};

export default ReviewsPage;

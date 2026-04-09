import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Camera, Home, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 - Page Not Found | Photo Focuz";
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center pt-20 pb-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="relative inline-block">
              <Camera size={64} className="text-primary/20 animate-pulse" />
            </div>
            <div>
              <h1 className="font-heading text-7xl md:text-9xl font-bold text-foreground/10 leading-none">
                404
              </h1>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground -mt-4">
                Page Not Found
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
              Oops! The page you're looking for doesn't exist or has been moved. Let's get you back to capturing beautiful moments.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-base font-medium text-background transition-all hover:opacity-90"
              >
                <Home size={18} /> Go Back Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-8 py-3.5 text-base font-medium text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                <ArrowLeft size={18} /> Go Back
              </button>
            </div>
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Or navigate to:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="rounded-full bg-secondary px-5 py-2 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;

import { Link } from "react-router-dom";
import { Instagram, Youtube, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/photofocuz_?igsh=Y2d1a2IyOWtycm5q&utm_source=qr",
  },
  {
    label: "YouTube",
    icon: Youtube,
    href: "https://youtube.com/@photofocuz?si=Q1_9qrdQL36tSWpJ",
  },
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/+917780909010",
  },
];

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container">
        <div className="grid sm:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <img src={logo} alt="Photo Focuz" className="h-10 w-auto invert mix-blend-screen" />
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Premium wedding photography & cinematography services across India and worldwide.
            </p>
          </div>

          <div>
            <p className="font-heading font-semibold text-background mb-4">Quick Links</p>
            <div className="space-y-3">
              {quickLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => window.scrollTo(0, 0)}
                  className="block text-sm text-background/60 hover:text-background transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-heading font-semibold text-background mb-4">Follow Us</p>
            <div className="flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-background/60 hover:text-background transition-colors"
                >
                  <s.icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Photo Focuz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

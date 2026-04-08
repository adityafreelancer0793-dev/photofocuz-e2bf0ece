const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container">
        <div className="grid sm:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-heading text-2xl font-bold text-background mb-4">Photofocuz</p>
            <p className="text-background/60 text-sm leading-relaxed">
              Premium wedding photography & cinematography services across India and worldwide.
            </p>
          </div>

          <div>
            <p className="font-heading font-semibold text-background mb-4">Quick Links</p>
            <div className="space-y-3">
              {["Home", "About", "Services", "Portfolio", "Reviews", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="block text-sm text-background/60 hover:text-background transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-heading font-semibold text-background mb-4">Follow Us</p>
            <div className="flex gap-4">
              {[
                { label: "Instagram", href: "#" },
                { label: "Facebook", href: "#" },
                { label: "YouTube", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Photofocuz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

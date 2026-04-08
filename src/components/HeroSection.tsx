const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background pt-20">
      <div className="container py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
            <span className="text-primary text-sm font-medium">⭐ 4.9 Rated</span>
            <span className="text-muted-foreground text-sm">• 37 Google Reviews</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
            Capturing Your <span className="text-primary italic">Forever</span> Moments
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Premium wedding photography & cinematography services across India and worldwide. 7+ years of crafting timeless memories.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/portfolio"
              className="rounded-full bg-foreground px-8 py-3.5 text-base font-medium text-background transition-all hover:opacity-90"
            >
              View Portfolio
            </a>
            <a
              href="/contact"
              className="rounded-full border-2 border-foreground px-8 py-3.5 text-base font-medium text-foreground transition-all hover:bg-foreground hover:text-background"
            >
              Contact Us
            </a>
          </div>
          <div className="flex justify-center gap-8 pt-4">
            <div className="text-center">
              <p className="font-heading text-3xl font-bold text-foreground">7+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Weddings</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-bold text-foreground">4.9</p>
              <p className="text-sm text-muted-foreground">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

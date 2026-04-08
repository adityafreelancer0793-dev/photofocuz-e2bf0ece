import heroImg from "@/assets/portfolio-1.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background pt-20">
      <div className="container grid lg:grid-cols-2 gap-12 items-center py-16">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
            <span className="text-primary text-sm font-medium">⭐ 4.9 Rated</span>
            <span className="text-muted-foreground text-sm">• 37 Google Reviews</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
            Capturing Your <span className="text-primary italic">Forever</span> Moments
          </h1>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Premium wedding photography & cinematography services across India and worldwide. 7+ years of crafting timeless memories.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="rounded-full bg-foreground px-8 py-3.5 text-base font-medium text-background transition-all hover:opacity-90"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-foreground px-8 py-3.5 text-base font-medium text-foreground transition-all hover:bg-foreground hover:text-background"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={heroImg}
              alt="Photofocuz wedding photography - elegant couple portrait in traditional Indian wedding attire"
              width={800}
              height={1000}
              className="w-full h-[500px] lg:h-[600px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-background shadow-card p-5">
            <p className="font-heading text-3xl font-bold text-foreground">7+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

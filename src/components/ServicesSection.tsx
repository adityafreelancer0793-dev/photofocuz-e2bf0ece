import { Camera, Film, Heart, Gem, Plane, PartyPopper } from "lucide-react";

const services = [
  { icon: Camera, title: "Wedding Photography", desc: "Stunning, editorial-quality photography capturing every precious moment of your wedding day." },
  { icon: Film, title: "Wedding Cinematography", desc: "Cinematic wedding films that tell your love story with emotion, beauty, and artistry." },
  { icon: Heart, title: "Pre-Wedding Shoots", desc: "Romantic pre-wedding sessions at breathtaking locations to celebrate your journey together." },
  { icon: Gem, title: "Engagement Photography", desc: "Elegant engagement portraits that mark the beginning of your beautiful chapter." },
  { icon: Plane, title: "Destination Weddings", desc: "Professional coverage for destination weddings across India and worldwide." },
  { icon: PartyPopper, title: "Event Photography", desc: "Complete event coverage for receptions, sangeet, mehndi, and all wedding celebrations." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Our Services</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            What We Offer
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl bg-background p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <s.icon className="text-primary" size={26} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

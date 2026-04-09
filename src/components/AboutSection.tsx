import aboutImg from "@/assets/portfolio-9.jpg";

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "500+", label: "Weddings Covered" },
  { value: "4.9", label: "Google Rating" },
  { value: "37+", label: "5-Star Reviews" },
  { value: "11+", label: "Countries Covered" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="rounded-2xl overflow-hidden shadow-elevated">
          <img
            src={aboutImg}
            alt="Photofocuz candid wedding photography - bride and groom sharing a warm moment"
            loading="lazy"
            width={800}
            height={600}
            className="w-full h-[450px] object-cover"
          />
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">About Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
              We Tell Your Love Story
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We are providing complete wedding photography and cinematography services all over the world. 
            With over 7 years of experience, our team at Photofocuz specializes in capturing the authentic 
            emotions, fine details, and beautiful moments that make your wedding day truly unforgettable.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-secondary p-6">
                <p className="font-heading text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

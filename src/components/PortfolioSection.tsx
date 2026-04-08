import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import p7 from "@/assets/portfolio-7.jpg";
import p8 from "@/assets/portfolio-8.jpg";
import p9 from "@/assets/portfolio-9.jpg";
import p10 from "@/assets/portfolio-10.jpg";

const allImages = [
  { src: p1, alt: "Elegant couple in traditional Indian wedding attire - red lehenga and black sherwani", tall: true },
  { src: p2, alt: "Bride in red bridal lehenga on beach with groom in white sherwani", tall: false },
  { src: p3, alt: "Bridal portrait - bride in red embroidered lehenga with gold jewelry", tall: true },
  { src: p4, alt: "Couple dancing at wedding reception under floral chandelier", tall: false },
  { src: p5, alt: "Vogue-style outdoor wedding portrait in garden setting", tall: true },
  { src: p6, alt: "Joyful couple celebrating at white colonial venue", tall: false },
  { src: p7, alt: "Intimate moment between bride and mother", tall: false },
  { src: p8, alt: "Bride in ornate maroon lehenga on staircase", tall: true },
  { src: p9, alt: "Golden hour candid portrait of bride and groom", tall: false },
  { src: p10, alt: "Romantic close-up of couple in white wedding attire", tall: false },
];

interface PortfolioSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

const PortfolioSection = ({ limit, showViewAll = false }: PortfolioSectionProps) => {
  const images = limit ? allImages.slice(0, limit) : allImages;

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Our Work</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Portfolio
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="group break-inside-avoid rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={600}
                  height={img.tall ? 900 : 600}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-12">
            <a
              href="/portfolio"
              className="rounded-full bg-foreground px-8 py-3.5 text-base font-medium text-background transition-all hover:opacity-90 inline-block"
            >
              View All Photos
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;

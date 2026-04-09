import { Star } from "lucide-react";

const reviews = [
  {
    text: "We chose Photo Focuz to capture our registered marriage, and it was one of the best decisions we made. The professionalism and creativity were outstanding. The team made us comfortable and captured every special moment beautifully.",
    name: "Abhilash Mishra",
    role: "Client",
  },
  {
    text: "Amazing experience with Photo Focuz. They captured our wedding beautifully and delivered premium quality photos and videos. Highly recommended for wedding photography.",
    name: "Ayesha Thasniya",
    role: "Client",
  },
  {
    text: "Mashallah amazing photographer. Very professional team and excellent photography. Loved every photo and video.",
    name: "Muhammad Shehzad",
    role: "Client",
  },
  {
    text: "Best decision choosing Photo Focuz. Team was friendly, professional, and delivered beautiful memories.",
    name: "Sabah Khanam",
    role: "Client",
  },
  {
    text: "Amazing work and great team. Photos and videos were delivered on time with premium quality.",
    name: "Sayyed Aatish",
    role: "Client",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl bg-background p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-heading font-bold text-sm">{r.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

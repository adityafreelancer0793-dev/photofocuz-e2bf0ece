import { Star } from "lucide-react";

const reviews = [
  {
    text: "The photographs are stunning and reflect genuine emotions and fine details. Photofocuz captured our wedding beautifully!",
    name: "Priya S.",
    role: "Bride",
  },
  {
    text: "Amazing photos and videos were perfectly captured of our special day. The team was so professional and friendly.",
    name: "Rahul M.",
    role: "Groom",
  },
  {
    text: "Professional team and beautiful cinematic wedding coverage. Every frame tells a story. Absolutely loved the final album!",
    name: "Ananya K.",
    role: "Bride",
  },
  {
    text: "Highly recommended wedding photographer. They went above and beyond to make sure everything was perfect on our big day.",
    name: "Vikram R.",
    role: "Groom",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div>
                <p className="font-heading font-semibold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

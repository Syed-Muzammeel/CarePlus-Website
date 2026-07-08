import { Star } from "lucide-react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Kalyanamma",
    role: "Patient for 3 years",
    content: "The care I receive at Vigneswar Clinic is exceptional. Dr. Shanthi takes the time to listen and never makes me feel rushed. The entire staff is friendly, and the clinic is always impeccably clean.",
    rating: 5
  },
  {
    name: "Jayamma",
    role: "Recent Patient",
    content: "I visited for a general checkup and was blown away by the efficiency and warmth of the team. Booking was easy, wait time was minimal, and the consultation was very thorough. Highly recommended.",
    rating: 5
  },
  {
    name: "Kavita",
    role: "Mother of two",
    content: "Finding a good clinic for children is tough, but Vigneswar Clinic has been wonderful. The pediatrician is so gentle with my kids, and the environment is very welcoming. I trust them completely with my family's health.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Patient Stories</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">What Our Patients Say</h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Read about the experiences of our valued patients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm flex flex-col h-full relative"
            >
              <div className="absolute top-6 right-8 text-primary/10">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed flex-grow italic mb-8 relative z-10">
                "{review.content}"
              </p>
              
              <div>
                <h4 className="font-bold text-foreground">{review.name}</h4>
                <p className="text-sm text-primary font-medium">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
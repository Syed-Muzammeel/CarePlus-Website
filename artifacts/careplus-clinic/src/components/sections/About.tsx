import { motion } from "framer-motion";
import { CheckCircle2, HeartPulse, ShieldCheck, UserCheck } from "lucide-react";

const FEATURES = [
  {
    icon: HeartPulse,
    title: "Patient-Centered Care",
    desc: "We provide compassionate, personalized healthcare for patients of all ages with a strong focus on prevention and wellness.",
  },
  {
    icon: UserCheck,
    title: "Experienced Medical Care",
    desc: "Led by Dr. Shanthi S, offering trusted diagnosis, treatment, and follow-up care for individuals and families.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Safety",
    desc: "A clean, comfortable, and patient-friendly clinic committed to delivering quality healthcare with modern medical practices.",
  },
];
export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl border border-border/50">
              <img src="/about-image.jpg" alt="Vigneswar Clinic Care" className="object-cover w-full h-full" />
            </div>
            {/* Overlay stat card */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-card p-6 md:p-8 rounded-[1.5rem] shadow-xl border border-border/50 max-w-[240px]">
              <div className="text-5xl font-bold text-primary mb-2">10+</div>
              <p className="text-sm text-muted-foreground font-medium leading-snug">Years of trusted community healthcare</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">About Vigneswar Clinic</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">A Neighborhood Clinic You Can Trust</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
  At Vigneswar Clinic, under the care of  Dr.Mrs.Shanthi Annamalai, MBBS, PGDHSC (Diabetology)S, we are committed to
  providing compassionate, affordable, and high-quality healthcare for the
  community. Our goal is to deliver accurate diagnosis, effective treatment,
  and preventive care in a friendly and comfortable environment for every
  patient.
</p>
            </div>

            <div className="space-y-8 mt-6">
              {FEATURES.map((feature, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 rounded-2xl bg-accent flex items-center justify-center text-primary shadow-inner">
                      <feature.icon className="h-7 w-7" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <p className="font-semibold text-foreground text-lg">
  Led by Dr. Shanthi Annamalai, MBBS, PGDHSC (Diabetology)
</p>

<p className="text-muted-foreground mt-2">
  Family Physician & Diabetologist
</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
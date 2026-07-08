import { useState } from "react";
import { motion } from "framer-motion";
import { Stethoscope, Baby, Flower2, Activity, Droplets, Syringe, ClipboardPlus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const SERVICES = [
  {
    id: "general",
    title: "General Consultation",
    icon: Stethoscope,
    desc: "Comprehensive checkups and treatment for common illnesses.",
    fullDesc: "Our general consultations cover a wide range of common medical conditions. We focus on accurate diagnosis, personalized treatment plans, and continuous monitoring to ensure your swift recovery and long-term well-being."
  },
  {
    id: "child",
    title: "Child Care",
    icon: Baby,
    desc: "Expert pediatric care for infants, children, and adolescents.",
    fullDesc: "We provide specialized care for your little ones, from routine checkups and developmental monitoring to treating childhood illnesses. Our friendly environment ensures children feel safe and comfortable."
  },
  {
    id: "womens",
    title: "Women's Health",
    icon: Flower2,
    desc: "Dedicated healthcare services tailored for women of all ages.",
    fullDesc: "Comprehensive women's healthcare including preventive screenings, reproductive health, menopause management, and general wellness tailored specifically to women's unique physiological needs."
  },
  {
    id: "diabetes",
    title: "Diabetes Care",
    icon: Activity,
    desc: "Management, monitoring, and lifestyle guidance for diabetes.",
    fullDesc: "Expert management of Type 1 and Type 2 diabetes. We offer regular monitoring, medication management, nutritional counseling, and lifestyle modifications to help you maintain optimal blood sugar levels."
  },
  {
    id: "bp",
    title: "Blood Pressure",
    icon: Droplets,
    desc: "Regular screening and management of hypertension.",
    fullDesc: "Hypertension is a silent killer. We provide routine blood pressure checks, lifestyle interventions, and medical management to keep your cardiovascular health in check."
  },
  {
    id: "vaccine",
    title: "Vaccination",
    icon: Syringe,
    desc: "Routine immunizations for children and adults.",
    fullDesc: "Stay protected against preventable diseases. We offer a full schedule of routine immunizations for children, as well as seasonal flu shots and travel vaccines for adults."
  },
  {
    id: "checkup",
    title: "Health Checkups",
    icon: ClipboardPlus,
    desc: "Full body screening for preventive healthcare.",
    fullDesc: "Preventive medicine is the best medicine. Our comprehensive full-body checkups are designed to catch potential health issues early when they are most treatable."
  }
];

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-accent/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Comprehensive Healthcare Solutions</h2>
          <p className="text-muted-foreground text-lg">
            We offer a wide range of medical services to keep you and your family healthy at every stage of life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-xl hover:border-primary/30 transition-all group flex flex-col"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm flex-grow mb-6">{service.desc}</p>
              <Button 
                variant="ghost" 
                className="w-fit p-0 hover:bg-transparent text-primary hover:text-primary/80"
                onClick={() => setSelectedService(service)}
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              {selectedService && <selectedService.icon className="h-6 w-6" />}
            </div>
            <DialogTitle className="text-2xl">{selectedService?.title}</DialogTitle>
            <DialogDescription className="text-base text-foreground mt-4 leading-relaxed">
              {selectedService?.fullDesc}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 flex justify-end">
            <Button onClick={() => {
              setSelectedService(null);
              document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Book this service
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
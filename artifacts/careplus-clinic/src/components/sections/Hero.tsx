import { Button } from "@/components/ui/button";
import { Phone, Clock, AlertCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-accent/30">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/hero-bg.jpg" alt="Clinic Reception" className="w-full h-full object-cover opacity-15 dark:opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary w-fit text-sm font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Accepting New Patients
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Your Health, <br/>
              <span className="text-primary">Our Priority.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
              Experience compassionate, comprehensive healthcare in a welcoming environment. 
              We blend modern medical expertise with personalized attention because you deserve to feel cared for, not just processed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="rounded-full text-base h-14 px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
                onClick={() => document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full text-base h-14 px-8 border-2 bg-background/50 backdrop-blur-sm"
                asChild
              >
                <a href="tel:+918045678900">
                  <Phone className="ml-0 mr-2 h-5 w-5" /> Call Now
                </a>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mt-10 pt-8 border-t border-border/60">
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Working Hours</h3>
                  <p className="text-sm text-muted-foreground">Mon-Fri: 8:00 AM - 8:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sat: 9:00 AM - 5:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sun: Closed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-destructive mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">24/7 Emergency</h3>
                  <a href="tel:+919845012345" className="text-lg font-bold text-destructive hover:underline block">
                    +91 98450 12345
                  </a>
                  <p className="text-sm text-muted-foreground mt-0.5">Immediate medical assistance</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] border border-border/50 bg-card">
              <img src="/doctor.jpg" alt="Dr. Shanthi" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-background/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-border">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                      DS
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">Dr. Shanthi S</h4>
                      <p className="text-primary text-sm font-medium">Lead Physician</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary rounded-full -z-10 blur-3xl opacity-20"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-secondary rounded-full -z-10 blur-3xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
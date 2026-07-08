import { motion } from "framer-motion";
import { Award, GraduationCap, Clock, CheckCircle } from "lucide-react";

export function Doctor() {
  return (
    <section id="doctor" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 flex flex-col gap-6"
          >
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Meet Our Doctor</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Dr. Shanthi S</h2>
            
            <div className="inline-flex items-center gap-2 bg-accent/50 text-primary px-4 py-2 rounded-lg w-fit font-medium">
              <Award className="h-5 w-5" />
              MBBS, MD - Internal Medicine
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Dr. Shanthi is a board-certified physician with over 12 years of clinical experience. 
              She specializes in Family and Internal Medicine, bringing a holistic approach to patient care. 
              Her philosophy centers on building lasting relationships with patients to understand their complete health profile.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <h4 className="font-bold text-foreground">Experience</h4>
                </div>
                <p className="text-muted-foreground text-sm">12+ Years in primary and internal medicine.</p>
              </div>
              <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h4 className="font-bold text-foreground">Specialization</h4>
                </div>
                <p className="text-muted-foreground text-sm">Family Health & Internal Medicine expert.</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-bold text-foreground mb-4">Consultation Timings</h4>
              <ul className="space-y-3">
                <li className="flex justify-between max-w-sm">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between max-w-sm">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium text-foreground">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between max-w-sm text-destructive">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative max-w-md mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform translate-x-4 translate-y-4"></div>
              <img 
                src="/doctor.jpg" 
                alt="Dr. Shanthi S" 
                className="relative rounded-[2rem] w-full object-cover aspect-[3/4] shadow-xl border border-border/50" 
              />
              <div className="absolute -bottom-6 -left-6 bg-card px-6 py-4 rounded-xl shadow-lg border border-border flex items-center gap-4">
                <div className="h-12 w-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Board Certified</div>
                  <div className="text-sm text-muted-foreground">Internal Medicine</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
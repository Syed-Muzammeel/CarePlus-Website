import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z
  .string()
  .email("Enter a valid email")
  .optional()
  .or(z.literal("")),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
 

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

const onSubmit = (data: FormValues) => {
  const message = `🏥 *New Enquiry - Vigneswar Clinic*

👤 Name: ${data.name}

📞 Phone: ${data.phone || "Not provided"}

📧 Email: ${data.email || "Not provided"}

📝 Message:
${data.message}
`;

  const whatsappURL =
    `https://wa.me/919380676549?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

  setIsSuccess(true);
  form.reset();

  toast({
    title: "Redirecting to WhatsApp",
    description: "Please tap Send in WhatsApp to send your message.",
  });

  setTimeout(() => setIsSuccess(false), 5000);
};

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Contact Us</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md">
              Have a question or need assistance? Reach out to us, and our friendly team will be happy to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Clinic Address</h4>
                  <p className="text-muted-foreground mt-1">
  40, Vidyaranyapura - Thindlu Rd<br />
  Hanumanna Layout, Lakeshore Garden<br />
  Vidyaranyapura, Bengaluru<br />
  Karnataka - 560097
</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Contact Numbers</h4>
                  <p className="text-muted-foreground mt-1">
  Reception: +91 99452 23334<br />
  Mobile: <span className="text-primary font-medium">+91 93806 76549</span>
</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Email Address</h4>
                  <p className="text-muted-foreground mt-1">contact@vigneswarclinic.com<br/>appointments@vigneswarclinic.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Working Hours</h3>
 <p className="text-sm text-muted-foreground">Mon: 10:30 AM – 1:30 PM | 7:00 PM – 9:30 PM</p>
<p className="text-sm text-muted-foreground">Tue: 10:30 AM – 1:30 PM | 7:00 PM – 9:30 PM</p>
<p className="text-sm text-muted-foreground">Wed & Thu: 7:00 PM – 9:30 PM</p>
<p className="text-sm text-muted-foreground">Fri: 10:30 AM – 1:30 PM | 7:00 PM – 9:30 PM</p>
<p className="text-sm text-muted-foreground">Sat: 10:30 AM – 1:30 PM | 6:30 PM – 9:30 PM</p>
<p className="text-sm text-muted-foreground">Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl overflow-hidden shadow-lg border border-border h-[250px] relative">
              {/* Generic embedded map showing a location placeholder */}
 <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d485.8086470834988!2d77.5644736!3d13.0694245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19e84e67915d%3A0x5684146761eee8f!2sVignesvar%20Clinic%20-%20Dr.Santhi%20Annamalai!5e0!3m2!1sen!2sin!4v1783542974279!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
  className="rounded-2xl w-full"
/>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 md:p-10 rounded-[2rem] shadow-xl border border-border relative overflow-hidden h-fit"
          >
            {isSuccess ? (
              <div className="absolute inset-0 bg-card z-10 flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="h-20 w-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for contacting Vigneswar Clinic. Our team will get back to you as soon as possible.
                </p>
                <Button className="mt-8" onClick={() => setIsSuccess(false)}>Send Another Message</Button>
              </div>
            ) : null}

            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email (optional)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your mobile number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you today?" 
                          className="resize-none h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
  type="submit"
  size="lg"
  className="w-full h-14 text-base rounded-xl"
>
  Send via WhatsApp
</Button>
              </form>
            </Form>
            
            <div className="mt-8 pt-8 border-t border-border flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Prefer to chat?</p>
                <p className="text-xs text-muted-foreground">Reach us on WhatsApp</p>
              </div>
              <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-950/30 gap-2" asChild>
                <a href="https://wa.me/919945223334" target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  WhatsApp Chat
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
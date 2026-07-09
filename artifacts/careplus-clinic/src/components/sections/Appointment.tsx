import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, isBefore, startOfToday } from "date-fns";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z
  .string()
  .email("Enter a valid email")
  .optional()
  .or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.date({
    required_error: "Please select a date",
  }).refine((date) => !isBefore(date, startOfToday()), {
    message: "Cannot select a date in the past",
  }),
  preferredTime: z.string().min(1, "Please select a time"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const SERVICES = [
  "General Consultation",
  "Family Physician Consultation",
  "Diabetes Management",
  "Blood Pressure Management",
  "Women's Health",
  "Child Healthcare",
  "Preventive Health Check-up",
  "Vaccination",
];

const TIME_SLOTS = [
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
];

export function Appointment() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

const onSubmit = (data: FormValues) => {
const message = `🚀 *NEW APPOINTMENT MESSAGE*

👤 Name: ${data.fullName}

📞 Phone: ${data.phone}

📧 Email: ${data.email}

🩺 Service: ${data.service}

📅 Preferred Date: ${format(data.preferredDate, "dd MMM yyyy")}

🕒 Preferred Time: ${data.preferredTime}

📝 Message:
${data.message || "No additional message"}
`;

  const whatsappURL = `https://wa.me/919380676549?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

  setIsSuccess(true);
  form.reset();

  toast({
    title: "Redirecting to WhatsApp",
    description: "Please tap Send in WhatsApp to complete your appointment request.",
  });

  setTimeout(() => setIsSuccess(false), 5000);
};
  return (
    <section id="appointment" className="py-24 md:py-32 bg-accent/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Book Online</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Book Your Appointment</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Schedule your consultation with Dr. (Mrs.) Shanthi Annamalai. Select your preferred date, time, and service, and our clinic will contact you to confirm your appointment.
            </p>
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-4">
              <h3 className="font-bold text-foreground text-lg">
  Need Assistance?
</h3>

<p className="text-muted-foreground text-sm">
  For appointment inquiries or immediate assistance, please call our clinic during consultation hours.
</p>

<Button variant="default" className="w-full" asChild>
  <a href="tel:+919380676549">
    📞 Call Clinic: +91 93806 76549
  </a>
</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-card p-6 md:p-10 rounded-[2rem] shadow-xl border border-border relative overflow-hidden"
          >
            {isSuccess ? (
              <div className="absolute inset-0 bg-card z-10 flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Request Received!</h3>
                <p className="text-muted-foreground max-w-md">
                  Thank you for choosing Vigneswar Clinic. We have received your appointment request and our front desk will contact you shortly to confirm.
                </p>
                <Button className="mt-8" onClick={() => setIsSuccess(false)}>Book Another</Button>
              </div>
            ) : null}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
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
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your mobile number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

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
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select Service</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {SERVICES.map((service) => (
                              <SelectItem key={service} value={service}>{service}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="preferredDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Preferred Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => isBefore(date, startOfToday())}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="preferredTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose a time slot" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {TIME_SLOTS.map((time) => (
                              <SelectItem key={time} value={time}>{time}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
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
                      <FormLabel>Additional Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Briefly describe your symptoms or reason for visit" 
                          className="resize-none h-24"
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
  Book via WhatsApp
</Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
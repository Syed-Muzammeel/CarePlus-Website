import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, isBefore, startOfToday } from "date-fns";
import { CalendarIcon, Loader2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { useCreateAppointment } from "@workspace/api-client-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
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
  "Child Care",
  "Women's Health",
  "Diabetes Care",
  "Blood Pressure Check",
  "Vaccination",
  "Health Checkups"
];

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30"
];

export function Appointment() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  const createAppointment = useCreateAppointment();

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
    createAppointment.mutate({
      data: {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email,
        service: data.service,
        preferredDate: format(data.preferredDate, "yyyy-MM-dd"),
        preferredTime: data.preferredTime,
        message: data.message,
      }
    }, {
      onSuccess: () => {
        setIsSuccess(true);
        form.reset();
        toast({
          title: "Appointment Requested",
          description: "We have received your request and will confirm shortly.",
        });
        setTimeout(() => setIsSuccess(false), 5000);
      },
      onError: (error) => {
        toast({
          title: "Booking Failed",
          description: (error as any).error || (error as any).data?.error || "Something went wrong. Please try again or call us.",
          variant: "destructive",
        });
      }
    });
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
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Schedule Your Visit</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Booking an appointment is quick and easy. Choose your preferred service, date, and time, and our team will get back to you with a confirmation.
            </p>
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-4">
              <h3 className="font-bold text-foreground text-lg">Need immediate help?</h3>
              <p className="text-muted-foreground text-sm">For emergencies, do not use this form. Please call our emergency line or visit the nearest hospital.</p>
              <Button variant="destructive" className="w-full" asChild>
                <a href="tel:+919845012345">Call Emergency: +91 98450 12345</a>
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
                          <Input placeholder="John Doe" {...field} />
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
                          <Input placeholder="+91 98450 00000" {...field} />
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
                          <Input type="email" placeholder="john@example.com" {...field} />
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
                  disabled={createAppointment.isPending}
                >
                  {createAppointment.isPending ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting Request...</>
                  ) : (
                    "Submit Appointment Request"
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
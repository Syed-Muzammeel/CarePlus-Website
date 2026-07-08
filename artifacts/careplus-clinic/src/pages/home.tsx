import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Doctor } from "@/components/sections/Doctor";
import { Appointment } from "@/components/sections/Appointment";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Dr. Shanthi S - Vigneswar Clinic | Your Health, Our Priority";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Dr. Shanthi S - Vigneswar Clinic offers comprehensive healthcare services, general consultation, child care, and more. Book your appointment today.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Dr. Shanthi S - Vigneswar Clinic offers comprehensive healthcare services, general consultation, child care, and more. Book your appointment today.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Doctor />
        <Appointment />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919845012345" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-24 right-6 z-40 h-14 w-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </a>
    </div>
  );
}
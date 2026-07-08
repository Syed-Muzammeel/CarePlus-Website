import { HeartPulse } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 text-primary hover:opacity-90 transition-opacity mb-6">
              <HeartPulse className="h-8 w-8 shrink-0" />
              <span className="flex flex-col leading-tight">
                <span className="text-xl font-bold tracking-tight text-background">Dr. Shanthi S</span>
                <span className="text-sm font-medium text-background/70">ಡಾ.ಶಾಂತಿ ಎಸ್ - ವಿಗ್ನೇಶ್ವರ ಕ್ಲಿನಿಕ್</span>
              </span>
            </a>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Your trusted neighborhood medical clinic. We blend modern medical expertise with personalized attention because you deserve to feel cared for, not just processed.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-background">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-background/70 hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-background/70 hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-background/70 hover:text-primary transition-colors text-sm">Our Services</a></li>
              <li><a href="#doctor" className="text-background/70 hover:text-primary transition-colors text-sm">Meet Our Doctor</a></li>
              <li><a href="#testimonials" className="text-background/70 hover:text-primary transition-colors text-sm">Patient Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-background">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-background/70 hover:text-primary transition-colors text-sm">General Consultation</a></li>
              <li><a href="#services" className="text-background/70 hover:text-primary transition-colors text-sm">Child Care</a></li>
              <li><a href="#services" className="text-background/70 hover:text-primary transition-colors text-sm">Women's Health</a></li>
              <li><a href="#services" className="text-background/70 hover:text-primary transition-colors text-sm">Diabetes Care</a></li>
              <li><a href="#services" className="text-background/70 hover:text-primary transition-colors text-sm">Vaccination</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-background">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span className="text-background/70 text-sm">45, Vigneswar Complex, Jayanagar 4th Block<br/>Bengaluru 560041, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span className="text-background/70 text-sm">+91 80 4567 8900</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span className="text-background/70 text-sm">contact@vigneswarclinic.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm text-center md:text-left">
            &copy; {currentYear} Dr. Shanthi S - Vigneswar Clinic. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/50 hover:text-background text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/50 hover:text-background text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
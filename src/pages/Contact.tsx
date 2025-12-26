import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import {
  MapPin,
  ArrowRight,
  Building2,
  Mail,
  Phone,
  User,
  Users,
  Instagram,
} from "lucide-react";

const services = [
  "Web Development",
  "Mobile App Development",
  "Custom Software",
  "UI/UX Design",
  "Data Analytics",
  "Cloud Services",
  "Cybersecurity",
  "Digital Marketing",
  "Startup Consulting",
  "Workshops & Events",
  "Internship Programs",
];

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-glow opacity-40" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20"
            >
              Get in Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6"
            >
              Let's Build Something <span className="text-gradient-gold">Amazing</span> Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg lg:text-xl leading-relaxed"
            >
              Have a project in mind? Want to discuss an internship opportunity? 
              We're here to help you achieve your goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Contact Options"
            title="Choose How to Reach Us"
            description="Select the best way to get in touch based on your needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Office Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors border border-primary/20">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                Office Contact
              </h3>
              <p className="text-muted-foreground mb-6">
                Get in touch with our office for general inquiries and project discussions.
              </p>
              <div className="flex flex-col gap-3">
                <a href="mailto:dominova.office@gmail.com">
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4" />
                    Email Office
                  </Button>
                </a>
                <a href="tel:+918754325192">
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4" />
                    Call Office
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* CRM Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors border border-primary/20">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                Client Relationship Manager
              </h3>
              <p className="text-primary font-medium mb-3">Keerthana</p>
              <p className="text-muted-foreground mb-6">
                Speak with our CRM for ongoing support and client services.
              </p>
              <div className="flex flex-col gap-3">
                <a href="mailto:dominova.crm@gmail.com">
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4" />
                    Contact CRM
                  </Button>
                </a>
                <a href="tel:+919629849619">
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4" />
                    Call CRM
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Founder Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors border border-primary/20">
                <User className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                Founder
              </h3>
              <p className="text-primary font-medium mb-3">B. Deepak</p>
              <p className="text-muted-foreground mb-6">
                Connect directly with our founder for partnerships and strategic discussions.
              </p>
              <div className="flex flex-col gap-3">
                <a href="tel:+919025092699">
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4" />
                    Connect with Founder
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Connect */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
                About Dominova
              </span>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-6">
                Your Technology Partner
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Based in Chennai, Dominova delivers exceptional technology solutions and 
                nurtures the next generation of tech talent through industry-oriented programs.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Company</h4>
                    <p className="text-muted-foreground">Dominova</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-display font-semibold text-foreground mb-4">Services We Offer</h4>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1.5 rounded-full bg-secondary text-muted-foreground text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Social Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="p-8 lg:p-10 rounded-2xl bg-background border border-border text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 border border-primary/20">
                  <Instagram className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  Follow Us on Instagram
                </h3>
                <p className="text-muted-foreground mb-6">
                  Stay updated with our latest projects, announcements, and company updates.
                </p>
                <a
                  href="https://instagram.com/dominova_chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="hero" size="lg">
                    <Instagram className="w-5 h-5" />
                    Connect on Instagram
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-6">
              Explore More About Dominova
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/services">
                <Button variant="outline" size="lg">
                  View Our Services
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/internships">
                <Button variant="outline" size="lg">
                  Explore Internships
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn About Us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

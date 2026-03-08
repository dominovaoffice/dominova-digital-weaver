import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { MagneticHover } from "@/components/MagneticHover";
import { FloatingShapes } from "@/components/FloatingShapes";
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
        <FloatingShapes variant="hero" />

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
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6"
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

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto" staggerDelay={0.15}>
            {/* Office Contact */}
            <StaggerItem direction="left">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 text-center"
              >
                <MagneticHover strength={0.4}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors border border-primary/20">
                    <Building2 className="w-7 h-7 text-primary" />
                  </div>
                </MagneticHover>
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
            </StaggerItem>

            {/* Founder Contact */}
            <StaggerItem direction="right">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 text-center"
              >
                <MagneticHover strength={0.4}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors border border-primary/20">
                    <User className="w-7 h-7 text-primary" />
                  </div>
                </MagneticHover>
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
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Social Connect */}
      <section className="py-20 lg:py-28 bg-card relative">
        <FloatingShapes variant="section" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Info Side */}
            <ScrollReveal direction="left">
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
                  <MagneticHover strength={0.4}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                  </MagneticHover>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Company</h4>
                    <p className="text-muted-foreground">Dominova</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MagneticHover strength={0.4}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                  </MagneticHover>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-display font-semibold text-foreground mb-4">Services We Offer</h4>
                <div className="flex flex-wrap gap-2">
                  {services.map((service, i) => (
                    <motion.span
                      key={service}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 rounded-full bg-secondary text-muted-foreground text-sm cursor-default hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {service}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Social Side */}
            <ScrollReveal direction="right">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-8 lg:p-10 rounded-2xl bg-background border border-border text-center group hover:border-primary/30 transition-colors"
              >
                <MagneticHover strength={0.3}>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Instagram className="w-8 h-8 text-primary" />
                  </div>
                </MagneticHover>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  Follow Us on Instagram
                </h3>
                <p className="text-muted-foreground mb-6">
                  Stay updated with our latest projects, announcements, and company updates.
                </p>
                <MagneticHover strength={0.15}>
                  <a
                    href="https://www.instagram.com/dominova_chennai_?igsh=a3lvMTJocHQ4ZGk5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="hero" size="lg">
                      <Instagram className="w-5 h-5" />
                      Connect on Instagram
                    </Button>
                  </a>
                </MagneticHover>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quick Links CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal direction="up">
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
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}

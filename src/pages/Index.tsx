import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ApplyButton } from "@/components/ApplyButton";
import { TiltCard } from "@/components/TiltCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Globe,
  Smartphone,
  Code,
  Palette,
  BarChart3,
  Cloud,
  Shield,
  Lightbulb,
  Users,
  Trophy,
  Rocket,
  CheckCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored software solutions designed to streamline your business operations.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and engaging digital experiences.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights to drive informed business decisions.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Scalable cloud solutions for deployment, hosting, and infrastructure management.",
  },
];

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "2000+", label: "Students Trained" },
  { value: "16+", label: "Tech Domains" },
];

const features = [
  "Industry expert mentorship",
  "Real-world project experience",
  "Placement-oriented training",
  "Flexible learning schedules",
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-glow opacity-60" />
        <ParticlesBackground />
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                IT Services & Technology Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight"
            >
              Building Scalable{" "}
              <span className="text-gradient-gold">Technology Solutions</span>{" "}
              for Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed px-2"
            >
              Dominova is a Chennai-based IT company delivering custom software, web & mobile development, 
              and industry-oriented training programs for businesses and institutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/services">
                <Button variant="hero" size="xl">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a
                href="https://dominova-portfolio-showcase.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero-outline" size="xl">
                  View Portfolio
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-4"
            >
              <ApplyButton size="lg" />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                 <AnimatedCounter
                    value={stat.value}
                    className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gradient-gold mb-2 inline-block"
                  />
                />
                <div className="text-muted-foreground text-sm lg:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Our Services"
            title="Technology Solutions for Every Need"
            description="From custom software development to cloud deployment, we provide end-to-end IT services tailored to your business requirements."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <TiltCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <ApplyButton size="md" />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
                Why Dominova
              </span>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-6">
                Partner With Industry Experts
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We collaborate with working professionals from top MNCs to deliver cutting-edge solutions. 
                Our team combines startup agility with enterprise-grade expertise.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Expert Team</h4>
                    <p className="text-muted-foreground text-sm">MNC professionals guiding every project</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Trophy className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Quality Assured</h4>
                    <p className="text-muted-foreground text-sm">Enterprise-grade solutions delivered</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Rocket className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Fast Delivery</h4>
                    <p className="text-muted-foreground text-sm">Agile methodology for quick turnaround</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Secure & Scalable</h4>
                    <p className="text-muted-foreground text-sm">Built for growth and security</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-secondary aspect-[4/3] border border-border">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Lightbulb className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">Innovation First</h3>
                    <p className="text-muted-foreground">Turning ideas into impactful solutions</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/15 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Internships CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-card border border-border p-6 sm:p-8 lg:p-16">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
                  Career Development
                </span>
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
                  Industry-Oriented Internships & Training
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Bridge the gap between academics and industry with our placement-oriented programs. 
                  Learn from working professionals and gain real-world project experience.
                </p>

                <ul className="space-y-3 mb-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/internships">
                  <Button variant="hero" size="lg">
                    Explore Internship Programs
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["Web Development", "Data Science", "UI/UX Design", "Cybersecurity"].map((domain, index) => (
                  <motion.div
                    key={domain}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-secondary/50 border border-border text-center hover:border-primary/30 transition-colors"
                  >
                    <span className="font-display font-medium text-foreground text-sm">{domain}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how Dominova can help you achieve your technology goals. 
              Get a free consultation with our experts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get a Free Consultation
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="hero-outline" size="xl">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

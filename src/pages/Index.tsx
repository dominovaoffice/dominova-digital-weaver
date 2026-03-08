import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ApplyButton } from "@/components/ApplyButton";
import { TiltCard } from "@/components/TiltCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { FloatingShapes } from "@/components/FloatingShapes";
import { SectionHeader } from "@/components/SectionHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { MagneticHover } from "@/components/MagneticHover";
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
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 will-change-transform">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-gradient-glow opacity-60" />
          <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />
        </motion.div>
        <ParticlesBackground />
        <FloatingShapes variant="hero" />

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
              <MagneticHover strength={0.15}>
                <Link to="/services">
                  <Button variant="hero" size="xl">
                    Explore Our Services
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </MagneticHover>
              <MagneticHover strength={0.15}>
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
              </MagneticHover>
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
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.12}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label} direction="up">
                <div className="text-center">
                  <AnimatedCounter
                    value={stat.value}
                    className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gradient-gold mb-2 inline-block"
                  />
                  <div className="text-muted-foreground text-sm lg:text-base">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 relative">
        <FloatingShapes variant="section" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeader
            badge="Our Services"
            title="Technology Solutions for Every Need"
            description="From custom software development to cloud deployment, we provide end-to-end IT services tailored to your business requirements."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.title} direction="up">
                <TiltCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={0}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/services">
                <Button variant="outline" size="lg">
                  View All Services
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <ApplyButton size="md" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
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

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6" staggerDelay={0.1}>
                {[
                  { icon: Users, title: "Expert Team", desc: "MNC professionals guiding every project" },
                  { icon: Trophy, title: "Quality Assured", desc: "Enterprise-grade solutions delivered" },
                  { icon: Rocket, title: "Fast Delivery", desc: "Agile methodology for quick turnaround" },
                  { icon: Shield, title: "Secure & Scalable", desc: "Built for growth and security" },
                ].map((item) => (
                  <StaggerItem key={item.title} direction="up">
                    <div className="flex items-start gap-3 group">
                      <MagneticHover strength={0.4}>
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                      </MagneticHover>
                      <div>
                        <h4 className="font-display font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden bg-secondary aspect-[4/3] border border-border group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Lightbulb className="w-16 h-16 text-primary mx-auto mb-4" />
                    </motion.div>
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">Innovation First</h3>
                    <p className="text-muted-foreground">Turning ideas into impactful solutions</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/15 blur-2xl" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Internships CTA */}
      <section className="py-20 lg:py-28 relative">
        <FloatingShapes variant="section" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal direction="scale">
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
                    {features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex items-center gap-3 text-foreground"
                      >
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <MagneticHover strength={0.15}>
                    <Link to="/internships">
                      <Button variant="hero" size="lg">
                        Explore Internship Programs
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </MagneticHover>
                </div>

                <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
                  {["Web Development", "Data Science", "UI/UX Design", "Cybersecurity"].map((domain) => (
                    <StaggerItem key={domain} direction="scale">
                      <motion.div
                        whileHover={{ scale: 1.05, y: -4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="p-4 rounded-xl bg-secondary/50 border border-border text-center hover:border-primary/30 transition-colors"
                      >
                        <span className="font-display font-medium text-foreground text-sm">{domain}</span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss how Dominova can help you achieve your technology goals. 
                Get a free consultation with our experts.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticHover strength={0.15}>
                  <Link to="/contact">
                    <Button variant="hero" size="xl">
                      Get a Free Consultation
                    </Button>
                  </Link>
                </MagneticHover>
                <MagneticHover strength={0.15}>
                  <Link to="/about">
                    <Button variant="hero-outline" size="xl">
                      Learn More About Us
                    </Button>
                  </Link>
                </MagneticHover>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}

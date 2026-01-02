import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
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
  ArrowRight,
  CheckCircle,
  Megaphone,
  Rocket,
  GraduationCap,
} from "lucide-react";

const allServices = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with modern frameworks like React, Next.js, and Node.js. We create responsive, fast, and SEO-optimized solutions.",
    features: ["Custom Web Applications", "E-commerce Platforms", "Progressive Web Apps", "CMS Development"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android. We use React Native and Flutter to deliver seamless mobile experiences.",
    features: ["iOS & Android Apps", "Cross-Platform Development", "App Store Optimization", "Maintenance & Support"],
  },
  {
    icon: Code,
    title: "Custom Software Solutions",
    description: "Tailored software solutions designed to automate processes, improve efficiency, and solve unique business challenges.",
    features: ["Enterprise Software", "API Development", "System Integration", "Legacy Modernization"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, engaging, and accessible digital experiences. From wireframes to high-fidelity prototypes.",
    features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Data Science",
    description: "Transform raw data into actionable insights. We provide data analysis, visualization, and machine learning solutions.",
    features: ["Data Visualization", "Predictive Analytics", "Machine Learning", "Business Intelligence"],
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment Services",
    description: "Scalable cloud solutions using AWS, Azure, and Google Cloud. We handle deployment, hosting, and infrastructure management.",
    features: ["Cloud Migration", "DevOps & CI/CD", "Serverless Architecture", "Performance Optimization"],
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Protect your digital assets with comprehensive security solutions. We conduct audits, implement security measures, and provide ongoing monitoring.",
    features: ["Security Audits", "Penetration Testing", "Compliance & Governance", "Security Training"],
  },
  {
    icon: Lightbulb,
    title: "Technology Consulting",
    description: "Strategic technology consulting to help you make informed decisions. We assess, plan, and guide your digital transformation journey.",
    features: ["Technology Assessment", "Digital Strategy", "Project Management", "Vendor Selection"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Services",
    description: "Boost your online presence with our comprehensive digital marketing strategies including SEO, social media marketing, and brand growth.",
    features: ["SEO Optimization", "Social Media Marketing", "Online Brand Growth", "Content Strategy"],
  },
  {
    icon: Rocket,
    title: "Startup Guidance & Consulting",
    description: "End-to-end support for startups including registration guidance, technical roadmap planning, and compliance support.",
    features: ["Startup Registration", "Technical Roadmap", "Compliance Support", "Business Strategy"],
  },
  {
    icon: GraduationCap,
    title: "Workshops & Technical Events",
    description: "Engaging workshops and technical events for colleges and industry professionals including bootcamps and hands-on sessions.",
    features: ["College Workshops", "Industry Sessions", "Technical Bootcamps", "Hands-on Training"],
  },
];

export default function Services() {
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
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6"
            >
              Comprehensive <span className="text-gradient-gold">IT Services</span> for Your Business
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg lg:text-xl leading-relaxed"
            >
              From web development to cybersecurity, we provide end-to-end technology solutions 
              tailored to help your business thrive in the digital age.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {allServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 cursor-pointer"
                  >
                    <service.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={feature} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        className="flex items-center gap-2 text-foreground text-sm group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="shrink-0"
                        >
                          <CheckCircle className="w-4 h-4 text-primary group-hover:text-primary/80 transition-colors" />
                        </motion.div>
                        <span className="group-hover:text-primary transition-colors">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="outline" size="lg">
                      Get a Quote
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="group relative rounded-2xl overflow-hidden bg-card border border-border aspect-[4/3] hover:border-primary/50 transition-all duration-500 cursor-pointer"
                  >
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.3) 0%, transparent 50%),
                                         radial-gradient(circle at 80% 80%, hsl(var(--primary) / 0.2) 0%, transparent 40%),
                                         radial-gradient(circle at 40% 20%, hsl(var(--primary) / 0.15) 0%, transparent 30%)`
                      }} />
                    </div>
                    
                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 opacity-5" style={{
                      backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                                       linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
                      backgroundSize: '40px 40px'
                    }} />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500" />
                    
                    {/* Floating decorative elements */}
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-6 right-6 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20"
                    />
                    <motion.div
                      animate={{ 
                        y: [0, 10, 0],
                        rotate: [0, -5, 0]
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                      className="absolute bottom-12 left-6 w-8 h-8 rounded-full bg-primary/15 border border-primary/20"
                    />
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute top-1/3 left-1/4 w-6 h-6 rounded bg-primary/10"
                    />
                    
                    {/* Main icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 group-hover:bg-primary/30 transition-colors" />
                        <service.icon className="w-24 h-24 text-primary/40 group-hover:text-primary/60 transition-colors relative z-10" />
                      </motion.div>
                    </div>
                    
                    {/* Service number badge */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <span className="text-primary font-display font-semibold text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </motion.div>
                  
                  {/* Glow effect */}
                  <motion.div 
                    animate={{ 
                      opacity: [0.3, 0.5, 0.3],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-primary/20 blur-3xl pointer-events-none" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionHeader
            badge="Let's Work Together"
            title="Ready to Start Your Project?"
            description="Contact our team to discuss your requirements and get a customized solution for your business needs."
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get a Free Consultation
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="hero-outline" size="xl">
                Learn About Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

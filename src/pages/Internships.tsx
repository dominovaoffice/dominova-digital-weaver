import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Globe,
  BarChart3,
  Brain,
  Palette,
  Code,
  Terminal,
  Shield,
  Cloud,
  CheckCircle,
  ArrowRight,
  Award,
  Clock,
  Users,
  Briefcase,
} from "lucide-react";

const internshipDomains = [
  { icon: Globe, title: "Web Development", description: "HTML, CSS, JavaScript, React, Node.js" },
  { icon: BarChart3, title: "Data Analytics", description: "Excel, Python, SQL, Power BI, Tableau" },
  { icon: Brain, title: "Data Science", description: "Python, Machine Learning, Deep Learning" },
  { icon: Palette, title: "UI/UX Design", description: "Figma, Adobe XD, User Research" },
  { icon: Code, title: "Java Programming", description: "Core Java, Spring Boot, Hibernate" },
  { icon: Terminal, title: "Python Programming", description: "Python, Django, Flask, FastAPI" },
  { icon: Shield, title: "Cybersecurity", description: "Ethical Hacking, Network Security, SIEM" },
  { icon: Cloud, title: "Cloud Computing", description: "AWS, Azure, GCP, DevOps" },
];

const highlights = [
  { icon: Briefcase, title: "Real-World Projects", description: "Work on live client projects and build a strong portfolio" },
  { icon: Users, title: "Industry Mentors", description: "Learn from professionals working at top MNCs" },
  { icon: Award, title: "Certification", description: "Receive industry-recognized certification upon completion" },
  { icon: Clock, title: "Flexible Schedule", description: "Weekend and flexible learning options available" },
];

const benefits = [
  "Hands-on project experience",
  "Resume building assistance",
  "LinkedIn profile optimization",
  "Interview preparation",
  "Placement support",
  "Lifetime community access",
];

export default function Internships() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-glow opacity-40" />
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Career Development
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6"
            >
              Industry-Oriented Internships & Training
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg lg:text-xl leading-relaxed mb-8"
            >
              Bridge the gap between academics and industry with our placement-oriented programs. 
              Gain real-world experience and skills that employers actually want.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#register">
                  Register for Internship
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Why Choose Us"
            title="Program Highlights"
            description="Our internship programs are designed to provide you with the skills and experience needed to succeed in the tech industry."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Internship Domains"
            title="Choose Your Path"
            description="We offer internships across multiple technology domains. Select the one that aligns with your career goals."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internshipDomains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <domain.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{domain.title}</h3>
                <p className="text-muted-foreground text-sm">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                What You Get
              </span>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-6">
                Comprehensive Support for Your Career
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Beyond technical training, we provide complete career support to help you land 
                your dream job in the tech industry.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-secondary aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Award className="w-20 h-20 text-primary mx-auto mb-4" />
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">Industry Certified</h3>
                    <p className="text-muted-foreground">Recognized certification upon completion</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/20 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section id="register" className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-card border border-border p-8 lg:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />

            <div className="relative max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Start Your Journey
                </span>
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
                  Ready to Launch Your Tech Career?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Register now to secure your spot in our upcoming batch. 
                  Limited seats available for each domain.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/contact">
                    <Button variant="hero" size="xl">
                      Register for Internship
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="hero-outline" size="xl">
                      Talk to Our Team
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

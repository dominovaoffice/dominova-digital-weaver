import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SectionHeader } from "@/components/SectionHeader";
import founderImage from "@/assets/founder.jpg";
import {
  Target,
  Eye,
  Users,
  Lightbulb,
  ArrowRight,
  Linkedin,
  Building2,
  GraduationCap,
  Rocket,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in teamwork and partner closely with our clients to understand their unique needs.",
  },
  {
    icon: Lightbulb,
    title: "Excellence",
    description: "We are committed to delivering high-quality work that exceeds expectations every time.",
  },
  {
    icon: Eye,
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical practices in all our dealings.",
  },
];

const milestones = [
  { icon: Building2, value: "2024", label: "Founded in Chennai" },
  { icon: Users, value: "10+", label: "Projects Completed" },
  { icon: GraduationCap, value: "2000+", label: "Students Trained" },
  { icon: Rocket, value: "16+", label: "Tech Domains" },
];

export default function About() {
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
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6"
            >
              Building the Future of <span className="text-gradient-gold">Technology</span> in Chennai
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg lg:text-xl leading-relaxed"
            >
              Dominova is a Chennai-based IT startup committed to delivering exceptional 
              technology solutions and nurturing the next generation of tech talent.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
                Our Story
              </span>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-6">
                From Vision to Reality
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Dominova was founded with a clear vision: to bridge the gap between cutting-edge 
                  technology and businesses that need it. Based in Chennai, we combine startup 
                  agility with enterprise-grade expertise.
                </p>
                <p>
                  Our team collaborates with working professionals from top MNCs, bringing 
                  real-world industry experience to every project we undertake. This unique 
                  approach ensures our clients receive solutions that are not just technically 
                  sound but also industry-relevant.
                </p>
                <p>
                  Beyond client projects, we're passionate about nurturing talent. Our internship 
                  and training programs have helped hundreds of students transition from academics 
                  to successful tech careers.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/30 transition-colors"
                >
                  <milestone.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <AnimatedCounter
                    value={milestone.value}
                    className="font-display font-bold text-2xl text-gradient-gold mb-1 inline-block"
                  />
                  <p className="text-muted-foreground text-sm">{milestone.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 lg:p-10 rounded-2xl bg-background border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To become a leading technology partner for businesses across India, known for 
                innovation, quality, and our commitment to developing tech talent. We envision 
                a future where technology empowers every business to achieve its full potential.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 lg:p-10 rounded-2xl bg-background border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To deliver innovative, scalable, and reliable technology solutions that drive 
                business growth. We are committed to fostering talent through industry-oriented 
                training and creating opportunities for students to build successful tech careers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Our Values"
            title="What Drives Us"
            description="Our core values guide everything we do, from how we work with clients to how we develop our team."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
                Leadership
              </span>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground">
                Meet Our Founder
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-8 lg:p-10 rounded-2xl bg-background border border-border"
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shrink-0 border border-border"
              >
                <img
                  src={founderImage}
                  alt="B. Deepak - Founder of Dominova"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </motion.div>

              <div className="text-center lg:text-left">
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">B. Deepak</h3>
                <p className="text-primary font-medium mb-4">Founder</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A passionate technologist with a vision to transform how businesses leverage technology. 
                  Deepak founded Dominova with the goal of creating impactful solutions while nurturing 
                  the next generation of tech professionals in Chennai.
                </p>
                <a
                  href="https://www.linkedin.com/in/deepak-b-34734b279"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">Connect on LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionHeader
            badge="Get in Touch"
            title="Ready to Partner With Us?"
            description="Whether you need technology solutions for your business or want to join our internship program, we'd love to hear from you."
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Contact Our Team
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="hero-outline" size="xl">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

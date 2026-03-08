import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ApplyButton } from "@/components/ApplyButton";
import { SectionHeader } from "@/components/SectionHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { MagneticHover } from "@/components/MagneticHover";
import { FloatingShapes } from "@/components/FloatingShapes";

const benefits = [
  "Work on real development projects",
  "Learn from industry mentors",
  "Build a strong portfolio",
  "Receive certification after completion",
  "Gain practical experience",
  "Placement-oriented training",
];

export function InternshipConversion() {
  return (
    <section className="py-20 lg:py-28 bg-card relative overflow-hidden">
      <FloatingShapes variant="section" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="Internship Program"
          title="Why Choose Dominova Internship"
          description="Bridge the gap between academics and industry with our hands-on, mentor-driven internship programs."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <StaggerContainer className="space-y-4" staggerDelay={0.08}>
              {benefits.map((benefit) => (
                <StaggerItem key={benefit} direction="left">
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative rounded-2xl overflow-hidden bg-background border border-border p-8 lg:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
              <div className="relative text-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="font-display font-bold text-5xl lg:text-6xl text-gradient-gold mb-2">
                    2000+
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">Students Already Trained</p>
                </motion.div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { value: "16+", label: "Tech Domains" },
                    { value: "95%", label: "Satisfaction Rate" },
                    { value: "100%", label: "Hands-on Projects" },
                    { value: "50+", label: "Industry Mentors" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-3 rounded-lg bg-card border border-border">
                      <div className="font-display font-bold text-xl text-primary">{stat.value}</div>
                      <div className="text-muted-foreground text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <MagneticHover strength={0.15}>
                  <ApplyButton size="lg" />
                </MagneticHover>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeader } from "@/components/SectionHeader";

const testimonials = [
  {
    name: "Arun Kumar",
    role: "Web Development Intern",
    quote:
      "The internship at Dominova was a game-changer. I worked on real client projects, learned React and Node.js from industry mentors, and built a portfolio that helped me land my first job.",
    rating: 5,
    initials: "AK",
  },
  {
    name: "Priya Sharma",
    role: "Data Science Intern",
    quote:
      "Dominova's data science program gave me hands-on experience with machine learning and Python. The mentors were incredibly supportive, and I gained skills that I use every day at work.",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Rahul Menon",
    role: "Mobile App Development Intern",
    quote:
      "Building a real mobile app during the internship was the best learning experience. The team guided us through the entire development lifecycle from design to deployment.",
    rating: 5,
    initials: "RM",
  },
  {
    name: "Sneha Reddy",
    role: "UI/UX Design Intern",
    quote:
      "I loved how Dominova focuses on practical learning. The design workshops and real project work helped me understand user-centered design principles that textbooks couldn't teach.",
    rating: 5,
    initials: "SR",
  },
  {
    name: "Vikram Patel",
    role: "Cybersecurity Intern",
    quote:
      "The cybersecurity program was comprehensive and up-to-date with current threats. The hands-on lab sessions and certification support were extremely valuable for my career.",
    rating: 5,
    initials: "VP",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="Student Testimonials"
          title="What Our Interns Say"
          description="Hear from students who transformed their careers through our industry-oriented internship programs."
        />

        <ScrollReveal direction="up">
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-card border border-border rounded-2xl p-8 lg:p-12 overflow-hidden min-h-[280px]">
              {/* Decorative quote */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground text-lg lg:text-xl leading-relaxed mb-8 italic">
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <span className="font-display font-bold text-primary text-sm">
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground">{t.name}</h4>
                      <p className="text-muted-foreground text-sm">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

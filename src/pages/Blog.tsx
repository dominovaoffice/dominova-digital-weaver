import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { MagneticHover } from "@/components/MagneticHover";
import { FloatingShapes } from "@/components/FloatingShapes";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    slug: "how-to-prepare-for-software-internship",
    title: "How to Prepare for a Software Internship in 2025",
    excerpt:
      "A complete guide for students looking to land their first software internship. Learn what skills to build, how to create a portfolio, and tips for cracking technical interviews.",
    category: "Career Tips",
    readTime: "8 min read",
    date: "March 2025",
    author: "Dominova Team",
    content: [
      "Landing a software internship can be the turning point in your career. Whether you're a computer science student or a self-taught developer, preparation is key to standing out from the crowd.",
      "Start by mastering the fundamentals — HTML, CSS, JavaScript, and at least one programming language like Python or Java. Build projects that demonstrate your ability to solve real-world problems. A well-organized GitHub profile with 3-5 solid projects speaks louder than any certification.",
      "Practice data structures and algorithms regularly. Platforms like LeetCode, HackerRank, and CodeChef are excellent for sharpening your problem-solving skills. Focus on arrays, strings, linked lists, and trees as they appear most frequently in internship interviews.",
      "Create a professional resume highlighting your technical skills, projects, and any freelance or volunteer work. Tailor it for each application. Keep it to one page and use action verbs to describe your achievements.",
      "Networking is equally important. Join tech communities, attend hackathons, and connect with professionals on LinkedIn. Many internship opportunities come through referrals rather than job portals.",
      "At Dominova, we provide placement-oriented internship programs that include resume building, interview preparation, and real-world project experience — everything you need to launch your tech career.",
    ],
  },
  {
    slug: "best-skills-for-it-internships",
    title: "Top 10 Skills Every IT Intern Needs in 2025",
    excerpt:
      "Discover the most in-demand technical and soft skills that companies look for when hiring IT interns. From web development to cloud computing, here's what you need to know.",
    category: "Skills",
    readTime: "6 min read",
    date: "February 2025",
    author: "Dominova Team",
    content: [
      "The IT industry is evolving rapidly, and companies expect interns to bring more than just theoretical knowledge. Here are the top 10 skills that will make you a standout candidate.",
      "1. Web Development (HTML, CSS, JavaScript, React) — The backbone of most tech companies. Full-stack knowledge is a massive advantage.",
      "2. Python Programming — From data analysis to automation, Python is the most versatile language for interns.",
      "3. Version Control (Git & GitHub) — Every team uses Git. Understanding branching, pull requests, and collaboration workflows is essential.",
      "4. Database Management (SQL & NoSQL) — Know how to design schemas, write queries, and work with databases like MySQL, PostgreSQL, and MongoDB.",
      "5. Cloud Basics (AWS/Azure/GCP) — Cloud computing is the future. Even basic knowledge of deploying applications and managing services sets you apart.",
      "6. API Development & Integration — RESTful APIs and understanding HTTP protocols are crucial for any developer role.",
      "7. Problem Solving & DSA — Data Structures and Algorithms remain the foundation of technical interviews.",
      "8. Communication & Teamwork — Soft skills matter. Being able to explain your code and collaborate effectively is just as important as writing it.",
      "9. UI/UX Design Fundamentals — Understanding user experience principles helps you build better products, even as a developer.",
      "10. Cybersecurity Awareness — Basic security practices like input validation, authentication, and secure coding are increasingly expected.",
      "At Dominova, our internship programs cover all these domains with hands-on project experience, ensuring you're job-ready from day one.",
    ],
  },
  {
    slug: "real-time-project-internships-benefit-students",
    title: "How Real-Time Project Internships Help Students Get Hired",
    excerpt:
      "Learn why hands-on project experience during internships is the biggest differentiator for freshers entering the job market. Companies value practical skills over theory.",
    category: "Industry Insights",
    readTime: "7 min read",
    date: "January 2025",
    author: "Dominova Team",
    content: [
      "In today's competitive job market, a degree alone isn't enough. Employers want proof that you can apply your knowledge to real problems. That's where real-time project internships make all the difference.",
      "Traditional internships often involve shadowing or completing small tasks. Real-time project internships, on the other hand, place you in live client projects where your contributions directly impact the product.",
      "This kind of experience teaches you project management, deadline handling, code reviews, team collaboration, and debugging in production environments — skills that classroom learning simply cannot provide.",
      "Recruiters consistently report that candidates with project-based internship experience perform better in interviews and onboard faster. Your internship project becomes your strongest talking point.",
      "Building a portfolio of real projects also gives you a competitive edge on platforms like LinkedIn and GitHub. Hiring managers can see exactly what you've built and the technologies you've worked with.",
      "At Dominova, every intern works on real client projects across web development, mobile apps, data science, and more. We ensure you graduate with a portfolio that gets you noticed.",
      "Our programs also include resume optimization, LinkedIn profile building, and mock interviews — a complete package to help you transition from student to professional.",
    ],
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = React.useState<string | null>(null);

  React.useEffect(() => {
    document.title = "Internship Blog & Resources | Dominova Chennai";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Read expert articles on software internships, IT career tips, and how real-time project internships help students get hired. Dominova Blog."
      );
    return () => {
      document.title = "Dominova – Web Development & Software Internship Programs for Students";
    };
  }, []);

  const activePost = blogPosts.find((p) => p.slug === selectedPost);

  return (
    <Layout>
      {/* Hero */}
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
              Resources & Insights
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6"
            >
              Internship Blog & <span className="text-gradient-gold">Career Resources</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg lg:text-xl leading-relaxed"
            >
              Expert tips, industry insights, and practical advice to help you launch your tech career through internships.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          {activePost ? (
            <ScrollReveal direction="up">
              <article className="max-w-3xl mx-auto">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-primary hover:underline mb-6 inline-flex items-center gap-2 text-sm font-medium"
                >
                  ← Back to all articles
                </button>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 border border-primary/20">
                  {activePost.category}
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
                  {activePost.title}
                </h2>
                <div className="flex items-center gap-4 text-muted-foreground text-sm mb-8">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {activePost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {activePost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {activePost.readTime}
                  </span>
                </div>
                <div className="space-y-5">
                  {activePost.content.map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-12 p-6 rounded-2xl bg-card border border-border text-center">
                  <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                    Ready to Start Your Internship?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Join Dominova's industry-oriented internship program and gain real-world experience.
                  </p>
                  <MagneticHover strength={0.15}>
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/internships">
                        Explore Internships
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </MagneticHover>
                </div>
              </article>
            </ScrollReveal>
          ) : (
            <>
              <SectionHeader
                badge="Latest Articles"
                title="Internship Tips & Career Advice"
                description="Practical guides to help you prepare for and succeed in your tech internship journey."
              />
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.1}>
                {blogPosts.map((post) => (
                  <StaggerItem key={post.slug} direction="up">
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer h-full flex flex-col"
                      onClick={() => setSelectedPost(post.slug)}
                    >
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3 border border-primary/20 self-start">
                        {post.category}
                      </span>
                      <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-muted-foreground text-xs pt-4 border-t border-border">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal direction="scale">
            <div className="relative rounded-3xl overflow-hidden bg-background border border-border p-8 lg:p-16 text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5" />
              <div className="relative max-w-2xl mx-auto">
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
                  Industry-Based Internship Program
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Get hands-on experience with real projects, industry mentors, and placement support. Start your tech career with Dominova.
                </p>
                <MagneticHover strength={0.15}>
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/internships">
                      Apply for Internship
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </MagneticHover>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}

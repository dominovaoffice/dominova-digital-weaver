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
  {
    slug: "web-development-internship-tips-beginners",
    title: "Web Development Internship Tips: A Beginner's Roadmap",
    excerpt:
      "Starting a web development internship? Here's a step-by-step roadmap covering HTML, CSS, JavaScript, React, and backend technologies to help you succeed from day one.",
    category: "Web Development",
    readTime: "9 min read",
    date: "March 2025",
    author: "Dominova Team",
    content: [
      "Web development is one of the most popular internship domains, and for good reason — every business needs a web presence. But walking into your first web development internship can be overwhelming if you're not prepared.",
      "Start with the fundamentals. HTML gives structure to web pages, CSS handles styling and layout, and JavaScript adds interactivity. These three form the foundation of everything you'll build. Spend at least 2-3 weeks getting comfortable with them before diving deeper.",
      "Learn responsive design early. Mobile traffic accounts for over 60% of web usage. Understanding CSS Flexbox, Grid, and media queries is non-negotiable. Practice building layouts that look great on phones, tablets, and desktops.",
      "Pick a frontend framework — React is the industry leader in 2025. Learn component-based architecture, state management with hooks, and routing with React Router. Build at least 2-3 projects: a portfolio site, a to-do app, and an API-driven project like a weather app or movie browser.",
      "Don't ignore the backend. Understanding Node.js, Express, and databases (MongoDB or PostgreSQL) makes you a full-stack candidate. Even basic API creation skills dramatically increase your value as an intern.",
      "Version control is mandatory. Learn Git commands (clone, branch, commit, push, pull, merge) and practice collaborating on GitHub. During your internship, you'll be working with teams, and Git is how code collaboration happens.",
      "Build a portfolio website showcasing your projects. Include live demos, GitHub links, and descriptions of the problems you solved. This is often the first thing recruiters look at.",
      "At Dominova, our web development internship covers the entire stack — from HTML/CSS fundamentals to React and Node.js — with real client projects that you can showcase to employers.",
    ],
  },
  {
    slug: "data-science-career-path-guide",
    title: "Data Science Career Path: From Intern to Data Scientist",
    excerpt:
      "Explore the complete data science career roadmap — from your first internship to landing a full-time role. Learn about essential tools, skills, and industry expectations.",
    category: "Data Science",
    readTime: "10 min read",
    date: "February 2025",
    author: "Dominova Team",
    content: [
      "Data science is one of the fastest-growing fields in tech, with companies across every industry seeking professionals who can turn data into actionable insights. Starting with an internship is the smartest way to break in.",
      "The data science career path typically follows this trajectory: Intern → Junior Data Analyst → Data Analyst → Data Scientist → Senior Data Scientist → Lead/Principal Data Scientist. Each step requires deeper technical skills and domain expertise.",
      "As an intern, focus on mastering Python — it's the lingua franca of data science. Libraries like Pandas for data manipulation, NumPy for numerical computing, and Matplotlib/Seaborn for visualization are your essential toolkit.",
      "Learn SQL thoroughly. Despite the rise of NoSQL and big data tools, SQL remains the primary language for querying databases. Most companies store their data in relational databases, and you'll write SQL queries daily.",
      "Statistics and probability form the mathematical foundation of data science. Understand descriptive statistics, hypothesis testing, probability distributions, and regression analysis. These concepts underpin every machine learning algorithm.",
      "Start with supervised learning algorithms — linear regression, logistic regression, decision trees, and random forests. Then explore unsupervised learning (clustering, dimensionality reduction) and deep learning fundamentals with TensorFlow or PyTorch.",
      "Tools matter. Learn to work with Jupyter Notebooks for experimentation, Power BI or Tableau for business visualization, and Excel for quick analysis. Familiarity with cloud platforms (AWS SageMaker, Google Colab) is increasingly expected.",
      "Build a portfolio of data projects. Analyze public datasets from Kaggle, create dashboards, and document your findings. A well-presented data project demonstrates both technical skills and communication ability.",
      "At Dominova, our Data Science internship takes you from Python basics to machine learning deployment, with real datasets and industry mentor guidance throughout the journey.",
    ],
  },
  {
    slug: "cybersecurity-internship-preparation",
    title: "How to Prepare for a Cybersecurity Internship: Complete Guide",
    excerpt:
      "Planning to pursue a cybersecurity internship? Learn the essential skills, certifications, and hands-on practice needed to stand out in this high-demand field.",
    category: "Cybersecurity",
    readTime: "8 min read",
    date: "January 2025",
    author: "Dominova Team",
    content: [
      "Cybersecurity is no longer optional — it's critical. With cyber attacks increasing by 38% year-over-year, companies are desperately seeking security professionals. A cybersecurity internship is your gateway into this high-demand, well-paying field.",
      "Start with networking fundamentals. Understand the OSI model, TCP/IP, DNS, HTTP/HTTPS, firewalls, and VPNs. Cybersecurity is fundamentally about protecting networks and systems, so networking knowledge is non-negotiable.",
      "Learn Linux. Most security tools run on Linux, and many servers use Linux-based operating systems. Get comfortable with the command line — navigating directories, managing permissions, editing files, and running scripts.",
      "Understand common attack vectors: phishing, SQL injection, cross-site scripting (XSS), denial of service (DoS), man-in-the-middle attacks, and ransomware. Knowing how attacks work is the first step to preventing them.",
      "Practice on legal platforms. TryHackMe and Hack The Box offer hands-on cybersecurity challenges ranging from beginner to advanced. These platforms simulate real-world scenarios and teach you ethical hacking techniques safely.",
      "Learn security tools: Wireshark for packet analysis, Nmap for network scanning, Burp Suite for web application testing, Metasploit for penetration testing, and SIEM tools like Splunk for security monitoring. Hands-on experience with these tools is what internship recruiters look for.",
      "Consider entry-level certifications. CompTIA Security+ is widely recognized and covers foundational security concepts. For ethical hacking, CEH (Certified Ethical Hacker) is valuable. These certifications signal commitment to the field.",
      "Stay updated. Follow cybersecurity news on platforms like Krebs on Security, The Hacker News, and SANS Internet Storm Center. The threat landscape changes constantly, and awareness of current trends shows employers you're passionate about the field.",
      "At Dominova, our Cybersecurity internship covers ethical hacking, network security, SIEM tools, and incident response — with hands-on labs and real-world scenarios guided by industry professionals.",
    ],
  },
  {
    slug: "web-development-frameworks-comparison-2025",
    title: "React vs Angular vs Vue: Which Framework to Learn for Your Internship",
    excerpt:
      "Confused about which web framework to learn? Compare React, Angular, and Vue.js to make the right choice for your web development internship and career.",
    category: "Web Development",
    readTime: "7 min read",
    date: "December 2024",
    author: "Dominova Team",
    content: [
      "Choosing the right frontend framework is one of the most common dilemmas for aspiring web developers. Let's break down the top three options to help you make an informed decision for your internship preparation.",
      "React (by Meta) is the most popular frontend library in 2025, used by companies like Netflix, Instagram, Airbnb, and Uber. It uses a component-based architecture with JSX syntax and a virtual DOM for performance. React's massive ecosystem (Next.js, React Native) means learning it opens doors across web and mobile development.",
      "Angular (by Google) is a full-featured framework used by enterprises like Google, Microsoft, and Samsung. It uses TypeScript by default, includes built-in routing, forms handling, and HTTP client. Angular has a steeper learning curve but teaches you structured, enterprise-grade development patterns.",
      "Vue.js is known for its gentle learning curve and excellent documentation. Used by companies like Alibaba, GitLab, and Nintendo, Vue offers a progressive framework that you can adopt incrementally. Its single-file components make it intuitive for beginners.",
      "For internship preparation in 2025, React is the safest bet. It has the highest demand in job postings, the largest community, and the most learning resources. Most startups and tech companies in India prefer React developers.",
      "However, if you're targeting enterprise companies or government projects, Angular knowledge is valuable. And if you want to build quickly with a gentle learning curve, Vue is excellent for personal projects and small teams.",
      "Regardless of which framework you choose, master the fundamentals first — HTML, CSS, JavaScript, and TypeScript. Framework knowledge built on weak fundamentals won't hold up in real projects.",
      "At Dominova, our Web Development internship focuses on React as the primary framework, while exposing interns to the concepts that transfer across all frameworks — component architecture, state management, API integration, and deployment.",
    ],
  },
  {
    slug: "data-science-tools-beginners-2025",
    title: "Essential Data Science Tools Every Beginner Should Learn in 2025",
    excerpt:
      "From Python and SQL to Power BI and TensorFlow — discover the must-have tools in your data science toolkit and how to get hands-on experience during your internship.",
    category: "Data Science",
    readTime: "8 min read",
    date: "December 2024",
    author: "Dominova Team",
    content: [
      "The data science field has an incredibly rich ecosystem of tools and libraries. As a beginner, it's easy to feel overwhelmed. Here's a curated guide to the essential tools you need to master before and during your internship.",
      "Python is your primary programming language. It's readable, versatile, and has the richest data science ecosystem. Install Anaconda to get Python along with essential data science packages pre-configured.",
      "Pandas is your data manipulation powerhouse. Learn to load CSV/Excel files, filter rows, group data, merge datasets, and handle missing values. You'll use Pandas in virtually every data science task.",
      "NumPy handles numerical computing. Understanding arrays, matrix operations, and mathematical functions is essential for implementing algorithms and working with large datasets efficiently.",
      "Visualization libraries bring your data to life. Matplotlib provides basic plotting, Seaborn adds statistical visualization, and Plotly creates interactive charts. Learn all three — different situations call for different tools.",
      "Jupyter Notebooks are the standard environment for data exploration. They let you combine code, output, and markdown explanations in a single document. Your internship projects will likely be developed in Jupyter.",
      "SQL is indispensable. Learn SELECT, JOIN, GROUP BY, subqueries, and window functions. Tools like MySQL Workbench or pgAdmin provide practice environments. Most interview processes include SQL assessments.",
      "For machine learning, Scikit-learn is your starting point — it implements all classical ML algorithms with a consistent API. Once comfortable, explore TensorFlow or PyTorch for deep learning projects.",
      "Business intelligence tools like Power BI and Tableau help you create dashboards for non-technical stakeholders. Many data roles require you to present findings visually, making these tools career-essential.",
      "At Dominova, our Data Analytics and Data Science internships provide hands-on experience with all these tools through real-world projects, ensuring you build a practical skill set that employers value.",
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

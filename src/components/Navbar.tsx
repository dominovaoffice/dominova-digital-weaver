import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Rocket, Palette } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Internships", path: "/internships" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, cycleTheme, themeLabel } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Dominova" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant="nav"
                  className={location.pathname === link.path ? "text-primary bg-primary/10" : ""}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={cycleTheme}
              className="inline-flex items-center gap-2 h-9 px-3 rounded-lg text-sm font-display font-semibold
                border border-border bg-secondary text-foreground hover:bg-primary/10 hover:border-primary/50 transition-colors"
              aria-label="Change Theme"
            >
              <Palette className="w-4 h-4 text-primary" />
              <span className="hidden xl:inline">{themeLabel}</span>
            </motion.button>
            <a
              href="https://forms.gle/zhufuHYQkRFnJWEv7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 h-9 px-4 rounded-lg text-sm font-display font-semibold
                  bg-gradient-to-r from-[hsl(240,80%,55%)] to-[hsl(280,80%,55%)]
                  text-white shadow-[0_0_20px_hsl(260,80%,55%/0.3)]
                  hover:shadow-[0_0_30px_hsl(260,80%,55%/0.5)] transition-shadow duration-300"
              >
                <Rocket className="w-3.5 h-3.5" />
                Apply for Internship
              </motion.button>
            </a>
            <Link to="/contact">
              <Button variant="hero" size="default">
                Get a Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant="nav"
                    className={`w-full justify-start ${location.pathname === link.path ? "text-primary bg-primary/10" : ""}`}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
              <button
                onClick={cycleTheme}
                className="w-full flex items-center justify-center gap-2 h-10 rounded-lg text-sm font-display font-semibold
                  border border-border bg-secondary text-foreground hover:bg-primary/10"
              >
                <Palette className="w-4 h-4 text-primary" />
                Change Theme: {themeLabel}
              </button>
              <a
                href="https://forms.gle/zhufuHYQkRFnJWEv7"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <button className="w-full mt-2 flex items-center justify-center gap-2 h-10 rounded-lg text-sm font-display font-semibold
                  bg-gradient-to-r from-[hsl(240,80%,55%)] to-[hsl(280,80%,55%)]
                  text-white">
                  <Rocket className="w-4 h-4" />
                  Apply for Internship
                </button>
              </a>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="hero" className="w-full">
                  Get a Free Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

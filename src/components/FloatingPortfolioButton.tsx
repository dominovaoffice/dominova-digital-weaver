import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const PORTFOLIO_URL = "https://dominova-portfolio-showcase.vercel.app/";

export function FloatingPortfolioButton() {
  return (
    <>
      {/* Desktop - fixed right side */}
      <motion.a
        href={PORTFOLIO_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2 px-4 py-2.5 rounded-full
          bg-primary text-primary-foreground font-display font-semibold text-sm
          shadow-button hover:shadow-glow transition-shadow duration-300"
      >
        <ExternalLink className="w-4 h-4" />
        View Portfolio
      </motion.a>

      {/* Mobile - part of bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2 bg-background/90 backdrop-blur-lg border-t border-border flex gap-2">
        <a
          href="https://forms.gle/zhufuHYQkRFnJWEv7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="w-full flex items-center justify-center gap-1.5 h-9 rounded-md
              bg-gradient-to-r from-[hsl(240,80%,55%)] to-[hsl(280,80%,55%)]
              text-white font-display font-semibold text-xs"
          >
            Apply for Internship
          </motion.button>
        </a>
        <a
          href={PORTFOLIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="w-full flex items-center justify-center gap-1.5 h-9 rounded-md
              bg-primary text-primary-foreground font-display font-semibold text-xs"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Portfolio
          </motion.button>
        </a>
      </div>
    </>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { Rocket } from "lucide-react";
import { useEffect, useState } from "react";

const APPLY_URL = "https://forms.gle/dGaYdC3mgWtxiBAr8";

function trackApplyClick() {
  try {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
      (window as any).fbq("trackCustom", "InternshipApplyClick");
    }
  } catch (_) {}
}

export function FloatingApplyButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop floating button - bottom right */}
      <AnimatePresence>
        {visible && (
          <motion.a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackApplyClick}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2 px-5 py-3 rounded-full
              bg-gradient-to-r from-[hsl(240,80%,55%)] to-[hsl(280,80%,55%)]
              text-white font-display font-semibold text-sm
              shadow-[0_0_30px_hsl(260,80%,55%/0.4)]
              hover:shadow-[0_0_50px_hsl(260,80%,55%/0.6)]
              transition-shadow duration-300"
          >
            <Rocket className="w-4 h-4" />
            Apply for Internship
          </motion.a>
        )}
      </AnimatePresence>

      {/* Mobile sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-background/90 backdrop-blur-lg border-t border-border">
        <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" onClick={trackApplyClick}>
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="w-full flex items-center justify-center gap-2 h-12 rounded-lg
              bg-gradient-to-r from-[hsl(240,80%,55%)] to-[hsl(280,80%,55%)]
              text-white font-display font-semibold text-base
              shadow-[0_0_20px_hsl(260,80%,55%/0.3)]"
          >
            <Rocket className="w-4 h-4" />
            Apply for Internship
          </motion.button>
        </a>
      </div>
    </>
  );
}

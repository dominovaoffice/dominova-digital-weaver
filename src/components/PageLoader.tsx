import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Scanning line */}
          <motion.div
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            initial={{ top: "0%" }}
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
          />

          {/* Animated glow ring */}
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: [0.3, 1.5, 1.2], opacity: [0, 0.6, 0.2] }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute w-72 h-72 rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, transparent 70%)",
            }}
          />

          {/* Secondary pulse ring */}
          <motion.div
            className="absolute w-48 h-48 rounded-full border border-primary/10"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 2], opacity: [0.4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />

          <div className="relative flex flex-col items-center gap-5">
            {/* Logo */}
            <motion.img
              src={logo}
              alt="Dominova"
              className="h-16 w-auto drop-shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
              initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* Tagline with typing effect */}
            <motion.div className="flex items-center gap-1 overflow-hidden">
              {"Technology Solutions".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.035, duration: 0.3 }}
                  className="text-muted-foreground text-xs font-display tracking-[0.2em] uppercase"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <motion.span
                className="inline-block w-[2px] h-3 bg-primary ml-0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 0.6, duration: 0.6, repeat: 3 }}
              />
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 h-[2px] rounded-full bg-border/50 overflow-hidden mt-1">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary/50 via-primary to-primary/50"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: [0.22, 0.68, 0, 1] }}
              />
            </div>
          </div>

          {/* Corner decorations */}
          {[
            "top-6 left-6",
            "top-6 right-6 rotate-90",
            "bottom-6 left-6 -rotate-90",
            "bottom-6 right-6 rotate-180",
          ].map((pos, i) => (
            <motion.div
              key={i}
              className={`absolute ${pos} w-8 h-8 border-l-[1px] border-t-[1px] border-primary/20`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

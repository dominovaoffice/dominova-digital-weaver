import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://instagram.com/dominova_chennai_";

export function FloatingInstagramButton() {
  return (
    <motion.a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow us on Instagram"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.5,
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 w-12 h-12 rounded-full
        bg-gradient-to-br from-[hsl(340,75%,55%)] via-[hsl(15,85%,55%)] to-[hsl(45,90%,55%)]
        flex items-center justify-center text-white
        shadow-[0_4px_20px_rgba(225,48,108,0.4)]
        hover:shadow-[0_4px_30px_rgba(225,48,108,0.6)]
        transition-shadow duration-300"
    >
      <Instagram className="w-5 h-5" />
    </motion.a>
  );
}

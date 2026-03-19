import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

const APPLY_URL = "https://forms.gle/zhufuHYQkRFnJWEv7";

function trackApplyClick() {
  try {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
      (window as any).fbq("trackCustom", "InternshipApplyClick");
    }
  } catch (_) {}
}

interface ApplyButtonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  fullWidth?: boolean;
}

export function ApplyButton({ size = "md", className = "", fullWidth = false }: ApplyButtonProps) {
  const sizeClasses = {
    sm: "h-9 px-4 text-sm",
    md: "h-12 px-8 text-base",
    lg: "h-14 px-10 text-lg",
  };

  return (
    <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" onClick={trackApplyClick} className={fullWidth ? "w-full" : ""}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className={`
          inline-flex items-center justify-center gap-2 font-display font-semibold rounded-lg
          bg-gradient-to-r from-[hsl(240,80%,55%)] to-[hsl(280,80%,55%)]
          text-white shadow-[0_0_30px_hsl(260,80%,55%/0.3)]
          hover:shadow-[0_0_40px_hsl(260,80%,55%/0.5)]
          transition-shadow duration-300
          ${sizeClasses[size]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
      >
        <Rocket className="w-4 h-4" />
        Apply for Internship
      </motion.button>
    </a>
  );
}

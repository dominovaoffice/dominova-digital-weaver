import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  // Extract numeric part and suffix (e.g., "2000+" → 2000, "+")
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  useEffect(() => {
    if (!isInView || !match) {
      if (!match) setDisplayValue(value);
      return;
    }

    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out bounce
      const eased = progress < 0.8
        ? 1 - Math.pow(1 - progress / 0.8, 3)
        : 1 + Math.sin((progress - 0.8) * Math.PI * 5) * 0.02 * (1 - progress) * 5;

      const current = Math.round(eased * target);
      setDisplayValue(current + suffix);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(target + suffix);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, suffix, value, match]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {displayValue}
    </motion.span>
  );
}

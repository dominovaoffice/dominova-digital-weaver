import { useEffect, useRef, useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  // Memoize parsed values to avoid recreating on every render
  const { target, suffix, isNumeric } = useMemo(() => {
    const match = value.match(/^(\d+)(.*)$/);
    return {
      target: match ? parseInt(match[1], 10) : 0,
      suffix: match ? match[2] : value,
      isNumeric: !!match,
    };
  }, [value]);

  useEffect(() => {
    if (!isInView) return;
    if (!isNumeric) {
      setDisplayValue(value);
      return;
    }

    const duration = 1500;
    const startTime = performance.now();
    let rafId: number;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress < 0.8
        ? 1 - Math.pow(1 - progress / 0.8, 3)
        : 1 + Math.sin((progress - 0.8) * Math.PI * 5) * 0.02 * (1 - progress) * 5;

      const current = Math.round(eased * target);
      setDisplayValue(current + suffix);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(target + suffix);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, target, suffix, value, isNumeric]);

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
import { motion } from "framer-motion";

interface FloatingShapesProps {
  variant?: "hero" | "section";
}

const shapes = [
  { size: 80, x: "10%", y: "20%", duration: 18, delay: 0 },
  { size: 50, x: "80%", y: "30%", duration: 22, delay: 2 },
  { size: 35, x: "60%", y: "70%", duration: 20, delay: 4 },
  { size: 65, x: "25%", y: "75%", duration: 25, delay: 1 },
  { size: 45, x: "90%", y: "60%", duration: 19, delay: 3 },
];

export function FloatingShapes({ variant = "hero" }: FloatingShapesProps) {
  const opacity = variant === "hero" ? 0.06 : 0.04;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            opacity,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 5, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "linear",
          }}
        />
      ))}
      {/* Gradient orbs */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl"
        style={{ left: "70%", top: "40%" }}
        animate={{
          x: [0, 40, -20, 30, 0],
          y: [0, -30, 20, -10, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full bg-accent/5 blur-3xl"
        style={{ left: "15%", top: "60%" }}
        animate={{
          x: [0, -30, 15, -25, 0],
          y: [0, 20, -15, 30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

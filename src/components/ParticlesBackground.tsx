import { useEffect, useRef, useCallback } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

// Theme-aware particle colors
const THEME_COLORS: Record<string, { r: number; g: number; b: number }> = {
  gold: { r: 201, g: 162, b: 77 },
  cyber: { r: 0, g: 200, b: 220 },
  "neon-pink": { r: 230, g: 60, b: 150 },
  mint: { r: 50, g: 200, b: 150 },
  ember: { r: 230, g: 130, b: 50 },
  electric: { r: 50, g: 130, b: 255 },
  violet: { r: 160, g: 90, b: 230 },
  lime: { r: 160, g: 220, b: 50 },
  teal: { r: 50, g: 210, b: 200 },
  indigo: { r: 200, g: 80, b: 200 },
  "purple-electric": { r: 160, g: 60, b: 255 },
  steel: { r: 80, g: 180, b: 230 },
  forest: { r: 50, g: 190, b: 100 },
  cosmic: { r: 130, g: 90, b: 255 },
};

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>(0);
  const { theme } = useTheme();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const PARTICLE_COUNT = isMobile ? 25 : 60;
  const CONNECTION_DIST = isMobile ? 80 : 120;

  const initParticles = useCallback((w: number, h: number) => {
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.4 + 0.1,
    }));
  }, [PARTICLE_COUNT]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const color = THEME_COLORS[theme] || THEME_COLORS.gold;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles(canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    if (!isMobile) window.addEventListener("mousemove", onMouse, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        if (!isMobile) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            p.vx -= dx * 0.00008;
            p.vy -= dy * 0.00008;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${p.opacity})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${0.08 * (1 - dist / CONNECTION_DIST)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      if (!isMobile) window.removeEventListener("mousemove", onMouse);
    };
  }, [initParticles, isMobile, CONNECTION_DIST, theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}

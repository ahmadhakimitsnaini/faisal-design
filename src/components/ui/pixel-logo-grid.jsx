"use client";

import { cn } from "../../lib/utils";
import { useCallback, useEffect, useRef } from "react";

/* -----------------------------------------------------------------------------
 * Pixel canvas
 * -------------------------------------------------------------------------- */

function createPixel(ctx, canvas, x, y, color, baseSpeed, delay) {
  const rand = (min, max) => Math.random() * (max - min) + min;

  const p = {
    x,
    y,
    color,
    ctx,
    speed: rand(0.1, 0.9) * baseSpeed,
    size: 0,
    sizeStep: Math.random() * 0.4,
    minSize: 0.5,
    maxSizeInt: 2,
    maxSize: rand(0.5, 2),
    delay,
    counter: 0,
    counterStep: Math.random() * 4 + (canvas.width + canvas.height) * 0.01,
    isIdle: false,
    isReverse: false,
    isShimmer: false,
    draw() {
      const offset = p.maxSizeInt * 0.5 - p.size * 0.5;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x + offset, p.y + offset, p.size, p.size);
    },
    appear() {
      p.isIdle = false;
      if (p.counter <= p.delay) {
        p.counter += p.counterStep;
        return;
      }
      if (p.size >= p.maxSize) p.isShimmer = true;
      if (p.isShimmer) p.shimmer();
      else p.size += p.sizeStep;
      p.draw();
    },
    disappear() {
      p.isShimmer = false;
      p.counter = 0;
      if (p.size <= 0) {
        p.isIdle = true;
        return;
      }
      p.size -= 0.1;
      p.draw();
    },
    shimmer() {
      if (p.size >= p.maxSize) p.isReverse = true;
      else if (p.size <= p.minSize) p.isReverse = false;
      if (p.isReverse) p.size -= p.speed;
      else p.size += p.speed;
    },
  };

  return p;
}

function PixelCanvas({ colors, gap = 5, speed = 30 }) {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const pixelsRef = useRef([]);
  const animationRef = useRef(0);
  const lastFrameRef = useRef(performance.now());
  const reducedMotionRef = useRef(false);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = wrap.getBoundingClientRect();
    const w = Math.floor(width);
    const h = Math.floor(height);
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const effectiveSpeed = reducedMotionRef.current
      ? 0
      : Math.min(speed, 100) * 0.001;
    const pixels = [];

    for (let x = 0; x < w; x += gap) {
      for (let y = 0; y < h; y += gap) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const dx = x - w / 2;
        const dy = y - h / 2;
        const delay = reducedMotionRef.current
          ? 0
          : Math.sqrt(dx * dx + dy * dy);
        pixels.push(createPixel(ctx, canvas, x, y, color, effectiveSpeed, delay));
      }
    }

    pixelsRef.current = pixels;
  }, [colors, gap, speed]);

  const animate = useCallback((mode) => {
    cancelAnimationFrame(animationRef.current);
    const frameInterval = 1000 / 60;

    const loop = () => {
      animationRef.current = requestAnimationFrame(loop);

      const now = performance.now();
      const elapsed = now - lastFrameRef.current;
      if (elapsed < frameInterval) return;
      lastFrameRef.current = now - (elapsed % frameInterval);

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const pixels = pixelsRef.current;
      for (const pixel of pixels) pixel[mode]();

      if (pixels.every((p) => p.isIdle)) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    animationRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    init();

    const resizeObserver = new ResizeObserver(() => init());
    if (wrapRef.current) resizeObserver.observe(wrapRef.current);

    const card = wrapRef.current?.parentElement;
    const handleEnter = () => animate("appear");
    const handleLeave = () => animate("disappear");
    card?.addEventListener("mouseenter", handleEnter);
    card?.addEventListener("mouseleave", handleLeave);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationRef.current);
      card?.removeEventListener("mouseenter", handleEnter);
      card?.removeEventListener("mouseleave", handleLeave);
    };
  }, [init, animate]);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 opacity-70">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

function UsaLogo({ className, style }) {
  return (
    <div className={cn("flex items-center font-bold text-xl tracking-widest uppercase", className)} style={style}>
      <PinIcon /> USA
    </div>
  );
}

function JapanLogo({ className, style }) {
  return (
    <div className={cn("flex items-center font-bold text-xl tracking-widest uppercase", className)} style={style}>
      <PinIcon /> JAPAN
    </div>
  );
}

function UkLogo({ className, style }) {
  return (
    <div className={cn("flex items-center font-bold text-xl tracking-widest uppercase", className)} style={style}>
      <PinIcon /> UK
    </div>
  );
}

function GermanyLogo({ className, style }) {
  return (
    <div className={cn("flex items-center font-bold text-xl tracking-widest uppercase", className)} style={style}>
      <PinIcon /> GERMANY
    </div>
  );
}

function AustraliaLogo({ className, style }) {
  return (
    <div className={cn("flex items-center font-bold text-xl tracking-widest uppercase", className)} style={style}>
      <PinIcon /> AUSTRALIA
    </div>
  );
}

function SingaporeLogo({ className, style }) {
  return (
    <div className={cn("flex items-center font-bold text-xl tracking-widest uppercase", className)} style={style}>
      <PinIcon /> SINGAPORE
    </div>
  );
}

/* -----------------------------------------------------------------------------
 * PixelLogoGrid — Main exported component
 * -------------------------------------------------------------------------- */

const CARDS = [
  {
    id: "usa",
    label: "United States",
    colors: ["#0A3161", "#B31942", "#FFFFFF"],
    Logo: UsaLogo,
    logoClass: "text-white/40 group-hover:text-white",
  },
  {
    id: "japan",
    label: "Japan",
    colors: ["#BC002D", "#FFFFFF"],
    Logo: JapanLogo,
    logoClass: "text-white/40 group-hover:text-white",
  },
  {
    id: "uk",
    label: "United Kingdom",
    colors: ["#012169", "#C8102E", "#FFFFFF"],
    Logo: UkLogo,
    logoClass: "text-white/40 group-hover:text-white",
  },
  {
    id: "germany",
    label: "Germany",
    colors: ["#000000", "#DD0000", "#FFCE00"],
    Logo: GermanyLogo,
    logoClass: "text-white/40 group-hover:text-[#FFCE00]",
  },
  {
    id: "australia",
    label: "Australia",
    colors: ["#00008B", "#FF0000", "#FFD700"],
    Logo: AustraliaLogo,
    logoClass: "text-white/40 group-hover:text-white",
  },
  {
    id: "singapore",
    label: "Singapore",
    colors: ["#EE2536", "#FFFFFF"],
    Logo: SingaporeLogo,
    logoClass: "text-white/40 group-hover:text-white",
  },
];

export function PixelLogoGrid({ className }) {
  return (
    <div
      className={cn(
        "w-full bg-[#161616] py-20 flex justify-center border-y border-white/5",
        className
      )}
    >
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-3">
        
        {/* Row 1 - Top 3 logos */}
        {CARDS.slice(0, 3).map((card, idx) => (
          <div
            key={card.id}
            className={cn(
              "group relative flex h-32 cursor-pointer items-center justify-center overflow-hidden border-b border-white/5",
              idx !== 2 && "md:border-r"
            )}
          >
            <PixelCanvas colors={card.colors} gap={6} speed={25} />
            <card.Logo
              className={cn(
                "relative z-10 transition-all duration-300",
                card.logoClass
              )}
            />
            <span className="sr-only">{card.label}</span>
          </div>
        ))}

        {/* Row 2 - Center piece spanning all columns */}
        <div className="col-span-1 md:col-span-3 border-b border-white/5 py-24 flex flex-col items-center justify-center relative">
          <div className="px-5 py-1.5 rounded-full border border-white/10 text-white/50 text-sm font-medium mb-6 uppercase tracking-wider">
            Global Reach
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center tracking-tight max-w-2xl leading-[1.15]">
            Delivering excellence across<br/>the globe
          </h2>
        </div>

        {/* Row 3 - Bottom 3 logos */}
        {CARDS.slice(3, 6).map((card, idx) => (
          <div
            key={card.id}
            className={cn(
              "group relative flex h-32 cursor-pointer items-center justify-center overflow-hidden",
              idx !== 2 && "md:border-r border-white/5"
            )}
          >
            <PixelCanvas colors={card.colors} gap={6} speed={25} />
            <card.Logo
              className={cn(
                "relative z-10 transition-all duration-300",
                card.logoClass
              )}
            />
            <span className="sr-only">{card.label}</span>
          </div>
        ))}

      </div>
    </div>
  );
}

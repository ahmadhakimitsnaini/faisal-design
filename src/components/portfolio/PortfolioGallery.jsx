import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

import img1 from "./asset-portofolio/1.webp";
import img2 from "./asset-portofolio/2.webp";
import img3 from "./asset-portofolio/3.webp";
import img4 from "./asset-portofolio/4.webp";
import img5 from "./asset-portofolio/5.webp";
import img6 from "./asset-portofolio/6.webp";
import img7 from "./asset-portofolio/7.webp";
import img8 from "./asset-portofolio/8.webp";
import img9 from "./asset-portofolio/9.webp";
import img10 from "./asset-portofolio/10.webp";

export function PortfolioGallery({
  title = "Browse my library",
  archiveButton = {
    text: "View gallery",
    href: "/work",
  },
  images: customImages,
  className = "",
  maxHeight = 220,
  spacing = "-space-x-48 md:-space-x-72 lg:-space-x-[400px]",
  onImageClick,
  pauseOnHover = true,
  marqueeRepeat = 4,
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const defaultImages = [
    {
      src: img1,
      alt: "Portfolio Project 1",
    },
    {
      src: img2,
      alt: "Portfolio Project 2",
    },
    {
      src: img3,
      alt: "Portfolio Project 3",
    },
    {
      src: img4,
      alt: "Portfolio Project 4",
    },
    {
      src: img5,
      alt: "Portfolio Project 5",
    },
    {
      src: img6,
      alt: "Portfolio Project 6",
    },
    {
      src: img7,
      alt: "Portfolio Project 7",
    },
    {
      src: img8,
      alt: "Portfolio Project 8",
    },
    {
      src: img9,
      alt: "Portfolio Project 9",
    },
    {
      src: img10,
      alt: "Portfolio Project 10",
    },
  ];

  const images = customImages || defaultImages;

  return (
    <section
      aria-label={title}
      className={`relative min-h-[80vh] py-16 px-4 ${className}`}
      id="archives"
    >
      <div className="max-w-[1600px] mx-auto bg-vintage-black/5 backdrop-blur-sm rounded-2xl border border-vintage-black/10 overflow-hidden">
        {/* Header Section */}
        <div className="relative z-10 text-center pt-24 pb-12 px-8">
          <h2 className="text-6xl md:text-8xl font-serif font-bold text-vintage-black mb-12 text-balance">
            {title}
          </h2>

          <Link
            to={archiveButton.href}
            className="inline-flex items-center gap-4 bg-vintage-red text-vintage-cream px-10 py-5 rounded-full font-bold uppercase tracking-wider text-base hover:bg-vintage-black transition-colors group mb-24"
          >
            <span>{archiveButton.text}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Desktop 3D overlapping layout - hidden on mobile */}
        <div className="hidden md:block relative overflow-hidden h-[450px] lg:h-[600px] mb-12">
          <div
            className={`flex h-full ${spacing} pb-8 items-end justify-center`}
          >
            {images.map((image, index) => {
              // Calculate center index for realistic fanning
              const totalImages = images.length;
              const centerIndex = (totalImages - 1) / 2;
              const distanceFromCenter = index - centerIndex;
              const absDistanceFromCenter = Math.abs(distanceFromCenter);
              
              // Parabolic stagger offset for a natural arch
              const staggerOffset = maxHeight - Math.pow(absDistanceFromCenter, 2) * 8;

              // Right-most cards overlap the left ones
              const zIndex = index;

              const isHovered = hoveredIndex === index;
              const isOtherHovered =
                hoveredIndex !== null && hoveredIndex !== index;

              // When hovering: hovered card moves to consistent top position, others move to baseline
              const yOffset = isHovered
                ? -(maxHeight + 80)
                : isOtherHovered
                  ? 0
                  : -staggerOffset;
                  
              // Rotate cards dynamically based on their distance from center (creates a fan effect)
              // Center is 0deg, left is negative (tilt left), right is positive (tilt right)
              const rotationDegree = isHovered ? 0 : distanceFromCenter * 4;

              return (
                <motion.div
                  key={index}
                  className="group cursor-pointer flex-shrink-0"
                  style={{
                    zIndex: zIndex,
                    transformOrigin: "bottom center",
                  }}
                  initial={{
                    rotate: rotationDegree,
                    y: 200,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: rotationDegree,
                    y: yOffset,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.2, // Much faster hover animation
                    delay: index * 0.05, // Faster entrance stagger
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() => onImageClick?.(index)}
                >
                  <div
                    className="relative aspect-video w-64 md:w-96 lg:w-[600px] rounded-3xl overflow-hidden transition-transform duration-300 group-hover:scale-105"
                    style={{
                      boxShadow: `
                        rgba(0, 0, 0, 0.05) 0.796192px 0px 0.796192px 0px,
                        rgba(0, 0, 0, 0.1) 2.41451px 0px 2.41451px 0px,
                        rgba(0, 0, 0, 0.15) 6.38265px 0px 6.38265px 0px,
                        rgba(0, 0, 0, 0.3) 20px 0px 20px 0px
                      `,
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile marquee layout */}
        <div className="block md:hidden relative pb-8">
          <div
            className={cn(
              "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
              "flex-row",
            )}
          >
            {Array(marqueeRepeat)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex shrink-0 justify-around [gap:var(--gap)]",
                    "animate-marquee flex-row",
                    {
                      "group-hover:[animation-play-state:paused]": pauseOnHover,
                    },
                  )}
                >
                  {images.map((image, index) => (
                    <div
                      key={`${i}-${index}`}
                      className="group cursor-pointer flex-shrink-0"
                      onClick={() => onImageClick?.(index)}
                    >
                      <div
                        className="relative aspect-video w-72 md:w-96 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105"
                        style={{
                          boxShadow: `
                            rgba(0, 0, 0, 0.05) 0.796192px 0px 0.796192px 0px,
                            rgba(0, 0, 0, 0.1) 2.41451px 0px 2.41451px 0px,
                            rgba(0, 0, 0, 0.3) 20px 0px 20px 0px
                          `,
                        }}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover object-center"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

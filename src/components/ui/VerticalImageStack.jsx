import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import img1 from "../portfolio/asset-portofolio/1.jpeg";
import img2 from "../portfolio/asset-portofolio/2.jpeg";
import img3 from "../portfolio/asset-portofolio/3.jpeg";
import img4 from "../portfolio/asset-portofolio/4.jpeg";
import img5 from "../portfolio/asset-portofolio/5.jpeg";
import img6 from "../portfolio/asset-portofolio/6.jpeg";
import img7 from "../portfolio/asset-portofolio/7.jpeg";

const images = [
  {
    id: 1,
    src: img1,
    alt: "Portfolio Item 1",
  },
  {
    id: 2,
    src: img2,
    alt: "Portfolio Item 2",
  },
  {
    id: 3,
    src: img3,
    alt: "Portfolio Item 3",
  },
  {
    id: 4,
    src: img4,
    alt: "Portfolio Item 4",
  },
  {
    id: 5,
    src: img5,
    alt: "Portfolio Item 5",
  },
  {
    id: 6,
    src: img6,
    alt: "Portfolio Item 6",
  },
  {
    id: 7,
    src: img7,
    alt: "Portfolio Item 7",
  },
];

export function VerticalImageStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastNavigationTime = useRef(0);
  const navigationCooldown = 400; // ms

  const navigate = useCallback((newDirection) => {
    const now = Date.now();
    if (now - lastNavigationTime.current < navigationCooldown) return;
    lastNavigationTime.current = now;

    setCurrentIndex((prev) => {
      if (newDirection > 0) {
        return prev === images.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  }, []);

  const handleDragEnd = (_, info) => {
    const threshold = 50;
    if (info.offset.y < -threshold) {
      navigate(1);
    } else if (info.offset.y > threshold) {
      navigate(-1);
    }
  };

  const containerRef = useRef(null);

  const handleWheel = useCallback(
    (e) => {
      // Mencegah scroll halaman utama saat kursor berada di atas komponen ini
      e.preventDefault();
      
      if (Math.abs(e.deltaY) > 30) {
        if (e.deltaY > 0) {
          navigate(1);
        } else {
          navigate(-1);
        }
      }
    },
    [navigate]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // { passive: false } wajib diset agar e.preventDefault() dapat bekerja
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  const getCardStyle = (index) => {
    const total = images.length;
    let diff = index - currentIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    if (diff === 0) {
      return { y: 0, scale: 1, opacity: 1, zIndex: 5, rotateX: 0 };
    } else if (diff === -1) {
      return { y: -160, scale: 0.85, opacity: 0.6, zIndex: 4, rotateX: 5 };
    } else if (diff === -2) {
      return { y: -280, scale: 0.75, opacity: 0.3, zIndex: 3, rotateX: 10 };
    } else if (diff === 1) {
      return { y: 160, scale: 0.85, opacity: 0.6, zIndex: 4, rotateX: -5 };
    } else if (diff === 2) {
      return { y: 280, scale: 0.75, opacity: 0.3, zIndex: 3, rotateX: -10 };
    } else {
      return { y: diff > 0 ? 400 : -400, scale: 0.6, opacity: 0, zIndex: 0, rotateX: diff > 0 ? -15 : 15 };
    }
  };

  const isVisible = (index) => {
    const total = images.length;
    let diff = index - currentIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return Math.abs(diff) <= 2;
  };

  return (
    <div ref={containerRef} className="relative flex h-[600px] lg:h-[800px] w-full items-center justify-center overflow-hidden bg-transparent rounded-2xl select-none">
      
      {/* Card Stack */}
      <div className="relative flex h-[500px] lg:h-[700px] w-full max-w-[400px] items-center justify-center" style={{ perspective: "1600px" }}>
        {images.map((image, index) => {
          if (!isVisible(index)) return null;
          const style = getCardStyle(index);
          const isCurrent = index === currentIndex;

          return (
            <motion.div
              key={image.id}
              className="absolute cursor-grab active:cursor-grabbing w-[280px] h-[400px] lg:w-[400px] lg:h-[600px]"
              animate={{
                y: style.y,
                scale: style.scale,
                opacity: style.opacity,
                rotateX: style.rotateX,
                zIndex: style.zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 1,
              }}
              drag={isCurrent ? "y" : false}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              style={{
                transformStyle: "preserve-3d",
                zIndex: style.zIndex,
              }}
            >
              <div
                className="relative h-full w-full overflow-hidden rounded-3xl bg-vintage-cream ring-1 ring-vintage-black/10"
                style={{
                  boxShadow: isCurrent
                    ? "0 25px 50px -12px rgba(26,26,26,0.2), 0 0 0 1px rgba(26,26,26,0.05)"
                    : "0 10px 30px -10px rgba(26,26,26,0.1)",
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover object-center w-full h-full pointer-events-none"
                  draggable={false}
                  loading={isCurrent ? "eager" : "lazy"}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index !== currentIndex) {
                setCurrentIndex(index);
              }
            }}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "h-6 bg-vintage-red" : "bg-vintage-black/30 hover:bg-vintage-black/50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Instruction hint */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-1 text-vintage-gray">
          <span className="text-[10px] font-bold tracking-widest uppercase bg-vintage-cream/80 px-2 py-1 rounded-full border border-vintage-black/10">Scroll or Drag</span>
        </div>
      </motion.div>
    </div>
  );
}

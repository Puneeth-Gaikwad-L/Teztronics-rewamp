import { useState, useEffect, useCallback, useRef } from "react";

/**
 * ImageCarousel
 * Props:
 *   images   – string[]   list of image paths (e.g. "/images/p1-1.jpg")
 *   alt      – string     base alt text for the product
 *   autoPlay – boolean    default true
 *   interval – number     ms between slides, default 3500
 */
export default function ImageCarousel({
  images = [],
  alt = "Product image",
  autoPlay = true,
  interval = 3500,
}) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const total = images.length;

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  // Auto-play — pauses on hover
  useEffect(() => {
    if (!autoPlay || total <= 1 || isHovered) return;
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [autoPlay, total, isHovered, next, interval]);

  if (total === 0) {
    return (
      <div className="w-full h-48 bg-gray-50 flex items-center justify-center rounded-t-lg">
        <svg className="w-10 h-10 text-[#060912]/10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5M21 3.75H3A.75.75 0 002.25 4.5v15"/>
        </svg>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-48 overflow-hidden rounded-t-lg bg-gray-50 group/carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} — image ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: i === current ? 1 : 0 }}
          draggable={false}
        />
      ))}

      {/* Gradient overlay at bottom so text below doesn't clash */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      {/* Arrow buttons — only visible when >1 image */}
      {total > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                       w-7 h-7 rounded-full bg-white/80 border border-gray-300
                       flex items-center justify-center
                       opacity-0 group-hover/carousel:opacity-100
                       hover:bg-black/80 hover:border-[#1E88FF]/40
                       transition-all duration-200"
            aria-label="Previous image"
          >
            <svg className="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10
                       w-7 h-7 rounded-full bg-white/80 border border-gray-300
                       flex items-center justify-center
                       opacity-0 group-hover/carousel:opacity-100
                       hover:bg-black/80 hover:border-[#1E88FF]/40
                       transition-all duration-200"
            aria-label="Next image"
          >
            <svg className="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-4 h-1.5 bg-[#1E88FF]"
                    : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Image counter badge */}
      {total > 1 && (
        <div className="absolute top-2 right-2 z-10 px-2 py-0.5 rounded-full bg-white/80 border border-gray-300 text-[10px] text-gray-500 font-medium">
          {current + 1}/{total}
        </div>
      )}
    </div>
  );
}
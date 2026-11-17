"use client";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { sections } from "../../lib/content";
import { Reveal, Heading } from "../ui";

export default function GallerySection() {
  const gallery = sections.Gallery.variants.NGOGallery1;
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) =>
      prev !== null
        ? (prev - 1 + gallery.items.length) % gallery.items.length
        : null
    );
  }, [gallery.items.length]);

  const handleNext = useCallback(() => {
    setActiveIdx((prev) =>
      prev !== null ? (prev + 1) % gallery.items.length : null
    );
  }, [gallery.items.length]);

  const handleClose = useCallback(() => {
    setActiveIdx(null);
  }, []);

  useEffect(() => {
    if (activeIdx === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIdx, handleClose, handleNext, handlePrev]);

  return (
    <section
      id="gallery"
      className="mx-auto max-w-7xl px-6 pt-4 pb-18 sm:pt-10 lg:py-18"
    >
      <Reveal>
        <Heading data={gallery} center />
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {gallery.items.map((item, i) => (
            <button
              type="button"
              key={item.image}
              onClick={() => setActiveIdx(i)}
              aria-label={`View photo: ${item.label}`}
              className="group relative cursor-pointer overflow-hidden rounded-lg text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                className="aspect-[1.5] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-ink/80 via-ink/20 to-transparent p-4 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="text-sm font-medium text-white drop-shadow-sm">
                  {item.label}
                </span>
                <span className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-xs transition group-hover:bg-white/30">
                  <ZoomIn size={16} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </Reveal>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={gallery.items[activeIdx].label}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={handleClose}
        >
          {/* Top Bar: Counter & Close */}
          <div
            className="absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-6 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-sm font-medium tracking-wide text-zinc-300">
              {activeIdx + 1} / {gallery.items.length}
            </span>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close image viewer"
              className="cursor-pointer rounded-full bg-white/10 p-2 text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X size={22} />
            </button>
          </div>

          {/* Prev Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 z-10 cursor-pointer rounded-full bg-white/10 p-3 text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image & Caption */}
          <div
            className="relative flex max-h-[85vh] max-w-4xl flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery.items[activeIdx].image}
              alt={gallery.items[activeIdx].label}
              className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
            <p className="mt-3 text-center text-sm sm:text-base font-medium text-zinc-200">
              {gallery.items[activeIdx].label}
            </p>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 z-10 cursor-pointer rounded-full bg-white/10 p-3 text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
}

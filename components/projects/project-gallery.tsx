'use client';

import { useState, useEffect, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FiX, FiChevronLeft, FiChevronRight, FiImage } from 'react-icons/fi';

interface ProjectGalleryProps {
  images: (StaticImageData | string)[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isOpen = lightboxIndex !== null;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  }, [lightboxIndex, images.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  }, [lightboxIndex, images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, goNext, goPrev]);

  if (!images || images.length === 0) return null;

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3 pb-2">
        <div className="p-2 bg-primary/10 rounded-lg">
          <FiImage className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
          Gallery
        </h2>
        <span className="ml-auto text-sm text-muted-foreground font-medium bg-secondary px-3 py-1 rounded-full">
          {images.length} {images.length === 1 ? 'image' : 'images'}
        </span>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative aspect-video overflow-hidden rounded-xl border border-border bg-secondary shadow-sm hover:shadow-lg hover:border-primary/50 hover:-translate-y-1.5 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            aria-label={`View ${title} screenshot ${index + 1} of ${images.length}`}
          >
            <Image
              src={image}
              alt={`${title} - screenshot ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 ease-out flex items-center justify-center">
              <div className="opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out p-3 bg-background/95 rounded-full shadow-lg ring-1 ring-border">
                <FiImage className="w-5 h-5 text-primary" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-overlay/85 backdrop-blur-md animate-slide-up"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery image ${lightboxIndex + 1} of ${images.length}`}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2.5 bg-card/90 hover:bg-card border border-border rounded-full shadow-lg text-card-foreground hover:text-primary transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close gallery"
          >
            <FiX className="w-5 h-5" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-card/90 border border-border rounded-full shadow-lg text-sm font-semibold text-card-foreground">
            {lightboxIndex + 1}
            <span className="text-muted-foreground font-normal">
              {' '}
              / {images.length}
            </span>
          </div>

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={goPrev}
              className="absolute left-4 z-10 p-3 bg-card/90 hover:bg-card border border-border rounded-full shadow-lg text-card-foreground hover:text-primary transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Previous image"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Image */}
          <div className="relative w-full max-w-5xl mx-16 aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={images[lightboxIndex]}
              alt={`${title} - screenshot ${lightboxIndex + 1}`}
              fill
              className="object-contain transition-opacity duration-300 ease-out rounded-2xl overflow-hidden"
              sizes="100vw"
              priority
            />
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={goNext}
              className="absolute right-4 z-10 p-3 bg-card/90 hover:bg-card border border-border rounded-full shadow-lg text-card-foreground hover:text-primary transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Next image"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      )}
    </section>
  );
}

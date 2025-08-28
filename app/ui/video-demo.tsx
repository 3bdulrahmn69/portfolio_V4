'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiPlay, FiX, FiExternalLink } from 'react-icons/fi';
import { BiLoaderAlt } from 'react-icons/bi';

interface VideoDemoProps {
  demoUrl: string;
  title: string;
  thumbnail?: string;
  className?: string;
}

export default function VideoDemo({
  demoUrl,
  title,
  thumbnail,
  className = '',
}: VideoDemoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
    setIsLoading(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsLoading(true);
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Extract video ID from various video platforms
  const getEmbedUrl = (url: string) => {
    // YouTube
    const youtubeMatch = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
    );
    if (youtubeMatch) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&rel=0`;
    }

    // Vimeo
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
    }

    // Loom
    const loomMatch = url.match(/loom\.com\/share\/([^?]+)/);
    if (loomMatch) {
      return `https://www.loom.com/embed/${loomMatch[1]}?autoplay=1`;
    }

    // For direct video files or other embeddable URLs
    return url;
  };

  const embedUrl = getEmbedUrl(demoUrl);

  return (
    <>
      {/* Demo Preview Card */}
      <div
        className={`group relative bg-gradient-to-br from-primary-light/10 to-primary-dark/10 dark:from-primary-dark/20 dark:to-primary-light/10 rounded-2xl p-6 border border-primary-light/20 dark:border-primary-dark/20 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${className}`}
        onClick={openModal}
      >
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 bg-primary-light dark:bg-primary-dark rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <FiPlay className="w-7 h-7 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="absolute inset-0 bg-primary-light dark:bg-primary-dark rounded-full opacity-20 animate-ping"></div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
              Watch Demo
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              See {title} in action
            </p>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FiExternalLink className="w-5 h-5 text-primary-light dark:text-primary-dark" />
          </div>
        </div>

        {thumbnail && (
          <div className="mt-4 relative h-32 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src={thumbnail}
              alt={`${title} demo thumbnail`}
              fill
              className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                <FiPlay className="w-5 h-5 text-gray-900 ml-0.5" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="relative w-full max-w-5xl mx-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title} - Demo
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                aria-label="Close modal"
              >
                <FiX className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video bg-black">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                  <div className="flex flex-col items-center gap-3">
                    <BiLoaderAlt className="w-8 h-8 text-primary-light dark:text-primary-dark animate-spin" />
                    <p className="text-gray-600 dark:text-gray-300">
                      Loading demo...
                    </p>
                  </div>
                </div>
              )}
              <iframe
                src={embedUrl}
                title={`${title} - Demo Video`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={handleVideoLoad}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Press ESC to close
                </p>
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  <FiExternalLink className="w-4 h-4" />
                  Open in new tab
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../ui/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";
import { GalleryItem } from "@/types";

interface GalleryProps {
  galleryItems: GalleryItem[];
}

export const Gallery: React.FC<GalleryProps> = ({ galleryItems }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showAllImages, setShowAllImages] = useState(false);

  const displayedItems = showAllImages
    ? galleryItems
    : galleryItems.slice(0, 6);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const handlePrevious = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Section id="gallery" backgroundColor="bg-white">
      <SectionTitle
        title="Galeri"
        subtitle="Momen-momen indah yang kami abadikan"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
        {displayedItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openModal(galleryItems.indexOf(item))}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={item.imageUrl}
              alt={item.caption || `Gallery image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              {item.caption && (
                <p className="text-white text-sm font-medium">{item.caption}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {galleryItems.length > 6 && (
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            onClick={() => setShowAllImages(!showAllImages)}
          >
            {showAllImages ? "Tampilkan Lebih Sedikit" : "Lihat Semua Foto"}
          </Button>
        </div>
      )}

      {/* Gallery Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="max-w-4xl bg-black/90 p-0"
      >
        <div className="relative">
          {/* Close button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 z-10 text-white bg-black/50 rounded-full p-1 hover:bg-black/70 transition-colors"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image */}
          <div className="relative aspect-[3/2] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full w-full relative"
              >
                <Image
                  src={galleryItems[selectedImageIndex].imageUrl}
                  alt={
                    galleryItems[selectedImageIndex].caption ||
                    `Gallery image ${selectedImageIndex + 1}`
                  }
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Caption */}
          {galleryItems[selectedImageIndex].caption && (
            <div className="p-4 text-center text-white">
              <p>{galleryItems[selectedImageIndex].caption}</p>
            </div>
          )}

          {/* Thumbnails */}
          <div className="flex overflow-x-auto p-2 gap-2 bg-black/80">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative w-16 h-16 flex-shrink-0 cursor-pointer ${
                  index === selectedImageIndex ? "ring-2 ring-rose-500" : ""
                }`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.caption || `Thumbnail ${index + 1}`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </Section>
  );
};

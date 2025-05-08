"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import { LoveStoryItem } from "@/types";

interface LoveStoryProps {
  loveStoryItems: LoveStoryItem[];
}

export const LoveStory: React.FC<LoveStoryProps> = ({ loveStoryItems }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sort items by date
  const sortedItems = [...loveStoryItems].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <Section id="love-story" backgroundColor="bg-rose-50">
      <SectionTitle
        title="Love Story"
        subtitle="Perjalanan cinta kami dari awal hingga hari bahagia ini"
      />

      <div className="mt-12 flex justify-center">
        <Button
          variant="primary"
          size="lg"
          onClick={() => setIsModalOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          Lihat Perjalanan Cinta
        </Button>
      </div>

      {/* Love Story Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Our Love Story"
        className="max-w-3xl"
      >
        <div className="py-4">
          <div className="space-y-12">
            {sortedItems.map((item, index) => (
              <StoryItem key={item.id} item={item} isEven={index % 2 === 0} />
            ))}
          </div>
        </div>
      </Modal>
    </Section>
  );
};

interface StoryItemProps {
  item: LoveStoryItem;
  isEven: boolean;
}

const StoryItem: React.FC<StoryItemProps> = ({ item, isEven }) => {
  return (
    <motion.div
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-6 md:gap-8`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image */}
      {item.imageUrl && (
        <div className="md:w-1/3 flex-shrink-0">
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className={`md:w-2/3 ${!item.imageUrl ? "md:w-full" : ""}`}>
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <div className="text-amber-500 font-medium mb-2">{item.date}</div>
          <h3 className="text-xl font-serif text-rose-800 mb-3">
            {item.title}
          </h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

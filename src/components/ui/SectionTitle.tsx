"use client";
import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
}) => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const decorationVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "60px",
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={`${centered ? "text-center" : ""} mb-8`}>
      <motion.h2
        className="text-2xl font-serif text-rose-800 mb-2"
        variants={titleVariants}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="text-gray-600 text-sm max-w-lg mx-auto"
          variants={subtitleVariants}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        className={`h-0.5 bg-rose-200 mt-4 ${centered ? "mx-auto" : "ml-0"}`}
        variants={decorationVariants}
      />
    </div>
  );
};

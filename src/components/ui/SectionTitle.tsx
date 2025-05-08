"use client";
import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className = "",
}) => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
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
        duration: 0.4,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const alignment = centered ? "text-center" : "text-left";

  return (
    <div className={`mb-12 ${alignment} ${className}`}>
      <motion.h2
        className="text-3xl md:text-4xl font-serif font-bold text-rose-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleVariants}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="mt-3 text-lg text-gray-600"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={subtitleVariants}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        className={`h-1 w-20 bg-amber-400 mt-4 ${
          centered ? "mx-auto" : "ml-0"
        }`}
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 80, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      />
    </div>
  );
};

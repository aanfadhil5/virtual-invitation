"use client";
import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  backgroundColor?: string;
  minHeight?: string;
  paddingY?: string;
}

// Define the animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  id,
  backgroundColor = "bg-white",
  minHeight = "min-h-[90vh]", // Default minimum height
  paddingY = "py-16", // Increased padding
}) => {
  return (
    <section
      id={id}
      className={`${paddingY} ${backgroundColor} ${minHeight} ${className} relative scroll-mt-4`}
    >
      <motion.div
        className="mx-auto h-full flex flex-col justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {children}
      </motion.div>
    </section>
  );
};

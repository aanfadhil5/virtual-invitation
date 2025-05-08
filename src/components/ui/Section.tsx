"use client";
import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  backgroundColor?: string;
  withContainer?: boolean;
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
  withContainer = true,
}) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgroundColor} ${className}`}
    >
      {withContainer ? (
        <motion.div
          className="container mx-auto px-4 md:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {children}
        </motion.div>
      )}
    </section>
  );
};

"use client";
import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";

interface QuoteProps {
  quoteText?: string;
  quoteSource?: string;
  backgroundImage?: string;
}

export const Quote: React.FC<QuoteProps> = ({
  quoteText = "And among His Signs is this, that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts. Verily in that are Signs for those who reflect.",
  quoteSource = "Ar-Rum 30:21",
  backgroundImage = "/images/quote-bg.jpg",
}) => {
  // Animation variants
  const quoteVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const sourceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section id="quote" backgroundColor="bg-gray-50">
      <div
        className="relative bg-cover bg-center bg-fixed h-[60vh] min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Quote content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-3xl text-center text-white">
          <motion.div
            className="mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={quoteVariants}
          >
            {/* Quote marks */}
            <svg
              className="h-12 w-12 mx-auto mb-4 text-amber-400 opacity-80"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p className="text-xl md:text-2xl lg:text-3xl font-serif leading-relaxed italic">
              &ldquo;{quoteText}&rdquo;
            </p>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-amber-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sourceVariants}
          >
            {quoteSource}
          </motion.p>
        </div>
      </div>
    </Section>
  );
};

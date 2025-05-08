"use client";
import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";

interface GreetingProps {
  greetingText?: string;
  respectText?: string;
}

export const Greeting: React.FC<GreetingProps> = ({
  greetingText = "Assalamualaikum Warahmatullahi Wabarakatuh",
  respectText = "Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan kami:",
}) => {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const decorationVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <Section id="greeting" className="text-center" backgroundColor="bg-rose-50">
      <div className="max-w-3xl mx-auto text-center">
        {/* Arabic Greeting */}
        <motion.div
          className="mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-rose-800 mb-4 leading-relaxed">
            {greetingText}
          </h2>

          {/* Decorative element */}
          <motion.div
            className="flex items-center justify-center my-6"
            variants={decorationVariants}
          >
            <div className="h-px bg-amber-400 w-16" />
            <div className="mx-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div className="h-px bg-amber-400 w-16" />
          </motion.div>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            variants={textVariants}
          >
            {respectText}
          </motion.p>
        </motion.div>
      </div>
    </Section>
  );
};

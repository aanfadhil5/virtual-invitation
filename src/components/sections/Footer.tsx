"use client";
import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";

interface FooterProps {
  copyrightName?: string;
  developerName?: string;
  developerUrl?: string;
}

export const Footer: React.FC<FooterProps> = ({
  copyrightName = "Wedding Invitation",
  developerName = "Farhan Fadhilah",
  developerUrl = "https://farhanfadhilah.com",
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <Section id="footer" backgroundColor="bg-gray-900" className="py-8">
      <motion.div
        className="text-center text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <p className="text-lg font-serif text-rose-300">Thank You</p>
        </div>

        <p className="text-gray-400 text-sm mb-2">
          &copy; {currentYear} {copyrightName}. All rights reserved.
        </p>

        <p className="text-gray-500 text-xs">
          Made with ❤️ by{" "}
          <a
            href={developerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-400 hover:text-rose-300 transition-colors"
          >
            {developerName}
          </a>
        </p>

        <div className="mt-6">
          <a
            href="#hero"
            className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
            aria-label="Back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </Section>
  );
};

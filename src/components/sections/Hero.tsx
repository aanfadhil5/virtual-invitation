"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";

interface HeroProps {
  bridesName: string;
  groomsName: string;
  backgroundImage?: string;
}

export const Hero: React.FC<HeroProps> = ({
  bridesName,
  groomsName,
  backgroundImage = "/images/hero-bg.jpg",
}) => {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Check if the image exists
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => {
      setImageError(false);
    };
    img.onerror = () => {
      setImageError(true);
      console.error("Failed to load background image:", backgroundImage);
    };
  }, [backgroundImage]);

  const openInvitation = () => {
    setIsInvitationOpen(true);
    // Scroll to the next section after opening
    setTimeout(() => {
      const nextSection = document.getElementById("greeting");
      if (nextSection) {
        nextSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 1000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Debug Information */}
      {imageError && (
        <div className="absolute top-0 left-0 bg-red-500 text-white p-2 z-50">
          Error loading image: {backgroundImage}
        </div>
      )}

      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(0.6)",
        }}
      />

      {/* Fallback background color if image fails to load */}
      {imageError && <div className="absolute inset-0 bg-gray-800"></div>}

      {/* Content */}
      <AnimatePresence>
        {!isInvitationOpen ? (
          <motion.div
            className="relative z-10 text-center text-white p-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl md:text-2xl font-light mb-2">
                The Wedding of
              </h3>
            </motion.div>

            <motion.div
              className="my-8 flex flex-col items-center"
              variants={nameVariants}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-4 tracking-wide">
                {bridesName}
              </h1>
              <div className="text-2xl md:text-3xl font-light">&</div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mt-4 tracking-wide">
                {groomsName}
              </h1>
            </motion.div>

            <motion.div className="mt-12" variants={itemVariants}>
              <Button
                onClick={openInvitation}
                size="lg"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/50 text-white"
              >
                Open Invitation
              </Button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className="relative z-10 text-center text-white p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6">
              {bridesName} & {groomsName}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              We&apos;re getting married
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mx-auto animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

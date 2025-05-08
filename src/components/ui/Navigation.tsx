"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  sections: {
    id: string;
    label: string;
    icon?: React.ReactNode;
  }[];
  autoNavigate?: boolean;
  autoNavigateInterval?: number; // in milliseconds
}

export const Navigation: React.FC<NavigationProps> = ({
  sections,
  autoNavigate = false,
  autoNavigateInterval = 5000, // 5 seconds by default
}) => {
  const [activeSection, setActiveSection] = useState<string>(
    sections[0]?.id || ""
  );
  const [isPlaying, setIsPlaying] = useState<boolean>(autoNavigate);
  const [showNav, setShowNav] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      // Hide/show navigation based on scroll direction
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY <= lastScrollY || currentScrollY <= 100);
      setLastScrollY(currentScrollY);

      // Find which section is currently in view
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const viewportHeight = window.innerHeight;
      const currentSection = sectionElements.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        // Consider a section "active" when its center is in the viewport
        const elementCenter = rect.top + rect.height / 2;
        return elementCenter >= 0 && elementCenter <= viewportHeight;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, lastScrollY]);

  // Auto-navigation effect
  useEffect(() => {
    if (!isPlaying) return;

    const intervalId = setInterval(() => {
      const currentIndex = sections.findIndex(
        (section) => section.id === activeSection
      );
      const nextIndex = (currentIndex + 1) % sections.length;
      const nextSection = sections[nextIndex];

      if (nextSection) {
        const element = document.getElementById(nextSection.id);
        if (element) {
          setIsScrolling(true);
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
          setActiveSection(nextSection.id);

          // Reset scrolling state after animation completes
          setTimeout(() => {
            setIsScrolling(false);
          }, 1000);
        }
      }
    }, autoNavigateInterval);

    return () => clearInterval(intervalId);
  }, [isPlaying, activeSection, sections, autoNavigateInterval]);

  const scrollToSection = (sectionId: string) => {
    if (isScrolling) return; // Prevent multiple scroll actions

    const element = document.getElementById(sectionId);
    if (element) {
      setIsScrolling(true);
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setActiveSection(sectionId);

      // Reset scrolling state after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg max-w-md mx-auto"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 py-3">
            <div className="flex items-center justify-between">
              {/* Auto-play toggle */}
              <button
                onClick={toggleAutoPlay}
                className={`p-2 rounded-full ${
                  isPlaying
                    ? "bg-rose-100 text-rose-600"
                    : "bg-gray-100 text-gray-600"
                }`}
                aria-label={
                  isPlaying ? "Pause auto-navigation" : "Start auto-navigation"
                }
                disabled={isScrolling}
              >
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>

              {/* Navigation dots */}
              <div className="flex-1 overflow-x-auto py-1 px-2">
                <div className="flex items-center justify-center gap-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex flex-col items-center transition-all duration-300 px-1.5 ${
                        activeSection === section.id
                          ? "text-rose-600 scale-110"
                          : "text-gray-400 hover:text-gray-600"
                      } ${isScrolling ? "pointer-events-none" : ""}`}
                      aria-label={`Navigate to ${section.label}`}
                      disabled={isScrolling}
                    >
                      <div className="h-6 w-6 flex items-center justify-center">
                        {section.icon ? (
                          React.cloneElement(
                            section.icon as React.ReactElement<{
                              className?: string;
                            }>,
                            {
                              className: "h-4 w-4",
                            }
                          )
                        ) : (
                          <div
                            className={`w-2.5 h-2.5 rounded-full ${
                              activeSection === section.id
                                ? "bg-rose-600"
                                : "bg-gray-400"
                            }`}
                          ></div>
                        )}
                      </div>
                      <span className="text-[10px] mt-0.5 whitespace-nowrap font-medium">
                        {section.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress indicator */}
              {isPlaying && (
                <div className="relative w-6 h-6">
                  <svg
                    className="w-6 h-6 transform -rotate-90"
                    viewBox="0 0 32 32"
                  >
                    <circle
                      className="text-gray-200"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="transparent"
                      r="14"
                      cx="16"
                      cy="16"
                    />
                    <motion.circle
                      className="text-rose-500"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="transparent"
                      r="14"
                      cx="16"
                      cy="16"
                      initial={{ strokeDasharray: 88, strokeDashoffset: 88 }}
                      animate={{
                        strokeDashoffset: [88, 0],
                      }}
                      transition={{
                        duration: autoNavigateInterval / 1000,
                        ease: "linear",
                        repeat: Infinity,
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] font-medium text-rose-600">
                    {Math.ceil(autoNavigateInterval / 1000)}s
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

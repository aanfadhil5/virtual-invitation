"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "../ui/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { CoupleInfo } from "@/types";

interface CoupleProps {
  coupleInfo: CoupleInfo;
}

export const Couple: React.FC<CoupleProps> = ({ coupleInfo }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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

  return (
    <Section id="couple" backgroundColor="bg-white">
      <SectionTitle
        title="Mempelai"
        subtitle="Dengan hormat, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-16">
        {/* Bride */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="mb-6 relative" variants={itemVariants}>
            {coupleInfo.bride.photo ? (
              <div className="rounded-full overflow-hidden border-4 border-rose-200 w-56 h-56 md:w-64 md:h-64 relative">
                <Image
                  src={coupleInfo.bride.photo}
                  alt={coupleInfo.bride.name}
                  fill
                  sizes="(max-width: 768px) 14rem, 16rem"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="rounded-full overflow-hidden border-4 border-rose-200 w-56 h-56 md:w-64 md:h-64 bg-rose-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-rose-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            )}
          </motion.div>

          <motion.h3
            className="text-2xl md:text-3xl font-serif text-rose-800 mb-1"
            variants={itemVariants}
          >
            {coupleInfo.bride.name}
          </motion.h3>

          <motion.p
            className="text-lg text-gray-700 mb-2"
            variants={itemVariants}
          >
            {coupleInfo.bride.fullName}
          </motion.p>

          <motion.p className="text-gray-600" variants={itemVariants}>
            Putri dari
            <br />
            {coupleInfo.bride.parents}
          </motion.p>

          {coupleInfo.bride.socialMedia && (
            <motion.div className="flex gap-4 mt-4" variants={itemVariants}>
              {coupleInfo.bride.socialMedia.instagram && (
                <a
                  href={`https://instagram.com/${coupleInfo.bride.socialMedia.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-rose-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}

              {coupleInfo.bride.socialMedia.facebook && (
                <a
                  href={`https://facebook.com/${coupleInfo.bride.socialMedia.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-rose-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Groom */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="mb-6 relative" variants={itemVariants}>
            {coupleInfo.groom.photo ? (
              <div className="rounded-full overflow-hidden border-4 border-rose-200 w-56 h-56 md:w-64 md:h-64 relative">
                <Image
                  src={coupleInfo.groom.photo}
                  alt={coupleInfo.groom.name}
                  fill
                  sizes="(max-width: 768px) 14rem, 16rem"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="rounded-full overflow-hidden border-4 border-rose-200 w-56 h-56 md:w-64 md:h-64 bg-rose-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-rose-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            )}
          </motion.div>

          <motion.h3
            className="text-2xl md:text-3xl font-serif text-rose-800 mb-1"
            variants={itemVariants}
          >
            {coupleInfo.groom.name}
          </motion.h3>

          <motion.p
            className="text-lg text-gray-700 mb-2"
            variants={itemVariants}
          >
            {coupleInfo.groom.fullName}
          </motion.p>

          <motion.p className="text-gray-600" variants={itemVariants}>
            Putra dari
            <br />
            {coupleInfo.groom.parents}
          </motion.p>

          {coupleInfo.groom.socialMedia && (
            <motion.div className="flex gap-4 mt-4" variants={itemVariants}>
              {coupleInfo.groom.socialMedia.instagram && (
                <a
                  href={`https://instagram.com/${coupleInfo.groom.socialMedia.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-rose-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}

              {coupleInfo.groom.socialMedia.facebook && (
                <a
                  href={`https://facebook.com/${coupleInfo.groom.socialMedia.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-rose-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Decorative element */}
      <div className="flex items-center justify-center mt-16">
        <motion.div
          className="h-px bg-rose-200 w-full max-w-xs"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <div className="mx-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-rose-300"
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
        <motion.div
          className="h-px bg-rose-200 w-full max-w-xs"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>
    </Section>
  );
};

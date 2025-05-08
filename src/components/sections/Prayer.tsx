"use client";
import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { SectionTitle } from "../ui/SectionTitle";

interface PrayerProps {
  prayerText?: string;
}

export const Prayer: React.FC<PrayerProps> = ({
  prayerText = "Ya Allah, berkatilah pernikahan kami. Jadikanlah ikatan ini sebagai ibadah kepada-Mu. Kuatkanlah kami dalam suka dan duka, dalam sehat dan sakit. Jadikanlah keluarga kami keluarga yang sakinah, mawaddah, warahmah. Aamiin ya Rabbal 'Alamin.",
}) => {
  return (
    <Section id="prayer" backgroundColor="bg-white">
      <SectionTitle
        title="Doa untuk Pengantin"
        subtitle="Mohon doa restu untuk keberkahan pernikahan kami"
      />

      <motion.div
        className="mt-12 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mx-auto text-rose-300 opacity-80"
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

        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {prayerText}
        </motion.p>

        <motion.div
          className="mt-10 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="h-px bg-rose-200 w-20" />
          <div className="mx-4 text-rose-400 text-lg font-serif">Aamiin</div>
          <div className="h-px bg-rose-200 w-20" />
        </motion.div>
      </motion.div>
    </Section>
  );
};

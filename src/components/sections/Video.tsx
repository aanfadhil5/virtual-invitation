"use client";
import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { SectionTitle } from "../ui/SectionTitle";

interface VideoProps {
  videoUrl: string;
  videoTitle?: string;
  videoSubtitle?: string;
}

export const Video: React.FC<VideoProps> = ({
  videoUrl,
  videoTitle = "Our Wedding Video",
  videoSubtitle = "Momen-momen spesial kami dalam bentuk video",
}) => {
  // Extract YouTube video ID if it's a YouTube URL
  const getYouTubeEmbedUrl = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}`
      : url;
  };

  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <Section id="video" backgroundColor="bg-rose-50">
      <SectionTitle title={videoTitle} subtitle={videoSubtitle} />

      <motion.div
        className="mt-12 aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <iframe
          src={embedUrl}
          title="Wedding Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </motion.div>
    </Section>
  );
};

"use client";
import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { RundownEvent } from "@/types";

interface RundownProps {
  rundownEvents: RundownEvent[];
}

export const Rundown: React.FC<RundownProps> = ({ rundownEvents }) => {
  // Sort events by time
  const sortedEvents = [...rundownEvents].sort((a, b) => {
    // Convert time strings to comparable values (assuming format like "09:00")
    const timeA = a.time.split(":").map(Number);
    const timeB = b.time.split(":").map(Number);

    if (timeA[0] !== timeB[0]) {
      return timeA[0] - timeB[0]; // Compare hours
    }
    return timeA[1] - timeB[1]; // Compare minutes
  });

  return (
    <Section id="rundown" backgroundColor="bg-white">
      <SectionTitle
        title="Rundown Acara"
        subtitle="Jadwal acara pernikahan kami"
      />

      <div className="mt-12 max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-rose-200" />

          {/* Timeline events */}
          <div className="space-y-12">
            {sortedEvents.map((event, index) => (
              <TimelineEvent
                key={event.id}
                event={event}
                isEven={index % 2 === 0}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

interface TimelineEventProps {
  event: RundownEvent;
  isEven: boolean;
  index: number;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  event,
  isEven,
  index,
}) => {
  return (
    <motion.div
      className={`relative flex items-center ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-rose-500 rounded-full border-4 border-rose-100 z-10" />

      {/* Time - Mobile */}
      <div className="md:hidden absolute left-0 top-1/2 transform -translate-y-1/2 bg-white px-1 py-0.5 rounded-md shadow-sm z-20">
        <div className="text-rose-600 font-bold text-sm">{event.time}</div>
      </div>

      {/* Time - Desktop */}
      <div
        className={`hidden md:flex md:w-1/2 items-center ${
          isEven ? "md:justify-start md:pr-16" : "md:justify-end md:pl-16"
        }`}
      >
        <div className="text-rose-600 font-bold bg-white px-2 py-1 rounded-md shadow-sm">
          {event.time}
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex-1 md:w-1/2 pl-16 md:pl-0 ${
          isEven ? "md:pr-16" : "md:pl-16"
        }`}
      >
        <div className="bg-rose-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-rose-800 mb-1">
            {event.activity}
          </h3>
          {event.description && (
            <p className="text-gray-600 text-sm">{event.description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

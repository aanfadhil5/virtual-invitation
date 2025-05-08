"use client";
import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { Event } from "@/types";

interface EventsProps {
  events: Event[];
}

export const Events: React.FC<EventsProps> = ({ events }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section id="events" backgroundColor="bg-rose-50">
      <SectionTitle
        title="Acara"
        subtitle="Kami mengundang Anda untuk merayakan momen bahagia ini bersama kami"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12">
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <div className="p-6 md:p-8">
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-serif text-rose-800 mb-3">
                  {event.title}
                </h3>
              </motion.div>

              <motion.div
                className="flex items-center mb-4"
                variants={itemVariants}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-amber-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-700">{event.date}</span>
              </motion.div>

              <motion.div
                className="flex items-center mb-4"
                variants={itemVariants}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-amber-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-700">{event.time}</span>
              </motion.div>

              <motion.div
                className="flex items-start mb-4"
                variants={itemVariants}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <div className="text-gray-700 font-medium">
                    {event.location}
                  </div>
                  <div className="text-gray-600 text-sm mt-1">
                    {event.address}
                  </div>
                </div>
              </motion.div>

              {event.mapUrl && (
                <motion.div className="mt-6" variants={itemVariants}>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(event.mapUrl, "_blank")}
                    className="w-full sm:w-auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    Petunjuk ke Lokasi
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Countdown Timer */}
      <CountdownTimer targetDate={events[0]?.date} />
    </Section>
  );
};

interface CountdownTimerProps {
  targetDate?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    if (!targetDate) return;

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!targetDate) return null;

  return (
    <div className="mt-20">
      <h3 className="text-xl md:text-2xl font-serif text-center text-rose-800 mb-6">
        Menghitung Hari
      </h3>

      <div className="flex justify-center gap-4 md:gap-8">
        <CountdownItem value={timeLeft.days} label="Hari" />
        <CountdownItem value={timeLeft.hours} label="Jam" />
        <CountdownItem value={timeLeft.minutes} label="Menit" />
        <CountdownItem value={timeLeft.seconds} label="Detik" />
      </div>
    </div>
  );
};

interface CountdownItemProps {
  value: number;
  label: string;
}

const CountdownItem: React.FC<CountdownItemProps> = ({ value, label }) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-lg shadow-md flex items-center justify-center">
        <span className="text-2xl md:text-3xl font-bold text-rose-600">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-sm md:text-base text-gray-600 mt-2">{label}</span>
    </motion.div>
  );
};

"use client";
import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";

interface LiveStreamProps {
  youtubeUrl?: string;
  zoomUrl?: string;
  zoomId?: string;
  zoomPassword?: string;
  date?: string;
  time?: string;
}

export const LiveStream: React.FC<LiveStreamProps> = ({
  youtubeUrl,
  zoomUrl,
  zoomId,
  zoomPassword,
  date,
  time,
}) => {
  const hasYoutube = !!youtubeUrl;
  const hasZoom = !!(zoomUrl || (zoomId && zoomPassword));

  if (!hasYoutube && !hasZoom) return null;

  return (
    <Section id="livestream" backgroundColor="bg-white">
      <SectionTitle
        title="Live Streaming"
        subtitle="Bagi keluarga dan sahabat yang tidak bisa hadir, kami menyediakan live streaming"
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {hasYoutube && (
          <motion.div
            className="bg-rose-50 rounded-2xl p-6 md:p-8 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-red-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-serif text-center text-rose-800 mb-4">
              YouTube Live
            </h3>

            {(date || time) && (
              <div className="mb-6 text-center">
                {date && <p className="text-gray-700">Tanggal: {date}</p>}
                {time && <p className="text-gray-700">Waktu: {time}</p>}
              </div>
            )}

            <div className="flex justify-center">
              <Button
                variant="primary"
                onClick={() => window.open(youtubeUrl, "_blank")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Join Live Stream
              </Button>
            </div>
          </motion.div>
        )}

        {hasZoom && (
          <motion.div
            className="bg-blue-50 rounded-2xl p-6 md:p-8 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-serif text-center text-blue-800 mb-4">
              Zoom Meeting
            </h3>

            {(date || time) && (
              <div className="mb-4 text-center">
                {date && <p className="text-gray-700">Tanggal: {date}</p>}
                {time && <p className="text-gray-700">Waktu: {time}</p>}
              </div>
            )}

            {(zoomId || zoomPassword) && (
              <div className="mb-6 text-center">
                {zoomId && (
                  <div className="mb-2">
                    <p className="text-gray-700 font-medium">Meeting ID:</p>
                    <p className="bg-white py-1 px-3 rounded border border-gray-200 inline-block">
                      {zoomId}
                    </p>
                  </div>
                )}
                {zoomPassword && (
                  <div>
                    <p className="text-gray-700 font-medium">Passcode:</p>
                    <p className="bg-white py-1 px-3 rounded border border-gray-200 inline-block">
                      {zoomPassword}
                    </p>
                  </div>
                )}
              </div>
            )}

            {zoomUrl && (
              <div className="flex justify-center">
                <Button
                  variant="secondary"
                  onClick={() => window.open(zoomUrl, "_blank")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                    <path d="M14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                  </svg>
                  Join Zoom Meeting
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </div>

      <motion.div
        className="mt-12 text-center text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p>
          Kami akan sangat senang jika Anda dapat bergabung dalam momen bahagia
          kami secara virtual.
        </p>
      </motion.div>
    </Section>
  );
};

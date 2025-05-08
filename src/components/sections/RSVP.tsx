"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import { RSVP as RSVPType } from "@/types";
import { supabase } from "@/lib/supabase/client";

interface RSVPProps {
  initialRSVPs?: RSVPType[];
}

export const RSVP: React.FC<RSVPProps> = ({ initialRSVPs = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rsvps, setRsvps] = useState<RSVPType[]>(initialRSVPs);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if we're in development mode without Supabase credentials
  const isDevelopmentWithoutSupabase =
    process.env.NODE_ENV === "development" &&
    (!process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  // Fetch RSVPs
  useEffect(() => {
    // Skip fetching if we're in development without Supabase credentials
    if (isDevelopmentWithoutSupabase) {
      return;
    }

    const fetchRSVPs = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from("rsvps")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        setRsvps(data || []);
      } catch (err) {
        console.error("Error fetching RSVPs:", err);
        setError("Failed to load messages. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    if (initialRSVPs.length === 0) {
      fetchRSVPs();
    }
  }, [initialRSVPs, isDevelopmentWithoutSupabase]);

  // Display a development message if Supabase is not configured
  if (isDevelopmentWithoutSupabase) {
    return (
      <Section id="rsvp" backgroundColor="bg-rose-50">
        <SectionTitle
          title="RSVP & Ucapan"
          subtitle="Mohon konfirmasi kehadiran Anda dan berikan ucapan untuk kami"
        />
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
            <h3 className="text-xl font-medium text-amber-800 mb-4">
              Development Mode
            </h3>
            <p className="text-amber-700 mb-2">
              Supabase credentials are not configured. RSVP functionality is
              disabled.
            </p>
            <p className="text-amber-600 text-sm">
              To enable this feature, add NEXT_PUBLIC_SUPABASE_URL and
              NEXT_PUBLIC_SUPABASE_ANON_KEY to your environment variables.
            </p>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section id="rsvp" backgroundColor="bg-rose-50">
      <SectionTitle
        title="RSVP & Ucapan"
        subtitle="Mohon konfirmasi kehadiran Anda dan berikan ucapan untuk kami"
      />

      <div className="mt-12 max-w-4xl mx-auto">
        {/* RSVP Button */}
        <div className="flex justify-center mb-16">
          <Button
            variant="primary"
            size="lg"
            onClick={() => setIsModalOpen(true)}
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Kirim Ucapan
          </Button>
        </div>

        {/* Messages List */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif text-center text-rose-800 mb-8">
            Ucapan & Doa
          </h3>

          {isLoading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-rose-300 border-t-rose-600"></div>
              <p className="mt-2 text-gray-600">Loading messages...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-4 text-red-500">{error}</div>
          )}

          {!isLoading && rsvps.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>No messages yet. Be the first to send your wishes!</p>
            </div>
          )}

          {rsvps.map((rsvp) => (
            <MessageCard key={rsvp.id} rsvp={rsvp} />
          ))}
        </div>
      </div>

      {/* RSVP Modal Form */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="RSVP & Ucapan"
      >
        <RSVPForm
          onSuccess={(newRsvp) => {
            setRsvps([newRsvp, ...rsvps]);
            setIsModalOpen(false);
          }}
        />
      </Modal>
    </Section>
  );
};

interface MessageCardProps {
  rsvp: RSVPType;
}

const MessageCard: React.FC<MessageCardProps> = ({ rsvp }) => {
  const attendanceColors = {
    yes: "text-green-600",
    no: "text-red-600",
    maybe: "text-amber-600",
  };

  const attendanceText = {
    yes: "Hadir",
    no: "Tidak Hadir",
    maybe: "Mungkin Hadir",
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-sm p-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-between items-start">
        <h4 className="font-medium text-gray-800">{rsvp.name}</h4>
        <span className={`text-sm ${attendanceColors[rsvp.attendance]}`}>
          {attendanceText[rsvp.attendance]}
          {rsvp.attendance === "yes" &&
            rsvp.numberOfGuests > 1 &&
            ` (${rsvp.numberOfGuests} orang)`}
        </span>
      </div>

      <p className="mt-2 text-gray-600">{rsvp.message}</p>

      <div className="mt-3 text-xs text-gray-400">
        {new Date(rsvp.createdAt).toLocaleDateString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </motion.div>
  );
};

interface RSVPFormProps {
  onSuccess: (rsvp: RSVPType) => void;
}

const RSVPForm: React.FC<RSVPFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    attendance: "yes" as "yes" | "no" | "maybe",
    numberOfGuests: 1,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if we're in development mode without Supabase credentials
  const isDevelopmentWithoutSupabase =
    process.env.NODE_ENV === "development" &&
    (!process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "numberOfGuests" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      setError(null);

      // Validation
      if (!formData.name.trim()) {
        throw new Error("Nama tidak boleh kosong");
      }

      if (!formData.phoneNumber.trim()) {
        throw new Error("Nomor telepon tidak boleh kosong");
      }

      if (!formData.message.trim()) {
        throw new Error("Pesan tidak boleh kosong");
      }

      // If in development without Supabase, simulate a successful submission
      if (isDevelopmentWithoutSupabase) {
        // Create a mock RSVP response
        const mockRsvp: RSVPType = {
          id: `dev-${Date.now()}`,
          name: formData.name,
          phoneNumber: formData.phoneNumber,
          attendance: formData.attendance,
          numberOfGuests: formData.numberOfGuests,
          message: formData.message,
          createdAt: new Date().toISOString(),
        };

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        onSuccess(mockRsvp);
        return;
      }

      // Submit to Supabase
      const { data, error } = await supabase
        .from("rsvps")
        .insert([
          {
            name: formData.name.trim(),
            phone_number: formData.phoneNumber.trim(),
            attendance: formData.attendance,
            number_of_guests: formData.numberOfGuests,
            message: formData.message.trim(),
          },
        ])
        .select()
        .single();

      if (error) throw error;

      // Transform to match our type
      const newRsvp: RSVPType = {
        id: data.id,
        name: data.name,
        phoneNumber: data.phone_number,
        attendance: data.attendance,
        numberOfGuests: data.number_of_guests,
        message: data.message,
        createdAt: data.created_at,
      };

      onSuccess(newRsvp);
    } catch (err) {
      console.error("Error submitting RSVP:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to submit. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">
          {error}
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Nama
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          placeholder="Masukkan nama lengkap"
          required
        />
      </div>

      <div>
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Nomor WhatsApp
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          placeholder="Contoh: 08123456789"
          required
        />
      </div>

      <div>
        <label
          htmlFor="attendance"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Kehadiran
        </label>
        <select
          id="attendance"
          name="attendance"
          value={formData.attendance}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          required
        >
          <option value="yes">Hadir</option>
          <option value="no">Tidak Hadir</option>
          <option value="maybe">Mungkin Hadir</option>
        </select>
      </div>

      {formData.attendance === "yes" && (
        <div>
          <label
            htmlFor="numberOfGuests"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Jumlah Tamu
          </label>
          <input
            type="number"
            id="numberOfGuests"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            min="1"
            max="10"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>
      )}

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Ucapan & Doa
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          placeholder="Tuliskan ucapan dan doa untuk kami"
          required
        ></textarea>
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Mengirim...
            </>
          ) : (
            "Kirim Ucapan"
          )}
        </Button>
      </div>
    </form>
  );
};

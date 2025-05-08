"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import { GiftInfo } from "@/types";

interface GiftProps {
  giftInfo: GiftInfo;
  bridesName?: string;
}

export const Gift: React.FC<GiftProps> = ({
  giftInfo,
  bridesName = "Pengantin",
}) => {
  const [isAngpaoModalOpen, setIsAngpaoModalOpen] = useState(false);
  const [isKadoModalOpen, setIsKadoModalOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopySuccess(`${type} berhasil disalin!`);
        setTimeout(() => setCopySuccess(null), 2000);
      },
      () => {
        setCopySuccess("Gagal menyalin teks");
        setTimeout(() => setCopySuccess(null), 2000);
      }
    );
  };

  return (
    <Section id="gift" backgroundColor="bg-rose-50">
      <SectionTitle
        title="Wedding Gift"
        subtitle="Kehadiran dan doa Anda adalah hadiah terbaik bagi kami. Namun jika Anda ingin memberikan hadiah, kami menyediakan opsi berikut"
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Angpao Digital */}
        <motion.div
          className="bg-white rounded-2xl p-6 md:p-8 shadow-md text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-amber-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>

          <h3 className="text-xl font-serif text-amber-800 mb-4">
            Angpao Digital
          </h3>

          <p className="text-gray-600 mb-6">
            Anda dapat memberikan angpao digital untuk {bridesName}
          </p>

          <Button
            variant="secondary"
            onClick={() => setIsAngpaoModalOpen(true)}
          >
            Kirim Angpao
          </Button>
        </motion.div>

        {/* Kado */}
        {giftInfo.shippingAddress && (
          <motion.div
            className="bg-white rounded-2xl p-6 md:p-8 shadow-md text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-rose-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-rose-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-xl font-serif text-rose-800 mb-4">
              Kirim Kado
            </h3>

            <p className="text-gray-600 mb-6">
              Anda dapat mengirimkan kado ke alamat pengantin
            </p>

            <Button variant="outline" onClick={() => setIsKadoModalOpen(true)}>
              Lihat Alamat
            </Button>
          </motion.div>
        )}
      </div>

      {/* Angpao Modal */}
      <Modal
        isOpen={isAngpaoModalOpen}
        onClose={() => setIsAngpaoModalOpen(false)}
        title="Angpao Digital"
      >
        {giftInfo.bankTransfer ? (
          <div className="py-4">
            <p className="text-gray-600 mb-6 text-center">
              Anda dapat mengirimkan angpao melalui transfer bank berikut:
            </p>

            <div className="space-y-6">
              <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                <p className="text-gray-700 font-medium mb-1">Nama Bank:</p>
                <p className="text-gray-800 mb-4">
                  {giftInfo.bankTransfer.bankName}
                </p>

                <p className="text-gray-700 font-medium mb-1">
                  Nomor Rekening:
                </p>
                <div className="flex items-center mb-4">
                  <p className="text-gray-800 font-mono bg-white px-3 py-1.5 rounded border border-gray-200 flex-1">
                    {giftInfo.bankTransfer.accountNumber}
                  </p>
                  <button
                    onClick={() =>
                      handleCopy(
                        giftInfo.bankTransfer!.accountNumber,
                        "Nomor rekening"
                      )
                    }
                    className="ml-2 text-amber-600 hover:text-amber-700 p-1.5"
                    aria-label="Copy account number"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>

                <p className="text-gray-700 font-medium mb-1">Atas Nama:</p>
                <p className="text-gray-800">
                  {giftInfo.bankTransfer.accountName}
                </p>
              </div>

              {copySuccess && (
                <div className="bg-green-50 text-green-700 p-3 rounded-md text-center">
                  {copySuccess}
                </div>
              )}
            </div>

            <div className="mt-8 text-center text-gray-600">
              <p>Terima kasih atas perhatian dan kemurahan hati Anda</p>
            </div>
          </div>
        ) : (
          <div className="py-4 text-center text-gray-600">
            <p>Maaf, informasi rekening belum tersedia.</p>
          </div>
        )}
      </Modal>

      {/* Kado Modal */}
      <Modal
        isOpen={isKadoModalOpen}
        onClose={() => setIsKadoModalOpen(false)}
        title="Alamat Pengiriman Kado"
      >
        <div className="py-4">
          <p className="text-gray-600 mb-6 text-center">
            Anda dapat mengirimkan kado ke alamat berikut:
          </p>

          <div className="bg-rose-50 p-5 rounded-lg border border-rose-100">
            <p className="text-gray-800 whitespace-pre-line">
              {giftInfo.shippingAddress}
            </p>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => handleCopy(giftInfo.shippingAddress!, "Alamat")}
                className="flex items-center text-rose-600 hover:text-rose-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Salin Alamat
              </button>
            </div>
          </div>

          {copySuccess && (
            <div className="mt-4 bg-green-50 text-green-700 p-3 rounded-md text-center">
              {copySuccess}
            </div>
          )}
        </div>
      </Modal>
    </Section>
  );
};

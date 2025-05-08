import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Virtual Wedding Invitation",
  description: "A beautiful virtual wedding invitation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} overflow-x-hidden`}
        suppressHydrationWarning
      >
        <div className="mx-auto max-w-md bg-white min-h-screen shadow-xl overflow-hidden relative">
          {children}
        </div>
      </body>
    </html>
  );
}

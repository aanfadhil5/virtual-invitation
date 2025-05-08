import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import { MusicProvider } from "@/contexts/MusicContext";

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
        <MusicProvider>
          <div className="mx-auto max-w-md bg-white min-h-screen shadow-xl overflow-hidden relative">
            {children}
            {/* 
              Note: You need to add an MP3 file at public/audio/wedding-song.mp3
              You can use any royalty-free wedding music of your choice
            */}
            <MusicPlayer audioSrc="/audio/wedding-song.mp3" />
          </div>
        </MusicProvider>
      </body>
    </html>
  );
}

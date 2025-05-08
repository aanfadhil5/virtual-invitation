"use client";
import React, { createContext, useState, useContext } from "react";

interface MusicContextType {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  startPlaying: () => void;
  stopPlaying: () => void;
  togglePlaying: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const startPlaying = () => setIsPlaying(true);
  const stopPlaying = () => setIsPlaying(false);
  const togglePlaying = () => setIsPlaying((prev) => !prev);

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        startPlaying,
        stopPlaying,
        togglePlaying,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = (): MusicContextType => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
};

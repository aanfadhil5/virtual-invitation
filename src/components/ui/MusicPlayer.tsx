"use client";
import { useEffect, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useMusic } from "@/contexts/MusicContext";

interface MusicPlayerProps {
  audioSrc: string;
}

// Define a type that matches the structure we need
interface AudioPlayerRefType {
  audio: {
    current: HTMLAudioElement;
  };
}

export const MusicPlayer = ({ audioSrc }: MusicPlayerProps) => {
  const { isPlaying, setIsPlaying } = useMusic();
  const playerRef = useRef<AudioPlayerRefType>(null);

  // Effect to handle play/pause based on context state
  useEffect(() => {
    if (!playerRef.current?.audio?.current) return;

    if (isPlaying) {
      try {
        const playPromise = playerRef.current.audio.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((e: Error) => {
            console.log("Autoplay prevented:", e);
            setIsPlaying(false);
          });
        }
      } catch (error) {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      }
    } else {
      playerRef.current.audio.current.pause();
    }
  }, [isPlaying, setIsPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </button>

        {/* Hidden audio player */}
        <div className="hidden">
          <AudioPlayer
            ref={playerRef as unknown as React.Ref<AudioPlayer>}
            src={audioSrc}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            autoPlay={false} // We handle autoplay through the context
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

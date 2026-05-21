"use client";

import React, { useState, useEffect, useRef } from "react";
import { INVITATION_CONFIG } from "../config/invitation";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio instance
    const audio = new Audio(INVITATION_CONFIG.music.audioUrl);
    audio.loop = true;
    audio.volume = 0.4; // Soft background volume
    audioRef.current = audio;

    // First interaction auto-play handler
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
            removeListeners();
          })
          .catch((err) => {
            console.log("Autoplay blocked by browser policy:", err);
          });
      }
    };

    const removeListeners = () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };

    // Add listeners to play on first interaction
    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);
    window.addEventListener("scroll", handleFirstInteraction);

    return () => {
      removeListeners();
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [hasInteracted]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering any page-level click handlers
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Playback failed:", err);
        });
    }
    setHasInteracted(true); // Stop listening to auto-play
  };

  if (!INVITATION_CONFIG.music.enabled) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={togglePlay}
        className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/50 text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${
          isPlaying
            ? "bg-brand-sage animate-spin-slow"
            : "bg-brand-charcoal/60 backdrop-blur-sm"
        }`}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        title={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? (
          // Playing Icon (Musical Notes)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 animate-pulse"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 9l10.5-3m0 0v15m0-15l-10.5 3m10.5-3V3.75m-10.5 3v15m0-15L3 12m16.5 5.25a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-10.5 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
        ) : (
          // Paused Icon (Play Symbol)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5 translate-x-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653z"
            />
          </svg>
        )}
      </button>

      {/* Floating note indicators when playing */}
      {isPlaying && (
        <div className="absolute -top-4 -left-2 pointer-events-none flex gap-1">
          <span className="animate-bounce delay-100 text-xs text-brand-sage">🎵</span>
          <span className="animate-bounce delay-300 text-sm text-brand-yellow">🎶</span>
          <span className="animate-bounce delay-500 text-xs text-brand-rose">🎵</span>
        </div>
      )}
    </div>
  );
}

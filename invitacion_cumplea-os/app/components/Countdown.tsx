"use client";

import React, { useState, useEffect } from "react";
import { INVITATION_CONFIG } from "../config/invitation";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOver: boolean;
}

// Robust local date parser to avoid timezone offsets and browser parsing bugs
const parseISODate = (isoString: string): Date => {
  try {
    // Format expected: YYYY-MM-DDTHH:mm:ss
    const [datePart, timePart] = isoString.split("T");
    const [year, month, day] = datePart.split("-").map(Number);
    const [hours, minutes, seconds] = timePart.split(":").map(Number);
    return new Date(year, month - 1, day, hours, minutes, seconds || 0);
  } catch (e) {
    console.error("Error parsing ISO date, falling back to default constructor", e);
    return new Date(isoString);
  }
};

export default function Countdown() {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = parseISODate(INVITATION_CONFIG.eventDateISO);
    const difference = +targetDate - +new Date();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isOver: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="flex justify-center gap-3 md:gap-4 py-4 min-h-[100px]">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-white/40 border border-white/50 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (timeLeft.isOver) {
    return (
      <div className="text-center py-6">
        <h3 className="font-playful text-2xl md:text-3xl text-brand-blue font-bold animate-bounce">
          ¡Llegó el día del gran evento! 🎉
        </h3>
        <p className="text-zinc-500 mt-2 font-medium">¡Te esperamos para celebrar juntos!</p>
      </div>
    );
  }

  // Color theme modified to use beautiful blue tones
  const items = [
    { label: "Días", value: timeLeft.days, color: "border-brand-blue-dark text-brand-blue-dark bg-brand-blue-dark/5" },
    { label: "Horas", value: timeLeft.hours, color: "border-brand-blue text-brand-blue bg-brand-blue/5" },
    { label: "Minutos", value: timeLeft.minutes, color: "border-brand-blue-light text-brand-blue bg-brand-blue-light/10" },
    { label: "Segundos", value: timeLeft.seconds, color: "border-brand-yellow text-brand-charcoal bg-brand-yellow/10" },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/70">
        ¿Cuánto falta para la fiesta?
      </p>
      
      <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 py-2">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`flex h-20 w-20 md:h-24 md:w-24 flex-col items-center justify-center rounded-2xl border-2 shadow-sm transition-all duration-300 hover:-translate-y-1 ${item.color} glass-panel`}
          >
            <span className="font-playful text-2xl md:text-3xl font-bold tracking-tight">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="text-[9px] md:text-xs font-semibold uppercase tracking-wider text-brand-charcoal/60 mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

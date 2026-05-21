"use client";

import React from "react";
import { INVITATION_CONFIG } from "../config/invitation";

export default function MapSection() {
  const { name, address, googleMapsLink, embedMapUrl } = INVITATION_CONFIG.venue;

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Date & Time details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Date Card */}
        <div className="glass-panel rounded-3xl p-6 flex items-start gap-4 transition-all duration-300 hover:shadow-md">
          <div className="bg-brand-blue/20 text-brand-blue p-3 rounded-2xl flex items-center justify-center shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-playful text-lg font-bold text-brand-charcoal">Fecha</h4>
            <p className="text-zinc-600 font-medium text-sm mt-1">{INVITATION_CONFIG.eventDateFormatted}</p>
          </div>
        </div>

        {/* Time Card */}
        <div className="glass-panel rounded-3xl p-6 flex items-start gap-4 transition-all duration-300 hover:shadow-md">
          <div className="bg-brand-yellow/20 text-brand-yellow-dark p-3 rounded-2xl flex items-center justify-center shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-playful text-lg font-bold text-brand-charcoal">Hora</h4>
            <p className="text-zinc-600 font-medium text-sm mt-1">{INVITATION_CONFIG.eventTimeFormatted}</p>
          </div>
        </div>
      </div>

      {/* Map Card */}
      <div className="glass-panel-heavy rounded-3xl p-6 flex flex-col gap-5 transition-all duration-300 shadow-md">
        <div className="flex items-start gap-4">
          <div className="bg-brand-blue-light/30 text-brand-blue p-3 rounded-2xl flex items-center justify-center shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-playful text-xl font-bold text-brand-charcoal">{name}</h4>
            <p className="text-zinc-500 text-sm mt-1 leading-relaxed">{address}</p>
          </div>
        </div>

        {/* Embedded Iframe Map */}
        <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-white/60 shadow-inner">
          <iframe
            src={embedMapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
            title="Ubicación del evento"
          />
        </div>

        {/* Navigation Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-1 w-full">
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-brand-blue text-white font-semibold py-3 px-5 shadow-sm transition-all duration-300 hover:bg-brand-blue/90 hover:scale-[1.02] active:scale-[0.98] text-center text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.446l-6.002-3.001a1.125 1.125 0 00-1.006-.002L3.754 18a1.125 1.125 0 01-1.502-1.053V6.3a1.125 1.125 0 01.75-1.053l5.622-2.25a1.125 1.125 0 011.007-.002l6.002 3.001a1.125 1.125 0 001.006.002L20.246 4a1.125 1.125 0 011.502 1.053v10.647a1.125 1.125 0 01-.75 1.053l-5.622 2.25a1.125 1.125 0 01-1.007 0z"
              />
            </svg>
            Abrir en Google Maps
          </a>
          <a
            href={`https://waze.com/ul?q=${encodeURIComponent(address)}&navigate=yes`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-brand-blue/30 bg-white/70 backdrop-blur-sm text-brand-blue font-semibold py-3 px-5 shadow-sm transition-all duration-300 hover:bg-white hover:scale-[1.02] active:scale-[0.98] text-center text-sm"
          >
            🚗 Cómo llegar con Waze
          </a>
        </div>
      </div>
    </div>
  );
}

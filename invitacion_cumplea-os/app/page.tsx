import React from "react";
import Image from "next/image";
import Countdown from "./components/Countdown";
import MapSection from "./components/MapSection";
import ConfirmationForm from "./components/ConfirmationForm";
import MusicPlayer from "./components/MusicPlayer";
import { INVITATION_CONFIG } from "./config/invitation";

export default function Home() {
  const { childName, age, eventDateFormatted, eventTimeFormatted } = INVITATION_CONFIG;

  return (
    <div className="relative min-h-screen w-full bg-brand-cream overflow-hidden flex flex-col items-center select-none pb-12">
      
      {/* ================= BACKGROUND DECORATIONS (Shared for both Mobile and Desktop) ================= */}

      {/* 1. Hanging Bunting Banner at the top */}
      <div className="absolute top-0 left-0 w-full h-8 z-20 overflow-hidden pointer-events-none opacity-80">
        <svg viewBox="0 0 100 20" className="w-full h-full fill-none" preserveAspectRatio="none">
          {/* String */}
          <path d="M0 2 Q 25 10, 50 2 Q 75 10, 100 2" stroke="#B9D1EA" strokeWidth="0.5" />
          
          {/* Triangle Flags */}
          <polygon points="4 2, 12 2, 8 12" className="fill-brand-blue/70" />
          <polygon points="16 3, 24 3, 20 14" className="fill-brand-yellow/70" />
          <polygon points="28 4, 36 4, 32 13" className="fill-brand-rose/70" />
          <polygon points="40 4, 48 4, 44 14" className="fill-brand-blue-light/75" />
          
          <polygon points="52 4, 60 4, 56 14" className="fill-brand-yellow/70" />
          <polygon points="64 4, 72 4, 68 13" className="fill-brand-rose/70" />
          <polygon points="76 3, 84 3, 80 14" className="fill-brand-blue/70" />
          <polygon points="88 2, 96 2, 92 12" className="fill-brand-blue-light/75" />
        </svg>
      </div>

      {/* 2. Twinkling Sparkles (Brillitos) - Mobile/Desktop */}
      <div className="absolute top-[80vh] left-[10%] w-6 h-6 opacity-30 animate-pulse-slow pointer-events-none text-brand-yellow fill-current">
        <svg viewBox="0 0 24 24"><path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z" /></svg>
      </div>
      <div className="absolute top-[140vh] right-[12%] w-8 h-8 opacity-25 animate-pulsepointer-events-none text-brand-yellow fill-current [animation-delay:1.5s]">
        <svg viewBox="0 0 24 24"><path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z" /></svg>
      </div>
      <div className="absolute top-[210vh] left-[8%] w-7 h-7 opacity-30 animate-pulse-slow pointer-events-none text-brand-yellow fill-current [animation-delay:0.5s]">
        <svg viewBox="0 0 24 24"><path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z" /></svg>
      </div>

      {/* 3. Playful Animal Footprints (Huellitas) - Mobile/Desktop */}
      {/* Trail 1: Heading to Date Section */}
      <div className="absolute top-[90vh] left-[15%] w-8 h-8 opacity-15 rotate-12 pointer-events-none">
        <svg viewBox="0 0 24 24" className="fill-brand-blue-light"><circle cx="12" cy="14" r="5" /><circle cx="6" cy="7" r="2.2" /><circle cx="10" cy="5" r="2.5" /><circle cx="14" cy="5" r="2.5" /><circle cx="18" cy="7" r="2.2" /></svg>
      </div>
      <div className="absolute top-[94vh] left-[20%] w-7 h-7 opacity-10 -rotate-12 pointer-events-none">
        <svg viewBox="0 0 24 24" className="fill-brand-blue-light"><circle cx="12" cy="14" r="5" /><circle cx="6" cy="7" r="2.2" /><circle cx="10" cy="5" r="2.5" /><circle cx="14" cy="5" r="2.5" /><circle cx="18" cy="7" r="2.2" /></svg>
      </div>

      {/* Trail 2: Heading to Map Section */}
      <div className="absolute top-[165vh] right-[18%] w-8 h-8 opacity-15 rotate-45 pointer-events-none">
        <svg viewBox="0 0 24 24" className="fill-brand-blue-light"><circle cx="12" cy="14" r="5" /><circle cx="6" cy="7" r="2.2" /><circle cx="10" cy="5" r="2.5" /><circle cx="14" cy="5" r="2.5" /><circle cx="18" cy="7" r="2.2" /></svg>
      </div>
      <div className="absolute top-[170vh] right-[14%] w-7 h-7 opacity-10 rotate-[60deg] pointer-events-none">
        <svg viewBox="0 0 24 24" className="fill-brand-blue-light"><circle cx="12" cy="14" r="5" /><circle cx="6" cy="7" r="2.2" /><circle cx="10" cy="5" r="2.5" /><circle cx="14" cy="5" r="2.5" /><circle cx="18" cy="7" r="2.2" /></svg>
      </div>

      {/* 4. Background Confetti in Form Area */}
      <div className="absolute top-[230vh] left-[15%] w-4 h-4 rounded-full bg-brand-rose/25 animate-float-balloon pointer-events-none" />
      <div className="absolute top-[235vh] right-[10%] w-3 h-5 bg-brand-yellow/30 rotate-45 animate-sway pointer-events-none" />
      <div className="absolute top-[250vh] left-[8%] w-5 h-2 bg-brand-blue/30 -rotate-12 animate-float-balloon-slow pointer-events-none" />
      <div className="absolute top-[260vh] right-[15%] w-4 h-4 rounded-full bg-brand-blue-light/30 animate-pulse pointer-events-none" />


      {/* ================= FIXED SIDEBARS FOR DESKTOP VIEWS (Enriches screen real estate on larger devices) ================= */}
      
      {/* Left Desktop Sidebar */}
      <div className="hidden lg:flex flex-col items-center gap-20 fixed left-10 top-28 w-44 pointer-events-none z-0">
        {/* Floating Sky Blue Balloon */}
        <div className="w-24 h-24 opacity-60 animate-float-balloon">
          <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-blue">
            <ellipse cx="50" cy="50" rx="38" ry="48" />
            <path d="M50 98 L46 106 L54 106 Z" />
            <path d="M50 106 Q45 112 50 118" stroke="#1E3040" strokeWidth="2.5" fill="none" />
          </svg>
        </div>

        {/* Small drifting cloud */}
        <div className="w-32 h-16 opacity-50 animate-drift-cloud">
          <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-white">
            <path d="M20 50 C20 40 30 30 45 30 C50 20 65 15 80 25 C95 20 105 30 105 45 C115 45 118 50 110 55 C102 60 18 60 20 50 Z" />
          </svg>
        </div>

        {/* Floating Pastel Yellow Balloon */}
        <div className="w-20 h-20 opacity-50 animate-float-balloon-slow [animation-delay:2s]">
          <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-yellow">
            <ellipse cx="50" cy="50" rx="36" ry="46" />
            <path d="M50 96 L46 104 L54 104 Z" />
            <path d="M50 104 Q55 110 50 116" stroke="#B07E2A" strokeWidth="2.5" fill="none" />
          </svg>
        </div>

        {/* Slow spinning star */}
        <div className="w-12 h-12 opacity-45 animate-sway">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-yellow">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.45 13.97L5.82 21L12 17.27Z" />
          </svg>
        </div>
      </div>

      {/* Right Desktop Sidebar */}
      <div className="hidden lg:flex flex-col items-center gap-20 fixed right-10 top-28 w-44 pointer-events-none z-0">
        {/* Floating Pastel Coral/Rose Balloon */}
        <div className="w-22 h-22 opacity-60 animate-float-balloon-slow [animation-delay:1s]">
          <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-rose">
            <ellipse cx="50" cy="50" rx="38" ry="48" />
            <path d="M50 98 L46 106 L54 106 Z" />
            <path d="M50 106 Q52 112 50 118" stroke="#2C4356" strokeWidth="2.5" fill="none" />
          </svg>
        </div>

        {/* Another cloud */}
        <div className="w-28 h-14 opacity-50 animate-drift-cloud [animation-delay:5s]">
          <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-white">
            <path d="M20 50 C20 40 30 30 45 30 C50 20 65 15 80 25 C95 20 105 30 105 45 C115 45 118 50 110 55 C102 60 18 60 20 50 Z" />
          </svg>
        </div>

        {/* Floating Baby Blue Light Balloon */}
        <div className="w-24 h-24 opacity-60 animate-float-balloon [animation-delay:3.5s]">
          <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-blue-light">
            <ellipse cx="50" cy="50" rx="38" ry="48" />
            <path d="M50 98 L46 106 L54 106 Z" />
            <path d="M50 106 Q48 112 50 118" stroke="#1E3040" strokeWidth="2.5" fill="none" />
          </svg>
        </div>

        {/* Another slow spinning star */}
        <div className="w-10 h-10 opacity-45 animate-sway [animation-delay:2s]">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-yellow">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.45 13.97L5.82 21L12 17.27Z" />
          </svg>
        </div>
      </div>


      {/* ================= MOBILE/TABLET FLOATING DECORATIONS (Render behind main content wrapper) ================= */}
      <div className="absolute top-20 left-6 w-20 h-20 opacity-25 lg:hidden pointer-events-none animate-float-balloon">
        <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-blue">
          <ellipse cx="50" cy="50" rx="40" ry="50" />
          <path d="M50 100 L45 108 L55 108 Z" />
          <path d="M50 108 Q45 115 50 120" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="absolute top-1/4 right-4 w-16 h-16 opacity-20 lg:hidden pointer-events-none animate-float-balloon-slow">
        <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-yellow">
          <ellipse cx="50" cy="50" rx="38" ry="48" />
          <path d="M50 98 L46 106 L54 106 Z" />
          <path d="M50 106 Q55 112 50 118" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="absolute top-1/3 left-4 w-28 h-14 opacity-25 lg:hidden pointer-events-none animate-drift-cloud">
        <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-white">
          <path d="M20 50 C20 40 30 30 45 30 C50 20 65 15 80 25 C95 20 105 30 105 45 C115 45 118 50 110 55 C102 60 18 60 20 50 Z" />
        </svg>
      </div>

      <div className="absolute bottom-40 left-6 w-16 h-16 opacity-20 pointer-events-none animate-sway">
        {/* Soft blue leaf branch */}
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-brand-blue fill-brand-blue/10">
          <path d="M10 90 Q40 50 90 10" strokeWidth="4" strokeLinecap="round" />
          <path d="M30 65 C20 50 45 45 45 45 C45 45 50 60 30 65 Z" />
          <path d="M55 45 C45 30 70 25 70 25 C70 25 75 40 55 45 Z" />
          <path d="M70 25 C65 10 85 10 85 10 C85 10 90 20 70 25 Z" />
        </svg>
      </div>

      {/* Floating Audio Component */}
      <MusicPlayer />

      {/* ================= MAIN CONTAINER WRAPPER ================= */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
        
        {/* ================= SECTION 1: COVER/PORTADA ================= */}
        <header className="relative w-full min-h-[92vh] flex flex-col items-center justify-center text-center p-6">
          {/* Soft, blue colored background blur circles */}
          <div className="absolute top-20 w-80 h-80 rounded-full bg-brand-blue-light/35 blur-3xl -z-10" />
          <div className="absolute bottom-20 w-96 h-96 rounded-full bg-brand-blue/20 blur-3xl -z-10" />

          <div className="flex flex-col items-center w-full">
            {/* Badge */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/25 text-brand-charcoal text-xs font-bold uppercase tracking-wider mb-6 animate-pulse-slow">
              🎈 ¡Estás Invitado! 🎈
            </div>

            {/* Invitation Cover Image - Generated Safari Animals */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-lg mb-8 animate-float-balloon-slow">
              <Image
                src="/oscar_Eduardo.jpeg"
                alt="Invitación de Cumpleaños Oscar Eduardo"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 288px, 320px"
              />
            </div>

            {/* Title */}
            <h1 className="font-playful text-5xl md:text-6xl font-bold tracking-tight text-brand-charcoal drop-shadow-sm leading-tight px-2">
              ¡{childName} cumple <span className="text-brand-blue">{age}</span>!
            </h1>

            <p className="text-zinc-500 font-medium text-lg mt-4 max-w-sm leading-relaxed px-4">
              Te invitamos a celebrar un primer año lleno de amor, risas y aventuras. 🦒🦁🐘
            </p>

            {/* Scroll Down Indicator */}
            <div className="mt-12 flex flex-col items-center gap-2 animate-bounce">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal/50">Desliza para ver más</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="h-5 w-5 text-brand-blue"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
        </header>

        {/* Decorative Wave Divider 1 */}
        <div className="w-full overflow-hidden leading-none pointer-events-none opacity-40 -mt-8">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 fill-brand-blue-light">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,16.22,83.1,22.81,159.2,40.69,238.38,61.85,321.39,56.44Z" />
          </svg>
        </div>

        {/* ================= SECTION 2: COUNTDOWN ================= */}
        <section className="w-full px-6 py-12 flex flex-col items-center text-center">
          {/* Section title */}
          <div className="mb-8">
            <h2 className="font-playful text-3xl font-bold text-brand-charcoal">Guarda la Fecha</h2>
            <div className="w-16 h-1 bg-brand-yellow/80 rounded-full mx-auto mt-2" />
          </div>

          {/* Date and Time Header */}
          <div className="mb-8 text-zinc-600 font-semibold text-lg md:text-xl">
            <p>{eventDateFormatted}</p>
            <p className="text-brand-blue mt-1 font-playful">{eventTimeFormatted}</p>
          </div>

          {/* Countdown */}
          <Countdown />
        </section>

        {/* Decorative Wave Divider 2 */}
        <div className="w-full overflow-hidden leading-none pointer-events-none opacity-40">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 fill-brand-blue-light rotate-180">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,16.22,83.1,22.81,159.2,40.69,238.38,61.85,321.39,56.44Z" />
          </svg>
        </div>

        {/* ================= SECTION 3: LOCATION & MAP ================= */}
        <section className="w-full px-6 py-12 flex flex-col items-center">
          <div className="mb-10 text-center">
            <h2 className="font-playful text-3xl font-bold text-brand-charcoal">¿Dónde será la fiesta?</h2>
            <div className="w-16 h-1 bg-brand-blue-light/80 rounded-full mx-auto mt-2" />
          </div>

          <MapSection />
        </section>

        {/* Decorative Wave Divider 3 */}
        <div className="w-full overflow-hidden leading-none pointer-events-none opacity-30 mt-4">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-6 fill-brand-blue-light">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86C238.38,61.85,159.2,40.69,83.1,22.81,55.05,16.22,26.9,8.75,0,0V120H1200V92.83Z" />
          </svg>
        </div>

        {/* ================= SECTION 4: RSVP FORM ================= */}
        <section className="w-full px-6 py-12 flex flex-col items-center">
          <ConfirmationForm />
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="w-full bg-white/40 border-t border-white/60 py-12 px-6 mt-12 text-center flex flex-col items-center gap-4 relative">
          
          {/* Decorative mini-guirnalda for closing footer */}
          <div className="absolute top-0 w-24 h-4 fill-none opacity-60">
            <svg viewBox="0 0 50 15" className="w-full h-full">
              <path d="M0 2 Q 25 10, 50 2" stroke="#B9D1EA" strokeWidth="0.8" />
              <polygon points="5 2, 11 2, 8 8" className="fill-brand-blue/70" />
              <polygon points="17 4, 23 4, 20 9" className="fill-brand-yellow/70" />
              <polygon points="27 4, 33 4, 30 9" className="fill-brand-rose/70" />
              <polygon points="39 2, 45 2, 42 8" className="fill-brand-blue/70" />
            </svg>
          </div>

          <span className="text-4xl mt-2">🎂</span>
          <p className="font-playful text-xl font-bold text-brand-charcoal">
            ¡Gracias por acompañarnos!
          </p>
          <p className="text-zinc-400 text-sm max-w-xs">
            Esperamos poder celebrar contigo este gran día y guardar recuerdos hermosos para toda la vida.
          </p>
          <p className="text-xs text-zinc-400 mt-4">
            Con amor, Familia de {childName} • 2026
          </p>
        </footer>
      </div>
    </div>
  );
}

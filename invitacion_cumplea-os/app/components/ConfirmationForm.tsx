"use client";

import React, { useState } from "react";
import { INVITATION_CONFIG } from "../config/invitation";

export default function ConfirmationForm() {
  const [name, setName] = useState("");
  const [isAttending, setIsAttending] = useState<boolean | null>(null);
  const [companions, setCompanions] = useState(0);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleIncrement = () => {
    if (companions < 15) setCompanions((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (companions > 0) setCompanions((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    if (!name.trim()) {
      setValidationError("Por favor, ingresa tu nombre o el de tu familia.");
      return;
    }

    if (isAttending === null) {
      setValidationError("Por favor, selecciona si confirmarás asistencia o no.");
      return;
    }

    setIsSubmitting(true);

    // Build clean plain-text WhatsApp message without emojis (eliminates encoding issues completely)
    const titleMessage = INVITATION_CONFIG.rsvp.whatsappMessagePrefix;
    const guestName = `Nombre: ${name.trim()}`;
    const attendance = isAttending 
      ? "Asistencia: ¡Sí, ahí estaré!" 
      : "Asistencia: Lo siento, no podré asistir";
    
    let companionsText = "";
    let totalText = "";
    if (isAttending) {
      companionsText = `Acompañantes: ${companions}`;
      totalText = `Total de personas: ${companions + 1}`;
    }

    const messageText = notes.trim() ? `Mensaje: "${notes.trim()}"` : "";

    // Combine all parts with newlines
    const fullMessage = [
      titleMessage,
      "",
      guestName,
      attendance,
      isAttending ? companionsText : null,
      isAttending ? totalText : null,
      messageText ? messageText : null
    ]
      .filter((line) => line !== null)
      .join("\n");

    // Encode message for URL
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${INVITATION_CONFIG.rsvp.whatsappNumber}?text=${encodedMessage}`;

    // Simulate redirection delay for UX feel
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="w-full glass-panel-heavy rounded-3xl p-6 md:p-8 shadow-md border-t-4 border-brand-blue">
      <div className="text-center mb-6">
        <span className="text-3xl">💌</span>
        <h3 className="font-playful text-2xl font-bold text-brand-charcoal mt-2">
          Confirmar Asistencia
        </h3>
        <p className="text-zinc-500 text-sm mt-1">
          Por favor, confírmanos antes del evento para organizar mejor los detalles.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Name Field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name-input" className="text-sm font-semibold text-brand-charcoal/80">
            ¿Quién responde?
          </label>
          <input
            id="name-input"
            type="text"
            placeholder="Ej. Familia Pérez Gómez o Tu Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-2xl border border-zinc-200 bg-white/70 px-4 py-3 text-sm text-brand-charcoal outline-none transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
          />
        </div>

        {/* Attendance Checkbox Cards */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-brand-charcoal/80">
            ¿Confirmas tu asistencia?
          </label>
          <div className="grid grid-cols-2 gap-3">
            {/* Yes Card (Switched to blue highlight) */}
            <button
              type="button"
              onClick={() => setIsAttending(true)}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300 ${
                isAttending === true
                  ? "border-brand-blue bg-brand-blue/10 text-brand-blue-dark font-bold"
                  : "border-zinc-200 bg-white/50 text-zinc-500 hover:border-zinc-300"
              }`}
            >
              <span className="text-2xl mb-1">🎉</span>
              <span className="text-sm">¡Sí, asistiré!</span>
            </button>

            {/* No Card */}
            <button
              type="button"
              onClick={() => {
                setIsAttending(false);
                setCompanions(0); // Reset companions if not attending
              }}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300 ${
                isAttending === false
                  ? "border-brand-rose bg-brand-rose/10 text-brand-rose font-bold"
                  : "border-zinc-200 bg-white/50 text-zinc-500 hover:border-zinc-300"
              }`}
            >
              <span className="text-2xl mb-1">😢</span>
              <span className="text-sm">No podré ir</span>
            </button>
          </div>
        </div>

        {/* Companions Field (Only visible when Attending is True) */}
        {isAttending === true && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/30 animate-fadeIn">
            <div>
              <label className="text-sm font-semibold text-brand-charcoal/90">
                ¿Llevas acompañantes?
              </label>
              <p className="text-xs text-zinc-500">
                Indica el número de personas adicionales que irán contigo.
              </p>
            </div>
            
            <div className="flex items-center gap-4 self-center sm:self-auto">
              <button
                type="button"
                onClick={handleDecrement}
                disabled={companions === 0}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-brand-yellow/40 text-brand-charcoal font-bold shadow-sm transition-all hover:bg-zinc-50 active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
              >
                -
              </button>
              <span className="font-playful text-xl font-bold w-6 text-center text-brand-charcoal">
                {companions}
              </span>
              <button
                type="button"
                onClick={handleIncrement}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-brand-yellow/40 text-brand-charcoal font-bold shadow-sm transition-all hover:bg-zinc-50 active:scale-95"
              >
                +
              </button>
            </div>
          </div>
        )}

        {/* Message / Dietary restrictions */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="notes-input" className="text-sm font-semibold text-brand-charcoal/80">
            ¿Algún comentario o felicitación? (Opcional)
          </label>
          <textarea
            id="notes-input"
            rows={3}
            placeholder="Ej. Alergias alimentarias, mensajes de felicitación, etc."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full rounded-2xl border border-zinc-200 bg-white/70 px-4 py-3 text-sm text-brand-charcoal outline-none transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 resize-none"
          />
        </div>

        {/* Validation Errors */}
        {validationError && (
          <p className="text-brand-rose text-sm font-semibold text-center animate-shake">
            ⚠️ {validationError}
          </p>
        )}

        {/* Submit Button (Switched to blue theme) */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 rounded-2xl bg-brand-blue text-white font-bold py-3.5 px-6 shadow-md transition-all duration-300 hover:bg-brand-blue/95 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none text-base"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Redireccionando a WhatsApp...
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                <path d="M12.012 2.25c-5.38 0-9.75 4.37-9.75 9.75 0 1.94.57 3.75 1.57 5.28L2.25 21.75l4.63-1.52c1.47.8 3.14 1.27 4.92 1.27 5.38 0 9.75-4.37 9.75-9.75s-4.37-9.75-9.75-9.75zm0 1.5c4.56 0 8.25 3.69 8.25 8.25s-3.69 8.25-8.25 8.25c-1.63 0-3.15-.47-4.44-1.29l-.32-.2-2.73.9 1-2.6-.23-.37c-.93-1.46-1.48-3.2-1.48-5.04 0-4.56 3.69-8.25 8.25-8.25zm-2.82 3.1c-.24 0-.48.05-.72.16-.24.1-.45.26-.63.45-.48.51-.73 1.18-.73 1.86 0 .97.43 1.91 1.28 2.76 1.16 1.16 2.65 2.05 4.33 2.58.46.15.93.22 1.4.22.4 0 .79-.05 1.17-.16.5-.15.94-.46 1.24-.87.26-.35.39-.77.39-1.2v-.22c0-.18-.11-.34-.28-.4l-1.64-.82c-.17-.08-.38-.05-.52.08l-.59.59c-.27.27-.67.33-.99.16a7.447 7.447 0 01-2.48-2.48c-.17-.32-.11-.72.16-.99l.59-.59c.13-.13.16-.34.08-.52l-.82-1.64c-.06-.17-.22-.28-.4-.28z"/>
              </svg>
              Confirmar por WhatsApp
            </>
          )}
        </button>
      </form>
    </div>
  );
}

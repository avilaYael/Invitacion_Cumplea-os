// Configuración centralizada para la invitación de cumpleaños
export const INVITATION_CONFIG = {
  // Datos del cumpleañero
  childName: "Oscar Eduardo",
  age: "1 Año",
  gender: "male", // 'male' | 'female' para detalles de diseño si se requieren

  // Detalles del evento
  eventDateISO: "2026-08-22T16:00:00", // Formato ISO para la cuenta atrás
  eventDateFormatted: "Sábado 22 de Agosto, 2026",
  eventTimeFormatted: "3:30 PM",

  // Detalles del lugar del evento
  venue: {
    name: "Salón de Eventos Sociales Xanthe",
    address: "Calle Tórtolas 49, Izcalli Ecatepec, 55030 Ecatepec de Morelos, Edo. de México",
    // Enlace directo para abrir en Google Maps app
    googleMapsLink: "https://maps.app.goo.gl/hDm8wuKwmwqEcX8b6",
    // Iframe para el mapa embebido de Google Maps
    embedMapUrl: "https://maps.google.com/maps?q=Salon%20de%20eventos%20sociales%20xanthe%20Ecatepec&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },

  // Configuración de confirmación (WhatsApp)
  rsvp: {
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
    whatsappMessagePrefix: "¡Hola! Confirmo mi asistencia al cumpleaños de Oscar Eduardo:",
  },

  // Música de fondo (debe ser libre de derechos o enlace directo de MP3)
  music: {
    enabled: true,
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-happy-kids-363.mp3", // Música instrumental infantil alegre y suave
    title: "Música Alegre de Cumpleaños"
  }
};

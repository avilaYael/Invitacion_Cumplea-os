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

  // Ubicación del evento
  venue: {
    name: "Jardín de Eventos 'Los Globos'",
    address: "Av. Paseo de las Lomas 123, Col. Lindavista, Ciudad de México",
    // Enlace directo para abrir en Google Maps app
    googleMapsLink: "https://maps.google.com/?q=Av.+Paseo+de+las+Lomas+123,+Col.+Lindavista,+Ciudad+de+Mexico",
    // Iframe para el mapa embebido de Google Maps
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661334657158!2d-99.1352497!3d19.4326077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMDgnMDYuOSJX!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
  },

  // Configuración de confirmación (WhatsApp)
  rsvp: {
    // Código de país + número (ej. +52 55 1234 5678 -> 525512345678) sin espacios ni símbolos
    whatsappNumber: "525515224796",
    whatsappMessagePrefix: "¡Hola! Confirmo mi asistencia al cumpleaños de Oscar Eduardo:",
  },

  // Música de fondo (debe ser libre de derechos o enlace directo de MP3)
  music: {
    enabled: true,
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-happy-kids-363.mp3", // Música instrumental infantil alegre y suave
    title: "Música Alegre de Cumpleaños"
  }
};

import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "¡El Primer Añito de Oscar Eduardo! 🎈 | Invitación de Cumpleaños",
  description: "¡Te invito a celebrar mi primer cumpleaños! Acompáñanos en este día tan especial. Revisa la fecha, ubicación y confirma tu asistencia aquí.",
  keywords: ["invitacion", "cumpleaños", "oscar eduardo", "primer año", "fiesta infantil", "safari"],
  authors: [{ name: "Oscar Eduardo's Family" }],
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#FDFBF7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}

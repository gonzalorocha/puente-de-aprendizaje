import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0d0d0f",
  viewportFit: "cover",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Puente de Aprendizaje | Clases Particulares en Argentina",
  description:
    "Profesora particular en Argentina con amplia experiencia. Clases particulares personalizadas para ayudarte a alcanzar tus metas académicas.",
  keywords: [
    "clases particulares",
    "profesora particular",
    "Argentina",
    "educación",
    "apoyo escolar",
    "tutoría",
  ],
  authors: [{ name: "Puente de Aprendizaje" }],
  creator: "Puente de Aprendizaje",
  openGraph: {
    title: "Puente de Aprendizaje | Clases Particulares en Argentina",
    description:
      "Profesora particular con amplia experiencia. Clases particulares personalizadas en Argentina.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0d0d0f] text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}

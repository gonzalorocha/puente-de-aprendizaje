import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Puente del Aprendizaje",
    short_name: "Puente del Aprendizaje",
    description:
      "Clases particulares con amplia experiencia en Argentina. Profesora particular - Lourdes Baliña.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0d0f",
    theme_color: "#0d0d0f",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}

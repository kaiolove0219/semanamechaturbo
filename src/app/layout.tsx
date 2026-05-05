import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Semana Mecha Turbo — O Método Definitivo para Mechas Perfeitas",
  description: "Aprenda os segredos das mechas profissionais com Débora Martins. A apostila VIP completa para você dominar balayage, luzes e mechas como especialista.",
  openGraph: {
    title: "Semana Mecha Turbo — Apostila VIP de Débora Martins",
    description: "Descubra o método completo para mechas perfeitas. Técnicas profissionais, resultados reais.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="grain-overlay antialiased">{children}</body>
    </html>
  );
}

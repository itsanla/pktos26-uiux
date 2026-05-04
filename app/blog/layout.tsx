import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PKATOS 2026 — Kompetisi UI/UX Nasional",
  description: "Kompetisi desain UI/UX terbesar untuk pelajar Indonesia. Wujudkan desain terbaikmu dan raih hadiah puluhan juta rupiah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

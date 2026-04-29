import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PETRONEXUS LIMITED | Oil & Gas Engineering Consultants",
  description:
    "Premier engineering, scientific and technical consulting for the global oil & gas sector. Precision. Expertise. Results.",
  keywords:
    "oil gas engineering consulting, petroleum engineering, technical consulting, reservoir engineering, upstream downstream consulting",
  openGraph: {
    title: "PETRONEXUS LIMITED",
    description:
      "Premier oil & gas engineering, scientific and technical consulting.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="noise-overlay bg-obsidian text-platinum font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

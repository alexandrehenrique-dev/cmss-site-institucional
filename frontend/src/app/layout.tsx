import type { ReactNode } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { InitialLoadGate } from "@/components/loading/InitialLoadGate";
import { getGlobalContent } from "@/services/contentService";
import "./globals.css";

export const metadata = {
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const global = getGlobalContent();

  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Navbar content={global.navbar} mobileMenuLabel="Menu" />

        <main className="flex-1">
          <InitialLoadGate>{children}</InitialLoadGate>
        </main>

        <Footer content={global.footer} />
      </body>
    </html>
  );
}
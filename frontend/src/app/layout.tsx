import type { ReactNode } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { getGlobalContent } from "@/services/contentService";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const global = getGlobalContent();

  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Navbar content={global.navbar} />

        <main className="flex-1">
          {children}
        </main>

        <Footer content={global.footer} />
      </body>
    </html>
  );
}
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/navbar/Navbar";
import { getGlobalContent } from "@/services/contentService";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const global = getGlobalContent();

  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        {/* Navbar FULL WIDTH */}
        <Navbar content={global.navbar} />

        {/* Conteúdo centralizado */}
        <main className="flex-1 py-8">
          {children}
        </main>

        {/* Footer centralizado */}
        <footer className="border-t py-4 bg-[var(--bg)] text-[var(--fg)]">
          <Container>
            <p>{global.footer.text}</p>
          </Container>
        </footer>
      </body>
    </html>
  );
}
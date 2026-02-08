import type { ReactNode } from 'react';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { getGlobalContent } from '@/services/contentService';

export default function RootLayout({ children }: { children: ReactNode }) {
  const global = getGlobalContent();

  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <header className="border-b">
          <Container>
            <nav className="flex flex-col gap-4 py-4">
              <h1 className="text-lg font-semibold">
                {global.navbar.title}
              </h1>

              <ul className="flex flex-col gap-2">
                {global.navbar.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Container>
        </header>
        <main className="flex-1 py-8">
          <Container>{children}</Container>
        </main>
        <footer className="border-t py-4">
          <Container>
            <p>{global.footer.text}</p>
          </Container>
        </footer>
      </body>
    </html>
  );
}
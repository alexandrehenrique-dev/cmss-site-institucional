import Link from 'next/link';
import { getGlobalContent } from '@/services/contentService';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const global = getGlobalContent();

  return (
    <html lang="pt-BR">
      <body>
        <header>
          <nav>
            <h1>{global.navbar.title}</h1>
            <ul>
              {global.navbar.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>{global.footer.text}</p>
        </footer>
      </body>
    </html>
  );
}
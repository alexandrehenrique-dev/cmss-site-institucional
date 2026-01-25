import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="p-4 border-b">
          <nav className="max-w-5xl mx-auto flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/example">Exemplo</Link>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
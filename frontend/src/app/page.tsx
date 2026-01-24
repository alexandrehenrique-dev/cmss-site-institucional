import { getHomeContent } from "@/lib/content";

export default function HomePage() {
  const content = getHomeContent();

  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">
        {content.title}
      </h1>

      <h2 className="text-xl text-gray-600 mb-6">
        {content.subtitle}
      </h2>

      <p className="max-w-xl text-lg">
        {content.message}
      </p>

      <span className="text-red-600">TESTE</span>
    </section>
  );
}
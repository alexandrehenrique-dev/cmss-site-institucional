type SectionProps = {
  title: string;
  text: string;
};

export function Section({ title, text }: SectionProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-lg leading-relaxed">{text}</p>
    </section>
  );
}
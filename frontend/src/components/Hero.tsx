import Image from "next/image";

type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
};

export function Hero({ title, subtitle, image }: HeroProps) {
  return (
    <section className="relative h-[60vh] w-full">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl max-w-2xl">{subtitle}</p>
      </div>
    </section>
  );
}
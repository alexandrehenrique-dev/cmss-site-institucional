import { ImageBlock } from "@/components/ImageBlock";
import { Text, Heading } from "@/components/Typography";
import { MapPin } from "lucide-react";

export function EventModal({
  title,
  description,
  image,
  date,
  location,
  onClose,
}: {
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  date?: string;
  location?: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 max-w-[640px] w-full bg-[var(--bg)] rounded-lg p-6 flex flex-col gap-1">

        <Heading as="h2" variant="h3">
          {title}
        </Heading>

        {image && (
          <ImageBlock
            image={image}
            enableModal={false}
          />
        )}

        {date && <Text variant="muted">{date}</Text>}

        {location && (
          <div className="flex items-center gap-1 opacity-85 text-[var(--fg)]">
            <MapPin className="w-4 h-4 shrink-0" />
            <Text variant="muted">{location}</Text>
          </div>
        )}

        {description && <Text variant="body">{description}</Text>}

        <button
          onClick={onClose}
          className="self-end text-[var(--gold-base)] hover:text-[var(--gold-light)]"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
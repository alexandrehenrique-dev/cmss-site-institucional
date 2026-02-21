import Image from 'next/image';

type CmsImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function CmsImage({ src, alt, width, height }: CmsImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="w-full h-auto"
    />
  );
}
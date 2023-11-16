import NextImage, { ImageProps } from 'next/legacy/image';

export default function Image({ ...rest }: ImageProps) {
  return <NextImage draggable="false" {...rest} />;
}

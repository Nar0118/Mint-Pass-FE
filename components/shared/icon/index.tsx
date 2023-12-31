import { ImageProps } from 'next/legacy/image';
import Image from 'components/shared/image';

export default function Icon({ src, ...rest }: ImageProps): JSX.Element {
  return <Image src={`/icons/${src}`} {...rest} priority={true} />;
}

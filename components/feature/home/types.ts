import { HTMLProps } from 'react';

export interface SocialButtonProps extends HTMLProps<HTMLDivElement> {
  img: string;
  title: string;
  href: string;
}

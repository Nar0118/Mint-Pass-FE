import {
  BackgroundType,
  BorderTransparent,
  BorderType,
  PaddingSize,
  ButtonType,
  Color,
  DisableMode,
} from 'types/buttonType';

import styles from './button.module.scss';

export const getStyle = (buttonType: ButtonType): string => {
  return styles[buttonType];
};

export const getPadding = (buttonPadding: PaddingSize): string => {
  return styles[buttonPadding];
};

export const getColor = (color: Color): string => {
  return styles[color];
};

export function getSizeClassName(size: string): string {
  return styles[size];
}

export function getDisableMode(disableMode: DisableMode): string {
  return styles[disableMode];
}

export function getBorderType(borderType: BorderType): string {
  return styles[borderType];
}

export function getBackgroundType(backgroundType: BackgroundType): string {
  return styles[backgroundType];
}

export function getBorderTransparent(
  borderTransparent: BorderTransparent,
): string {
  return styles[borderTransparent];
}

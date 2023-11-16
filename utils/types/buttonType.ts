import { ButtonProps as AntdButtonProps } from 'antd/lib/button';

export default interface ButtonProps extends AntdButtonProps {
  onClick?: () => void;
  text?: string;
  transparent?: boolean;
  btnType?: ButtonType;
  spin?: boolean;
  iconSide?: IconSide;
  disableMode?: DisableMode;
  borderType?: BorderType;
  backgroundType?: BackgroundType;
  color?: Color;
  borderTransparent?: BorderTransparent;
  paddingSize?: PaddingSize;
}

export enum ButtonType {
  blue = 'blue',
  black = 'black',
  white = 'white',
  whiteBlue = 'whiteBlue',
  blackBorder = 'blackBorder',
  whiteBorder = 'whiteBorder',
  lightBlue = 'lightBlue',
  lightRed = 'lightRed',
  lightGreen = 'lightGreen',
  lightYellow = 'lightYellow',
  lightOrange = 'lightOrange',
  darkBlue = 'darkBlue',
  darkRed = 'darkRed',
  darkGreen = 'darkGreen',
  darkYellow = 'darkYellow',
  darkOrange = 'darkOrange',
  opacityBlue = 'opacityBlue',
  primary = 'primary',
  darkGreenColor = 'darkGreenColor',
}

export enum PaddingSize {
  small = 'paddingSmallSize',
  big = 'paddingBigSize',
}

export enum IconSide {
  Left,
  Right,
}

export enum Size {
  Large = 'large',
  Small = 'small',
}

export enum DisableMode {
  Light = 'lightDisable',
  Dark = 'darkDisable',
}

export enum BorderType {
  Solid = 'solid',
  Dashed = 'dashed',
}

export enum BackgroundType {
  Transparent = 'transparentBackground',
}

export enum BorderTransparent {
  Transparent = 'transparentBorder',
}

export enum Color {
  primary = 'primaryColor',
  black = 'blackColor',
  white = 'whiteColor',
  lightBlue = 'lightBlueColor',
  lightRed = 'lightRedColor',
  lightGreen = 'lightGreenColor',
  lightYellow = 'lightYellowColor',
  lightOrange = 'lightOrangeColor',
  darkBlue = 'darkBlueColor',
  darkRed = 'darkRedColor',
  darkGreen = 'darkGreenColor',
  darkYellow = 'darkYellowColor',
  darkOrange = 'darkOrangeColor',
}

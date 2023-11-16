import { InputProps } from 'antd/lib/input/Input';
import { ChangeEvent } from 'react';

export default interface CustomInputProps extends InputProps {
  label?: string;
  icon?: JSX.Element;
  inputPrefixCls?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  errorMassage?: string;
  imgUrl?: string;
  value?: string;
  colorPlaceholder?: InputColor;
}

export enum RestTypes {
  Password = 'password',
}

export enum InputSize {
  Large = 'large',
  Small = 'small',
  Medium = 'medium',
}

export enum InputIconSide {
  Left = 'left',
  Right = 'right',
}

export enum InputColor {
  GrayPlaceholder = 'grayPlaceholder',
}

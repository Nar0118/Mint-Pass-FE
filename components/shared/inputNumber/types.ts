import { InputProps } from 'antd/lib/input/Input';

export default interface InputNumberProps extends InputProps {
  label?: string;
  icon?: JSX.Element;
  type?: string;
  question?: boolean;
  description?: string;
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

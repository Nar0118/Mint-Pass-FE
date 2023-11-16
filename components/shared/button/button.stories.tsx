import { Story } from '@storybook/react';
import Button from '.';
import ButtonProps, {
  BackgroundType,
  BorderTransparent,
  BorderType,
  ButtonType,
  Color,
  DisableMode,
} from 'types/buttonType';

import 'styles/globals.scss';

export default {
  title: 'Button',
  component: Button,
  args: {
    text: 'Click me',
    size: 'medium',
    btnType: ButtonType.lightRed,
    color: Color.white,
    borderType: BorderType.Solid,
    backgroundType: '',
    borderTransparent: '',
    disabled: false,
    disableMode: DisableMode.Light,
  },
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Default: Story = Template.bind({});
Default.args = {
  text: 'Click me',
  size: 'medium',
  btnType: ButtonType.lightRed,
  color: Color.white,
  borderType: BorderType.Solid,
  backgroundType: '',
  borderTransparent: '',
  disabled: false,
  disableMode: DisableMode.Light,
};

Default.argTypes = {
  size: {
    control: {
      type: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
  },
  btnType: {
    control: {
      type: 'inline-radio',
      options: [
        ButtonType.darkGreen,
        ButtonType.lightRed,
        ButtonType.lightBlue,
        ButtonType.lightGreen,
        ButtonType.lightYellow,
        ButtonType.lightOrange,
        ButtonType.darkBlue,
        ButtonType.darkOrange,
        ButtonType.darkRed,
        ButtonType.darkYellow,
        ButtonType.opacityBlue,
        ButtonType.white,
        ButtonType.black,
        ButtonType.blue,
        ButtonType.whiteBlue,
        ButtonType.blackBorder,
        ButtonType.whiteBorder,
        ButtonType.primary,
      ],
    },
  },
  color: {
    control: {
      type: 'inline-radio',
      options: [
        Color.white,
        Color.black,
        Color.darkGreen,
        Color.lightRed,
        Color.lightBlue,
        Color.lightGreen,
        Color.lightYellow,
        Color.lightOrange,
        Color.darkBlue,
        Color.darkOrange,
        Color.darkRed,
        Color.darkYellow,
      ],
    },
  },
  borderType: {
    control: {
      type: 'inline-radio',
      options: [BorderType.Solid, BorderType.Dashed],
    },
  },
  backgroundType: {
    control: {
      type: 'inline-radio',
      options: [BackgroundType.Transparent, 'background-color'],
    },
  },
  borderTransparent: {
    control: {
      type: 'inline-radio',
      options: [BorderTransparent.Transparent, 'border-color'],
    },
  },
  disabled: {
    control: {
      type: 'inline-radio',
      options: [true, false],
    },
  },
  disableMode: {
    control: {
      type: 'inline-radio',
      options: [DisableMode.Light, DisableMode.Dark],
    },
  },
};

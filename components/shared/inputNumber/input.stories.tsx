import { imagesSvg } from 'utils/constants/imagesSrc';
import CustomInputProps from './types';
import Icon from 'components/shared/icon';
import Input from '.';
import { Story } from '@storybook/react';

import 'styles/globals.scss';

export default {
  title: 'Input',
  component: Input,
  args: {
    placeholder: 'Input',
    label: 'Input',
    type: 'text',
  },
};

const Template = (args: CustomInputProps) => (
  <Input
    icon={<Icon src={imagesSvg.twitter} width={25} height={25} alt="Google" />}
    {...args}
  />
);

export const Default: Story = Template.bind({});
Default.args = {
  label: 'Click me',
  placeholder: 'Input',
  type: 'text',
};

Default.argTypes = {
  type: {
    control: {
      type: 'inline-radio',
      options: ['password', 'email', 'number', 'text', 'default'],
    },
  },
};

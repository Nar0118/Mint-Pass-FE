import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(ts|tsx)',
    '../components/shared/**/*.stories.mdx',
    '../components/shared/**/*.stories.@(ts|tsx)',
    '../components/feature/**/*.stories.mdx',
    '../components/feature/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;

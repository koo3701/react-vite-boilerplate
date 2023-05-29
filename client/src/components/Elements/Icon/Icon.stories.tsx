import { Icon } from '@/components/Elements/Icon';

import reactLogo from '@/assets/react.svg';

import type { Meta, StoryObj } from '@storybook/react';

type T = typeof Icon;
type Story = StoryObj<T>;

/**
 * @private
 */
export default {
  component: Icon,
  args: {
    src: reactLogo,
    alt: 'React Logo',
  },
} satisfies Meta<T>;

/**
 * @private
 */
export const Small: Story = {
  args: {
    size: 'sm',
  },
};

/**
 * @private
 */
export const Medium: Story = {
  args: {
    size: 'md',
  },
};

/**
 * @private
 */
export const Large: Story = {
  args: {
    size: 'lg',
  },
};

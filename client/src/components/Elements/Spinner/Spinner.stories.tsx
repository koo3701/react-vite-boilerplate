import { Spinner } from '@/components/Elements/Spinner';

import type { Meta, StoryObj } from '@storybook/react';

type T = typeof Spinner;
type Story = StoryObj<T>;

/**
 * @private
 */
export default {
  component: Spinner,
  args: {},
} satisfies Meta<T>;

/**
 * @private
 */
export const Small: Story = {
  args: {
    size: 'sm',
    variant: 'primary',
  },
};

/**
 * @private
 */
export const Medium: Story = {
  args: {
    size: 'md',
    variant: 'primary',
  },
};

/**
 * @private
 */
export const Large: Story = {
  args: {
    size: 'lg',
    variant: 'primary',
  },
};

/**
 * @private
 */
export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    variant: 'primary',
  },
};

/**
 * @private
 */
export const Light: Story = {
  args: {
    size: 'md',
    variant: 'light',
  },
};

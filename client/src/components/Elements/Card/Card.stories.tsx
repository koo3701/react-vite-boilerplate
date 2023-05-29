import { Card } from '@/components/Elements/Card';

import type { Meta, StoryObj } from '@storybook/react';

type T = typeof Card;
type Story = StoryObj<T>;

/**
 * @private
 */
export default {
  component: Card,
  args: {
    children: 'Card',
  },
} satisfies Meta<T>;

/**
 * @private
 */
export const Default: Story = {};

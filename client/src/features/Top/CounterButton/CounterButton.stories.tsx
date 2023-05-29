import { CounterButton } from '@/features/Top/CounterButton';

import type { Meta, StoryObj } from '@storybook/react';

type T = typeof CounterButton;
type Story = StoryObj<T>;

/**
 * @private
 */
export default {
  component: CounterButton,
  args: {},
} satisfies Meta<T>;

/**
 * @private
 */
export const Default: Story = {};

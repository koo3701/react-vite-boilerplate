import { Button } from '@/components/Elements/Button';

import type { StoryObj, Meta } from '@storybook/react';

type T = typeof Button;
type Story = StoryObj<T>;

/**
 * @private
 */
export default {
  component: Button,
  args: {
    children: 'Button',
  },
} satisfies Meta<T>;

/**
 * @private
 */
export const Default: Story = {};

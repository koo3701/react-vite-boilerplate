import { Message } from '@/features/Top/ApiResponse/Message';

import type { StoryObj, Meta } from '@storybook/react';

type T = typeof Message;
type Story = StoryObj<T>;

/**
 * @private
 */
export default {
  component: Message,
  args: {},
} satisfies Meta<T>;

/**
 * @private
 */
export const Default: Story = {};

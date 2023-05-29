import { ApiResponse } from '@/features/Top/ApiResponse';

import type { StoryObj, Meta } from '@storybook/react';

type T = typeof ApiResponse;
type Story = StoryObj<T>;

/**
 * @private
 */
export default {
  component: ApiResponse,
  args: {},
} satisfies Meta<T>;

/**
 * @private
 */
export const Default: Story = {};

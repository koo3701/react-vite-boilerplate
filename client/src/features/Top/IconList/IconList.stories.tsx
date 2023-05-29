import { IconList } from '@/features/Top/IconList';

import type { StoryObj, Meta } from '@storybook/react';

type T = typeof IconList;
type Story = StoryObj<T>;

/**
 * @private
 */
export default {
  component: IconList,
  args: {},
} satisfies Meta<T>;

/**
 * @private
 */
export const Default: Story = {};

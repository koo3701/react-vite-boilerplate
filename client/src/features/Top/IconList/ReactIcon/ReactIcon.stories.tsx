import { ReactIcon } from '@/features/Top/IconList/ReactIcon';

import type { StoryObj, Meta } from '@storybook/react';

type T = typeof ReactIcon;
type Story = StoryObj<T>;

/**
 * @private
 */
export default {
  component: ReactIcon,
  args: {},
} satisfies Meta<T>;

/**
 * @private
 */
export const Default: Story = {};

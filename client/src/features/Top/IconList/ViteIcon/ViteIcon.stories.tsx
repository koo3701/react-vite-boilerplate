import { ViteIcon } from '@/features/Top/IconList/ViteIcon';

import type { StoryObj, Meta } from '@storybook/react';

type T = typeof ViteIcon;
type Story = StoryObj<T>;

/**
 * @private
 */
export default {
  component: ViteIcon,
  args: {},
} satisfies Meta<T>;

/**
 * @private
 */
export const Default: Story = {};

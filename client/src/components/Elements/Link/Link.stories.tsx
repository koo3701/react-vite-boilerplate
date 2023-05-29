import { Link } from '@/components/Elements/Link';

import type { Meta, StoryObj } from '@storybook/react';

type T = typeof Link;
type Story = StoryObj<T>;

/**
 * @private
 */
export default {
  component: Link,
  args: { children: 'Link' },
} satisfies Meta<T>;

/**
 * @private
 */
export const Internal: Story = {
  args: {
    href: '#',
  },
};

/**
 * @private
 */
export const External: Story = {
  args: {
    href: 'https://reactjs.org',
    newTab: true,
  },
};

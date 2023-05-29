import { Preview, Story } from '@storybook/react';
import React from 'react';

import { AppProvider } from '../src/providers/App';

import '../src/index.css';

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <AppProvider>
        <Story />
      </AppProvider>
    ),
  ],
} satisfies Preview;

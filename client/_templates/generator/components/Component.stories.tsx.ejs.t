---
to: "<%= needStories ? `${dir.replace(/\\/$/, '')}/${componentName}/${componentName}.stories.tsx` : null %>"
---
import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { <%= componentName %> } from '@<%= dir.slice(3).replace(/\/$/, '') %>/<%= componentName %>';

type T = typeof <%= componentName %>;

/**
 * @private
 */
export default {
  title: '<%= dir.slice(4).replace(/\/$/, '') %>/<%= componentName %>',
  component: <%= componentName %>,
  args: {},
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (<%= haveProps ? 'args' : '' %>) => <<%= componentName %> <%= haveProps ? '{...args} ' : '' %>/>;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

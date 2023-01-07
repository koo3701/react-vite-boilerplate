---
to: "<%= needTests ? `${dir.replace(/\\/$/, '')}/${componentName}/${componentName}.test.tsx` : null %>"
---
import { render, screen } from '@testing-library/react';

import { <%= componentName %> } from '@<%= dir.slice(3).replace(/\/$/, '') %>/<%= componentName %>';

describe('<%= dir.slice(4).replace(/\/$/, '') %>/<%= componentName %>', () => {
  test('<%= componentName %> Text', () => {
    render(<<%= componentName %> />);
    expect(screen.getByText('<%= componentName %>')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';

import { ViteIcon } from '@/features/Top/IconList/ViteIcon';

describe('features/Top/IconList/ViteIcon Link', () => {
  test('ViteIcon href', () => {
    render(<ViteIcon />);
    expect(screen.getByRole('link').getAttribute('href')).toBe('https://vitejs.dev');
  });

  test('ViteIcon newTab', () => {
    render(<ViteIcon />);
    expect(screen.getByRole('link').getAttribute('target')).toBe('_blank');
    expect(screen.getByRole('link').getAttribute('rel')).toBe('noreferrer');
  });
});

describe('features/Top/IconList/ViteIcon Icon', () => {
  const altText = 'Vite logo';

  test('ViteIcon alt', () => {
    render(<ViteIcon />);
    expect(screen.getByAltText(altText)).toBeInTheDocument();
  });

  test('ViteIcon src', () => {
    render(<ViteIcon />);
    expect(screen.getByAltText(altText).getAttribute('src')).toBe('/vite.svg');
  });
});

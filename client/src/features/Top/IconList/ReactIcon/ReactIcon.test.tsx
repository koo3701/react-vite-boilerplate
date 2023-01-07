import { render, screen } from '@testing-library/react';

import { ReactIcon } from '@/features/Top/IconList/ReactIcon';

import reactLogo from '@/assets/react.svg';

describe('features/Top/IconList/ReactIcon Link', () => {
  test('ReactIcon href', () => {
    render(<ReactIcon />);
    expect(screen.getByRole('link').getAttribute('href')).toBe('https://reactjs.org');
  });

  test('ReactIcon newTab', () => {
    render(<ReactIcon />);
    expect(screen.getByRole('link').getAttribute('target')).toBe('_blank');
    expect(screen.getByRole('link').getAttribute('rel')).toBe('noreferrer');
  });
});

describe('features/Top/IconList/ReactIcon Icon', () => {
  const altText = 'React logo';

  test('ReactIcon alt', () => {
    render(<ReactIcon />);
    expect(screen.getByAltText(altText)).toBeInTheDocument();
  });

  test('ReactIcon src', () => {
    render(<ReactIcon />);
    expect(screen.getByAltText(altText).getAttribute('src')).toBe(reactLogo);
  });
});

import { render, screen } from '@testing-library/react';

import { Link } from '@/components/Elements/Link';
import { Button } from '../Button';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routes } from '@/routes/routes';

describe('components/Elements/Link Common', () => {
  test('Link using <a> tag', () => {
    const router = createMemoryRouter([{ path: '/', element: <Link href="/to">Link Test</Link> }]);

    render(<RouterProvider router={router} />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  test('Link Text', () => {
    const randomText = (Math.random() + 1).toString(36).substring(7);

    const router = createMemoryRouter([
      { path: '/', element: <Link href="/to">{randomText}</Link> },
    ]);

    render(<RouterProvider router={router} />);
    expect(screen.getByText(randomText)).toBeInTheDocument();
  });
});

describe('components/Elements/Link Internal Url', () => {
  test('Link Href Text', () => {
    const randomText = `/${(Math.random() + 1).toString(36).substring(7)}`;

    const router = createMemoryRouter([
      { path: '/', element: <Link href={randomText}>Link Test</Link> },
    ]);

    render(<RouterProvider router={router} />);
    expect(screen.getByRole('link').getAttribute('href')).toBe(randomText);
  });

  test('Link newTab=false', () => {
    const router = createMemoryRouter([{ path: '/', element: <Link href="/to">Link Test</Link> }]);

    render(<RouterProvider router={router} />);
    expect(screen.getByRole('link').getAttribute('target')).toBeNull();
    expect(screen.getByRole('link').getAttribute('rel')).toBeNull();
  });

  test('Link newTab=true', () => {
    const router = createMemoryRouter([
      {
        path: '/',
        element: (
          <Link href="/to" newTab>
            Link Test
          </Link>
        ),
      },
    ]);

    render(<RouterProvider router={router} />);
    expect(screen.getByRole('link').getAttribute('target')).toBe('_blank');
    expect(screen.getByRole('link').getAttribute('rel')).toBe('noreferrer');
  });
});

describe('components/Elements/Link External Url', () => {
  test('Link Href Text', () => {
    const randomText = `https://example.com/${(Math.random() + 1).toString(36).substring(7)}`;

    const router = createMemoryRouter([
      { path: '/', element: <Link href={randomText}>Link Test</Link> },
    ]);

    render(<RouterProvider router={router} />);
    expect(screen.getByRole('link').getAttribute('href')).toBe(randomText);
  });

  test('Link newTab=false', () => {
    const router = createMemoryRouter([
      { path: '/', element: <Link href="https://example.com/to">Link Test</Link> },
    ]);

    render(<RouterProvider router={router} />);
    expect(screen.getByRole('link').getAttribute('target')).toBeNull();
    expect(screen.getByRole('link').getAttribute('rel')).toBeNull();
  });

  test('Link newTab=true', () => {
    const router = createMemoryRouter([
      {
        path: '/',
        element: (
          <Link href="https://example.com/to" newTab>
            Link Test
          </Link>
        ),
      },
    ]);

    render(<RouterProvider router={router} />);
    expect(screen.getByRole('link').getAttribute('target')).toBe('_blank');
    expect(screen.getByRole('link').getAttribute('rel')).toBe('noreferrer');
  });
});

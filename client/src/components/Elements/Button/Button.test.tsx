import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '@/components/Elements/Button';

describe('components/Elements/Button', () => {
  test('Button using <button> tag', () => {
    render(<Button onClick={() => {}}>Button Test</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('Button Text', () => {
    const randomText = (Math.random() + 1).toString(36).substring(7);

    render(<Button onClick={() => {}}>{randomText}</Button>);
    expect(screen.getByText(randomText)).toBeInTheDocument();
  });

  test('Button onClick', async () => {
    const handleClick = vitest.fn();

    render(<Button onClick={handleClick}>Button Test</Button>);

    await userEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

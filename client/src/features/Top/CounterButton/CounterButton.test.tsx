import { render, screen } from '@testing-library/react';

import { CounterButton } from '@/features/Top/CounterButton';
import userEvent from '@testing-library/user-event';

describe('features/Top/CounterButton', () => {
  test('CounterButton Default Text', () => {
    render(<CounterButton />);
    expect(screen.getByText('count is 0')).toBeInTheDocument();
  });

  test('CounterButton onClick once', async () => {
    render(<CounterButton />);

    expect(screen.getByText('count is 0')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByText('count is 1')).toBeInTheDocument();
  });

  test('CounterButton onClick 1~10 times', async () => {
    const times = Math.floor(Math.random() * 10);

    render(<CounterButton />);

    expect(screen.getByText('count is 0')).toBeInTheDocument();

    await Promise.all([...new Array(times)].map(() => userEvent.click(screen.getByRole('button'))));

    expect(screen.getByText(`count is ${times}`)).toBeInTheDocument();
  });
});

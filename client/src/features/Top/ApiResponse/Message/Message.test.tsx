import { render, screen } from '@testing-library/react';

import { Message } from '@/features/Top/ApiResponse/Message';

describe('features/Top/ApiResponse/Message', () => {
  test('Text', () => {
    render(<Message />);
    expect(screen.getByText('Message')).toBeInTheDocument();
  });
});

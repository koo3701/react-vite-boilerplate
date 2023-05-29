import { render, screen } from '@testing-library/react';

import { ApiResponse } from '@/features/Top/ApiResponse';

describe('features/Top/ApiResponse', () => {
  test('Text', () => {
    render(<ApiResponse />);
    expect(screen.getByText('ApiResponse')).toBeInTheDocument();
  });
});

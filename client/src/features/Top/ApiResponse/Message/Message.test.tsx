import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { axios } from '@/lib/axios';

import { render, screen } from '@testing-library/react';

import { Message } from '@/features/Top/ApiResponse/Message';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('features/Top/ApiResponse/Message', () => {
  afterEach(() => {
    queryClient.clear();
  });

  test('Text', async () => {
    const message = 'Hello World!';
    const getSpy = vi.spyOn(axios, 'get').mockResolvedValueOnce({
      data: {
        message,
      },
    });

    render(<Message />, {
      wrapper,
    });
    await screen.findByText(`Server Response: ${message}`);

    expect(getSpy).toHaveBeenCalledWith('/');
    expect(getSpy).toHaveBeenCalledTimes(1);
  });
});

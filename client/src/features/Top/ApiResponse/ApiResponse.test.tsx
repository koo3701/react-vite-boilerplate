import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { axios } from '@/lib/axios';

import { render, screen } from '@testing-library/react';

import { ApiResponse } from '@/features/Top/ApiResponse';

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

describe('features/Top/ApiResponse', () => {
  afterEach(() => {
    queryClient.clear();
  });

  test('Success', async () => {
    const message = 'Hello World!';
    const getSpy = vi.spyOn(axios, 'get').mockResolvedValueOnce({
      data: {
        message,
      },
    });

    render(<ApiResponse />, { wrapper });

    await screen.findByText(`Server Response: ${message}`);
    expect(getSpy).toHaveBeenCalledWith('/');
    expect(getSpy).toHaveBeenCalledTimes(1);
  });

  test('Error', async () => {
    const getSpy = vi.spyOn(axios, 'get').mockRejectedValueOnce({});

    render(<ApiResponse />, { wrapper });

    await screen.findByText('error!');
    expect(getSpy).toHaveBeenCalledWith('/');
    expect(getSpy).toHaveBeenCalledTimes(1);
  });

  test('Loading', async () => {
    const getSpy = vi.spyOn(axios, 'get').mockResolvedValueOnce(new Promise(() => {}));

    render(<ApiResponse />, { wrapper });

    await screen.findByText('loading...');
    expect(getSpy).toHaveBeenCalledWith('/');
    expect(getSpy).toHaveBeenCalledTimes(1);
  });
});

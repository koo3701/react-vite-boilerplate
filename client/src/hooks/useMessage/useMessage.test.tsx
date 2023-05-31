import { Suspense } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { axios } from '@/lib/axios';

import { cleanup, renderHook, waitFor, render, screen } from '@testing-library/react';
import { ErrorBoundary } from 'react-error-boundary';

import { MessageResponseType, useMessage } from '@/hooks/useMessage';

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

describe('hooks/useMessage', () => {
  beforeEach(() => {
    cleanup();
    queryClient.clear();
  });

  test('success', async () => {
    const message = 'Hello World!';

    const getSpy = vi.spyOn(axios, 'get').mockResolvedValueOnce({
      data: {
        message,
      } satisfies MessageResponseType,
    });

    const { result } = renderHook(() => useMessage(), {
      wrapper,
    });

    expect(getSpy).toHaveBeenCalledWith('/');
    expect(getSpy).toHaveBeenCalledTimes(1);

    await waitFor(() => expect(result.current).toBe(message));
  });

  test('error', async () => {
    const getSpy = vi.spyOn(axios, 'get').mockRejectedValueOnce({});

    const Container = () => {
      const message = useMessage();

      return <div>{message}</div>;
    };

    render(
      <ErrorBoundary fallback={<div>error</div>}>
        <Container />
      </ErrorBoundary>,
      { wrapper }
    );

    expect(getSpy).toHaveBeenCalledWith('/');
    expect(getSpy).toHaveBeenCalledTimes(1);

    await screen.findByText('error');
  });

  test('loading', async () => {
    const getSpy = vi.spyOn(axios, 'get').mockReturnValueOnce(new Promise(() => {}));

    const Container = () => {
      const message = useMessage();

      return <div>{message}</div>;
    };

    render(
      <Suspense fallback="loading">
        <Container />
      </Suspense>,
      { wrapper }
    );

    expect(getSpy).toHaveBeenCalledWith('/');
    expect(getSpy).toHaveBeenCalledTimes(1);

    await screen.findByText('loading');
  });

  test('empty response', async () => {
    const getSpy = vi.spyOn(axios, 'get').mockResolvedValueOnce({
      data: undefined,
    });

    const { result } = renderHook(() => useMessage(), {
      wrapper,
    });

    expect(getSpy).toHaveBeenCalledWith('/');
    expect(getSpy).toHaveBeenCalledTimes(1);

    await waitFor(() => expect(result.current).toBeUndefined());
  });
});

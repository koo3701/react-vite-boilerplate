import { BrowserRouter } from 'react-router-dom';

import React from 'react';

import { Spinner } from '@/components/Elements';

export type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => (
  <React.Suspense
    fallback={
      <div className="flex h-screen w-screen items-center justify-center">
        <Spinner size="xl" />
      </div>
    }
  >
    <BrowserRouter>{children}</BrowserRouter>
  </React.Suspense>
);

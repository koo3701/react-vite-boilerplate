import { Routes } from '@/routes';

import { AppProvider } from '@/providers/App';

export const App = () => (
  <AppProvider>
    <Routes />
  </AppProvider>
);

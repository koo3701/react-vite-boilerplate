import { Card } from '@/components/Elements';

import { ApiResponse } from '@/features/Top/ApiResponse';
import { CounterButton } from '@/features/Top/CounterButton';
import { IconList } from '@/features/Top/IconList';

export const Top = () => (
  <div className="mx-0 my-auto max-w-7xl p-8 text-center">
    <IconList />
    <h1 className="my-8 text-5xl font-bold">Vite + React</h1>
    <Card>
      <CounterButton />
      <p className="my-4">
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <ApiResponse className="my-4" />
    </Card>
    <p className="text-gray-400">Click on the Vite and React logos to learn more</p>
  </div>
);

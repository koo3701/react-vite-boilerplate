import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import { Card, Icon, Link, Button } from '../../components/Elements';
import { useMessage } from '../../hooks/useMessage';

export const Top = () => {
  const [count, setCount] = useState(0);

  const message = useMessage();

  return (
    <div className="mx-0 my-auto max-w-7xl p-8 text-center">
      <div className="flex justify-center">
        <Link
          className="[&>img]:hover:drop-shadow-[0_0_2em_#646cffaa]"
          href="https://vitejs.dev"
          newTab
        >
          <Icon src="/vite.svg" alt="Vite logo" size="md" />
        </Link>
        <Link
          className="[&>img]:animate-spin [&>img]:[animation-duration:20s] [&>img]:hover:drop-shadow-[0_0_2em_#61dafbaa]"
          href="https://reactjs.org"
          newTab
        >
          <Icon src={reactLogo} alt="React logo" size="md" />
        </Link>
      </div>
      <h1 className="my-8 text-5xl font-bold">Vite + React</h1>
      <Card>
        <Button
          className="opacity-30 dark:text-zinc-400"
          onClick={() => setCount((cnt) => cnt + 1)}
        >
          count is {count}
        </Button>
        <p className="my-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p className="my-4">Server Response: {message ?? 'loading...'}</p>
      </Card>
      <p className="text-gray-400">Click on the Vite and React logos to learn more</p>
    </div>
  );
};

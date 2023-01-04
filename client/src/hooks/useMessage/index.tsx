import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';

export const useMessage = () => {
  const { isLoading, error, data } = useQuery(['useMessage'], () =>
    axios.get<{ message: string }>('/')
  );

  return isLoading ? 'loading...' : error ? 'load error!' : data?.data.message ?? 'loading...';
};

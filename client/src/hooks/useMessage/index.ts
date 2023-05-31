import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';

/**
 * @package
 */
export type MessageResponseType = { message: string };

export const useMessage = () => {
  const { data } = useQuery(['useMessage'], () => axios.get<MessageResponseType>('/'), {
    retry: false,
  });

  return data?.data?.message;
};

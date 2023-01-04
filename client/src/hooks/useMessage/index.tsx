import { useState, useEffect } from 'react';

import { axios } from '@/lib/axios';

export const useMessage = () => {
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    (async () => {
      const msg = (await axios.get<{ message: string }>('/api')).data.message;
      setMessage(msg);
    })().catch(() => {});
  }, []);

  return message;
};

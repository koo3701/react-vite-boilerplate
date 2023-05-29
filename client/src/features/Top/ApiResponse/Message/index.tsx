import { useMessage } from '@/hooks/useMessage';

/**
 * @package
 */
export type MessagePropsType = {
  className?: string;
};
/**
 * @package
 */
export const Message = ({ className }: MessagePropsType) => {
  const message = useMessage();

  return <p className={className}>Server Response: {message}</p>;
};

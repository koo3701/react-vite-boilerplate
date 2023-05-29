import { Suspense } from 'react';

import { ErrorBoundary } from 'react-error-boundary';

import { Message } from '@/features/Top/ApiResponse/Message';

/**
 * @package
 */
export type ApiResponsePropsType = {
  className?: string;
};
/**
 * @package
 */
export const ApiResponse = ({ className }: ApiResponsePropsType) => (
  <ErrorBoundary fallback={<p className={className}>error!</p>}>
    <Suspense fallback={<p className={className}>loading...</p>}>
      <Message className={className} />
    </Suspense>
  </ErrorBoundary>
);

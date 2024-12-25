import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { Alert } from '../Alert';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorFallback: React.FC<{ error: Error }> = ({ error }) => {
  return (
    <Alert type="error" message={`Something went wrong. ${error.message}`} />
  );
};

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
};

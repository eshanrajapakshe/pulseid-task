import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { Alert } from '../Alert';
import { Button } from '../Button';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorFallback: React.FC<{
  error: Error;
  resetErrorBoundary: () => void;
}> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="error-fallback">
      <Alert type="error" message={`Something went wrong. ${error.message}`} />
      <Button type="text" label="Try again" onClick={resetErrorBoundary} />
    </div>
  );
};

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};

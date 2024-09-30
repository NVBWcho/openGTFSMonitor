import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export function ErrorFallback({ error, componentName }) {
  return (
    <div role="alert">
      <p>Something went wrong in {componentName}:</p>
      <pre>{error.message}</pre>
      
    </div>
  );
}
import { ErrorBoundary } from '@shared/lib/error-boundary';
import AppRouter from './router/app-router';

function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}

export default App;

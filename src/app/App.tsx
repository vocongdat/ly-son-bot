import { ErrorBoundary } from '@shared/lib/error-boundary';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;

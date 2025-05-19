import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { APP_PATHS } from '../config/paths';
import Loading from '@/shared/ui/loading';
import NotFoundPage from '@/pages/not-found';
import MainLayout from '../../shared/lib/layout/main';

const ChatPage = lazy(() => import('@/pages/chat'));
const HomePage = lazy(() => import('@/pages/home'));

export default function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={APP_PATHS.root} element={<MainLayout />}>
          <Route path={APP_PATHS.home} element={<HomePage />} />
          <Route path={APP_PATHS.chat} element={<ChatPage />} />
          <Route path={APP_PATHS.notFound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';

export default function MainLayout() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background text-foreground">
      <Outlet />
      <Toaster />
    </div>
  );
}

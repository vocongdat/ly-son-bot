import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import { useTheme } from '@/shared/lib/theme';

export default function MainLayout() {
  const { theme } = useTheme();

  return (
    <div className="min-h-[100dvh] bg-background text-foreground">
      <Outlet />
      <Toaster
        theme={theme}
        position="top-center"
        richColors
        toastOptions={{
          className: 'rounded-xl border border-border shadow-elevated',
        }}
      />
    </div>
  );
}

import { useEffect, Suspense, lazy } from 'react';
import { useAuthStore } from '@/domains/auth';
import { useCycleStore } from '@/domains/cycle';
import { initializeCsrf } from '@/lib/axios';
import '@/i18n';

const AdminLayout = lazy(() => import('@/features/admin'));
const ShopLayout = lazy(() => import('@/features/shop'));
const LandingLayout = lazy(() => import('@/features/landing'));

function App() {
  return (
    <Suspense fallback={null}>
      {isAuthenticated && user?.role === 'admin' ? (
        <AdminLayout />
      ) : isAuthenticated && activeCycle?.status === 'OPEN' ? (
        <ShopLayout />
      ) : (
        <LandingLayout />
      )}
    </Suspense>
  );
}

export default App;

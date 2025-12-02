import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './protected-route.jsx';
import HomePage from '@/features/home/pages/home-page.jsx';
import UserProfilePage from '@/features/user/pages/user-profile-page.jsx';
import AdminDashboardPage from '@/features/admin/pages/admin-dashboard-page.jsx';
import LoginPage from '@/features/auth/pages/login-page.jsx';
import MainLayout from '@/components/layout/main-layout.jsx';

const AppRouter = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/user/profile" element={<UserProfilePage />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute roles={['admin']}>
            <AdminDashboardPage />
          </ProtectedRoute>
        }
      />
    </Route>
    <Route path="/auth/login" element={<LoginPage />} />
    <Route path="*" element={<Navigate to="/home" replace />} />
  </Routes>
);

export default AppRouter;

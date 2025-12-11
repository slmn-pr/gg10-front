import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './protected-route.jsx';
import HomePage from '@/pages/home/index.jsx';
import UserProfilePage from '@/pages/user/pages/user-profile-page.jsx';
import AdminDashboardPage from '@/pages/admin/pages/admin-dashboard-page.jsx';
import LoginPage from '@/pages/auth/pages/login-page.jsx';
import MainLayout from '@/components/layout/main-layout.jsx';
import NotificationsPage from '@/pages/notifications/index.jsx';
import LobbyPage from '@/pages/lobby/index.jsx';

const AppRouter = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/lobby" element={<LobbyPage />} />

      <Route path="/notifications" element={<NotificationsPage />} />
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

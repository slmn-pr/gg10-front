import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './protected-route.jsx';
import HomePage from '@/pages/home/index.jsx';
import UserProfilePage from '@/pages/user/pages/user-profile-page.jsx';
import AdminDashboardPage from '@/pages/admin/pages/admin-dashboard-page.jsx';
import LoginPage from '@/pages/auth/pages/login-page.jsx';
import MainLayout from '@/components/layout/main-layout.jsx';
import NotificationsPage from '@/pages/notifications/index.jsx';
import LobbyPage from '@/pages/lobby/index.jsx';
import TeamsPage from '@/pages/teams/index.jsx';
import CreateTeamPage from '@/pages/create_team/index.jsx';
import useScrollTop from '@/hooks/useScrollTop.js';
import { Box } from '@mui/material';

const AppRouter = () => {
  useScrollTop();
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/lobby" element={<LobbyPage />} />
        {/* TEAMS ROUTES */}
        <Route path="/teams">
          <Route index element={<TeamsPage />} />
          <Route path="create" element={<CreateTeamPage />} />
        </Route>

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
        <Route path="*" element={<Box sx={{ height: '200vh' }}>Not found!</Box>} />
      </Route>
      <Route path="/auth/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRouter;

import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './protected-route.jsx';
import HomePage from '@/pages/home/index.jsx';
import LeaderboardPage from '@/pages/leaderboard/index.jsx';
import UserProfilePage from '@/pages/user/pages/user-profile-page.jsx';
import {
  AccountEditProfilePage,
  AccountLobbiesHistoryPage,
  AccountReferralPage,
  AccountRulesPage,
  AccountSecuritySettingsPage,
  AccountSupportPage,
} from '@/pages/user/pages/account-pages.jsx';
import AdminDashboardPage from '@/pages/admin/pages/admin-dashboard-page.jsx';
import MainLayout from '@/components/layout/main-layout.jsx';
import NotificationsPage from '@/pages/notifications/index.jsx';
import LobbyPage from '@/pages/lobby/index.jsx';
import TeamsPage from '@/pages/teams/index.jsx';
import CreateTeamPage from '@/pages/create_team/index.jsx';
import useScrollTop from '@/hooks/useScrollTop.js';
import { Box } from '@mui/material';
import AuthPage from '@/pages/auth/index.jsx';

const AppRouter = () => {
  useScrollTop();
  return (
    <Routes>
      <Route path="/login" element={<AuthPage />} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/lobby" element={<LobbyPage />} />
        {/* TEAMS ROUTES */}
        <Route path="/teams">
          <Route index element={<TeamsPage />} />
          <Route path="create" element={<CreateTeamPage />} />
        </Route>

        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/user/profile" element={<UserProfilePage />} />
        <Route path="/user/profile/edit" element={<AccountEditProfilePage />} />
        <Route path="/user/profile/lobbies-history" element={<AccountLobbiesHistoryPage />} />
        <Route path="/user/profile/security" element={<AccountSecuritySettingsPage />} />
        <Route path="/user/profile/referral" element={<AccountReferralPage />} />
        <Route path="/user/profile/support" element={<AccountSupportPage />} />
        <Route path="/user/profile/rules" element={<AccountRulesPage />} />
        <Route path="/profile/edit" element={<AccountEditProfilePage />} />
        <Route path="/profile/lobbies-history" element={<AccountLobbiesHistoryPage />} />
        <Route path="/profile/security" element={<AccountSecuritySettingsPage />} />
        <Route path="/profile/referral" element={<AccountReferralPage />} />
        <Route path="/profile/support" element={<AccountSupportPage />} />
        <Route path="/profile/rules" element={<AccountRulesPage />} />
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
    </Routes>
  );
};

export default AppRouter;

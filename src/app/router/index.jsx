import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './protected-route.jsx';
import HomePage from '@/pages/home/index.jsx';
import LeaderboardPage from '@/pages/leaderboard/index.jsx';
import WalletPage from '@/pages/wallet/index.jsx';
import {
  WalletDepositPage,
  WalletEditCardPage,
  WalletGiftCodePage,
  WalletRegisterCardPage,
  WalletWithdrawPage,
} from '@/pages/wallet/wallet-pages.jsx';
import MissionsPage from '@/pages/missions/index.jsx';
import {
  MissionsActiveEmptyPage,
  MissionsActivePage,
  MissionsCompletedEmptyPage,
  MissionsCompletedPage,
  MissionsExpiredEmptyPage,
  MissionsExpiredPage,
  MissionsReadyEmptyPage,
  MissionsReadyPage,
} from '@/pages/missions/mission-pages.jsx';
import NotFoundPage from '@/pages/not-found/index.jsx';
import UserProfilePage from '@/pages/user/pages/user-profile-page.jsx';
import {
  ProfileEditPage,
  ProfileLobbiesHistoryPage,
  ProfileReferralPage,
  ProfileRulesPage,
  ProfileSecuritySettingsPage,
} from '@/pages/user/pages/profile/index.js';
import AdminDashboardPage from '@/pages/admin/pages/admin-dashboard-page.jsx';
import MainLayout from '@/components/layout/main-layout.jsx';
import NotificationsPage from '@/pages/notifications/index.jsx';
import LobbyPage from '@/pages/lobby/index.jsx';
import TeamsPage from '@/pages/teams/index.jsx';
import TeamInvitesPage from '@/pages/teams/invites.jsx';
import CreateTeamPage from '@/pages/create_team/index.jsx';
import useScrollTop from '@/hooks/useScrollTop.js';
import AuthPage from '@/pages/auth/index.jsx';
import SupportLayout from '@/components/layout/SupportLayout.js';

const AppRouter = () => {
  useScrollTop();
  return (
    <Routes>
      <Route path="/login" element={<AuthPage />} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/wallet/deposit" element={<WalletDepositPage />} />
        <Route path="/wallet/withdraw" element={<WalletWithdrawPage />} />
        <Route path="/wallet/gift-code" element={<WalletGiftCodePage />} />
        <Route path="/wallet/card/register" element={<WalletRegisterCardPage />} />
        <Route path="/wallet/card/edit" element={<WalletEditCardPage />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/missions/active" element={<MissionsActivePage />} />
        <Route path="/missions/active/empty" element={<MissionsActiveEmptyPage />} />
        <Route path="/missions/ready" element={<MissionsReadyPage />} />
        <Route path="/missions/ready/empty" element={<MissionsReadyEmptyPage />} />
        <Route path="/missions/completed" element={<MissionsCompletedPage />} />
        <Route
          path="/missions/completed/empty"
          element={<MissionsCompletedEmptyPage />}
        />
        <Route path="/missions/expired" element={<MissionsExpiredPage />} />
        <Route path="/missions/expired/empty" element={<MissionsExpiredEmptyPage />} />
        <Route path="/lobby" element={<LobbyPage />} />
        {/* TEAMS ROUTES */}
        <Route path="/teams">
          <Route index element={<TeamsPage />} />
          <Route path="create" element={<CreateTeamPage />} />
          <Route path="invites" element={<TeamInvitesPage />} />
        </Route>

        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/user/profile" element={<UserProfilePage />} />
        <Route path="/user/profile/edit" element={<ProfileEditPage />} />
        <Route
          path="/user/profile/lobbies-history"
          element={<ProfileLobbiesHistoryPage />}
        />
        <Route path="/user/profile/security" element={<ProfileSecuritySettingsPage />} />
        <Route path="/user/profile/referral" element={<ProfileReferralPage />} />

        <Route path="/user/profile/rules" element={<ProfileRulesPage />} />
        <Route path="/profile/edit" element={<ProfileEditPage />} />
        <Route path="/profile/lobbies-history" element={<ProfileLobbiesHistoryPage />} />
        <Route path="/profile/security" element={<ProfileSecuritySettingsPage />} />
        <Route path="/profile/referral" element={<ProfileReferralPage />} />

        <Route path="/profile/rules" element={<ProfileRulesPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute roles={['admin']}>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route element={<SupportLayout />}>
        <Route path="/support" element={<p>Support gonna be here ...</p>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

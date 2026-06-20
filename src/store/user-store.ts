import { create } from 'zustand';
import type { UserResponse } from '@/api/users/users';

interface UserStore {
  user: UserResponse | null;
  logged_in: boolean;

  setUser: (user: UserResponse) => void;
  clearUser: () => void;
}

/**
 * User Store
 * Holds the full UserResponse from /api/v1/users/me, in memory only.
 * Not persisted — rehydrated on every app load via useAuthBootstrap,
 * which calls getMe() if a valid access_token cookie exists.
 */
const useUserStore = create<UserStore>((set) => ({
  user: null,
  logged_in: false,

  setUser: (user) => {
    set({ user, logged_in: true });
  },

  clearUser: () => {
    set({ user: null, logged_in: false });
  },
}));

export default useUserStore;

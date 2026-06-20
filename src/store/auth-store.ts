import { create } from 'zustand';

export interface AuthState {
  userId: string;
  phoneNumber: string;
  username: string;
}

export type UserRankTypes = 'Legend' | 'Gold' | 'Silver' | 'Bronze';

interface AuthStore {
  user_id: string | null;
  phone_number: string | null;
  username: string | null;
  player_rank: number | null;
  logged_in: boolean;

  setAuth: (payload: AuthState) => void;
  clearAuth: () => void;
  setPlayerRank: (rank: number) => void;
}

/**
 * Auth Store
 * Holds user profile state only. Tokens live in cookies (see src/lib/cookies.js),
 * not here — this store is NOT persisted to localStorage.
 */
const useAuthStore = create<AuthStore>((set) => ({
  user_id: null,
  phone_number: null,
  username: null,
  player_rank: null,
  logged_in: false,

  setAuth: (payload) => {
    set({
      user_id: payload.userId,
      phone_number: payload.phoneNumber,
      username: payload.username,
      logged_in: true,
    });
  },

  clearAuth: () => {
    set({
      user_id: null,
      phone_number: null,
      username: null,
      logged_in: false,
      player_rank: null,
    });
  },

  setPlayerRank: (rank) => {
    set({ player_rank: rank });
  },
}));

export default useAuthStore;

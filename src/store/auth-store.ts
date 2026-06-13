import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface AuthState {
  userId: string;
  phoneNumber: string;
  username: string;
  accessToken: string;
  refreshToken: string;
}

export type UserRankTypes = 'Legend' | 'Gold' | 'Silver' | 'Bronze';

/**
 * Auth Store
 * Manages user authentication state globally using Zustand
 * with secure persistence to localStorage
 */
const useAuthStore = create(
  persist(
    (set) => ({
      // Initial state
      user_id: null,
      phone_number: null,
      username: null,
      access_token: null,
      refresh_token: null,

      player_rank: null, // Player rank (1-4: 1=legend, 2=gold, 3=silver, 4=bronze)
      logged_in: false,


      setAuth: (payload: AuthState) => {
        set({
          user_id: payload.userId,
          phone_number: payload.phoneNumber,
          username: payload.userId,
          access_token: payload.accessToken,
          refresh_token: payload.refreshToken,
          logged_in: true,
        });
      },


      clearAuth: () => {
        set({
          access_token: null,
          refresh_token: null,
          user_id: null,
          phone_number: null,
          username: null,
          logged_in: false,
          player_rank: null,
        });
      },


      setPlayerRank: (rank: number) => {
        set({ player_rank: rank });
      },
    }),
    {
      name: 'auth-storage', // unique name for localStorage key
      storage: createJSONStorage(() => localStorage), // use localStorage for persistence
      // Only persist the tokens, logged_in status, and player rank
      partialize: (state: any) => ({
        access_token: state.access_token,
        refresh_token: state.refresh_token,

        user_id: state.user_id,
        phone_number: state.phone_number,
        username: state.username,

        logged_in: state.logged_in,
        player_rank: state.player_rank,
      }),
    },
  ),
);

export default useAuthStore;

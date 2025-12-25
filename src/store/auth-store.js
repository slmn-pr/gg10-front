import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

/**
 * Auth Store
 * Manages user authentication state globally using Zustand
 * with secure persistence to localStorage
 */
const useAuthStore = create(
  persist(
    (set, get) => ({
      // Initial state
      access_token: null,
      refresh_token: null,
      logged_in: false,
      player_rank: null, // Player rank (1-4: 1=legend, 2=gold, 3=silver, 4=bronze)

      /**
       * Set authentication tokens and login status
       * @param {string} accessToken - The access token
       * @param {string} refreshToken - The refresh token
       * @param {number} playerRank - The player rank (1-4)
       */
      setAuth: (accessToken, refreshToken, playerRank = null) => {
        set({
          access_token: accessToken,
          refresh_token: refreshToken,
          logged_in: true,
          player_rank: playerRank,
        });
      },

      /**
       * Update only the access token (useful for token refresh)
       * @param {string} accessToken - The new access token
       */
      setAccessToken: (accessToken) => {
        set({ access_token: accessToken });
      },

      /**
       * Update only the refresh token
       * @param {string} refreshToken - The new refresh token
       */
      setRefreshToken: (refreshToken) => {
        set({ refresh_token: refreshToken });
      },

      /**
       * Clear all authentication data and logout
       */
      clearAuth: () => {
        set({
          access_token: null,
          refresh_token: null,
          logged_in: false,
          player_rank: null,
        });
      },

      /**
       * Update player rank
       * @param {number} rank - The player rank (1-4)
       */
      setPlayerRank: (rank) => {
        set({ player_rank: rank });
      },

      /**
       * Get the current player rank
       * @returns {number|null} - The player rank or null
       */
      getPlayerRank: () => {
        return get().player_rank;
      },

      /**
       * Check if user is authenticated
       * @returns {boolean} - True if user is logged in and has access token
       */
      isAuthenticated: () => {
        const state = get();
        return state.logged_in && !!state.access_token;
      },

      /**
       * Get the current access token
       * @returns {string|null} - The access token or null
       */
      getAccessToken: () => {
        return get().access_token;
      },

      /**
       * Get the current refresh token
       * @returns {string|null} - The refresh token or null
       */
      getRefreshToken: () => {
        return get().refresh_token;
      },
    }),
    {
      name: 'auth-storage', // unique name for localStorage key
      storage: createJSONStorage(() => localStorage), // use localStorage for persistence
      // Only persist the tokens, logged_in status, and player rank
      partialize: (state) => ({
        access_token: state.access_token,
        refresh_token: state.refresh_token,
        logged_in: state.logged_in,
        player_rank: state.player_rank,
      }),
    },
  ),
);

export default useAuthStore;

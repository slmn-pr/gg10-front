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

      /**
       * Set authentication tokens and login status
       * @param {string} accessToken - The access token
       * @param {string} refreshToken - The refresh token
       */
      setAuth: (accessToken, refreshToken) => {
        set({
          access_token: accessToken,
          refresh_token: refreshToken,
          logged_in: true,
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
        });
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
      // Only persist the tokens and logged_in status
      partialize: (state) => ({
        access_token: state.access_token,
        refresh_token: state.refresh_token,
        logged_in: state.logged_in,
      }),
    },
  ),
);

export default useAuthStore;

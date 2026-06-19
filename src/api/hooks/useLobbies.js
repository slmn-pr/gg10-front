import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createLobby,
  getMyLobbiesReq,
  getLobbyById,
  registerLobby,
  changeLobbyStatus,
} from '../lobbies/index';

/**
 * Hook برای دریافت لابی‌های من
 */
export const useGetMyLobbies = (params = {}, options = {}) => {
  return useQuery({
    queryKey: ['lobbies', 'me', params],
    queryFn: () => getMyLobbiesReq(params),
    ...options,
  });
};

/**
 * Hook برای دریافت لابی با ID
 */
export const useGetLobbyById = (lobbyId, options = {}) => {
  return useQuery({
    queryKey: ['lobbies', 'detail', lobbyId],
    queryFn: () => getLobbyById(lobbyId),
    enabled: !!lobbyId,
    ...options,
  });
};

/**
 * Hook برای ایجاد لابی
 */
export const useCreateLobby = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createLobby,
    mutationKey: ['lobbies', 'create'],
    onSuccess: () => {
      // Invalidate و refetch لابی‌ها بعد از ایجاد
      queryClient.invalidateQueries({ queryKey: ['lobbies'] });
    },
  });
};

/**
 * Hook برای ثبت‌نام در لابی
 */
export const useRegisterLobby = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ lobbyId, payload }) => registerLobby(lobbyId, payload),
    mutationKey: ['lobbies', 'register'],
    onSuccess: (data, variables) => {
      // Invalidate لابی خاص و لیست لابی‌ها
      queryClient.invalidateQueries({
        queryKey: ['lobbies', 'detail', variables.lobbyId],
      });
      queryClient.invalidateQueries({ queryKey: ['lobbies'] });
    },
  });
};

/**
 * Hook برای تغییر وضعیت لابی
 */
export const useChangeLobbyStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ lobbyId, payload }) => changeLobbyStatus(lobbyId, payload),
    mutationKey: ['lobbies', 'change-status'],
    onSuccess: (data, variables) => {
      // Invalidate لابی خاص و لیست لابی‌ها
      queryClient.invalidateQueries({
        queryKey: ['lobbies', 'detail', variables.lobbyId],
      });
      queryClient.invalidateQueries({ queryKey: ['lobbies'] });
    },
  });
};

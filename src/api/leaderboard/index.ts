import apiClient from '../config';
import type { GetLeaderboardParams, LeaderboardResponse } from './leaderboard';

export const getLeaderboard = async (
  params: GetLeaderboardParams = {},
): Promise<LeaderboardResponse> => {
  const response = await apiClient.get<LeaderboardResponse>('leaderboard', {
    params,
  });
  return response.data;
};

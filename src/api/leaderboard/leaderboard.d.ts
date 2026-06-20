import type { GameMode } from '../lobbies/lobbies';

export interface LeaderboardPlayer {
  id: string;
  name: string;
  avatar?: string | null;
}

export interface LeaderboardRow {
  rank: number;
  player: LeaderboardPlayer;
  score: number;
}

export interface LeaderboardResponse {
  mode: GameMode;
  rows: LeaderboardRow[];
  me?: LeaderboardRow | null;
}

export interface GetLeaderboardParams {
  mode?: GameMode;
  limit?: number;
}

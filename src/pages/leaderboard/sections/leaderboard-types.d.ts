export interface LeaderboardRowItem {
  rank: number;
  player: {
    name: string;
    avatar?: string | null;
  };
  score: string;
}

export interface LeaderboardRows {
  battle_royale: LeaderboardRowItem[];
  multiplayer: LeaderboardRowItem[];
}

export type GameMode = 'battle_royale' | 'multiplayer';

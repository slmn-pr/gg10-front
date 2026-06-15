export interface LeaderboardRowItem {
  rank: number;
  player: {
    name: string;
    avatar?: string | null;
  };
  score: string;
}

export interface LeaderboardRows {
  'battle-royal': LeaderboardRowItem[];
  multiplayer: LeaderboardRowItem[];
}

export type GameMode = 'battle-royal' | 'multiplayer';

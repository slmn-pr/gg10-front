export type MissionDifficulty = 'easy' | 'medium' | 'hard';
export type MissionState = 'active' | 'claimable' | 'completed' | 'expired';

export interface MissionResponse {
  id: string;
  title: string;
  description: string;
  goal: number;
  reward: string;
  difficulty: MissionDifficulty;
  image_url?: string | null;
  expires_at?: string | null;
  created_at: string;
  progress: number;
  state: MissionState;
}

export interface MissionListResponse {
  items: MissionResponse[];
  total: number;
}

export interface GetMissionsParams {
  state?: MissionState;
  limit?: number;
  offset?: number;
}

export interface ClaimRewardResponse {
  mission_id: string;
  reward: string;
  internal_balance: string;
}

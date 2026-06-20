export interface UserResponse {
  id: string;
  phone_number: string;
  phone_verified_at?: string;
  is_admin: boolean;
  username: string;
  username_changed_at?: string;
  avatar_id?: string;
  avatar_url?: string;
  referral_code?: string;
  referrer_user_id?: string;
  last_login_at?: string;
  battle_rank_points: number;
  battle_rank_tier_id?: string;
  multiplayer_rank_points: number;
  multiplayer_rank_tier_id?: string;
  total_lobbies_joined: number;
  total_lobbies_won: number;
  is_banned: boolean;
  ban_expires_at?: string;
  created_at: string;
  updated_at: string;
}

export interface AvatarResponse {
  id: string;
  image_url: string;
  is_premium: boolean;
}

export interface SetAvatarRequest {
  avatar_id: string;
}

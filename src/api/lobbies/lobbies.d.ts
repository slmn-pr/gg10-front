// ==================== Enums ====================

export type GameMode = 'multiplayer' | 'battle_royale';

export type LobbyStatus = 'registering' | 'full' | 'running' | 'finished' | 'canceled';


export type MultiplayerTag =
  | 'squad'
  | 'trio'
  | 'duo'
  | 'solo'
  | 'auto_revive'
  | 'tag'
  | 'placement'
  | 'kill';

export type BattleRoyaleTag =
  | 'duel'
  | 'hardpoint'
  | 'free_for_all'
  | 'search_and_destroy';

export type LobbyTag = MultiplayerTag | BattleRoyaleTag;

// ==================== Request Payloads ====================

export interface CreateLobbyPayload {
  title: string;
  metalabel_id?: string;
  category_id?: string;
  arrangement_id: string;
  entry_fee: number;
  total_prize: number;
  image?: string;
  vip?: boolean;
  game_mode: GameMode;
  tags?: LobbyTag[];
  allowed_ranks?: string[];
  start_time?: string;
  end_time?: string;
  reward_description?: string;
  rank_description?: string;
}

export interface GetLobbiesParams {
  status?: LobbyStatus;
  game_mode?: GameMode;
  multiplayer_team_size?: MultiplayerTag[];
  multiplayer_mode?: MultiplayerTag[];
  multiplayer_scoring?: MultiplayerTag[];
  battle_royale_mode?: BattleRoyaleTag[];
  filter_by_rank?: boolean;
  free_only?: boolean;
  limit?: number;
  offset?: number;
}

export interface GetMyLobbiesParams {
  status?: LobbyStatus;
  game_mode?: GameMode;
  limit?: number;
  offset?: number;
}

export interface LobbyRegisterRequest {
  team_id?: string;
  team_member_ids?: string[];
}

export interface LobbyStatusChangeRequest {
  new_status: LobbyStatus;
  lobby_game_id?: string;
  lobby_game_password?: string;
  result_screenshots?: string[];
}

// ==================== Responses ====================

export interface LobbySlotPlayerResponse {
  id: string;
  slot_id: string;
  user_id: string;
  team_id?: string;
  registered_by: string;
  registered_at: string;
}

export interface LobbySlotResponse {
  id: string;
  lobby_id: string;
  slot_number: number;
  players?: LobbySlotPlayerResponse[];
}

export interface LobbyTeamResponse {
  id: string;
  name: string;
  leader_id: string;
  capacity: number;
  created_at: string;
}

export interface LobbyResponse {
  id: string;
  title: string;
  admin_id: string;
  metalabel_id?: string;
  category_id?: string;
  arrangement_id: string;
  entry_fee: string;
  total_prize: string;
  image?: string;
  vip: boolean;
  lobby_id?: string;
  lobby_password?: string;
  status: LobbyStatus;
  game_mode: GameMode;
  tags: LobbyTag[];
  allowed_ranks: string[];
  capacity: number;
  start_time?: string;
  end_time?: string;
  reward_description?: string;
  rank_description?: string;
  result_screenshots: string[];
  created_at: string;
}

export interface LobbyDetailResponse extends LobbyResponse {
  slots?: LobbySlotResponse[];
  teams?: LobbyTeamResponse[];
}

// src/utils/rankTier.ts

import { RANK_MAP } from '@/consts';

export type RankKey = 'legend' | 'gold' | 'silver' | 'bronze';

export interface RankInfo {
  color: string;
  title: string;
  icon: React.ReactNode;
}

interface RankThreshold {
  min: number;
  key: RankKey;
}

/**
 * TEMPORARY: rank is derived from points thresholds until backend
 * exposes a proper rank-tiers mapping (battle_rank_tier_id / multiplayer_rank_tier_id → tier).
 *
 * Thresholds:
 * 0    - 1499  -> bronze
 * 1500 - 2999  -> silver
 * 3000 - 4499  -> gold
 * 4500+        -> legend
 */
const RANK_THRESHOLDS: RankThreshold[] = [
  { min: 4500, key: 'legend' },
  { min: 3000, key: 'gold' },
  { min: 1500, key: 'silver' },
  { min: 0, key: 'bronze' },
];

export const getRankByPoints = (points = 0): RankInfo => {
  const tier =
    RANK_THRESHOLDS.find((t) => points >= t.min) ??
    RANK_THRESHOLDS[RANK_THRESHOLDS.length - 1];

  return RANK_MAP[tier.key];
};

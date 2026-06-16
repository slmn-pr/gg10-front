import { lazy } from 'react';

const GoldMedalIcon = lazy(() => import('@/components/icons/medals/GoldMedalIcon'));
const SilverMedalIcon = lazy(() => import('@/components/icons/medals/SilverMedalIcon'));
const BronzeMedalIcon = lazy(() => import('@/components/icons/medals/BronzeMedalIcon'));

interface PlayerRankMedalProps {
  rank: number;
}

export default function PlayerRankMedal({ rank }: PlayerRankMedalProps) {
  return (
    <>
      {rank === 1 && <GoldMedalIcon />}
      {rank === 2 && <SilverMedalIcon />}
      {rank === 3 && <BronzeMedalIcon />}
    </>
  );
}

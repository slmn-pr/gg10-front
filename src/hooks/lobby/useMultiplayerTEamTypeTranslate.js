import { useMemo } from 'react';

const TEAM_TYPE_MAP = {
  1: '1V1',
  2: '2V2',
  3: '3V3',
  4: '4V4',
  5: '5V5',
  6: '6V6',
  7: '7V7',
  8: '8V8',
  9: '9V9',
  10: '10V10',
};

export default function useMultiplayerTeamTypeTranslate(
  teamTypeID = 1,
  fallback = '1V1',
) {
  return useMemo(() => {
    return TEAM_TYPE_MAP[teamTypeID] || fallback;
  }, [teamTypeID]);
}

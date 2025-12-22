import { useSearchParams } from 'react-router-dom';
import BattleRoyalTeamSideSoloContainer from './BattleRoyalTeamSideSoloContainer';
import BattleRoyalTeamsContainer from './BattleRoyalTeamsContainer';
import { Box } from '@mui/material';

export default function BattleRoyalContainer() {
  const [searchParams] = useSearchParams();

  const teamCapacity = searchParams.get('team_capacity')
    ? parseInt(searchParams.get('team_capacity'))
    : 1;

  return (
    <Box sx={{ width: '100%'   }}>
      {/* <BattleRoyalTeamsContainer /> */}
      {/* Solo mode */}
      {teamCapacity === 1 && <BattleRoyalTeamSideSoloContainer />}

      {/* Double mode */}
      {/* TODO: Implement double mode */}

      {/* Multi mode */}
      {teamCapacity > 2 && <BattleRoyalTeamsContainer teamCapacity={teamCapacity} />}
    </Box>
  );
}

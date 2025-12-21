import { useSearchParams } from 'react-router-dom';
import BattleRoyalTeamSideSoloContainer from './BattleRoyalTeamSideSoloContainer';
import BattleRoyalTeamsContainer from './BattleRoyalTeamsContainer';
import { Box } from '@mui/material';

export default function BattleRoyalContainer() {
  const [searchParams] = useSearchParams();

  const teamCapacity = searchParams.get('team_capacity') || 1;

  return (
    <Box>
      {/* <BattleRoyalTeamsContainer /> */}
      {/* Solo mode */}
      {/* {teamCapacity === 1 && <BattleRoyalTeamSideSoloContainer />} */}

      {/* {teamCapacity > 1 && <BattleRoyalTeamsContainer />} */}
    </Box>
  );
}

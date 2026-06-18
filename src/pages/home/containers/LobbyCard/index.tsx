import { useCallback } from 'react';
import { Card, CardActionArea, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AutoReviveSmallIcon from '../../components/icons/AutoReviveSmallIcon';
import PlacementSmallIcon from '../../components/icons/PlacementSmallIcon';
import SquadSmallIcon from '../../components/icons/SquadSmallIcon';
import { LobbyResponse } from '@/api/lobbies/lobbies';
import LobbyCardImage from './LobbyCardImage';
import LobbyCardContent from './LobbyCardContent';

const tagIcons = {
  اسکوادی: <SquadSmallIcon />,
  اتوریوایو: <AutoReviveSmallIcon />,
  جایگاهی: <PlacementSmallIcon />,
};

interface LobbyCardProsp {
  lobbyInfo: LobbyResponse;
}

const LobbyCard = ({ lobbyInfo }: LobbyCardProsp) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const {
    lobby_id: id,
    entry_fee: entryFee,
    status: statusText,
    total_prize: prize,
    // tags,
    vip,
    title,
    start_time: schedule,
  } = lobbyInfo;

  // TODO: MUst add in API response `maxPlayers` and `currentPlayers`
  // const progress = maxPlayers
  //   ? Math.min(100, Math.round((currentPlayers / maxPlayers) * 100))
  //   : 0;

  const handleCardClick = useCallback(() => {
    if (!id) return;
    navigate(`/lobby/${id}`);
  }, [id, navigate]);

  return (
    <Card
      sx={{
        mb: '12px',
        background: vip ? theme.palette.custom.grey6 : theme.palette.custom.cardsBg,
        borderRadius: 2,
        border: 'none',
        padding: 0,
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        minHeight: '112px',
        direction: 'ltr',
      }}
    >
      <CardActionArea
        sx={{ display: 'flex', flexDirection: 'row-reverse' }}
        onClick={handleCardClick}
      >
        {/* Image Section */}
        <LobbyCardImage status={statusText} />

        {/* Content Section */}
        <LobbyCardContent
          entryFee={entryFee}
          title={title}
          totalPrize={prize}
          vip={vip}
          time={schedule}
        />
      </CardActionArea>
    </Card>
  );
};

export default LobbyCard;

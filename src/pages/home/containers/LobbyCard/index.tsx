import { useCallback } from 'react';
import { Card, CardActionArea, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AutoReviveSmallIcon from '../../components/icons/AutoReviveSmallIcon';
import PlacementSmallIcon from '../../components/icons/PlacementSmallIcon';
import SquadSmallIcon from '../../components/icons/SquadSmallIcon';
import { LobbyResponse } from '@/api/lobbies/lobbies';
import LobbyCardImage from './LobbyCardImage';
import LobbyCardContent from './LobbyCardContent';
import usePersianStatusText from '../../hooks/usePersianStatusText';

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

  if (!lobbyInfo) return <></>;

  const {
    lobby_id: id,
    entry_fee: entryFee,
    status: statusText,
    total_prize: prize,
    capacity,
    registeredCount,

    // tags,
    vip,
    title,
    start_time: schedule,
  } = lobbyInfo;

  const persianStatus = usePersianStatusText(statusText);

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
        background: vip ? theme.palette.custom.shade3 : theme.palette.custom.grey6,
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
        <LobbyCardImage label={persianStatus} status={statusText} />

        {/* Content Section */}
        <LobbyCardContent
          entryFee={entryFee}
          title={title}
          totalPrize={prize}
          vip={vip}
          time={schedule}
          capacity={capacity}
          registeredCount={registeredCount}
        />
      </CardActionArea>
    </Card>
  );
};

export default LobbyCard;

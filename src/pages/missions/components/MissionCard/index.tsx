import { Card, CardActionArea, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MissionCardImage from './MissionCardImage';
import MissionCardContent from './MissionCardContent';

interface LobbyCardProsp {
  data: {};
}

export default function MissionCard({ data }: LobbyCardProsp) {
  const theme = useTheme();
  const navigate = useNavigate();

  // if (!data) return <></>;

  // const {
  //   id,
  //   entry_fee: entryFee,
  //   status: statusText,
  //   total_prize: prize,
  //   capacity,
  //   registeredCount,

  //   // tags,
  //   vip,
  //   title,
  //   start_time: schedule,
  // } = data;

  // const persianStatus = usePersianStatusText(statusText);

  // const handleCardClick = useCallback(() => {
  //   if (!id) return;
  //   navigate(`/lobby/${id}`);
  // }, [id, navigate]);

  return (
    <Card
      sx={{
        width: '100%',
        height: '112px',
        mb: '12px',
        background: theme.palette.custom.grey6,
        borderRadius: 2,
        border: 'none',
        padding: 0,
        position: 'relative',
        overflow: 'hidden',
        direction: 'ltr',
      }}
    >
      <CardActionArea
        sx={{ display: 'flex', flexDirection: 'row-reverse' }}
        // onClick={handleCardClick}
      >
        {/* Image Section */}
        <MissionCardImage label={'ساده'} status={'simple'} />

        {/* Content Section */}
        <MissionCardContent
          description="از تب کیف پول 500هزار تومان حسابتان را شارژ کنید"
          title={'واریز 500 هزار تومان'}
          // vip={vip}
          // time={schedule}
          // capacity={capacity}
          // registeredCount={registeredCount}
        />
      </CardActionArea>
    </Card>
  );
}

import { Card, CardActionArea, Stack, useTheme } from '@mui/material';
import MissionCardImage from './MissionCardImage';
import MissionCardContent from './MissionCardContent';

interface MissionCardProsp {
  data: {};
}

export default function MissionCard({ data }: MissionCardProsp) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: '100%',
        minHeight: '112px',
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
      <Stack
        direction="row"
        sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'stretch' }}
        // onClick={handleCardClick}
      >
        {/* Image Section */}
        <MissionCardImage label={'ساده'} status={'simple'} />

        {/* Content Section */}
        <MissionCardContent
          description="به بخش لابی‌ها بروید و در 10 لابی ثبت‌نام کنید. ثبت‌نام، به تنهایی به معنای شرکت در لابی‌ها نیست"
          title={'واریز 500 هزار تومان'}
          // vip={vip}
          // time={schedule}
          // capacity={capacity}
          // registeredCount={registeredCount}
        />
      </Stack>
    </Card>
  );
}

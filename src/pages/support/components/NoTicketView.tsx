import { Box, Button } from '@mui/material';
import NoTicketIcon from './NoTicketIcon';

export default function NoTicketView({ mt = 10 }) {
  return (
    <Box
      mt={mt}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <NoTicketIcon />
      <Button sx={{ mt: 2, width: '165px', mx: 'auto' }} variant="outlined" color="white">
        ثبت تیکت
      </Button>
    </Box>
  );
}

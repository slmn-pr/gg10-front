import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotLoggedInCta() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      gap={1}
      sx={{
        width: '100%',
        height: 114,
        py: '17px',
        borderTop: '1px solid #020202',
        borderBottom: '1px solid #020202',
        bgcolor: 'custom.bg1',
      }}
    >
      <Typography variant="title2" color="white" textAlign="center">
        رقابت کنید، امتیاز بگیرید و جایزه ببر ید!
      </Typography>
      <Button
        variant="contained"
        sx={{
          width: "252px",
          height: 40,
          bgcolor: 'primary.main',
          color: 'custom.white',
          borderRadius: '8px',
          boxShadow: 'none',
          '&:hover': { bgcolor: 'primary.dark', boxShadow: 'none' },
        }}
      >
        <Link to="/login">
          <Typography variant="button1">ورود / ساخت حساب</Typography>
        </Link>
      </Button>
    </Stack>
  );
}

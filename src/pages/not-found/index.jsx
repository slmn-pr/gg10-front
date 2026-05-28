import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BottomNav from '@/components/layout/bottom-navigation.jsx';
import notFoundIcon from '@/assets/icons/General icons/not found.svg';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        minHeight: 'calc(100vh - 56px)',
        bgcolor: 'custom.bg1',
        px: 2,
        pb: 10,
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        alignItems="center"
        gap={2}
        sx={{
          width: '100%',
          maxWidth: 343,
          bgcolor: 'custom.bg2',
          borderRadius: '8px',
          px: 2,
          py: 4,
        }}
      >
        <Box
          component="img"
          src={notFoundIcon}
          alt=""
          sx={{
            width: 84,
            height: 104,
            objectFit: 'contain',
            opacity: 0.95,
          }}
        />
        <Stack alignItems="center" gap={0.75}>
          <Typography variant="title3" color="custom.white" textAlign="center">
            صفحه مورد نظر پیدا نشد
          </Typography>
          <Typography variant="caption1" color="custom.grey1" textAlign="center">
            آدرس وارد شده اشتباه است یا این صفحه دیگر در دسترس نیست.
          </Typography>
        </Stack>
        <Button
          variant="contained"
          onClick={() => navigate('/home', { replace: true })}
          sx={{
            width: '100%',
            height: 44,
            mt: 1,
            bgcolor: 'primary.main',
            color: 'custom.white',
            boxShadow: 'none',
            '&:hover': { bgcolor: 'primary.dark', boxShadow: 'none' },
          }}
        >
          <Typography variant="button2">بازگشت به خانه</Typography>
        </Button>
      </Stack>
      <BottomNav />
    </Stack>
  );
}

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TopBar from './top-bar';
import BottomNav from './bottom-navigation';
import { Outlet } from 'react-router-dom';
import mainTheme from '@/theme/index.js';
import { Alert, CssBaseline, Snackbar, ThemeProvider, Typography } from '@mui/material';
import useOnlineStatus from '@/hooks/useOnlineStatus';
import OfflineSnakbar from '../OfflineSnakbar';
import ErrorSnakBar from '../snackbar/ErrorSnakBar';

const MainLayout = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      {/* Offline Snakbar */}
      <OfflineSnakbar />

      {/* Server error Snakbar */}
      {/* <ErrorSnakBar
        open={true}
        message="سرور موقتا از دسترس خارج شده،
بعد از چند دقیقه مجددا تلاش کنید"
        actionText="تلاش مجدد"
        onAction={() => {}}
        onClose={() => {}}
      /> */}

      <CssBaseline />

      <TopBar />

      <Box
        bgcolor="custom.tint1"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            paddingLeft: { xs: 0 },
            paddingRight: { xs: 0 },
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            // overflowX: 'hidden',
            // overflow: 'auto',
            backgroundColor: '#000',
            gap: 0.5,
          }}
        >
          <Box component="main" sx={{ flexGrow: 1, pb: 12, px: 0, overflow: 'hidden' }}>
            <Outlet />
          </Box>
          <BottomNav />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;

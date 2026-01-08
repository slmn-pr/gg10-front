import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TopBar from './top-bar';
import { Outlet } from 'react-router-dom';
import mainTheme from '@/theme/index.js';
import { CssBaseline, ThemeProvider } from '@mui/material';
import OfflineSnakbar from '../OfflineSnakbar';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      {/* Offline Snakbar */}

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
        bgcolor="custom.tint0"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          // overflowX: 'hidden',
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
          <OfflineSnakbar />

          <Box component="main" sx={{ flexGrow: 1, pb: 8, px: 0 }}>
            <Outlet />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;

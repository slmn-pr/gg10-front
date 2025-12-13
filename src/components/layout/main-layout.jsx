import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TopBar from './top-bar';
import BottomNav from './bottom-navigation';
import { Outlet } from 'react-router-dom';
import mainTheme from '@/theme/index.js';
import { CssBaseline, ThemeProvider } from '@mui/material';

const MainLayout = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
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
            overflow: 'auto',
            backgroundColor: '#000',
            gap: 0.5,
          }}
        >
          <TopBar />
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

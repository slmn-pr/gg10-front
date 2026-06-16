import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import mainTheme from '@/theme/index.js';
import { CssBaseline, IconButton, Stack, ThemeProvider, Typography } from '@mui/material';
import OfflineSnakbar from '../OfflineSnakbar';
import CloseIcon from '../icons/general/CloseIcon';
import ChevronBackward from '../icons/ChevronBackward';
import ChevronForwardIcon from '../icons/ChevronForward';

export default function SupportLayout() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />

      <Box
        bgcolor="custom.tint0"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Container
          disableGutters
          maxWidth="sm"
          sx={{
            paddingLeft: { xs: 0, md: 1 },
            paddingRight: { xs: 0, md: 1 },
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            backgroundColor: '#000',
            gap: 0.5,
            pt: 2,
          }}
        >
          {/* Header */}
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            sx={{ direction: 'rtl' }}
          >
            <IconButton>
              <ChevronForwardIcon color="white" />
            </IconButton>
            <Typography variant="h6">پشتیبانی</Typography>
          </Stack>

          <OfflineSnakbar />

          <Box component="main" sx={{ flexGrow: 1, pb: 8, px: 0 }}>
            <Outlet />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

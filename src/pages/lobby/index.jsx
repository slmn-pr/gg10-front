import { Box, CircularProgress, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { LobbyProvider } from './contexts/LobbyContext';
import LobbyPageContent from './LobbyPageContent';
import useGetLobbyDetails from './hooks/useGetLobbyDetails';

export default function LobbyPage() {
  const { id } = useParams();

  const { isLoading, isError, data: lobbyData } = useGetLobbyDetails(id);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !lobbyData) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Typography color="error">خطا در دریافت اطلاعات لابی</Typography>
      </Box>
    );
  }

  return (
    <LobbyProvider key={id} initialLobbyData={lobbyData}>
      <LobbyPageContent />
    </LobbyProvider>
  );
}

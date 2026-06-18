// src/pages/lobby/components/LobbyHeaderBar.tsx

import ChevronForwardIcon from '@/components/icons/ChevronForward';
import ShareIcon from '@/components/icons/ShareIcon';
import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useLobbyContext } from '../contexts/LobbyContext';
import CustomToast from '@/components/toast/CustomToast';

export default function LobbyHeaderBar() {
  const theme = useTheme();

  const navigate = useNavigate();
  const { lobbyData } = useLobbyContext();

  const handleNavigateBack = useCallback(() => {
    setTimeout(() => navigate('/home'), 0);
  }, [navigate]);

  const handleShare = useCallback(() => {
    const lobbyUrl = `${window.location.origin}/lobby/${lobbyData.id}`;
    navigator.clipboard.writeText(lobbyUrl);
    toast.custom((t) => <CustomToast t={t} message="لینک لابی کپی شد" theme={theme} />, {
      position: 'bottom-center',
      duration: 3000,
    });
  }, [lobbyData?.id, theme]);

  return (
    <Box sx={{ position: 'relative' }}>
      <img src={lobbyData.image || '/images/sample_lobby.png'} alt="banner" />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          height: '36px',
          position: 'absolute',
          top: 0,
          left: 4,
          right: 0,
          bottom: 0,
          direction: 'rtl',
          padding: '0 8px',
        }}
      >
        <Stack direction="row" alignItems="center">
          <IconButton sx={{ marginInlineEnd: 0.5 }} onClick={handleNavigateBack}>
            <ChevronForwardIcon color={theme.palette.custom.iconsWhite} />
          </IconButton>
          <Typography variant="title2" color="custom.whiteOnBg1">
            {lobbyData.title}
          </Typography>
        </Stack>
        <IconButton onClick={handleShare}>
          <ShareIcon color={theme.palette.custom.iconsWhite} />
        </IconButton>
      </Stack>
    </Box>
  );
}

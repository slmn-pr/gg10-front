import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import GameModeSelector from '@/components/game-mode-selector.jsx';
import EntryFeeIcon from '@/assets/icons/Lobbies cards icons/entry_fee.svg';
import PrizeIcon from '@/assets/icons/Lobbies cards icons/prize.svg';
import { lobbyHistory } from './shared/data.js';
import { Card, LobbyMetaIcon, Page } from './shared/ui.jsx';

export const ProfileLobbiesHistoryPage = () => {
  const [mode, setMode] = useState('battle-royal');
  const items = lobbyHistory[mode === 'battle-royal' ? 'battleRoyal' : 'multiplayer'];

  return (
    <Page title="تاریخچه لابی‌ها">
      <GameModeSelector value={mode} onChange={setMode} />

      <Stack gap={2}>
        {items.map((item) => (
          <Card key={item.id} sx={{ p: 1.5, minHeight: 117 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" gap={1.5}>
              <Stack alignItems="flex-end" sx={{ flex: 1, minWidth: 0 }}>
                <Stack direction="row" alignItems="center" gap={1} sx={{ width: '100%' }}>
                  <Typography variant="caption1" color="custom.white" sx={{ flexShrink: 0 }}>
                    {item.time}
                  </Typography>
                  <Typography variant="caption1" color="custom.white" sx={{ flexShrink: 0 }}>
                    {item.date}
                  </Typography>
                  <Typography variant="sub2" color="custom.white" noWrap sx={{ flex: 1 }}>
                    {item.title}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" gap={0.5} mt={1} color="custom.dollar">
                  <Typography variant="caption1" color="custom.dollar">
                    {item.entry}
                  </Typography>
                  <LobbyMetaIcon src={EntryFeeIcon} />
                </Stack>
                <Stack direction="row" alignItems="center" gap={0.5} color="custom.prize">
                  <Typography variant="caption1" color="custom.prize">
                    {item.prize}
                  </Typography>
                  <LobbyMetaIcon src={PrizeIcon} />
                </Stack>
              </Stack>

              <Box component="img" src={item.image} alt="" sx={{ width: 44, height: 44, borderRadius: '8px', objectFit: 'cover' }} />
            </Stack>
          </Card>
        ))}
      </Stack>
    </Page>
  );
};

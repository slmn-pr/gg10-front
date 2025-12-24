import LobbyVsIcon from '@/assets/LobbyVsIcon';
import { Box } from '@mui/material';

export default function MultiPLayerLayout({
  side1Slot,
  side2Slot,
  vsIconSlot = <LobbyVsIcon />,
}) {
  return (
    <Box sx={{ width: '100%' }}>
      {/* Side 1 */}
      {side1Slot}

      {/* VS ICON */}
      <Box
        sx={{
          width: '100%',
          height: '56px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {vsIconSlot}
      </Box>

      {/* Side 2 */}
      {side2Slot}
    </Box>
  );
}

import AddPLayerCTAIcon from '@/components/icons/AddPLayerCTAIcon';
import { Box, Button } from '@mui/material';

export default function PlayerEmptyCard() {
  return (
    <Button
      sx={{
        width: '74px',
        height: '84px',
        backgroundColor: 'custom.secondaryBg',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AddPLayerCTAIcon />
    </Button>
  );
}

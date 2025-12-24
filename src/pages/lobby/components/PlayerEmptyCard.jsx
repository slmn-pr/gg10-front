import AddPLayerCTAIcon from '@/components/icons/AddPLayerCTAIcon';
import { Button } from '@mui/material';
import { useLobby } from '../contexts/LobbyContext';
import { useLobbyStatus } from '../hooks/useLobbyStatus';

export default function PlayerEmptyCard() {
  const { showErrorIfNotRegisterable, lobbyData } = useLobby();
  const { isNotRegisterable } = useLobbyStatus(lobbyData.status);

  const handleClick = () => {
    if (isNotRegisterable) {
      showErrorIfNotRegisterable();
      return;
    }
    console.log('click');
  };

  return (
    <Button
      onClick={handleClick}
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

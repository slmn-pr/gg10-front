import AddPLayerCTAIcon from '@/components/icons/AddPLayerCTAIcon';
import { Button } from '@mui/material';
import {  useLobbyContext } from '../contexts/LobbyContext';
import { useLobbyStatus } from '../hooks/useLobbyStatus';

export default function PlayerEmptyCard({ onSignupAttempt }) {
  const { showErrorIfNotRegisterable, lobbyData } = useLobbyContext();
  const { isNotRegisterable } = useLobbyStatus(lobbyData.status);

  const handleClick = () => {
    if (isNotRegisterable) {
      showErrorIfNotRegisterable();
      return;
    }
    // Call the signup attempt handler (which will check auth and show modal if needed)
    if (onSignupAttempt) {
      onSignupAttempt();
    } else {
      console.log('click');
    }
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

import { Button, Typography } from '@mui/material';
import ChevronForwardIcon from '../icons/ChevronForward';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export default function BackwardButton({ children }) {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return (
    <Button startIcon={<ChevronForwardIcon color="white" />} onClick={handleClick}>
      <Typography variant="button1" color="white">
        {children}
      </Typography>
    </Button>
  );
}

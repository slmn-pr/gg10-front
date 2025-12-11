import CloseIcon from '@/components/icons/general/CloseIcon';
import { IconButton, useTheme } from '@mui/material';
import CloseButtonIcon from './CloseButtonIcon';

export default function FilterChipCloseButton() {
  const theme = useTheme();
  return (
    <IconButton
      size="small"
      sx={{
        width: 20,
        height: 20,

        borderRadius: '50%',
        backgroundColor: theme.palette.custom.shade4,
        border: `2px solid ${theme.palette.custom.primaryStroke}`,
        '&:hover': {
          backgroundColor: theme.palette.custom.shade4,
          border: `2px solid ${theme.palette.custom.primaryStroke}`,
        },
      }}
    >
      <CloseButtonIcon color="#fff" />
    </IconButton>
  );
}

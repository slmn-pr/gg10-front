import {
  Alert,
  Button,
  IconButton,
  Snackbar,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import CloseIcon from '../icons/general/CloseIcon';

export default function ErrorSnakBar({
  open = false,
  message,
  actionText = 'تلاش مجدد',
  bottom = '16px',
  onAction = () => {},
  onClose = () => {},
}) {
  const theme = useTheme();
  return (
    <Snackbar
      open={open}
      // autoHideDuration={3_000}
      onClose={onClose}
      sx={{
        '&.MuiSnackbar-root ': {
          bottom: bottom,
          maxWidth: '344px',
          width: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
        },
      }}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        closeText="close"
        severity="error"
        icon={
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton sx={{ p: 0 }} size="small" onClick={onClose}>
              <CloseIcon />
            </IconButton>
            <Button sx={{ p: 0 }} color="primary" variant="text" onClick={onAction}>
              <Typography variant="sub1" color="white">
                {actionText}
              </Typography>
            </Button>
          </Stack>
        }
        sx={{
          width: '100%',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',

          backgroundColor: theme.palette.custom.errorOnTertiaryBg,

          '& .MuiAlert-message': {
            py: 0,
            display: 'inline-block',
            direction: 'rtl',
            width: '204px',
          },

          '& .MuiAlert-icon ': {
            marginRight: '0px',
            py: 0,
          },
        }}
      >
        <Typography variant="sub1" color="white" textAlign="right" width="204px">
          {message}
        </Typography>
      </Alert>
    </Snackbar>
  );
}

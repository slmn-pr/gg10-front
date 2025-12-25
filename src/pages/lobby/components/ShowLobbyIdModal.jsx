import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useLobbyStatus } from '../hooks/useLobbyStatus';
import { useCallback, useState } from 'react';
import CloseIcon from '@/components/icons/general/CloseIcon';
import CopyIcon from '@/components/icons/CopyIcon';
import toast, { Toaster } from 'react-hot-toast';
import { LOBBY_STATUS } from '../constants/lobbyStatus';

// Custom toast component with close button on the left
const CustomToast = ({ t, message, theme }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      direction: 'rtl',
      backgroundColor: theme.palette.success.main,
      borderRadius: '8px',
      padding: '12px 16px',
      gap: '8px',
      minWidth: '344px',
      maxWidth: '344px',
    }}
  >
    {/* Message */}
    <Typography variant="sub1" color="custom.white" sx={{ flex: 1 }}>
      {message}
    </Typography>

    {/* Close button on the left */}
    <IconButton
      onClick={() => toast.dismiss(t.id)}
      sx={{
        padding: '4px',
        color: theme.palette.custom.white,
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
      }}
    >
      <CloseIcon color={theme.palette.custom.white} />
    </IconButton>
  </Box>
);

const RoomSection = ({ title, value }) => {
  const theme = useTheme();
  const copyValue = useCallback(() => {
    navigator.clipboard.writeText(value);
    toast.custom((t) => <CustomToast t={t} message={`${title} کپی شد`} theme={theme} />, {
      position: 'bottom-center',
      duration: 3000,
    });
  }, [value, title, theme]);
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: '100%' }}
    >
      {/* Copy button */}
      <IconButton variant="contained" color="primary" onClick={copyValue}>
        <CopyIcon />
      </IconButton>

      <Stack>
        <Typography variant="eng_numbers_regular" component="p">
          {title}
        </Typography>
        <Typography variant="eng_numbers_regular" component="p">
          {value}
        </Typography>
      </Stack>
    </Stack>
  );
};

/** Show lobby id and password modal
 * Jsut show when lobby status is in_progress
 */
export default function ShowLobbyIdModal({ lobbyStatus }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log('lobbyStatus', lobbyStatus);

  //   const { isInProgress } = useLobbyStatus(lobbyStatus);
  // Check if lobby status is in_progress
  const isInProgress = lobbyStatus === LOBBY_STATUS.IN_PROGRESS;

  if (!isInProgress) {
    return <></>;
  }

  return (
    <Stack justifyContent="center">
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: '12px', mb: '8px', mx: 'auto', px: '66px', py: '4px' }}
        onClick={handleOpen}
      >
        <Typography variant="button1" color="custom.whiteOnBg2">
          نمایش آیدی و پسورد روم
        </Typography>
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: '343px',
            backgroundColor: 'custom.secondaryBg',
            margin: 'auto',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '16px',
            borderRadius: '16px',
            boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.1)',
            border: 'none',
          }}
        >
          {/* Close button */}
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <Stack sx={{ gap: '16px' }}>
            {/* Room id */}
            <RoomSection title="آیدی روم" value="1234567890" />

            {/* Room password */}
            <RoomSection title="پسورد روم" value="4799" />

            {/* Slot number */}
            <RoomSection title="شماره اسلات" value="01" />

            {/* Caution text */}
            <Typography
              component="p"
              variant="title3"
              color="custom.info"
              textAlign="center"
              sx={{ textAlign: 'center' }}
            >
              لطفا توجه کنید که دقیقا در شماره اسلات خود در لابی بازی بنشینید. نشستن در
              سایر اسلات‌ها منجر به کیک شدن شما از لابی می‌شود
            </Typography>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
}

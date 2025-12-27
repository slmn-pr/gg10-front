import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
import AuthIcon from '../icons/login_modal/AuthIcon';
import CloseIcon from '../icons/general/CloseIcon';

export default function LoginModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
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
        }}
      >
        {/* Close icon */}
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
          }}
        >
          <AuthIcon />

          <Typography variant="title1" textAlign="center">
            ورود به حساب کاربری
          </Typography>
          <Typography variant="sub1" textAlign="center">
            برای ثبت نام در لابی ابتدا وارد حساب کاربری خود شوید
          </Typography>

          <Button variant="contained" color="primary" sx={{ mt: '20px', width: '252px' }}>
            ورود / ساخت حساب
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

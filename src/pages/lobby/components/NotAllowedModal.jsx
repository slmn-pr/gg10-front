import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
import CloseIcon from '@/components/icons/general/CloseIcon';

export default function NotAllowedModal({ open, onClose }) {
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
          }}
        >
          <Typography variant="title1" textAlign="center" sx={{ mt: 2 }}>
            دسترسی غیرمجاز
          </Typography>
          <Typography variant="sub1" textAlign="center" sx={{ mt: 1, mb: 2 }}>
            شما اجازه دسترسی به این بخش را ندارید
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: '20px', width: '252px' }}
            onClick={onClose}
          >
            متوجه شدم
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

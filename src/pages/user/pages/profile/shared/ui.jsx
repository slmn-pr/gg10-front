import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChevronForward from '@/components/icons/ChevronForward';
import BottomNav from '@/components/layout/bottom-navigation.jsx';

export const Page = ({ title, children, bottomNav = true }) => {
  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        minHeight: 'calc(100vh - 64px)',
        bgcolor: 'custom.bg1',
        width: '100%',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        px: 2,
        pt: 3,
        pb: bottomNav ? 12 : 4,
      }}
      gap={3}
    >
      <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={0.75}>
        <Typography variant="title2" color="custom.white" sx={{ lineHeight: 1.4 }}>
          {title}
        </Typography>
        <IconButton onClick={() => navigate(-1)} sx={{ width: 24, height: 24, p: 0 }}>
          <ChevronForward color="#fff" />
        </IconButton>
      </Stack>

      {children}
      {bottomNav && <BottomNav />}
    </Stack>
  );
};

export const Card = ({ children, sx, ...props }) => (
  <Box sx={{ bgcolor: 'custom.bg2', borderRadius: '8px', ...sx }} {...props}>
    {children}
  </Box>
);

export const LobbyMetaIcon = ({ src }) => (
  <Box
    component="img"
    src={src}
    alt=""
    sx={{
      width: 18,
      height: 18,
      flexShrink: 0,
    }}
  />
);

export const PrimaryButton = ({ children, disabled, onClick }) => (
  <Button
    fullWidth
    disabled={disabled}
    onClick={onClick}
    sx={{
      height: 48,
      bgcolor: disabled ? 'custom.grey2' : 'primary.main',
      color: 'custom.white',
      borderRadius: '8px',
      '&:hover': { bgcolor: disabled ? 'custom.grey2' : 'primary.dark' },
      '&.Mui-disabled': {
        bgcolor: 'custom.grey2',
        color: 'custom.white',
        opacity: 1,
      },
    }}
  >
    {children}
  </Button>
);

export const AccountInput = ({ defaultValue, placeholder, type = 'text', startIcon }) => (
  <Stack
    direction="row"
    alignItems="center"
    sx={{
      height: 52,
      borderRadius: '8px',
      bgcolor: 'custom.grey7',
      border: '1px solid',
      borderColor: 'custom.grey4',
      px: 1.5,
    }}
  >
    {startIcon}
    <Box
      component="input"
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      dir={type === 'text' && defaultValue ? 'ltr' : 'rtl'}
      style={{
        width: '100%',
        border: 0,
        outline: 0,
        background: 'transparent',
        color: '#fff',
        fontFamily: 'inherit',
        fontSize: '16px',
        fontWeight: 700,
        textAlign: type === 'text' && defaultValue ? 'left' : 'right',
      }}
    />
  </Stack>
);

export const Toast = ({ message }) =>
  message ? (
    <Box
      sx={{
        position: 'fixed',
        left: '50%',
        bottom: 84,
        transform: 'translateX(-50%)',
        width: 'min(344px, calc(100vw - 32px))',
        bgcolor: 'custom.bg2',
        color: 'custom.white',
        borderRadius: '8px',
        px: 2,
        py: 1.5,
        zIndex: 1400,
        textAlign: 'center',
        boxShadow: '0 4px 14px rgba(0,0,0,0.35)',
      }}
    >
      <Typography variant="sub2">{message}</Typography>
    </Box>
  ) : null;

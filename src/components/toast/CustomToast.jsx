import { Box, IconButton, Typography, useTheme } from '@mui/material';
import toast from 'react-hot-toast';
import CloseIcon from '../icons/general/CloseIcon';

/**
 * Custom toast component to support variant colors and close button
 * @param {Object} props - Component props
 * @param {Object} props.t - Toast instance from react-hot-toast
 * @param {string} props.message - Toast message to display
 * @param {'success'|'error'|'warning'|'info'} props.variant - Toast variant (default: 'success')
 * @param {string} [props.backgroundColor] - Custom background color (overrides variant)
 * @param {string} [props.textColor] - Custom text color (overrides variant default)
 */
export default function CustomToast({
  t,
  message,
  variant = 'success',
  backgroundColor,
  textColor,
  onClose,
}) {
  const theme = useTheme();

  // Safely access custom palette with fallbacks
  const customPalette = theme.palette?.custom || {};
  const standardPalette = theme.palette || {};

  // Map variant to theme colors with proper fallbacks
  const variantColors = {
    success: {
      bg: customPalette.success || standardPalette.success?.main || '#02C28B',
      text: customPalette.black || '#020202',
    },
    error: {
      bg: customPalette.error || standardPalette.error?.main || '#DA0606',
      text: customPalette.white || '#FFFFFF',
    },
    warning: {
      bg: customPalette.warning || standardPalette.warning?.main || '#FFC225',
      text: customPalette.black || '#020202',
    },
    info: {
      bg: customPalette.info || standardPalette.info?.main || '#FFDFEB',
      text: customPalette.black || '#020202',
    },
  };

  const colors = variantColors[variant] || variantColors.success;
  const bgColor = backgroundColor || colors.bg;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        direction: 'rtl',
        backgroundColor: bgColor,
        borderRadius: '8px',
        padding: '12px 16px',
        gap: '8px',
        minWidth: '344px',
        maxWidth: '344px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      }}
    >
      {/* Message */}
      <Typography
        variant="sub1"
        sx={{
          flex: 1,
          color: theme.palette.custom.white,
        }}
      >
        {message}
      </Typography>

      {/* Close button on the left */}
      {onClose && (
        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            padding: '4px',
            color: theme.palette.custom.white,
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          <CloseIcon color={theme.palette.custom.white} />
        </IconButton>
      )}
    </Box>
  );
}

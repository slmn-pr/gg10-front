import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from '@mui/material';
import { ModeSwitchProps, ModeVariants } from './modes-types';

const tabs = [
  { name: 'ticket', label: 'تیکت', icon: null },
  { name: 'faq', label: 'سوالات متداول', icon: null },
];

export default function ModeSwitch({ mode, setMode }: ModeSwitchProps) {
  const theme = useTheme();

  function handleCHange(e: any, value: ModeVariants) {
    return setMode(value);
  }

  return (
    <ToggleButtonGroup
      color="primary"
      exclusive
      value={mode}
      onChange={handleCHange}
      aria-label="Platform"
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '8px',
        p: 0,
      }}
    >
      {tabs.map((tab) => (
        <ToggleButton
          value={tab.name}
          sx={{
            width: '174px',
            flexGrow: 1,
            py: 1,
            borderRadius: '8px',
            border: '2px solid white',
            '&.Mui-selected': {
              backgroundColor: theme.palette.custom.tint1,
              color: '#000',
              border: `2px solid ${theme.palette.custom.tint2}`,
              '&:hover': {
                backgroundColor: theme.palette.custom.tint1,
              },
            },
            '&.Mui-not-selected': {
              backgroundColor: theme.palette.custom.bg2,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <Typography
              variant="title3"
              sx={{ color: mode === tab.name ? '#000' : '#fff' }}
            >
              {tab.label}
            </Typography>
            {/* {tab.icon && <tab.icon />} */}
          </Box>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

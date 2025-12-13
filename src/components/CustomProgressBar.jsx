import { LinearProgress, useTheme } from '@mui/material';

export default function CustomProgressBar({ progress = 50 }) {
  const theme = useTheme();
  return (
    <LinearProgress
      variant="determinate"

      value={progress}
      sx={{
        height: 5,
        borderRadius: 999,
        backgroundColor: theme.palette.background.progressbarBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        border: `1px solid ${theme.palette.stroke.progressbar}`,
        '& .MuiLinearProgress-bar': {
          borderRadius: '24px',
          // height: 3,

          background: theme.palette.primary.main,
        },
      }}
    />
  );
}

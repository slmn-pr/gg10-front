import { Box, Link, useTheme } from '@mui/material';

export default function SupportFooter() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: '10px',
        height: '60px',
        borderTop: `1px solid #000`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link variant="caption1">تماس با پشتیبانی</Link>
    </Box>
  );
}

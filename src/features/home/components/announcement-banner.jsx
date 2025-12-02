import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MDCard from '@/components/ui/md-card.jsx';

const AnnouncementBanner = () => (
  <MDCard
    sx={{
      position: 'relative',
      overflow: 'hidden',
      p: 0,
      bgcolor: 'transparent',
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        backgroundImage:
          'linear-gradient(135deg, rgba(3,5,10,0.4), rgba(3,5,10,0.85)), url(https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
    <Stack spacing={1.5} sx={{ position: 'relative', p: 3 }}>
      <Typography variant="titleLarge" color="#fff">
        Welcome to GG10
      </Typography>
      <Typography variant="bodySmall" color="rgba(255,255,255,0.8)">
        Join limited-time operations, climb royale ladders, and unlock seasonal rewards.
      </Typography>
      <Button variant="contained" color="secondary" size="small" sx={{ alignSelf: 'flex-start' }}>
        Join Event
      </Button>
    </Stack>
  </MDCard>
);

export default AnnouncementBanner;

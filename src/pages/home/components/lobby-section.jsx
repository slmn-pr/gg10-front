import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LobbyCard from './lobby-card.jsx';

const LobbySection = ({ title, subtitle, lobbies }) => (
  <Stack spacing={2}>
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <div>
        <Typography variant="titleLarge">{title}</Typography>
        <Typography variant="bodySmall" color="text.secondary">
          {subtitle}
        </Typography>
      </div>
      <Typography variant="labelSmall" color="primary">
        See all
      </Typography>
    </Stack>
    <Stack spacing={1.5}>
      {lobbies.map((lobby) => (
        <LobbyCard key={lobby.id} {...lobby} />
      ))}
    </Stack>
  </Stack>
);

export default LobbySection;

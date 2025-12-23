import { Box, Stack, Typography } from '@mui/material';
import { RANK_CODE_MAP } from '@/consts';

const _mock = {
  allowed_ranks: [
    { id: 4, name: 'آماتور', rank: 4 },
    { id: 3, name: 'پرو', rank: 3 },
    { id: 2, name: 'مستر', rank: 2 },
    { id: 1, name: 'لجند', rank: 1 },
  ],
};

export default function RulesSection() {
  return (
    <Box sx={{ width: '100%', direction: 'rtl', mt: '24px' }}>
      {/* Header */}
      <Box>
        <Typography component="p" variant="title1" color="custom.tint3" mb={2}>
          رنک های مجاز:
        </Typography>

        <Stack direction="row" spacing={1} justifyContent="space-between">
          {_mock.allowed_ranks.map((rank) => {
            let rankColor = RANK_CODE_MAP[rank.rank].color;
            let rankIcon = RANK_CODE_MAP[rank.rank].icon;
            return (
              <Stack
                direction="row"
                justifyContent="center"
                spacing={0.5}
                alignItems="center"
                key={rank.id}
              >
                <Box sx={{ width: '30px', height: '30px' }}>{rankIcon}</Box>
                <Typography component="p" variant="title3" color={rankColor}>
                  {rank.name}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      </Box>

      {/* Rules */}
      <Box>
        <Typography component="p" variant="title1" color="white" mb={2}>
          قوانین:
        </Typography>
      </Box>
    </Box>
  );
}

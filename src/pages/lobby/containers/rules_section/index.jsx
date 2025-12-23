import { Box, List, ListItem, Stack, Typography } from '@mui/material';
import { RANK_CODE_MAP } from '@/consts';

const _mock = {
  allowed_ranks: [
    { id: 4, name: 'آماتور', rank: 4 },
    { id: 3, name: 'پرو', rank: 3 },
    { id: 2, name: 'مستر', rank: 2 },
    { id: 1, name: 'لجند', rank: 1 },
  ],

  rules: {
    type: 'list',
    items: [
      'استفاده از کانفیگ ممنوع است',
      'استفاده از هرگونه هک و چیت ممنوع است',
      'استفاده از VPN و DNS ممنوع است',
      'تیم‌آپ در طول مسابقه ممنوع است',
      'پلیرها باید بازی را تا پایان ترک نکنند',
      'رعایت قوانین و اخلاق بازی الزامی است',
    ],
  },
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
      <Box sx={{ mt: '20px' }}>
        <Typography component="p" variant="title2" color="white">
          قوانین کلی مسابقه
        </Typography>

        <List
          component="ul"
          sx={{
            listStyleType: 'none',
            pr: 1,
            py: 0,
            direction: 'rtl',
            textAlign: 'right',
          }}
        >
          {_mock.rules.items.map((rule, index) => (
            <ListItem
              key={index}
              component="li"
              sx={{
                display: 'flex',
                direction: 'rtl',
                textAlign: 'right',
                p: 0,
                mb: 1,
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: '3px',
                  height: '3px',
                  borderRadius: '50%',
                  backgroundColor: 'custom.white',
                  mt: '6px',
                  ml: 1.5,
                  flexShrink: 0,
                }}
              />
              <Typography
                component="p"
                variant="sub1"
                color="custom.white"
                sx={{ direction: 'rtl', flex: 1 }}
              >
                {rule}
              </Typography>
            </ListItem>
          ))}
        </List>

        {/* <Typography component="p" variant="sub2" color="custom.tint3">
        مود بازی
          بتل رویال در دسته‌بندی‌ جایگاهی، اتوریوایو و با آرایش اسکوادی است مپ Isolated به
          صورت اتوریوایو است مسابقه بین 25 تیم 4 نفره برگزار می‌شود استفاده از هرگونه هک،
          کانفیگ، DNS، VPN ممنوع است تیم‌آپ ممنوع است پلیرها باید بازی را تا پایان ترک
          نکنند
        </Typography> */}
      </Box>
    </Box>
  );
}

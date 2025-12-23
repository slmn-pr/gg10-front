import { Box, Stack, Typography } from '@mui/material';
import { REWARDS_SECTION_MOCK } from '../../_mock/rewards_section';

export default function RewardsSection() {
  return (
    <Box sx={{ direction: 'rtl', mt: '24px', mx: '16px' }}>
      <Stack direction="column" spacing="20px">
        {/* First rank reward */}
        {REWARDS_SECTION_MOCK.map((item) => (
          <Box key={item.id}>
            <Box>
              <Typography component="p" variant="title3" color="custom.tint3">
                {item.title}
              </Typography>

              {item?.reward && (
                <Typography component="p" variant="sub2" color="custom.dollar">
                  {item.reward}
                </Typography>
              )}

              {item?.points && (
                <Typography component="p" variant="sub1" color="custom.legend">
                  {item.points}
                </Typography>
              )}
            </Box>
          </Box>
        ))}

        <Typography component="p" variant="title3" color="white">
          جوایز پس از مشخص شدن برنده‌ها، از طریق شارژ کیف پول، به برندگان تعلق خواهد گرفت.
        </Typography>
      </Stack>
    </Box>
  );
}

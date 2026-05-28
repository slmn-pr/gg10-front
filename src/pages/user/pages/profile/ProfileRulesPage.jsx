import { Stack, Typography } from '@mui/material';
import { rules } from './shared/data.js';
import { Page } from './shared/ui.jsx';

export const ProfileRulesPage = () => (
  <Page title="قوانین و مقررات استفاده از GG10" bottomNav={false}>
    <Stack gap={2.25} alignItems="flex-end">
      {rules.map((rule, index) => (
        <Stack key={rule.title} gap={1} alignItems="flex-end">
          <Typography variant="sub1" color="custom.white" textAlign="right">
            {index + 1}. {rule.title}
          </Typography>
          <Typography variant="caption1" color="custom.grey0" textAlign="right" lineHeight={2}>
            {rule.body}
          </Typography>
        </Stack>
      ))}
    </Stack>
  </Page>
);

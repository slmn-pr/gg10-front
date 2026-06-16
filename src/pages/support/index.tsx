import { useState } from 'react';
import {
  Box,
  Container,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from '@mui/material';
import { ModeVariants } from './components/modes-types';
import ModeSwitch from './components/ModeSwitch';
import FaqAccordion from './sections/FaqAccordion';

export default function SupportPage() {
  const [mode, setMode] = useState<ModeVariants>('faq');

  return (
    <Container>
      <Stack spacing="30px">
        {/* Mode switch */}
        <ModeSwitch mode={mode} setMode={setMode} />

        {/* Search */}
        <TextField placeholder="جستجو در سوالات" variant="filled" />

        {/* Faq */}
      </Stack>
      <FaqAccordion title="عنوان" />
      <FaqAccordion title="عنوان" />
    </Container>
  );
}

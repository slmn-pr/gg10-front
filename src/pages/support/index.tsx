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
import GG10Loading from '@/components/GG10Loading';
import SearchNotFoundIcon from './components/NotFoundIcon';

export default function SupportPage() {
  const [mode, setMode] = useState<ModeVariants>('faq');

  const [isSearching, setIsSearching] = useState(false);

  const [result, setResult] = useState([1, 2]);

  return (
    <Container>
      <Stack spacing="30px" mb={2}>
        {/* Mode switch */}
        <ModeSwitch mode={mode} setMode={setMode} />

        {/* Search */}
        <TextField placeholder="جستجو در سوالات" variant="filled" />

        {/* Faq */}
      </Stack>

      {isSearching && (
        <Box sx={{ mt: 10 }}>
          <GG10Loading />
        </Box>
      )}

      {!isSearching && result.length <= 0 && (
        <Box sx={{ mt: 10 }}>
          <SearchNotFoundIcon />
        </Box>
      )}

      {!isSearching && result.length > 0 && (
        <>
          {' '}
          <FaqAccordion title="عنوان" />
          <FaqAccordion title="عنوان" />
        </>
      )}
    </Container>
  );
}

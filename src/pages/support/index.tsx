import { useState, lazy } from 'react';
import { Container, Stack } from '@mui/material';
import { ModeVariants } from './components/modes-types';
import ModeSwitch from './components/ModeSwitch';

const FaqSection = lazy(() => import('./sections/FaqSection'));
const TicketSection = lazy(() => import('./sections/TicketSection'));

export default function SupportPage() {
  // const [mode, setMode] = useState<ModeVariants>('faq');
  const [mode, setMode] = useState<ModeVariants>('ticket'); // TODO: Remove this when product and uncomment above line

  return (
    <Container>
      <Stack spacing="30px" mb={2}>
        {/* Mode switch */}
        <ModeSwitch mode={mode} setMode={setMode} />
      </Stack>

      {mode === 'faq' && <FaqSection />}
      {mode === 'ticket' && <TicketSection />}
    </Container>
  );
}

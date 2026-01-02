import { Box, Container, IconButton, Step, StepLabel, Stepper } from '@mui/material';
import { useStep } from '..';
import { STEP_PROGRESS, STEP_TYPES } from '../const';
import OtpVerificationSection from './OtpVerificationSection';
import GameNameSection from './GameNameSection';
import BackwardButton from '@/components/layout/BackwardButton';
import CloseIcon from '@/components/icons/general/CloseIcon';

export default function SignupFlowSection() {
  const { step } = useStep();
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
        px: { xs: '16px' },
        pt: { xs: '16px' },
      }}
    >
      {/* Header */}
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <IconButton>
          <CloseIcon />
        </IconButton>

        <BackwardButton>ساخت حساب کاربری</BackwardButton>
      </Box>

      {/* SHow stepper */}
      <Stepper activeStep={STEP_PROGRESS[step]} alternativeLabel sx={{ width: '100%' }}>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
      </Stepper>

      {step === STEP_TYPES.OTP_VERIFICATION && <OtpVerificationSection />}
      {step === STEP_TYPES.GAME_NAME && <GameNameSection />}
      {/* {step === STEP_TYPES.SUCCESS_SIGNUP && <SuccessSignupSection />} */}
    </Container>
  );
}

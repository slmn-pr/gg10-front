import {
  Box,
  Container,
  IconButton,
  Step,
  StepLabel,
  Stepper,
  useTheme,
} from '@mui/material';
import { useStep } from '..';
import { STEP_PROGRESS, STEP_TYPES } from '../const';
import OtpVerificationSection from './OtpVerificationSection';
import GameNameSection from './GameNameSection';
import BackwardButton from '@/components/layout/BackwardButton';
import CloseIcon from '@/components/icons/general/CloseIcon';
import SuccessSignupSection from './SuccessSignupSection';
import SupportFooter from '../components/SupportFooter';

export default function SignupFlow() {
  const theme = useTheme();
  const { step } = useStep();
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
        p: 0,
      }}
    >
      <Box sx={{ px: { xs: '16px' }, pt: { xs: '16px' } }}>
        {/* Header */}
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <IconButton>
            <CloseIcon />
          </IconButton>

          <BackwardButton>ساخت حساب کاربری</BackwardButton>
        </Box>

        {/* Stepper */}
        <Stepper
          activeStep={STEP_PROGRESS[step]}
          alternativeLabel
          sx={{ width: '100%', mt: '30px' }}
        >
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

        {/* Steps */}
        {step === STEP_TYPES.SIGNUP_OTP_VERIFICATION && <OtpVerificationSection />}
        {step === STEP_TYPES.GAME_NAME && <GameNameSection />}
        {step === STEP_TYPES.SUCCESS_SIGNUP && <SuccessSignupSection />}
      </Box>

      {/* Footer */}
      <SupportFooter />
    </Container>
  );
}

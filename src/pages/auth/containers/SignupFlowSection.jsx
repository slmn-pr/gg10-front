import { Box, Container, IconButton, Step, StepLabel, Stepper } from '@mui/material';
import { SIGNUP_STEP_PROGRESS, STEP_TYPES } from '../const';
import OtpVerificationSection from './SignupOtpVerificationSection';
import GameNameSection from './GameNameSection';
import BackwardButton from '@/components/layout/BackwardButton';
import CloseIcon from '@/components/icons/general/CloseIcon';
import SuccessSignupSection from './SuccessSignupSection';
import SupportFooter from '../components/SupportFooter';
import { useStep } from '../context';

export const StepLabelRoot = ({ className, ownerState }) => {
  // console.log('Props', ownerState);
  const { active } = ownerState;

  return (
    <Box
      className={className}
      sx={{
        width: '30px',
        height: '30px',
        borderRadius: '60%',
        backgroundColor: !active ? 'custom.disabledGreyOnBg2' : 'custom.success',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          width: '15px',
          height: '15px',
          borderRadius: '60%',
          backgroundColor: 'custom.grey0',
        }}
      ></Box>
    </Box>
  );
};

export default function SignupFlow() {
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
      <Box sx={{ pt: { xs: '16px', background: 'transparent' } }}>
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
          activeStep={SIGNUP_STEP_PROGRESS[step]}
          alternativeLabel
          sx={{ width: '100%', mt: '30px', direction: 'rtl' }}
          connector={
            <Box
              sx={{
                width: '100%',
                height: '1px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translateX(-50)',
                backgroundColor: 'custom.disabledGreyOnBg2',
                zIndex: 1,
              }}
            ></Box>
          }
        >
          {Object.keys(SIGNUP_STEP_PROGRESS).map((step) => (
            <Step
              key={step}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                direction: 'rtl',
              }}
            >
              <StepLabel
                slots={{ root: StepLabelRoot }}
                sx={{ direction: 'rtl' }}
              ></StepLabel>
            </Step>
          ))}
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

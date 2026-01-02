import { createContext, useContext, useMemo, useState } from 'react';
import PhoneNumberSection from './containers/PhoneNumberSection';
import { Box } from '@mui/material';
import { STEP_TYPES } from './const';
import SignupFlowSection from './containers/SignupFlowSection';

const StepContext = createContext(null);

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error('useStep must be used within StepProvider');
  }
  return context;
};

export default function AuthPage() {
  const [step, setStep] = useState(STEP_TYPES.SUCCESS_SIGNUP);

  const isSignupStep = useMemo(
    () =>
      step === STEP_TYPES.OTP_VERIFICATION ||
      step === STEP_TYPES.GAME_NAME ||
      step === STEP_TYPES.SUCCESS_SIGNUP,
    [step],
  );

  return (
    <Box>
      {/* Step provider */}
      <StepContext value={{ step, setStep }}>
        {/* General */}
        {step === STEP_TYPES.PHONE_NUMBER && <PhoneNumberSection />}

        {/* Signup steps */}
        {isSignupStep && <SignupFlowSection />}

        {/* Login steps */}
        {/* {step === STEP_TYPES.PASSWORD_LOGIN && <PasswordLoginSection />} */}
      </StepContext>
    </Box>
  );
}

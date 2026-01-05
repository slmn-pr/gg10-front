import { createContext, useContext, useMemo, useState } from 'react';
import PhoneNumberSection from './containers/PhoneNumberSection';
import { Box } from '@mui/material';
import { STEP_PROGRESS, STEP_TYPES } from './const';
import SignupFlowSection from './containers/SignupFlowSection';
import PasswordLoginSection from './containers/PasswordLoginSection';
import LoginOtpVerificationSection from './containers/LoginOtpVerificationSection';

const StepContext = createContext(null);

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error('useStep must be used within StepProvider');
  }
  return context;
};

export default function AuthPage() {
  const [step, setStep] = useState(STEP_TYPES.PHONE_NUMBER);

  const isSignupStep = useMemo(() => {
    const keys = Object.keys(STEP_PROGRESS);
    return keys.includes(step);
  }, [step]);

  return (
    <Box>
      {/* Step provider */}
      <StepContext value={{ step, setStep }}>
        {/* General */}
        {step === STEP_TYPES.PHONE_NUMBER && <PhoneNumberSection />}

        {/* Signup steps */}
        {isSignupStep && <SignupFlowSection />}

        {/* Login steps */}
        {step === STEP_TYPES.PASSWORD_LOGIN && <PasswordLoginSection />}
        {step === STEP_TYPES.LOGIN_OTP_VERIFICATION && <LoginOtpVerificationSection />}
      </StepContext>
    </Box>
  );
}

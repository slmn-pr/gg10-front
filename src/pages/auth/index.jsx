import { createContext, useContext, useState } from 'react';
import OtpVerificationSection from './containers/OtpVerificationSection';
import PhoneNumberSection from './containers/PhoneNumberSection';
import { Box } from '@mui/material';
import { STEP_TYPES } from './const';

const StepContext = createContext(null);

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error('useStep must be used within StepProvider');
  }
  return context;
};

export default function AuthPage() {
  const [step, setStep] = useState(STEP_TYPES.OTP_VERIFICATION);

  return (
    <Box>
      {/* Step provider */}
      <StepContext value={{ step, setStep }}>
        {step === STEP_TYPES.PHONE_NUMBER && <PhoneNumberSection />}
        {step === STEP_TYPES.OTP_VERIFICATION && <OtpVerificationSection />}
      </StepContext>
    </Box>
  );
}

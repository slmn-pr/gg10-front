import { useMemo, useState } from 'react';
import { Box } from '@mui/material';
import { StepContext } from './context';
import { SIGNUP_STEP_PROGRESS, STEP_TYPES } from './const';
import PhoneNumberSection from './containers/PhoneNumberSection';
import SignupFlowSection from './containers/SignupFlowSection';
import PasswordLoginSection from './containers/PasswordLoginSection';
import LoginOtpVerificationSection from './containers/LoginOtpVerificationSection';
import ForgetPasswordSection from './containers/ForgetPasswordSection';
import CreateNewPasswordSection from './containers/CreateNewPasswordSection';

export default function AuthPage() {
  // const [step, setStep] = useState(STEP_TYPES.PHONE_NUMBER);
  const [step, setStep] = useState(STEP_TYPES.LOGIN_OTP_VERIFICATION);
  const [phoneNumber, setPhoneNumber] = useState('09022424917');

  const isSignupStep = useMemo(() => {
    const keys = Object.keys(SIGNUP_STEP_PROGRESS);
    return keys.includes(step);
  }, [step]);

  return (
    <Box>
      {/* Step provider */}
      <StepContext value={{ step, setStep, phoneNumber, setPhoneNumber }}>
        {/* 1 -> General */}
        {step === STEP_TYPES.PHONE_NUMBER && <PhoneNumberSection />}

        {/* Signup steps */}
        {isSignupStep && <SignupFlowSection />}

        {/* Login steps */}
        {step === STEP_TYPES.PASSWORD_LOGIN && <PasswordLoginSection />}
        {step === STEP_TYPES.LOGIN_OTP_VERIFICATION && <LoginOtpVerificationSection />}

        {/* Forget password */}
        {step === STEP_TYPES.FORGET_PASSWORD && <ForgetPasswordSection />}
        {step === STEP_TYPES.SET_NEW_PASSWORD && <CreateNewPasswordSection />}
      </StepContext>
    </Box>
  );
}

import { Container } from '@mui/material';
import OPTSection from './OTPSection';
import useVerifyOTPCode from '../hooks/useVerifyOTPCode';
import { VerifyOTPCodeInterface } from '@/api';
import { useStep } from '../context';
import toast from 'react-hot-toast';
import { STEP_TYPES } from '../const';

export default function ForgetPasswordSection() {
  const { mutate, isPending } = useVerifyOTPCode();
  const { setStep, phoneNumber } = useStep();

  function onSuccess() {
    setStep(STEP_TYPES.SET_NEW_PASSWORD);
  }

  function handleSubmit(otpCode: string) {
    const paylaod = {
      code: otpCode,
      phone_number: phoneNumber,
      purpose: 'password_reset',
    } as VerifyOTPCodeInterface;

    mutate(paylaod, {
      onSuccess,
      onError: () => {
        toast.error('کد وارد شده اشتباه است');
      },
    });
  }

  return (
    <OPTSection
      handleSubmit={handleSubmit}
      isPending={isPending}
      purpose="password_reset"
    />
  );
}

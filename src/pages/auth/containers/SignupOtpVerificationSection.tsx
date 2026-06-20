import { useMemo, useState } from 'react';
import { useStep } from '../context';
import { STEP_TYPES } from '../const';
import OtpSection from './OTPSection';
import useVerifyOTPCode from '../hooks/useVerifyOTPCode';
import toast from 'react-hot-toast';
import useUSerStore from '@/store/user-store';
import useSaveUserAuth from '../hooks/useSaveUserAuth';

export default function OtpVerificationSection() {
  const { setUser } = useUSerStore();
  const saveAuth = useSaveUserAuth();

  const [isError, setIsError] = useState(false);

  const { setStep, phoneNumber } = useStep();
  const { mutate, isPending } = useVerifyOTPCode();

  // Handle send OTP code to verify
  const handleSubmit = (otpValue: string, p) => {
    mutate(
      { phone_number: phoneNumber, code: otpValue, purpose: 'register' },
      {
        onSuccess: (data) => {
          console.log('[OtpVerificationSection] mutate -> data', data);

          setIsError(false);

          // TODO: Save the data return from API to auth-store
          // {
          //   "phone_number": "string",
          //   "purpose": "login",
          //   "verified_at": "2026-06-13T12:13:14.477Z",
          //   "user_id": "string",
          //   "access_token": "string",
          //   "refresh_token": "string",
          //   "requires_profile": false
          // }
          saveAuth(data); // Need to test

          // TODO: Call /users/me and save response to user-store

          // TODO: If `requires_profile` is false dont need to set game name section
          if ('access_token' in data && data.requires_profile) {
            return setStep(STEP_TYPES.GAME_NAME);
          } else {
            return setStep(STEP_TYPES.SUCCESS_SIGNUP); // or redirect to home page
          }
        },
        onError: () => {
          setIsError(true);
          toast.error('کد وارد شده صحیح نیست!');
        },
      },
    );
  };

  return (
    <OtpSection handleSubmit={handleSubmit} isPending={isPending} purpose="register" />
  );
}

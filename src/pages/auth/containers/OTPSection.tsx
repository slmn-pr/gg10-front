import { Box, Button, Container, Stack, Typography } from '@mui/material';
import OTPInputWrapper from './OtpInputWrapper';
import ButtonLoading from '@/components/form/ButtonLoading';
import { useStep } from '../context';
import { useEffect, useState } from 'react';
import useRequestOTPCode from '../hooks/useRequestOTPCode';
import toast from 'react-hot-toast';
import { RequestOTPCodePurposeType } from '@/api';

interface OTPSectionProps {
  isPending: boolean;
  handleSubmit: (otpCode: string) => void | any;
  purpose: RequestOTPCodePurposeType;
}

export default function OPTSection({
  isPending,
  handleSubmit,
  purpose,
}: OTPSectionProps) {
  const { setStep, phoneNumber } = useStep();
  const { mutate: requestOTPCode, isPending: isPendingOTPCode } = useRequestOTPCode();

  const isLoading = isPending || isPendingOTPCode;

  const [otpValue, setOtpValue] = useState('');
  const [isError, setIsError] = useState(false);

  const [resendAvailableAt, setResendAvailableAt] = useState<string | null>(null);

  // Auto request OTP code when render
  useEffect(() => {
    if (!phoneNumber) {
      toast.error('شماره اشتباه است');
      return;
    }

    requestOTPCode(
      { phone_number: phoneNumber, purpose },
      {
        onSuccess: (data) => {
          toast.success(`کد با موفقیت به شماره ${phoneNumber} ارسال شد`);
          setResendAvailableAt(data?.resend_available_at);
        },

        onError: () => {
          toast.error('ارسال کد با خطا مواجه شد');
        },
      },
    );
  }, []);

  return (
    <Container
      maxWidth="sm"
      sx={{ p: 0, background: (theme) => theme.palette.custom.primaryBg }}
    >
      <Box sx={{ pt: { xs: '16px' }, minHeight: '100vh' }} bgcolor="custom.default">
        {/* Logo */}
        <Box sx={{ mt: '100px', display: 'flex', justifyContent: 'center' }}>
          <img src="/images/logo.png" alt="logo" style={{ height: '38px' }} />
        </Box>

        {/* Otp section */}
        <Stack mt="60px">
          <OTPInputWrapper
            onComplete={(otpCode: string) => handleSubmit(otpCode)}
            phoneNumber={phoneNumber}
            value={otpValue}
            onChange={(value: string) => {
              setOtpValue(value);
              setIsError(false);
            }}
            isError={isError}
            errorText="کد وارد شده صحیح نیست"
          />

          {/* Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '252px', height: '40px', mx: 'auto', mt: '100px' }}
            disabled={isLoading || otpValue.length !== 5}
            onClick={() => handleSubmit(otpValue)}
          >
            {isPending ? (
              <ButtonLoading />
            ) : (
              <Typography variant="button1" color="white">
                تایید و ادامه
              </Typography>
            )}
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

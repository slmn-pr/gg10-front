import { Button, Stack, Typography } from '@mui/material';
import { useRef } from 'react';

interface CountDownViewProps {
  minutes: number;
  seconds: number;
  completed: number;
  resendOTPCallback: () => void;
}

export const RESEND_EVENT = new CustomEvent('resend_otp');

const ExpiredState = () => {
  function disapatchResendOTPCode() {
    window.dispatchEvent(RESEND_EVENT);
  }
  return (
    <Stack>
      <Typography color="custom.errorOnPrimaryBg" variant="sub3">
        کد منقضی شده است، لطفا درخواست مجدد ارسال کد دهید
      </Typography>
      <Typography
        variant="sub3"
        component="p"
        color="custom.linkBlue"
        onClick={disapatchResendOTPCode}
        sx={{ cursor: 'pointer' }}
      >
        ارسال مجدد کد
      </Typography>
    </Stack>
  );
};

export default function CountDownView({
  minutes,
  seconds,
  completed,
}: CountDownViewProps) {
  if (completed) {
    // Render a completed state
    return <ExpiredState />;
  } else {
    // Render a countdown
    return (
      <>
        {/* <ExpiredState /> */}
        <Typography
          variant="sub3"
          component="p"
          color="custom.grey0"
          sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}
        >
          <span>
            {minutes}:{seconds}
          </span>
          تا درخواست مجدد ارسال کد
        </Typography>
      </>
    );
  }
}

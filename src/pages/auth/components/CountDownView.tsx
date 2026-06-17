import { Typography } from '@mui/material';

interface CountDownViewProps {
  minutes: number;
  seconds: number;
  completed: number;
  resendOTPCallback: () => void;
}

export default function CountDownView({
  minutes,
  seconds,
  completed,
  resendOTPCallback,
}: CountDownViewProps) {
  if (completed) {
    // Render a completed state
    return (
      <Typography
        variant="sub3"
        component="p"
        color="custom.grey0"
        onClick={resendOTPCallback}
      >
        ارسال مجدد
      </Typography>
    );
  } else {
    // Render a countdown
    return (
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
    );
  }
}

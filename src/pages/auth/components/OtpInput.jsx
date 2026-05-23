import { Box, TextField } from '@mui/material';
import { useMemo, useRef, useState } from 'react';

const getOtpDigits = (value = '') => {
  const nextOtp = ['', '', '', '', ''];
  value
    .split('')
    .slice(0, 5)
    .forEach((digit, index) => {
      nextOtp[index] = digit;
    });
  return nextOtp;
};

export default function OtpInput({ value, onChange, onComplete, isValid, isError }) {
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const inputRefs = useRef([]);
  const displayOtp = useMemo(
    () => (value === undefined ? otp : getOtpDigits(value)),
    [otp, value],
  );

  const handleChange = (index, newValue) => {
    // Only allow single digit
    if (newValue.length > 1) {
      return;
    }

    // Only allow numbers
    if (newValue && !/^\d$/.test(newValue)) {
      return;
    }

    const newOtp = [...displayOtp];
    newOtp[index] = newValue;
    if (value === undefined) {
      setOtp(newOtp);
    }

    const otpValue = newOtp.join('');
    onChange?.(otpValue);

    // Auto-focus next input
    if (newValue && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }

    // Call onComplete when all 5 digits are filled
    if (newOtp.every((digit) => digit !== '') && onComplete) {
      onComplete(otpValue);
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 5);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = [...displayOtp];
      pastedData.split('').forEach((digit, index) => {
        if (index < 5) {
          newOtp[index] = digit;
        }
      });
      if (value === undefined) {
        setOtp(newOtp);
      }
      const otpValue = newOtp.join('');
      onChange?.(otpValue);
      if (newOtp.every((digit) => digit !== '') && onComplete) {
        onComplete(otpValue);
      }
      // Focus the last filled input or the last input
      const lastFilledIndex = Math.min(pastedData.length - 1, 4);
      inputRefs.current[lastFilledIndex]?.focus();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '8px',
        justifyContent: 'center',
      }}
    >
      {displayOtp.map((digit, index) => (
        <TextField
          key={index}
          inputRef={(el) => (inputRefs.current[index] = el)}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          inputProps={{
            maxLength: 1,
            style: {
              textAlign: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              padding: '12px',
            },
          }}
          sx={{
            width: '56px',
            height: '56px',
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'white',
              borderRadius: '8px',
              '& fieldset': {
                borderColor: isError
                  ? 'error.main'
                  : isValid
                    ? 'success.main'
                    : 'custom.grey0',
                borderWidth: isError || isValid ? '2px' : '1px',
              },
              '&:hover fieldset': {
                borderColor: isError
                  ? 'error.main'
                  : isValid
                    ? 'success.main'
                    : 'primary.main',
              },
              '&.Mui-focused fieldset': {
                borderColor: isError
                  ? 'error.main'
                  : isValid
                    ? 'success.main'
                    : 'primary.main',
                borderWidth: '2px',
              },
            },
            '& .MuiOutlinedInput-input': {
              padding: 0,
            },
          }}
        />
      ))}
    </Box>
  );
}

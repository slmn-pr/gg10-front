import { Box, TextField } from '@mui/material';
import { useRef, useState, useEffect } from 'react';

export default function OtpInput({ value = '', onChange, onComplete, isValid, isError }) {
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (value && value.length <= 5) {
      const digits = value.split('').slice(0, 5);
      const newOtp = ['', '', '', '', ''];
      digits.forEach((digit, index) => {
        newOtp[index] = digit;
      });
      setOtp(newOtp);
    } else if (!value) {
      setOtp(['', '', '', '', '']);
    }
  }, [value]);

  const handleChange = (index, newValue) => {
    // Only allow single digit
    if (newValue.length > 1) {
      return;
    }

    // Only allow numbers
    if (newValue && !/^\d$/.test(newValue)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = newValue;
    setOtp(newOtp);

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
      const newOtp = [...otp];
      pastedData.split('').forEach((digit, index) => {
        if (index < 5) {
          newOtp[index] = digit;
        }
      });
      setOtp(newOtp);
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
      {otp.map((digit, index) => (
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

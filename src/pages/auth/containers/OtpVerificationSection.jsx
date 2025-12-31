import CloseIcon from '@/components/icons/general/CloseIcon';
import Logo from '@/components/icons/Logo';
import BackwardButton from '@/components/layout/BackwardButton';
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export default function OtpVerificationSection({ phoneNumber = '09123456789' }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
        px: { xs: '16px' },
        pt: { xs: '16px' },
      }}
    >
      {/* Header */}
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <IconButton>
          <CloseIcon />
        </IconButton>

        <BackwardButton>ساخت حساب کاربری</BackwardButton>
      </Box>

      {/* Step progress */}
      <Stepper activeStep={activeStep} alternativeLabel sx={{ width: '100%' }}>
        <Step>
          <StepLabel>
            {/* <Typography variant="title1">تایید و دریافت کد</Typography> */}
          </StepLabel>
        </Step>
        <Step>
          <StepLabel>
            {/* <Typography variant="title1">تایید و دریافت کد</Typography> */}
          </StepLabel>
        </Step>

        <Step>
          <StepLabel>
            {/* <Typography variant="title1">تایید و دریافت کد</Typography> */}
          </StepLabel>
        </Step>
      </Stepper>

      {/* LOgo */}
      <Box sx={{ mt: '100px', display: 'flex', justifyContent: 'center' }}>
        <img src="/images/logo.png" alt="logo" style={{ height: '38px' }} />
      </Box>

      {/* Otp section */}
      <Stack>
        <Typography component="p" variant="title3">
          کد تایید را وارد کنید
        </Typography>

        {/* Change number  */}
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Button variant="text" color="primary">
            <Typography variant="sub1" component="p" color="primary.main">
              تغییر شماره
            </Typography>
          </Button>

          <Typography variant="sub1" component="p">
            کد 5 رقمی به شماره {phoneNumber} ارسال شد
          </Typography>
        </Box>

        {/* Otp input */}
        <Box>{/* <OtpInput /> */}</Box>

        {/* Countdown */}
        <Box>
          <Typography variant="sub3" component="p" color="custom.grey0">
            01:30 تا درخواست مجدد ارسال کد
          </Typography>
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{ width: '252px', mx: 'auto', mt: '100px' }}
          disabled={true}
        >
          <Typography variant="button1" component="p" color="white">
            تایید و ادامه
          </Typography>
        </Button>
      </Stack>
    </Container>
  );
}

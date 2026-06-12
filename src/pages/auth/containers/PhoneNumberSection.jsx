import { Box, Link, useTheme, Typography, Stack, Button } from '@mui/material';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, normalizePhoneNumber } from '../schema';
import useCheckPhoneNumberExist from '../hooks/useCheckPhoneNumberExist';
import PhoneNumberInput from '../components/PhoneNumberInput';
import { STEP_TYPES } from '../const';
import useRequestOTPCode from '../hooks/useRequestOTPCode';
import toast from 'react-hot-toast';
import { useStep } from '../context';

export default function PhoneNumberSection() {
  const { setStep, setPhoneNumber } = useStep();
  const theme = useTheme();
  const methods = useForm({
    defaultValues: {
      phoneNumber: '',
      purpose: 'login',
    },
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const {
    formState: { isValid },
    control,
  } = methods;

  const phoneNumberValue = useWatch({ control, name: 'phoneNumber' });

  const { mutate, isPending } = useRequestOTPCode();

  const checkPhoneNumberExist = useCheckPhoneNumberExist();

  // Call if send OTP Code successfull to client number
  // Naviagte to Verify OTP code section
  const onSuccessOTP = (_, phoneNumber) => {
    setPhoneNumber(phoneNumber);
    setStep(STEP_TYPES.SIGNUP_OTP_VERIFICATION);
  };

  const onSubmit = async () => {
    const phoneNumber = normalizePhoneNumber(phoneNumberValue);

    if (!phoneNumber) {
      toast.error('شماره معتبر نیست');
      return;
    }

    // if phone number exist, naviagte to login using password
    // TODO: Complete the number check exist from database
    const phoneExists = await checkPhoneNumberExist(phoneNumber);
    setPhoneNumber(phoneNumber);
    if (phoneExists) {
      return setStep(STEP_TYPES.PASSWORD_LOGIN);
    }

    // If number not exist in db send request otp code
    const payload = {
      phone_number: phoneNumber,
      purpose: 'register',
    };
    mutate(payload, {
      onSuccess: (data) => onSuccessOTP(data, phoneNumber),
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        maxWidth: 'sm',
        mx: 'auto',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Stack sx={{ px: '16px' }}>
        {/* Top image */}
        <Box
          sx={{
            width: '100%',
            maxWidth: '342px',
            aspectRatio: '342 / 193',
            mx: 'auto',
            mt: '80px',
          }}
        >
          <img
            src="/images/login/login_banner.png"
            alt="login"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </Box>

        {/* Text box */}
        <Box sx={{ width: '342px', mx: 'auto', mt: '22px' }}>
          <Typography
            component="p"
            variant="title1"
            color={theme.palette.primary.main}
            textAlign="center"
          >
            به GG10 خوش آمدید
          </Typography>

          <Typography
            component="p"
            variant="title2"
            color={theme.palette.custom.secondary}
            textAlign="center"
          >
            با وارد کردن شماره موبایل، در چند قدم وارد جذاب‌ترین رقابت‌ها شوید
          </Typography>
        </Box>

        {/* Phone number input */}
        <Box
          sx={{
            width: '342px',
            mx: 'auto',
            mt: '22px',
          }}
        >
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <FormProvider {...methods}>
              <PhoneNumberInput />
            </FormProvider>

            <Typography
              mt={0.5}
              component="p"
              variant="sub2"
              color={theme.palette.custom.grey0}
              textAlign="center"
            >
              ورود شما به معنای پذیرش{' '}
              <Link href="/terms-of-service">قوانین و مقررات</Link> این سرویس است
            </Typography>

            {/* Button */}
            <Button
              sx={{ mt: 10, width: '252px', height: '40px', mx: 'auto' }}
              variant="contained"
              disabled={isPending || !isValid || !phoneNumberValue}
              type="submit"
            >
              {isPending ? 'در حال بررسی...' : 'تایید و دریافت کد'}
            </Button>
          </form>
        </Box>
      </Stack>

      {/* تماس با پشتیبان */}
      <Box
        sx={{
          mt: 2,
          borderTop: `1px solid ${theme.palette.custom.black}`,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          variant="text"
          sx={(theme) => ({
            color: theme.palette.custom.linkBlue,
          })}
        >
          <Typography variant="caption1" color="custom.linkBlue">
            تماس با پشتیبانی
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}

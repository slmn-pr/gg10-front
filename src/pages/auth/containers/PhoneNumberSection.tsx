import { Box, Link, useTheme, Typography, Stack, Button } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, normalizePhoneNumber } from '../schema';
import PhoneNumberInput from '../components/PhoneNumberInput';
import { STEP_TYPES } from '../const';
import useRequestOTPCode from '../hooks/useRequestOTPCode';
import toast from 'react-hot-toast';
import { useStep } from '../context';
import { RequestOTPCodePurposeType } from '@/api';

interface PhoneNumberSectionProsp {
  purpose: RequestOTPCodePurposeType;
}

export default function PhoneNumberSection({
  purpose = 'login',
}: PhoneNumberSectionProsp) {
  const theme = useTheme();

  const { setStep, phoneNumber, setPhoneNumber } = useStep();

  const methods = useForm({
    defaultValues: {
      phoneNumber,
    },
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const {
    formState: { isValid },
  } = methods;

  const { mutate, isPending } = useRequestOTPCode();

  // Call if send OTP Code successfull to client number
  // Naviagte to Verify OTP code section
  const onSuccessOTP = (_: unknown, phoneNumber: string) => {
    setPhoneNumber(phoneNumber);

    if (purpose === 'register') setStep(STEP_TYPES.SIGNUP_OTP_VERIFICATION);
    else if (purpose === 'login') setStep(STEP_TYPES.LOGIN_OTP_VERIFICATION);
  };

  const onSubmit = async (values: { phoneNumber: string }) => {
    let phoneNumber = values?.phoneNumber;
    let normalizedPhoneNumber = normalizePhoneNumber(phoneNumber);

    // if phone number exist, naviagte to login using password
    // TODO: Complete the number check exist from database
    // const phoneExists = await checkPhoneNumberExist(phoneNumber);
    // setPhoneNumber(phoneNumber);
    // if (phoneExists) {
    //   return setStep(STEP_TYPES.PASSWORD_LOGIN);
    // }

    // If number not exist in db send request otp code
    const payload = {
      phone_number: normalizedPhoneNumber,
      purpose,
    };

    console.log('[PhoneNumberSection] onSubmit -> payload ', payload);
    // return;
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
            color={theme.palette.custom.white}
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
            mt: '70px',
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
              disabled={isPending || !isValid}
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

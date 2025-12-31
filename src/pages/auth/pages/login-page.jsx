import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { PageContainer } from '@/components/layout';
import { MDSurfaceContainer } from '@/components/ui';
import { Box, Link, useTheme } from '@mui/material';
import FormField from '@/components/form/FormField';

const LoginPage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: '100vh',
        maxWidth: 'sm',
        mx: 'auto',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Stack sx={{ px: '16px' }}>
        {/* Top image */}
        <Box sx={{ width: '342px', height: '193px', mx: 'auto', mt: '80px' }}>
          <img src="/images/login/login_banner.png" alt="login" />
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
        <Box sx={{ width: '342px', mx: 'auto', mt: '22px' }}>
          <TextField
            sx={{
              textAlign: 'right',
              direction: 'rtl',
            }}
            variant="outlined"
            color="primary"
            fullWidth
            placeholder="مثلا: 0912 345 6789"
            type="number"
          />

          <Typography
            mt={0.5}
            component="p"
            variant="sub2"
            color={theme.palette.custom.grey0}
            textAlign="center"
          >
            ورود شما به معنای پذیرش <Link href="/terms-of-service">قوانین و مقررات</Link>{' '}
            این سرویس است
          </Typography>
        </Box>

        {/* Button */}
        <Button sx={{ mt: 10, width: '252px', mx: 'auto' }} disabled={true}>
          تایید و دریافت کد
        </Button>
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
        <Button variant="text" color="primary">
          تماس با پشتیبانی
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;

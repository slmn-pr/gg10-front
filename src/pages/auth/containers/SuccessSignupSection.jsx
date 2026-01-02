import CircleCheckIcon from '@/components/icons/CircleCheckIcon';
import { Box, Button, Stack, TextField, Typography, useTheme } from '@mui/material';

export default function SuccessSignupSection() {
  const theme = useTheme();
  return (
    <Box>
      {/* Image */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: '110px',
        }}
      >
        <img
          src="/images/login/success_login.png"
          alt="success-signup"
          style={{ width: '70px', height: '70px' }}
        />
      </Box>

      {/* Success text */}
      <Box>
        <Typography
          variant="title1"
          color="custom.success"
          component="p"
          textAlign="center"
        >
          ثبت نام انجام شد
        </Typography>

        <Typography
          variant="title1"
          color="custom.white"
          component="p"
          textAlign="center"
        >
          حالا در GG10 حساب کاربر دارید.
        </Typography>

        <Typography
          variant="title1"
          color="custom.white"
          component="p"
          textAlign="center"
        >
          رقابت کنید، امتیاز بگیرید و جایزه ببرید !
        </Typography>
      </Box>

      {/* Invite code section */}
      <Stack mt="60px" sx={{ width: '343px', mx: 'auto' }}>
        {/* Label */}
        <Typography variant="sub2" color="custom.grey2" component="p" mb={2}>
          در صورتی که کد دعوت دارید در این بخش وارد کنید (اختیاری)
        </Typography>

        {/* Input */}
        <Stack direction="row" sx={{ direction: 'rtl' }} gap={2} justifyContent="center">
          <TextField
            placeholder="کد دعوت (اختیاری)"
            sx={{
              width: '253px',

              p: 0,
              '& .MuiInputBase-root': { p: 0, height: '36px' },
            }}
          />

          <Button
            variant="outlined"
            color="white"
            size="small"
            sx={{
              height: '36px',
              width: '74px',
              fontSize: theme.typography.sub1.fontSize,
              lineHeight: theme.typography.sub1.lineHeight,
              fontWeight: theme.typography.sub1.fontWeight,
            }}
          >
            <Typography variant="button2" color="custom.white">
              ثبت کد
            </Typography>
          </Button>
        </Stack>

        {/* Error message */}
        <Typography variant="sub2" color="custom.errorOnPrimaryBg" sx={{ mt: 0.5 }}>
          کد وارد شده صحیح نیست
        </Typography>
      </Stack>

      {/* Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          sx={{ width: '252px', height: '40px', mx: 'auto', mt: '100px' }}
        >
          ورود
        </Button>
      </Box>
    </Box>
  );
}

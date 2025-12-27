import ChevronForwardIcon from '@/components/icons/ChevronForward';
import { Box, Button, FormControl, TextField, Typography, useTheme } from '@mui/material';

export default function CreateTeamPage() {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.custom.primaryBg }}>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          borderTop: `1px solid black`,
          borderBottom: `1px solid black`,
        }}
      >
        <Button startIcon={<ChevronForwardIcon color="white" />}>
          <Typography variant="title2" color="white">
            ساخت تیم جدید
          </Typography>
        </Button>
      </Box>
      {/* Content */}

      <Box
        sx={{
          mt: '32px',
          //   width: '343px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
        }}
      >
        {/* Form */}
        <Box
          sx={{ width: '343px', display: 'flex', flexDirection: 'column', gap: '64px' }}
        >
          {/* Team name field*/}
          <FormControl>
            <Typography variant="title3" color="white" textAlign="right" component="p">
              نام تیم را انتخاب کنید
            </Typography>

            <TextField
              variant="outlined"
              color="primary"
              placeholder="تعیین نام تیم"
              fullWidth
              sx={{ mt: '8px' }}
              helperText="نام تیم باید شامل حروف و علائم انگلیسی و اقلا 4 کاراکتری باشد"
            />
          </FormControl>

          {/* Team members field, take members mmobile numbers */}
          <FormControl>
            <Typography
              variant="title3"
              color="white"
              textAlign="right"
              component="p"
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <span>اعضای تیم را اضافه کنید</span>
              <span>0/8</span>
            </Typography>

            <TextField
              variant="outlined"
              color="primary"
              placeholder="تعیین نام تیم"
              fullWidth
              sx={{ mt: '8px' }}
              helperText="نام پلیرها باید منطبق با نام آن‌ها در گیم باشد. می‌توانید از شماره موبایل آن‌ها، با فرمت پیش‌شماره 09 نیز استفاده کنید"
            />
          </FormControl>

          {/* Submit */}
          <Button
            disabled
            variant="contained"
            color="primary"
            sx={{ width: '252px', height: '40px', mx: 'auto' }}
          >
            <Typography variant="button1" color="white">
              تایید و ساخت تیم
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

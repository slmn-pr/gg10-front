import { zodResolver } from '@hookform/resolvers/zod';
import { AttachFile } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  InputLabel,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import z from 'zod';

const newTicketSchema = z.object({
  title: z.string().min(3, 'پر کردن این فیلد الزامی است'),
  section: z.string().optional(),
  message: z.string().min(5, 'پر کردن این فیلد الزامی است'),
  fileUploadId: z.string().optional(),
});

export default function TicketPage() {
  const theme = useTheme();

  const { handleSubmit } = useForm({
    defaultValues: {
      title: '',
      section: undefined,
      message: '',
      fileUploadId: undefined,
    },
    resolver: zodResolver(newTicketSchema),
  });

  function onFinish(values: any) {
    console.log('[TicketPage] handleSubmit -> values', values);

    // if success full -> redirect to /support
  }

  return (
    <Container sx={{ direction: 'rtl' }}>
      <Typography variant="sub2" color="white">
        در صورتی که پاسخ سوالات خود را از بخش سوالات متداول پیدا نکردید می‌توانید از طریق
        تکمیل فرم زیر با ما در ارتباط باشید.
      </Typography>

      <Box mt={4}>
        <form onSubmit={handleSubmit(onFinish)}>
          <Stack spacing={4}>
            {/* Title */}
            <Box>
              <InputLabel>
                <Typography variant="title3" color="white">
                  موضوع تیکت
                </Typography>
              </InputLabel>

              <TextField placeholder="مثلا واریز نشدن جایزه لابی" />
            </Box>

            {/* Section */}
            <Box>
              <InputLabel>
                <Typography variant="title3" color="white">
                  بخش مربوطه (اختیاری)
                </Typography>
              </InputLabel>

              <TextField placeholder="مثلا واریز نشدن جایزه لابی" />
            </Box>

            {/* Message */}
            <Box>
              <InputLabel>
                <Typography variant="title3" color="white">
                  متن پیام
                </Typography>
              </InputLabel>

              <TextField multiline rows={5} placeholder="پیام خود را اینجا تایپ کنید" />
            </Box>

            {/* File uploader */}
            {/* TODO: Add real file uploader with this UI */}
            <Box
              sx={{
                width: '100%',
                height: '145px',
                border: '1px dashed red',
                background: 'white',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="title3" color="custom.grey3" textAlign="center">
                فایل ضمیمه (اختیاری)
              </Typography>

              <Stack direction="row" justifyContent="center" alignItems="center">
                <AttachFile
                  sx={{
                    color: theme.palette.custom.grey3,
                  }}
                />
                <Stack>
                  <Typography variant="sub2" color="custom.grey3">
                    اگر قصد ارسال فایل دارید، از اینجا انتخاب کنید
                  </Typography>

                  <Typography variant="sub2" color="custom.grey3">
                    (تا 10 مگابایت | فرمت‌های jpg, png, gif, mp4)
                  </Typography>
                </Stack>
              </Stack>
            </Box>

            {/* Submit */}
            <Stack justifyContent="center" alignContent="center">
              <Button variant="contained" sx={{ width: '292px', mx: 'auto' }}>
                ثبت تیکت
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
}

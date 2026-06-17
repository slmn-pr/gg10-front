import { AttachFile } from '@mui/icons-material';
import {
  Box,
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import TicketFileUploader from '../components/TicketFileUploader';

export default function NewTicketForm() {
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  function onFinish(values: any) {
    console.log('[TicketPage] handleSubmit -> values', values);

    // if success full -> redirect to /support
  }

  return (
    <form onSubmit={handleSubmit(onFinish)}>
      <Stack spacing={4}>
        {/* Title */}
        <Box>
          <InputLabel>
            <Typography variant="title3" color={errors.title ? 'error.main' : 'white'}>
              موضوع تیکت
            </Typography>
          </InputLabel>

          <Controller
            name="title"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                placeholder="مثلا واریز نشدن جایزه لابی"
                error={!!error?.message}
                helperText={<>{errors.title?.message}</>}
              />
            )}
          />
        </Box>

        {/* Section */}
        <Box>
          <InputLabel>
            <Typography variant="title3" color={errors.section ? 'error.main' : 'white'}>
              بخش مربوطه (اختیاری)
            </Typography>
          </InputLabel>

          <Controller
            name="section"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                placeholder="مثلا جوایز لابی"
                error={!!errors.section}
                helperText={<>errors.section?.message</>}
              />
            )}
          />
        </Box>

        {/* Message */}
        <Box>
          <InputLabel>
            <Typography variant="title3" color={errors.message ? 'error.main' : 'white'}>
              متن پیام
            </Typography>
          </InputLabel>

          <Controller
            name="section"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                multiline
                rows={5}
                placeholder="پیام خود را اینجا تایپ کنید"
                error={!!error?.message}
                helperText={<>{errors.title?.message}</>}
              />
            )}
          />
        </Box>

        {/* File uploader */}
        <TicketFileUploader />

        {/* Submit */}
        <Stack justifyContent="center" alignContent="center">
          <Button
            variant="contained"
            sx={{ width: '292px', mx: 'auto' }}
            type="submit"
            role="button"
          >
            ثبت تیکت
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}

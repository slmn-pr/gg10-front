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
import { createTicketReq } from '@/api/ticket';

export default function NewTicketForm() {
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  async function onFinish(values: any) {
    console.log('[TicketPage] handleSubmit -> values', values);

    const { data } = await createTicketReq({
      description: values?.description,
      lobby_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      priority: 'medium',
      title: values?.title,
    });

    console.log('[NewTicketForm] data', data);

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

        {/* lobby ID */}
        <Box>
          <InputLabel>
            <Typography variant="title3" color={errors.lobby_id ? 'error.main' : 'white'}>
              بخش مربوطه (اختیاری)
            </Typography>
          </InputLabel>

          <Controller
            name="lobby_id"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                placeholder="مثلا جوایز لابی"
                error={!!errors.lobby_id}
                helperText={<>{errors.lobby_id?.message}</>}
              />
            )}
          />
        </Box>

        {/* Message */}
        <Box>
          <InputLabel>
            <Typography
              variant="title3"
              color={errors.description ? 'error.main' : 'white'}
            >
              متن پیام
            </Typography>
          </InputLabel>

          <Controller
            name="description"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                multiline
                rows={5}
                placeholder="پیام خود را اینجا تایپ کنید"
                error={!!error?.message}
                helperText={<>{errors.description?.message}</>}
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

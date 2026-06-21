import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Container, Typography } from '@mui/material';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { newTicketSchema } from './schema';
import { NewTicketFormValues } from './type';
import NewTicketForm from './sections/NewTIcketForm';

export default function TicketPage() {
  const methods = useForm<NewTicketFormValues>({
    defaultValues: {
      title: '',
      lobby_id: '',
      description: '',
      attachment_url: undefined,
    },
    resolver: zodResolver(newTicketSchema),
  });

  return (
    <Container sx={{ direction: 'rtl' }}>
      <Typography variant="sub2" color="white">
        در صورتی که پاسخ سوالات خود را از بخش سوالات متداول پیدا نکردید می‌توانید از طریق
        تکمیل فرم زیر با ما در ارتباط باشید.
      </Typography>

      <Box mt={4}>
        <FormProvider {...methods}>
          <NewTicketForm />
        </FormProvider>
      </Box>
    </Container>
  );
}

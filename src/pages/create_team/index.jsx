import ChevronForwardIcon from '@/components/icons/ChevronForward';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import FormFieldAutocomplete from '@/components/form/FormFieldAutocomplete';
import { createTeamSchema } from './schema';
import TeamNameInput from './components/TeamNameInput';

export default function CreateTeamPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  const methods = useForm({
    resolver: zodResolver(createTeamSchema),
    defaultValues: {
      teamName: '',
      teamMembers: [],
    },
    mode: 'onChange',
  });

  const { handleSubmit, watch, formState, setError } = methods;
  const isFormValid = formState.isValid;

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Navigate to teams page on successful submission
    navigate('/teams', {
      state: {
        teamName: data.teamName,
        teamMembers: data.teamMembers,
        message: `تیم "${data.teamName}" با موفقیت ساخته شد`,
      },
    });
  };

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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
        }}
      >
        {/* Form */}
        <FormProvider {...methods}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ width: '343px', display: 'flex', flexDirection: 'column', gap: '64px' }}
          >
            <TeamNameInput />

            {/* Team members field, take members mobile numbers */}
            <FormFieldAutocomplete
              name="teamMembers"
              label="اعضای تیم را اضافه کنید"
              placeholder="شماره موبایل یا نام پلیر"
              helperText="نام پلیرها باید منطبق با نام آن‌ها در گیم باشد. می‌توانید از شماره موبایل آن‌ها، با فرمت پیش‌شماره 09 نیز استفاده کنید"
              freeSolo
              options={[]}
            />

            {/* Submit */}
            <Button
              type="submit"
              disabled={!isFormValid}
              variant="contained"
              color="primary"
              sx={{ width: '252px', height: '40px', mx: 'auto' }}
            >
              <Typography variant="button1" color="white">
                تایید و ساخت تیم
              </Typography>
            </Button>
          </Box>
        </FormProvider>
      </Box>
    </Box>
  );
}

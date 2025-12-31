import ChevronForwardIcon from '@/components/icons/ChevronForward';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import FormField from '@/components/form/FormField';
import FormFieldAutocomplete from '@/components/form/FormFieldAutocomplete';

// Zod schema for form validation
const createTeamSchema = z.object({
  teamName: z
    .string()
    .min(1, 'نام تیم الزامی است')
    .min(4, 'نام تیم باید شامل حروف و علائم انگلیسی و اقلا 4 کاراکتری باشد')
    .regex(
      /^[a-zA-Z0-9\s\-_]+$/,
      'نام تیم باید شامل حروف و علائم انگلیسی و اقلا 4 کاراکتری باشد',
    ),
  teamMembers: z.array(z.string()).optional(),
});

// Fake API check for username existence
const checkTeamNameExists = async (teamName) => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Fake check - return true if team name is "test" or "existing"
  const existingNames = ['test', 'existing', 'team1'];
  return existingNames.includes(teamName.toLowerCase());
};

export default function CreateTeamPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isCheckingTeamName, setIsCheckingTeamName] = useState(false);
  const [teamNameError, setTeamNameError] = useState(null);
  const debounceTimerRef = useRef(null);

  const methods = useForm({
    resolver: zodResolver(createTeamSchema),
    defaultValues: {
      teamName: '',
      teamMembers: [],
    },
    mode: 'onChange',
  });

  const { handleSubmit, watch, setError, clearErrors, formState } = methods;
  const teamName = watch('teamName');
  const isFormValid = formState.isValid && !teamNameError;

  // Debounced validation for team name
  useEffect(() => {
    // Clear previous timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Clear loading and error states when input is cleared or less than 4 chars
    if (!teamName || teamName.length < 4) {
      setIsCheckingTeamName(false);
      setTeamNameError(null);
      clearErrors('teamName');
      return;
    }

    // Set loading state after 2 seconds of no input
    debounceTimerRef.current = setTimeout(async () => {
      setIsCheckingTeamName(true);
      setTeamNameError(null);

      try {
        const exists = await checkTeamNameExists(teamName);
        if (exists) {
          setTeamNameError('این نام قبلا انتخاب شده است');
          setError('teamName', {
            type: 'manual',
            message: 'این نام قبلا انتخاب شده است',
          });
        } else {
          clearErrors('teamName');
          setTeamNameError(null);
        }
      } catch (error) {
        console.error('Error checking team name:', error);
      } finally {
        setIsCheckingTeamName(false);
      }
    }, 2000);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [teamName, setError, clearErrors]);

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Navigate to teams page on successful submission
    navigate('/teams');
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
            {/* Team name field*/}
            <FormField
              name="teamName"
              label="نام تیم را انتخاب کنید"
              placeholder="تعیین نام تیم"
              helperText="نام تیم باید شامل حروف و علائم انگلیسی و اقلا 4 کاراکتری باشد"
              required
              showLoading={methods.watch('teamName')?.length >= 4}
            />

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

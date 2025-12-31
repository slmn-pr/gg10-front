/** This custom compoentn handle the iranian phone number input
 * Work with react-hook-form (useFormContext)
 */
import { Box, TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { PERSIAN_PHONE_NUMBER_SCHEMA } from '../schema';

export default function PhoneNumberInput() {
  const { register, formState, watch } = useFormContext();
  const { errors } = formState;

  const isValid = PERSIAN_PHONE_NUMBER_SCHEMA.safeParse(watch('phoneNumber')).success;
  const errorMessage = errors.phoneNumber?.message;
  const errorColor = isValid ? 'success' : 'error';

  return (
    <Box>
      <TextField
        // label="شماره موبایل"
        sx={{
          direction: 'rtl',
          textAlign: 'right',

          '& .MuiInputBase-input': {
            direction: 'rtl',
            textAlign: 'right',
          },
        }}
        type="tel"
        placeholder="09123456789"
        {...register('phoneNumber')}
        error={!!errors.phoneNumber}
        helperText={
          <Typography
            variant="sub2"
            color={!isValid ? 'custom.errorOnPrimaryBg' : 'custom.successOnPrimaryBg'}
          >
            {!isValid ? errors.phoneNumber?.message : 'شماره موبایل معتبر است'}
          </Typography>
        }
      />
    </Box>
  );
}

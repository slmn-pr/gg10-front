import { FormControl, TextField, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import InputLoading from './InputLoading';

export default function FormField({
  name,
  label,
  placeholder,
  helperText,
  required = false,
  endIcon = null,
  startIcon = null,
  isLoading = false,
  ...textFieldProps
}) {
  const { control, formState } = useFormContext();
  const error = formState.errors[name];
  const errorMessage = error?.message;

  return (
    <FormControl>
      <Typography variant="title3" color="white" textAlign="right" component="p">
        {label}
      </Typography>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            {...textFieldProps}
            variant="outlined"
            color="primary"
            placeholder={placeholder}
            fullWidth
            required={required}
            sx={{ mt: '8px' }}
            error={!!error}
            helperText={errorMessage || helperText}
            slotProps={{
              input: {
                endAdornment: endIcon ? endIcon : isLoading ? <InputLoading /> : null,
                startAdornment: startIcon ? startIcon : null,
                ...textFieldProps.inputProps,
              },
            }}
          />
        )}
      />
    </FormControl>
  );
}

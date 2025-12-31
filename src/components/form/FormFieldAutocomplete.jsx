import { Autocomplete, FormControl, TextField, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export default function FormFieldAutocomplete({
  name,
  label,
  placeholder,
  helperText,
  required = false,
  freeSolo = false,
  options = [],
  getOptionLabel,
  renderOption,
  ...autocompleteProps
}) {
  const { control, formState, watch } = useFormContext();
  const error = formState.errors[name];
  const errorMessage = error?.message;
  const value = watch(name) || [];

  return (
    <FormControl>
      <Typography
        variant="title3"
        color="white"
        textAlign="right"
        component="p"
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <span>{label}</span>
        <span>{value.length}/8</span>
      </Typography>

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value: fieldValue, ...field } }) => (
          <Autocomplete
            {...field}
            {...autocompleteProps}
            multiple
            freeSolo={freeSolo}
            options={options}
            value={fieldValue || []}
            onChange={(event, newValue) => {
              // Limit to 8 members
              const limitedValue = newValue.slice(0, 8);
              onChange(limitedValue);
            }}
            getOptionLabel={getOptionLabel || ((option) => option)}
            renderOption={renderOption}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                color="primary"
                placeholder={placeholder}
                fullWidth
                required={required}
                sx={{ mt: '8px' }}
                error={!!error}
                helperText={errorMessage || helperText}
              />
            )}
          />
        )}
      />
    </FormControl>
  );
}

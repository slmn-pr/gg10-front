import FormField from '@/components/form/FormField';
import useCheckTeamNameExists from '../hooks/useCheckTEamNameExists';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import CircleCheckIcon from '@/components/icons/CircleCheckIcon';
import { teamNameSchema } from '../schema';
import CircleErrorIcon from '@/components/icons/CircleErrorIcon';

export default function TeamNameInput() {
  /** Save the helper text
   * if teamName is valid, set helper text to green text and show checked icon
   */
  const [helperText, setHelperText] = useState(
    'نام تیم باید شامل حروف و علائم انگلیسی و اقلا 4 کاراکتری باشد',
  );

  const { watch, setError } = useFormContext();

  const teamName = watch('teamName');

  const {
    data: isTeamNameExists,
    isLoading: isCheckingTeamName,
    error: teamNameError,
  } = useCheckTeamNameExists(teamName);

  console.log('[TeamNameInput] isTeamNameExists', isTeamNameExists);

  useEffect(() => {
    if (isTeamNameExists) {
      setError('teamName', { message: 'این نام قبلا انتخاب شده است' });
    } else if (teamNameError) {
      setError('teamName', { message: teamNameError.message });
    }
  }, [isTeamNameExists, isCheckingTeamName]);

  const isValid =
    !isCheckingTeamName &&
    !isTeamNameExists &&
    !teamNameError &&
    teamNameSchema.safeParse(teamName).success;

  console.log(isValid);

  return (
    <FormField
      name="teamName"
      label="نام تیم را انتخاب کنید"
      placeholder="تعیین نام تیم"
      helperText={helperText}
      required
      isLoading={isCheckingTeamName}
      endIcon={
        isValid ? (
          <CircleCheckIcon />
        ) : isTeamNameExists ? (
          <CircleErrorIcon color="red" />
        ) : null
      }
    />
  );
}

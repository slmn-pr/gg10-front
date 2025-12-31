// Zod schema for form validation
import { z } from 'zod';

export const teamNameSchema = z
  .string()
  .min(1, 'نام تیم الزامی است')
  .min(4, 'نام تیم باید شامل حروف و علائم انگلیسی و اقلا 4 کاراکتری باشد')
  .regex(
    /^[a-zA-Z0-9\s\-_]+$/,
    'نام تیم باید شامل حروف و علائم انگلیسی و اقلا 4 کاراکتری باشد',
  );

export const createTeamSchema = z.object({
  teamName: teamNameSchema,
  teamMembers: z.array(z.string()).optional(),
});

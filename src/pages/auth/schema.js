import z from 'zod';

const ERROR_MESSAGE = 'شماره موبایل باید 11 رقمی و همچنین با پیش‌شماره 09 باشد';

export const PERSIAN_PHONE_NUMBER_SCHEMA = z
  .string()
  .regex(/(\+98|0|98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}/, ERROR_MESSAGE);

export const gameNameSchema = z
  .string()
  .min(1, 'نام بازی الزامی است')
  .min(3, 'نام بازی باید حداقل 3 کاراکتر باشد');

export const loginSchema = z.object({
  phoneNumber: PERSIAN_PHONE_NUMBER_SCHEMA,
});

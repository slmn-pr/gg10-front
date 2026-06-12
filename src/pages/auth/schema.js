import z from 'zod';

const ERROR_MESSAGE = 'شماره موبایل باید 11 رقمی و همچنین با پیش‌شماره 09 باشد';
const PERSIAN_DIGITS = '۰۱۲۳۴۵۶۷۸۹';
const ARABIC_DIGITS = '٠١٢٣٤٥٦٧٨٩';

export const normalizePhoneNumber = (value = '') =>
  value
    .trim()
    .replace(/[۰-۹]/g, (digit) => String(PERSIAN_DIGITS.indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String(ARABIC_DIGITS.indexOf(digit)));

export const PERSIAN_PHONE_NUMBER_SCHEMA = z
  .string()
  .refine((value) => /^09\d{9}$/.test(normalizePhoneNumber(value)), ERROR_MESSAGE);

export const gameUsernameSchema = z
  .string()
  .min(1, 'نام بازی الزامی است')
  .min(3, 'نام بازی باید حداقل 3 کاراکتر باشد');

export const loginSchema = z.object({
  phoneNumber: PERSIAN_PHONE_NUMBER_SCHEMA,
});

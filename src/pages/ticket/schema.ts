import z from 'zod';

export const newTicketSchema = z.object({
  title: z.string().min(3, 'پر کردن این فیلد الزامی است'),
  lobby_id: z.string().optional(),
  description: z.string().min(5, 'پر کردن این فیلد الزامی است'),
  fileUploadId: z.string().optional(),
  file: z
    .instanceof(File)
    .optional()
    .refine(
      (file) => !file || file.size <= 10 * 1024 * 1024,
      'حداکثر حجم فایل 10 مگابایت است',
    ),
});

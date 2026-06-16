import z from 'zod';

export const newTicketSchema = z.object({
  title: z.string().min(3, 'پر کردن این فیلد الزامی است'),
  section: z.string().optional(),
  message: z.string().min(5, 'پر کردن این فیلد الزامی است'),
  fileUploadId: z.string().optional(),
});

import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập họ tên!"),
  email: z
    .string()
    .min(1, "Vui lòng nhập email!")
    .email("Email không hợp lệ!"),
  message: z
    .string()
    .min(1, "Vui lòng nhập tin nhắn!")
    .max(500, "Tin nhắn tối đa 500 ký tự"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

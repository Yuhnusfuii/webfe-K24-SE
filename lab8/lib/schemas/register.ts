import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(4, "Tên đăng nhập phải có ít nhất 4 ký tự!"),

  email: z
    .string()
    .email("Email không hợp lệ!"),

  password: z
    .string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự!"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;

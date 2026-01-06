import { z } from "zod";

export const validationSchema = z.object({
  fullName: z.string().min(1, "Vui lòng nhập họ tên!"),

  email: z
    .string()
    .min(1, "Vui lòng nhập email!")
    .email("Email không hợp lệ!"),

  phone: z
    .string()
    .min(1, "Vui lòng nhập số điện thoại!")
    .regex(/^[0-9]{9,11}$/, "Số điện thoại không hợp lệ!"),

  birthDate: z
    .any()
    .refine(
      (val) => val instanceof Date && !isNaN(val.getTime()),
      {
        message: "Vui lòng chọn ngày sinh!",
      }
    ),

  gender: z.string().min(1, "Vui lòng chọn giới tính!"),

  address: z.string().min(1, "Vui lòng nhập địa chỉ!"),
});

export type ValidationFormData = {
  fullName: string;
  email: string;
  phone: string;
  birthDate: Date;
  gender: string;
  address: string;
};

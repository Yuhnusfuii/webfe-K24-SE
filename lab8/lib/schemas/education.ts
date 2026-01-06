import { z } from "zod";

export const educationItemSchema = z.object({
  school: z.string().min(1, "Vui lòng nhập tên trường!"),
  degree: z.string().min(1, "Vui lòng nhập bằng cấp!"),
  graduationYear: z
    .string()
    .regex(/^\d{4}$/, "Năm tốt nghiệp không hợp lệ!"),
});

export const educationFormSchema = z.object({
  educations: z
    .array(educationItemSchema)
    .min(1, "Phải có ít nhất một học vấn!"),
});

export type EducationFormData = z.infer<typeof educationFormSchema>;
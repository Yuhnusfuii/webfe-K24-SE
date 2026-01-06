"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  validationSchema,
  ValidationFormData,
} from "@/lib/schemas/validation";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

export default function ValidationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ValidationFormData>({
    resolver: zodResolver(validationSchema),
  });

  const birthDate = watch("birthDate");

  const onSubmit = (data: ValidationFormData) => {
    console.log("Validation Form:", data);
    alert("Đăng ký thành công!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-xl">
      {/* Họ tên */}
      <div>
        <Label>Họ và tên *</Label>
        <Input {...register("fullName")} />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label>Email *</Label>
        <Input {...register("email")} />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Số điện thoại */}
      <div>
        <Label>Số điện thoại *</Label>
        <Input {...register("phone")} />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      {/* Ngày sinh */}
      <div>
  <Label>Ngày sinh *</Label>

  <Popover>
    <PopoverTrigger asChild>
      <div className="relative">
        <Input
          readOnly
          value={birthDate ? format(birthDate, "dd/MM/yyyy") : ""}
          placeholder="Chọn ngày sinh"
          className={`pr-10 cursor-pointer ${
            errors.birthDate
              ? "border-destructive focus-visible:ring-destructive"
              : ""
          }`}
        />

        <CalendarIcon
          className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none"
        />
      </div>
    </PopoverTrigger>

    <PopoverContent align="start" className="p-0">
      <Calendar
        mode="single"
        selected={birthDate}
        onSelect={(date) =>
          setValue("birthDate", date!, { shouldValidate: true })
        }
      />
    </PopoverContent>
  </Popover>

  {errors.birthDate && (
    <p className="text-sm text-destructive mt-1">
      {errors.birthDate.message}
    </p>
  )}
</div>


      {/* Giới tính */}
      <div>
        <Label>Giới tính *</Label>
        <Select onValueChange={(v) => setValue("gender", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Chọn giới tính" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Nam</SelectItem>
            <SelectItem value="female">Nữ</SelectItem>
            <SelectItem value="other">Khác</SelectItem>
          </SelectContent>
        </Select>
        {errors.gender && (
          <p className="text-red-500 text-sm">{errors.gender.message}</p>
        )}
      </div>

      {/* Địa chỉ */}
      <div>
        <Label>Địa chỉ *</Label>
        <Textarea {...register("address")} />
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address.message}</p>
        )}
      </div>

      <Button type="submit">Đăng ký</Button>
    </form>
  );
}

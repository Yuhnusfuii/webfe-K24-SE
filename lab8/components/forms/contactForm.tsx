"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactSchema,
  ContactFormData,
} from "@/lib/schemas/contact";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const messageValue = watch("message") || "";

  const onSubmit = (data: ContactFormData) => {
    console.log("Form data:", data);
    alert("Gửi tin nhắn thành công!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-xl">
      {/* Họ tên */}
      <div>
        <Label>
          Họ tên <span className="text-red-500">*</span>
        </Label>
        <Input
          placeholder="Nhập họ tên của bạn"
          {...register("name")}
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label>
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          placeholder="Nhập email của bạn"
          {...register("email")}
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Tin nhắn */}
      <div>
        <Label>
          Tin nhắn <span className="text-red-500">*</span>
        </Label>
        <Textarea
          placeholder="Nhập tin nhắn của bạn"
          {...register("message")}
          className={errors.message ? "border-red-500" : ""}
        />

        <div className="flex justify-between text-sm mt-1">
          {errors.message ? (
            <p className="text-red-500">
              {errors.message.message}
            </p>
          ) : (
            <span />
          )}
          <span className="text-muted-foreground">
            {messageValue.length} / 500
          </span>
        </div>
      </div>

      <Button type="submit">Gửi tin nhắn</Button>
    </form>
  );
}

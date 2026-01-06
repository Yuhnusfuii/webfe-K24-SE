"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  registerSchema,
  RegisterFormData,
} from "@/lib/schemas/register";

import api from "@/lib/api/client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Eye, EyeOff, AlertCircle } from "lucide-react";

export default function ApiRegisterForm() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setLoading(true);
      setApiError(null);

      await api.post("/api/register", data);

      alert("Đăng ký thành công!");
    } catch (err: any) {
      setApiError(
        err?.response?.data?.message ||
          "Có lỗi xảy ra khi đăng ký. Vui lòng thử lại!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 max-w-xl"
    >
      {/* API Error */}
      {apiError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Lỗi</AlertTitle>
          <AlertDescription>{apiError}</AlertDescription>
        </Alert>
      )}

      {/* Username */}
      <div>
        <Label>Tên đăng nhập *</Label>
        <Input
          {...register("username")}
          className={
            errors.username
              ? "border-destructive focus-visible:ring-destructive"
              : ""
          }
        />
        {errors.username && (
          <p className="text-sm text-destructive mt-1">
            {errors.username.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label>Email *</Label>
        <Input
          {...register("email")}
          className={
            errors.email
              ? "border-destructive focus-visible:ring-destructive"
              : ""
          }
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div>
        <Label>Mật khẩu *</Label>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            className={`pr-10 ${
              errors.password
                ? "border-destructive focus-visible:ring-destructive"
                : ""
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        {errors.password && (
          <p className="text-sm text-destructive mt-1">
            {errors.password.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? "Đang đăng ký..." : "Đăng ký"}
      </Button>
    </form>
  );
}

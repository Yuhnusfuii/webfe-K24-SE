"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  educationFormSchema,
  EducationFormData,
} from "@/lib/schemas/education";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

import { Plus, Trash2 } from "lucide-react";

export default function DynamicEducationForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EducationFormData>({
    resolver: zodResolver(educationFormSchema),
    defaultValues: {
      educations: [
        { school: "", degree: "", graduationYear: "" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educations",
  });

  const onSubmit = (data: EducationFormData) => {
    console.log("Educations:", data);
    alert("Lưu thông tin học vấn thành công!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl">
      {fields.map((field, index) => (
        <Card key={field.id}>
          <CardContent className="pt-6 space-y-4 relative">
            {/* Remove */}
            {fields.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2"
                onClick={() => remove(index)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            )}

            <div className="font-medium">
              Học vấn #{index + 1}
            </div>

            {/* School */}
            <div>
              <Label>Tên trường *</Label>
              <Input
                {...register(`educations.${index}.school`)}
                className={
                  errors.educations?.[index]?.school
                    ? "border-destructive focus-visible:ring-destructive"
                    : ""
                }
              />
              {errors.educations?.[index]?.school && (
                <p className="text-sm text-destructive mt-1">
                  {errors.educations[index]?.school?.message}
                </p>
              )}
            </div>

            {/* Degree */}
            <div>
              <Label>Bằng cấp *</Label>
              <Input
                {...register(`educations.${index}.degree`)}
                className={
                  errors.educations?.[index]?.degree
                    ? "border-destructive focus-visible:ring-destructive"
                    : ""
                }
              />
              {errors.educations?.[index]?.degree && (
                <p className="text-sm text-destructive mt-1">
                  {errors.educations[index]?.degree?.message}
                </p>
              )}
            </div>

            {/* Graduation Year */}
            <div>
              <Label>Năm tốt nghiệp *</Label>
              <Input
                placeholder="VD: 2020"
                {...register(`educations.${index}.graduationYear`)}
                className={
                  errors.educations?.[index]?.graduationYear
                    ? "border-destructive focus-visible:ring-destructive"
                    : ""
                }
              />
              {errors.educations?.[index]?.graduationYear && (
                <p className="text-sm text-destructive mt-1">
                  {
                    errors.educations[index]?.graduationYear
                      ?.message
                  }
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Add education */}
      <Button
        type="button"
        variant="outline"
        onClick={() =>
          append({
            school: "",
            degree: "",
            graduationYear: "",
          })
        }
      >
        <Plus className="mr-2 h-4 w-4" />
        Thêm học vấn
      </Button>

      {/* Submit */}
      <Button type="submit">Lưu thông tin</Button>
    </form>
  );
}

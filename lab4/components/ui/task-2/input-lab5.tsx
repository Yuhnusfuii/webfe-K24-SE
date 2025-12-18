"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Exercise2() {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    alert(`Giá trị hiện tại: ${value}`);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex gap-2"
    >
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Nhập nội dung"
      />

      <Button type="submit">
        Hiển thị
      </Button>
    </form>
  );
}

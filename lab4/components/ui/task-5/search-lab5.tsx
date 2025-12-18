"use client";

import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";

export default function Exercise5() {
  const [keyword, setKeyword] = useState("");
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const search = useCallback((value: string) => {
    console.log("🔍 Tìm kiếm với từ khóa:", value);
  }, []);

  const handleChange = (value: string) => {
    setKeyword(value);

    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      search(value);
    }, 500);

    setTimer(newTimer);
  };

  return (
    <main className="flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl space-y-4 text-slate-200">
        <h1 className="text-2xl font-semibold text-slate-100">
          Exercise 5: Debouncing Search with useCallback
        </h1>

        <p className="text-slate-400">
          Nhập từ khóa tìm kiếm. Search chỉ chạy khi bạn dừng gõ 500ms.
        </p>

        <Input
          value={keyword}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Nhập từ khóa tìm kiếm..."
          className="bg-slate-800 text-slate-100"
        />

        <p className="text-slate-400 text-sm">
          Mở Console để xem khi nào hàm tìm kiếm được gọi
        </p>
      </div>
    </main>
  );
}

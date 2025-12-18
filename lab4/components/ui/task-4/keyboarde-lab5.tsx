"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Exercise4() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState<number[]>([]);

  const addItem = () => {
    const num = Number(value);
    if (isNaN(num)) return;

    setItems((prev) => [...prev, num]);
    setValue("");
  };

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const total = useMemo(() => {
    console.log("Đang tính lại tổng");

    return items.reduce((sum, n) => sum + n, 0);
  }, [items]);

  return (
    <main className="flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl space-y-4 text-slate-200">
        <h1 className="text-2xl font-semibold text-slate-100">
          Exercise 4: Sum Calculation with useMemo
        </h1>

        <p className="text-slate-400">
          Nhập số và nhấn Enter hoặc nút Thêm để thêm vào danh sách
        </p>

        <div className="flex gap-2">
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addItem()}
            placeholder="Nhập số..."
            className="bg-slate-800 text-slate-100"
          />
          <Button onClick={addItem}>Thêm</Button>
        </div>

        <ul className="space-y-2">
          {items.map((n, i) => (
            <li
              key={i}
              className="flex justify-between items-center bg-slate-800 px-4 py-2 rounded"
            >
              <span>Số {n}</span>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeItem(i)}
              >
                Xóa
              </Button>
            </li>
          ))}
        </ul>

        <div className="bg-slate-900 p-4 rounded font-semibold">
          Tổng: {total}
        </div>
      </div>
    </main>
  );
}

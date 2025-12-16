"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Task4() {
  const [text, setText] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    const t = text.trim();
    if (!t) return;
    setItems((s) => [...s, t]);
    setText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addItem();
    }
  };

  return (
    <main className="flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl text-slate-200">
        <h1 className="text-2xl font-semibold mb-2 text-slate-100">
          Exercise 4: Handling Keyboard Events
        </h1>

        <p className="text-slate-400 mb-4">Nhập text và nhấn Enter để thêm vào danh sách</p>

        <div className="flex gap-2 mb-4">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Nhập text và nhấn Enter..."
            className="bg-slate-800 text-slate-100"
          />
          <Button onClick={addItem} variant="secondary">
            Add
          </Button>
        </div>

        <div className="space-y-2">
          {items.length === 0 && (
            <p className="text-slate-400">(Danh sách trống)</p>
          )}

          <ol className="bg-slate-800 rounded-md overflow-hidden">
            {items.map((it, i) => (
              <li key={i} className="px-4 py-3 border-b last:border-b-0">
                <span className="font-medium text-slate-100 mr-2">{i + 1}.</span>
                <span className="text-slate-200">{it}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}

"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";

export default function Task2() {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <main className="flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl text-slate-200">
        <h1 className="text-2xl font-semibold mb-2 text-slate-100">
          Exercise 2: Handling Input Changes
        </h1>

        <p className="text-slate-400 mb-4">
          Nhập text vào ô input bên dưới
        </p>

        <Input
          value={text}
          onChange={handleChange}
          placeholder="Nhập text..."
          className="bg-slate-800 text-slate-100 mb-3"
        />

        <p>
          Giá trị hiện tại:{" "}
          {text || <span className="text-slate-400"></span>}
        </p>
      </div>
    </main>
  );
}

"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default function Task1() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple alert for the exercise on form submit
    alert("Bạn đã submit");
  };

  return (
    <main className="flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl text-slate-200">
        

        <h1 className="text-2xl font-semibold mb-2 text-slate-100">
          Exercise 1: Simple Button Click
        </h1>

        <p className="text-slate-400 mb-6">Click vào button bên dưới để hiển thị thông báo alert</p>

        <form onSubmit={handleSubmit} className="inline-block">
          <Button type="submit" variant="secondary">
            Click Me!
          </Button>
        </form>
      </div>
    </main>
  );
}
